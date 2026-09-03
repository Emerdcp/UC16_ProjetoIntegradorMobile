import React from "react";
import {
    ImageBackground,
    ScrollView,
    View,
    Text,
    TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useAuth } from "@/context/AuthContext";
import { styles } from "./styles";
import { useNavigation, CommonActions, } from "@react-navigation/native";
import { AppNavigationProp, } from "@/navigation/types";
import { useCallback, useEffect, useState } from "react";
import { ActivityIndicator, RefreshControl, } from "react-native";
import { useFocusEffect, } from "@react-navigation/native";
import { getAtendimentos, Atendimento, } from "@/services/atendimentoService";
import { AgendaEvento, getAgenda, } from "@/services/agendaService";
import { getClientes, Cliente } from "@/services/clienteService";
import { getProjetos, Projeto } from "@/services/projetoService";


interface Indicator {
    id: number;
    title: string;
    value: number | string;
    description: string;
    icon: keyof typeof Ionicons.glyphMap;
    iconColor: string;
    iconBackground: string;
    screen?: "Atendimento" | "Clientes" | "Agenda";
}


const indicators: Indicator[] = [

    {
        id: 1,
        title: "Atendimentos",
        value: 25,
        description: "Em andamento",
        icon: "headset-outline",
        iconColor: "#4F8DF7",
        iconBackground: "rgba(79, 141, 247, 0.14)",
        screen: "Atendimento",
    },

    // {
    //     id: 2,
    //     title: "Projetos",
    //     value: 14,
    //     description: "Projetos cadastrados",
    //     icon: "document-text-outline",
    //     iconColor: "#A78BFA",
    //     iconBackground: "rgba(167, 139, 250, 0.14)",
    // },

    {
        id: 3,
        title: "Clientes",
        value: 35,
        description: "Clientes cadastrados",
        icon: "people-outline",
        iconColor: "#34D399",
        iconBackground: "rgba(52, 211, 153, 0.14)",
        screen: "Clientes",
    },

    {
        id: 4,
        title: "Agenda",
        value: 0,
        description: "Compromissos",
        icon: "calendar-outline",
        iconColor: "#F59E0B",
        iconBackground: "rgba(245, 158, 11, 0.14)",
        screen: "Agenda",
    },

];


export default function HomeScreen() {

    const navigation = useNavigation<AppNavigationProp>();
    const { user, } = useAuth();
    const [atendimentos, setAtendimentos] = useState<Atendimento[]>([]);
    const [carregandoAtendimentos, setCarregandoAtendimentos] = useState(true);
    const [atualizando, setAtualizando] = useState(false);
    const [erroAtendimentos, setErroAtendimentos] = useState(false);
    const [eventosAgenda, setEventosAgenda] = useState<AgendaEvento[]>([]);
    const [clientes, setClientes] = useState<Cliente[]>([]);
    const [projetos, setProjetos] = useState<Projeto[]>([]);
    const [carregandoIndicadores, setCarregandoIndicadores] = useState(true);
    const [carregandoAgenda, setCarregandoAgenda] = useState(true);
    const [mesAgenda, setMesAgenda] = useState(new Date());
    const [diaAgenda, setDiaAgenda] = useState(new Date());
    const nomeUsuario = user?.nome || "Administrador";
    const horaAtual = new Date().getHours();
    const atendimentosAbertos =
        atendimentos.filter(
            (item) =>
                item.at_status === "A" ||
                item.at_status === "E" ||
                item.at_status === "D"
        );
    const quantidadeAtendimentos = atendimentosAbertos.length;
    const quantidadeClientes = clientes.length;
    const quantidadeProjetos = projetos.length;
    const atendimentosHome = atendimentosAbertos.slice(0, 3);

    let saudacao = "Boa noite";


    if (horaAtual >= 5 && horaAtual < 12) {
        saudacao = "Bom dia";
    }
    else if (horaAtual >= 12 && horaAtual < 18) {
        saudacao = "Boa tarde";
    }

    const carregarAtendimentos = useCallback(
        async (
            mostrarCarregamento = true
        ) => {

            try {

                if (mostrarCarregamento) {
                    setCarregandoAtendimentos(true);
                }

                setErroAtendimentos(false);


                const resposta =
                    await getAtendimentos(
                        "",
                        1,
                        100
                    );


                /*
                 * O endpoint pode retornar
                 * diretamente um array ou
                 * um objeto contendo data.
                 */

                const lista =
                    Array.isArray(resposta)
                        ? resposta
                        : resposta?.data || [];


                setAtendimentos(lista);

            }
            catch (error) {

                console.log(
                    "Erro ao carregar atendimentos da Home:",
                    error
                );

                setErroAtendimentos(true);

            }
            finally {

                setCarregandoAtendimentos(false);

                setAtualizando(false);

            }

        },
        []
    );

    useFocusEffect(
        useCallback(() => {

            carregarAtendimentos();

        }, [carregarAtendimentos])
    );

    /* =====================================================
   FUNÇÕES DA AGENDA
===================================================== */

    function formatarDataAgenda(data: Date) {

        const ano =
            data.getFullYear();

        const mes =
            String(
                data.getMonth() + 1
            ).padStart(2, "0");

        const dia =
            String(
                data.getDate()
            ).padStart(2, "0");

        return `${ano}-${mes}-${dia}`;
    }


    const anoAgenda =
        mesAgenda.getFullYear();

    const mesAgendaNumero =
        mesAgenda.getMonth();


    const primeiroDiaAgenda =
        new Date(
            anoAgenda,
            mesAgendaNumero,
            1
        ).getDay();


    const quantidadeDiasAgenda =
        new Date(
            anoAgenda,
            mesAgendaNumero + 1,
            0
        ).getDate();


    const diasAgenda = [];

    for (
        let i = 0;
        i < primeiroDiaAgenda;
        i++
    ) {

        diasAgenda.push(null);

    }

    for (
        let dia = 1;
        dia <= quantidadeDiasAgenda;
        dia++
    ) {

        diasAgenda.push(dia);

    }


    const dataAgendaSelecionada =
        formatarDataAgenda(
            diaAgenda
        );


    const eventosDoDiaAgenda =
        eventosAgenda.filter(
            (evento) => {

                const dataEvento =
                    evento.ag_data_inicio
                        ?.substring(
                            0,
                            10
                        );

                return (
                    dataEvento ===
                    dataAgendaSelecionada
                );

            }
        );

    /* =====================================================
        NOTIFICAÇÃO DA AGENDA
    ===================================================== */

    const agora =
        new Date();

    const temNotificacaoAgenda =
        eventosAgenda.some(
            (evento) => {

                if (
                    !evento.ag_data_inicio
                ) {
                    return false;
                }

                const dataEvento =
                    new Date(
                        evento.ag_data_inicio
                    );

                return (
                    dataEvento >= agora &&
                    evento.ag_status === "A"
                );

            }
        );

    /* =====================================================
        CARREGAR INDICADORES
    ===================================================== */

    const carregarIndicadores =
        useCallback(
            async () => {

                try {

                    setCarregandoIndicadores(
                        true
                    );


                    /* =========================================
                       CLIENTES
                    ========================================= */

                    const respostaClientes =
                        await getClientes(
                            "",
                            1,
                            100
                        );


                    const listaClientes =
                        Array.isArray(
                            respostaClientes
                        )
                            ? respostaClientes
                            : respostaClientes?.data ||
                            respostaClientes?.clientes ||
                            [];


                    setClientes(
                        listaClientes
                    );


                    /* =========================================
                       PROJETOS
                    ========================================= */

                    const respostaProjetos =
                        await getProjetos();


                    const listaProjetos =
                        Array.isArray(
                            respostaProjetos
                        )
                            ? respostaProjetos
                            : respostaProjetos?.data ||
                            respostaProjetos?.projetos ||
                            [];


                    setProjetos(
                        listaProjetos
                    );

                }
                catch (error) {

                    console.log(
                        "Erro ao carregar indicadores:",
                        error
                    );

                }
                finally {

                    setCarregandoIndicadores(
                        false
                    );

                }

            },
            []
        );

    const carregarAgendaHome =
        useCallback(
            async () => {

                try {

                    setCarregandoAgenda(true);

                    const primeiroDia =
                        new Date(
                            anoAgenda,
                            mesAgendaNumero,
                            1
                        );

                    const ultimoDia =
                        new Date(
                            anoAgenda,
                            mesAgendaNumero + 1,
                            0
                        );


                    const resultado =
                        await getAgenda(
                            formatarDataAgenda(
                                primeiroDia
                            ),
                            formatarDataAgenda(
                                ultimoDia
                            )
                        );


                    setEventosAgenda(
                        Array.isArray(resultado)
                            ? resultado
                            : []
                    );

                }
                catch (error) {

                    console.log(
                        "Erro ao carregar agenda na Home:",
                        error
                    );

                    setEventosAgenda([]);

                }
                finally {

                    setCarregandoAgenda(false);

                }

            },
            [
                anoAgenda,
                mesAgendaNumero,
            ]
        );


    useEffect(
        () => {

            carregarAgendaHome();

        },
        [
            carregarAgendaHome,
        ]
    );


    useFocusEffect(
        useCallback(() => {

            carregarAtendimentos();

            carregarIndicadores();

            carregarAgendaHome();

        }, [
            carregarAtendimentos,
            carregarIndicadores,
            carregarAgendaHome,
        ])
    );

    function alterarMesAgenda(
        quantidade: number
    ) {

        const novoMes =
            new Date(
                anoAgenda,
                mesAgendaNumero + quantidade,
                1
            );

        setMesAgenda(
            novoMes
        );

        setDiaAgenda(
            novoMes
        );
    }


    function selecionarDiaAgenda(
        dia: number
    ) {

        setDiaAgenda(
            new Date(
                anoAgenda,
                mesAgendaNumero,
                dia
            )
        );

    }


    return (

        <ImageBackground
            source={require("../../assets/images/login/background-login.png")}
            style={styles.background}
            resizeMode="cover"
        >

            <SafeAreaView style={styles.container}>

                {/* =================================================
                    HEADER
                ================================================= */}

                <View style={styles.header}>

                    <TouchableOpacity
                        style={styles.headerButton}
                        activeOpacity={0.8}
                        onPress={() => navigation.openDrawer()}
                    >

                        <Ionicons
                            name="menu-outline"
                            size={25}
                            color="#FFFFFF"
                        />

                    </TouchableOpacity>


                    <View style={styles.userArea}>

                        <Text style={styles.title}>
                            ControlPro
                        </Text>

                        <Text style={styles.userName}>
                            {nomeUsuario}
                        </Text>

                    </View>


                    <TouchableOpacity
                        style={styles.headerButton}
                        activeOpacity={0.8}
                        onPress={() => {
                            console.log("Notificações");
                        }}
                    >

                        <Ionicons
                            name="notifications-outline"
                            size={22}
                            color="#FFFFFF"
                        />

                        {temNotificacaoAgenda && (
                            <View style={styles.notificationDot} />
                        )}

                    </TouchableOpacity>

                </View>


                {/* =================================================
                    CONTEÚDO
                ================================================= */}

                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.content}
                    refreshControl={
                        <RefreshControl
                            refreshing={atualizando}
                            onRefresh={async () => {

                                setAtualizando(true);

                                await Promise.all([
                                    carregarAtendimentos(false),
                                    carregarIndicadores(),
                                    carregarAgendaHome(),
                                ]);

                                setAtualizando(false);

                            }}
                            tintColor="#4F8DF7"
                        />
                    }
                >

                    {/* =================================================
                        SAUDAÇÃO
                    ================================================= */}

                    <View style={styles.greetingCard}>

                        <View style={styles.greetingContent}>

                            <Text style={styles.greetingTitle}>
                                {saudacao}, {nomeUsuario}! 👋
                            </Text>

                            <Text style={styles.greetingText}>
                                Aqui está o resumo do seu dia.
                            </Text>

                        </View>


                        <View style={styles.dateContainer}>

                            <Ionicons
                                name="calendar-outline"
                                size={22}
                                color="#4F8DF7"
                            />

                            <Text style={styles.dateText}>
                                {new Date().toLocaleDateString(
                                    "pt-BR",
                                    {
                                        day: "2-digit",
                                        month: "2-digit",
                                    }
                                )}
                            </Text>

                        </View>

                    </View>


                    {/* =================================================
                        INDICADORES
                    ================================================= */}

                    <View style={styles.section}>

                        <View style={styles.sectionHeader}>

                            <Text style={styles.sectionHeaderTitle}>
                                Indicadores
                            </Text>

                            <TouchableOpacity
                                activeOpacity={0.7}
                            >

                                <Text style={styles.seeAll}>
                                    Ver todos
                                </Text>

                            </TouchableOpacity>

                        </View>


                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={styles.indicators}
                        >

                            {indicators.map((item) => (

                                <TouchableOpacity
                                    key={item.id}
                                    style={styles.indicatorCard}
                                    activeOpacity={0.85}
                                    onPress={() => {

                                        if (!item.screen) {
                                            return;
                                        }

                                        if (item.screen === "Atendimento") {

                                            navigation.dispatch(
                                                CommonActions.navigate({
                                                    name: "Atendimento",
                                                    params: {
                                                        screen: "Atendimento",
                                                    },
                                                })
                                            );

                                            return;
                                        }

                                        navigation.dispatch(
                                            CommonActions.navigate({
                                                name: item.screen,
                                            })
                                        );

                                    }}
                                >

                                    <View
                                        style={[
                                            styles.indicatorIcon,
                                            {
                                                backgroundColor:
                                                    item.iconBackground,
                                            },
                                        ]}
                                    >

                                        <Ionicons
                                            name={item.icon}
                                            size={22}
                                            color={item.iconColor}
                                        />

                                    </View>


                                    <Text style={styles.indicatorTitle}>
                                        {item.title}
                                    </Text>


                                    <Text style={styles.indicatorValue}>
                                        {item.id === 1
                                            ? quantidadeAtendimentos
                                            : item.id === 2
                                                ? quantidadeProjetos
                                                : item.id === 3
                                                    ? quantidadeClientes
                                                    : item.id === 4
                                                        ? eventosAgenda.length
                                                        : item.value}
                                    </Text>


                                    <Text style={styles.indicatorDescription}>
                                        {item.description}
                                    </Text>

                                </TouchableOpacity>

                            ))}

                        </ScrollView>

                    </View>

                    {/* =================================================
    AGENDA
================================================= */}

                    <View style={styles.section}>

                        <View style={styles.sectionHeader}>

                            <Text style={styles.sectionHeaderTitle}>
                                Agenda
                            </Text>


                            <TouchableOpacity
                                activeOpacity={0.7}
                                onPress={() =>
                                    navigation.dispatch(
                                        CommonActions.navigate({
                                            name: "Agenda",
                                        })
                                    )
                                }
                            >

                                <Text style={styles.seeAll}>
                                    Ver agenda
                                </Text>

                            </TouchableOpacity>

                        </View>


                        <View style={styles.homeCalendar}>


                            {/* =============================================
            CABEÇALHO
        ============================================= */}

                            <View style={styles.homeCalendarHeader}>

                                <TouchableOpacity
                                    style={styles.homeCalendarButton}
                                    activeOpacity={0.7}
                                    onPress={() =>
                                        alterarMesAgenda(-1)
                                    }
                                >

                                    <Ionicons
                                        name="chevron-back-outline"
                                        size={17}
                                        color="#FFFFFF"
                                    />

                                </TouchableOpacity>


                                <View
                                    style={
                                        styles.homeCalendarMonth
                                    }
                                >

                                    <Text
                                        style={
                                            styles.homeCalendarMonthText
                                        }
                                    >
                                        {[
                                            "Janeiro",
                                            "Fevereiro",
                                            "Março",
                                            "Abril",
                                            "Maio",
                                            "Junho",
                                            "Julho",
                                            "Agosto",
                                            "Setembro",
                                            "Outubro",
                                            "Novembro",
                                            "Dezembro",
                                        ][mesAgendaNumero]}
                                    </Text>


                                    <Text
                                        style={
                                            styles.homeCalendarYear
                                        }
                                    >
                                        {anoAgenda}
                                    </Text>

                                </View>


                                <TouchableOpacity
                                    style={styles.homeCalendarButton}
                                    activeOpacity={0.7}
                                    onPress={() =>
                                        alterarMesAgenda(1)
                                    }
                                >

                                    <Ionicons
                                        name="chevron-forward-outline"
                                        size={17}
                                        color="#FFFFFF"
                                    />

                                </TouchableOpacity>

                            </View>


                            {/* =============================================
            SEMANA
        ============================================= */}

                            <View style={styles.homeWeekRow}>

                                {[
                                    "D",
                                    "S",
                                    "T",
                                    "Q",
                                    "Q",
                                    "S",
                                    "S",
                                ].map(
                                    (dia, index) => (

                                        <Text
                                            key={index}
                                            style={
                                                styles.homeWeekText
                                            }
                                        >
                                            {dia}
                                        </Text>

                                    )
                                )}

                            </View>


                            {/* =============================================
            DIAS
        ============================================= */}

                            <View style={styles.homeDaysGrid}>

                                {diasAgenda.map(
                                    (dia, index) => {

                                        if (
                                            dia === null
                                        ) {

                                            return (
                                                <View
                                                    key={
                                                        `home-empty-${index}`
                                                    }
                                                    style={
                                                        styles.homeDayContainer
                                                    }
                                                />
                                            );

                                        }


                                        const dataDia =
                                            new Date(
                                                anoAgenda,
                                                mesAgendaNumero,
                                                dia
                                            );


                                        const selecionado =
                                            formatarDataAgenda(
                                                dataDia
                                            ) ===
                                            dataAgendaSelecionada;


                                        const hoje =
                                            formatarDataAgenda(
                                                dataDia
                                            ) ===
                                            formatarDataAgenda(
                                                new Date()
                                            );


                                        const possuiEvento =
                                            eventosAgenda.some(
                                                (evento) =>
                                                    evento.ag_data_inicio
                                                        ?.substring(
                                                            0,
                                                            10
                                                        ) ===
                                                    formatarDataAgenda(
                                                        dataDia
                                                    )
                                            );


                                        return (

                                            <TouchableOpacity
                                                key={dia}
                                                style={
                                                    styles.homeDayContainer
                                                }
                                                activeOpacity={0.7}
                                                onPress={() =>
                                                    selecionarDiaAgenda(
                                                        dia
                                                    )
                                                }
                                            >

                                                <View
                                                    style={[
                                                        styles.homeDay,

                                                        selecionado &&
                                                        styles.homeDaySelected,

                                                        hoje &&
                                                        !selecionado &&
                                                        styles.homeDayToday,
                                                    ]}
                                                >

                                                    <Text
                                                        style={[
                                                            styles.homeDayText,

                                                            selecionado &&
                                                            styles.homeDayTextSelected,
                                                        ]}
                                                    >
                                                        {dia}
                                                    </Text>

                                                </View>


                                                {possuiEvento && (

                                                    <View
                                                        style={
                                                            styles.homeEventDot
                                                        }
                                                    />

                                                )}

                                            </TouchableOpacity>

                                        );

                                    }
                                )}

                            </View>

                        </View>

                    </View>


                    {/* =================================================
                        ATENDIMENTOS
                    ================================================= */}

                    <View style={styles.section}>

                        <View style={styles.sectionHeader}>

                            <Text style={styles.sectionHeaderTitle}>
                                Atendimentos
                            </Text>

                            <TouchableOpacity
                                activeOpacity={0.7}
                                onPress={() =>
                                    navigation.dispatch(
                                        CommonActions.navigate({
                                            name: "Atendimento",
                                        })
                                    )
                                }
                            >

                                <Text style={styles.seeAll}>
                                    Ver todos
                                </Text>

                            </TouchableOpacity>

                        </View>

                        {carregandoAtendimentos && (

                            <View style={styles.loadingHome}>

                                <ActivityIndicator
                                    size="small"
                                    color="#4F8DF7"
                                />

                                <Text style={styles.loadingHomeText}>
                                    Carregando atendimentos...
                                </Text>

                            </View>

                        )}

                        {!carregandoAtendimentos &&
                            !erroAtendimentos &&
                            atendimentosHome.map((atendimento) => {

                                const statusTexto =
                                    atendimento.at_status === "A"
                                        ? "Aberto"
                                        : atendimento.at_status === "E"
                                            ? "Em Atendimento"
                                            : atendimento.at_status === "D"
                                                ? "Desenvolvimento"
                                                : atendimento.at_status === "F"
                                                    ? "Finalizado"
                                                    : "Cancelado";

                                const statusAtivo =
                                    atendimento.at_status === "E" ||
                                    atendimento.at_status === "D";

                                return (

                                    <TouchableOpacity
                                        key={atendimento.id}
                                        style={styles.attendanceCard}
                                        activeOpacity={0.85}
                                        onPress={() =>
                                            navigation.dispatch(
                                                CommonActions.navigate({
                                                    name: "Atendimento",
                                                    params: {
                                                        screen: "AtendimentoDetalhe",
                                                        params: {
                                                            id: atendimento.id,
                                                        },
                                                    },
                                                })
                                            )
                                        }
                                    >

                                        <View style={styles.attendanceIconContainer}>

                                            <Ionicons
                                                name="headset-outline"
                                                size={21}
                                                color="#4F8DF7"
                                            />

                                        </View>

                                        <View style={styles.attendanceContent}>

                                            <View style={styles.attendanceTop}>

                                                <Text style={styles.attendanceNumber}>
                                                    {atendimento.at_codigo}
                                                </Text>

                                                <View
                                                    style={[
                                                        styles.status,
                                                        statusAtivo
                                                            ? styles.statusWaiting
                                                            : undefined,
                                                    ]}
                                                >

                                                    <Text
                                                        style={[
                                                            styles.statusText,
                                                            statusAtivo
                                                                ? styles.statusWaitingText
                                                                : undefined,
                                                        ]}
                                                    >
                                                        {statusTexto}
                                                    </Text>

                                                </View>

                                            </View>

                                            <Text
                                                style={styles.attendanceTitle}
                                                numberOfLines={1}
                                            >
                                                {atendimento.at_descricao}
                                            </Text>

                                            <Text
                                                style={styles.attendanceClient}
                                                numberOfLines={1}
                                            >
                                                {atendimento.cli_fantasia ||
                                                    "Cliente não informado"}
                                            </Text>

                                        </View>

                                        <Ionicons
                                            name="chevron-forward-outline"
                                            size={18}
                                            color="#64748B"
                                        />

                                    </TouchableOpacity>

                                );

                            })}

                        {!carregandoAtendimentos &&
                            !erroAtendimentos &&
                            atendimentosHome.length === 0 && (

                                <View style={styles.emptyHome}>

                                    <Ionicons
                                        name="headset-outline"
                                        size={24}
                                        color="#64748B"
                                    />

                                    <Text style={styles.emptyHomeTitle}>
                                        Nenhum atendimento em andamento
                                    </Text>

                                    <Text style={styles.emptyHomeText}>
                                        Não existem atendimentos abertos no momento.
                                    </Text>

                                </View>

                            )}

                        {erroAtendimentos && (

                            <View style={styles.emptyHome}>

                                <Ionicons
                                    name="alert-circle-outline"
                                    size={24}
                                    color="#64748B"
                                />

                                <Text style={styles.emptyHomeTitle}>
                                    Não foi possível carregar
                                </Text>

                                <Text style={styles.emptyHomeText}>
                                    Tente atualizar a página novamente.
                                </Text>

                            </View>

                        )}

                    </View>

                    <View style={styles.bottomSpace} />

                </ScrollView>

            </SafeAreaView>

        </ImageBackground >
    );
}