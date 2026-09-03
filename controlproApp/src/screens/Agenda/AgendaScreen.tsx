import React, {
    useMemo,
    useState,
    useCallback,
} from "react";
import {
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
    useNavigation,
    CommonActions,
    DrawerActions,
    useFocusEffect,
} from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AgendaEvento, getAgenda, } from "@/services/agendaService";
import { NativeStackNavigationProp, } from "@react-navigation/native-stack";
import { AgendaStackParamList, } from "@/navigation/AgendaNavigator";
import { styles } from "./styles";


/* =========================================================
   MESES
========================================================= */

const meses = [
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
];

/* =========================================================
   DIAS DA SEMANA
========================================================= */

const diasSemana = [
    "DOM",
    "SEG",
    "TER",
    "QUA",
    "QUI",
    "SEX",
    "SÁB",
];

/* =========================================================
   FUNÇÃO PARA FORMATAR DATA
========================================================= */

function formatarData(
    data: Date
) {

    const ano = data.getFullYear();
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


/* =========================================================
   COMPONENTE
========================================================= */

export default function AgendaScreen() {

    const navigation =
        useNavigation<
            NativeStackNavigationProp<
                AgendaStackParamList
            >
        >();



    /* =====================================================
       EVENTOS
    ===================================================== */

    const [eventos, setEventos] =
        useState<AgendaEvento[]>([]);


    const [carregando, setCarregando] =
        useState(true);


    const [erro, setErro] =
        useState(false);


    /* =====================================================
       MÊS ATUAL DO CALENDÁRIO
    ===================================================== */

    const [mesAtual, setMesAtual] =
        useState(new Date());


    /* =====================================================
       DIA SELECIONADO
    ===================================================== */

    const [diaSelecionado, setDiaSelecionado] =
        useState(new Date());


    /* =====================================================
       INFORMAÇÕES DO MÊS
    ===================================================== */

    const ano =
        mesAtual.getFullYear();

    const mes =
        mesAtual.getMonth();


    /* =====================================================
       PRIMEIRO DIA DO MÊS
    ===================================================== */

    const primeiroDia =
        new Date(
            ano,
            mes,
            1
        ).getDay();


    /* =====================================================
       QUANTIDADE DE DIAS DO MÊS
    ===================================================== */

    const quantidadeDias =
        new Date(
            ano,
            mes + 1,
            0
        ).getDate();


    /* =====================================================
   CARREGAR AGENDA
===================================================== */

    const carregarAgenda = useCallback(
        async () => {

            try {

                setCarregando(true);

                setErro(false);


                const primeiroDiaMes =
                    new Date(
                        ano,
                        mes,
                        1
                    );


                const ultimoDiaMes =
                    new Date(
                        ano,
                        mes + 1,
                        0
                    );


                const dataInicio =
                    formatarData(
                        primeiroDiaMes
                    );


                const dataFim =
                    formatarData(
                        ultimoDiaMes
                    );


                const resultado =
                    await getAgenda(
                        dataInicio,
                        dataFim
                    );


                setEventos(
                    Array.isArray(resultado)
                        ? resultado
                        : []
                );

            }
            catch (error) {

                console.log(
                    "Erro ao carregar agenda:",
                    error
                );

                setErro(true);

                setEventos([]);

            }
            finally {

                setCarregando(false);

            }

        },
        [
            ano,
            mes,
        ]
    );


    /* =====================================================
       CARREGAR QUANDO A TELA GANHAR FOCO
    ===================================================== */

    useFocusEffect(
        React.useCallback(() => {

            carregarAgenda();

        }, [
            carregarAgenda,
        ])
    );


    /* =====================================================
       CARREGAR QUANDO MUDAR O MÊS
    ===================================================== */

    useFocusEffect(
        React.useCallback(() => {

            carregarAgenda();

        }, [
            carregarAgenda,
        ])
    );


    /* =====================================================
       DIAS DO CALENDÁRIO
    ===================================================== */

    const diasCalendario =
        useMemo(() => {

            const dias: (
                number | null
            )[] = [];


            /* ---------------------------------------------
               ESPAÇOS ANTES DO PRIMEIRO DIA
            --------------------------------------------- */

            for (
                let i = 0;
                i < primeiroDia;
                i++
            ) {

                dias.push(null);

            }


            /* ---------------------------------------------
               DIAS DO MÊS
            --------------------------------------------- */

            for (
                let dia = 1;
                dia <= quantidadeDias;
                dia++
            ) {

                dias.push(dia);

            }


            return dias;

        }, [
            primeiroDia,
            quantidadeDias,
        ]);


    /* =====================================================
       DATA SELECIONADA
    ===================================================== */

    const dataSelecionada =
        formatarData(
            diaSelecionado
        );


    /* =====================================================
       EVENTOS DO DIA
    ===================================================== */

    const eventosDoDia =
        eventos.filter(
            (evento) => {

                const dataEvento =
                    evento.ag_data_inicio
                        ?.substring(
                            0,
                            10
                        );


                return (
                    dataEvento ===
                    dataSelecionada
                );

            }
        );


    /* =====================================================
       ALTERAR MÊS
    ===================================================== */

    function alterarMes(
        quantidade: number
    ) {

        const novoMes =
            new Date(
                ano,
                mes + quantidade,
                1
            );


        setMesAtual(
            novoMes
        );


        /*
         * Ao mudar de mês,
         * selecionamos o primeiro
         * dia daquele mês.
         */

        setDiaSelecionado(
            novoMes
        );

    }


    /* =====================================================
       SELECIONAR DIA
    ===================================================== */

    function selecionarDia(
        dia: number
    ) {

        const novaData =
            new Date(
                ano,
                mes,
                dia
            );


        setDiaSelecionado(
            novaData
        );

    }


    /* =====================================================
       VERIFICAR EVENTO NO DIA
    ===================================================== */

    function possuiEventoNoDia(
        dia: number
    ) {

        const data =
            formatarData(
                new Date(
                    ano,
                    mes,
                    dia
                )
            );


        return eventos.some(
            (evento) => {

                const dataEvento =
                    evento.ag_data_inicio
                        ?.substring(
                            0,
                            10
                        );


                return (
                    dataEvento === data
                );

            }
        );

    }


    /* =====================================================
       ÍCONE DO EVENTO
    ===================================================== */

    function obterIconeEvento(
        tipo: AgendaEvento["ag_tipo"]
    ): keyof typeof Ionicons.glyphMap {

        switch (tipo) {

            case "V":
                return "business-outline";

            case "R":
                return "people-outline";

            case "C":
                return "call-outline";

            case "T":
                return "checkmark-circle-outline";

            case "E":
                return "calendar-outline";

            default:
                return "calendar-outline";

        }

    }


    /* =====================================================
       COR DO EVENTO
    ===================================================== */

    function obterCorEvento(
        tipo: AgendaEvento["ag_tipo"]
    ) {

        switch (tipo) {

            case "V":
                return "#F59E0B";

            case "R":
                return "#4F8DF7";

            case "C":
                return "#34D399";

            case "T":
                return "#A78BFA";

            case "E":
                return "#4F8DF7";

            default:
                return "#4F8DF7";

        }

    }


    /* =====================================================
       RENDER
    ===================================================== */

    return (

        <SafeAreaView
            style={styles.container}
        >

            {/* =================================================
                HEADER
            ================================================= */}

            <View style={styles.header}>

                <TouchableOpacity
                    style={styles.headerButton}
                    activeOpacity={0.8}
                    onPress={() =>
                        navigation.dispatch(
                            DrawerActions.openDrawer()
                        )
                    }
                >

                    <Ionicons
                        name="menu-outline"
                        size={25}
                        color="#FFFFFF"
                    />

                </TouchableOpacity>


                <View
                    style={styles.headerContent}
                >

                    <Text
                        style={styles.headerTitle}
                    >
                        Agenda
                    </Text>


                    <Text
                        style={styles.headerSubtitle}
                    >
                        Seus compromissos
                    </Text>

                </View>


                <TouchableOpacity
                    style={styles.headerButton}
                    activeOpacity={0.8}
                    onPress={() =>
                        navigation.dispatch(
                            CommonActions.navigate({
                                name: "Home",
                            })
                        )
                    }
                >

                    <Ionicons
                        name="home-outline"
                        size={22}
                        color="#FFFFFF"
                    />

                </TouchableOpacity>

            </View>


            {/* =================================================
                CONTEÚDO
            ================================================= */}

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={
                    styles.content
                }
            >

                {/* =================================================
                    CARREGANDO
                ================================================= */}

                {carregando && (

                    <View
                        style={
                            styles.loadingContainer
                        }
                    >

                        <Ionicons
                            name="calendar-outline"
                            size={24}
                            color="#4F8DF7"
                        />

                        <Text
                            style={
                                styles.loadingText
                            }
                        >
                            Carregando agenda...
                        </Text>

                    </View>

                )}


                {/* =================================================
                    ERRO
                ================================================= */}

                {erro &&
                    !carregando && (

                        <View
                            style={
                                styles.errorContainer
                            }
                        >

                            <Ionicons
                                name="alert-circle-outline"
                                size={28}
                                color="#EF4444"
                            />


                            <Text
                                style={
                                    styles.errorText
                                }
                            >
                                Não foi possível carregar
                                a agenda.
                            </Text>


                            <TouchableOpacity
                                style={
                                    styles.retryButton
                                }
                                activeOpacity={0.8}
                                onPress={
                                    carregarAgenda
                                }
                            >

                                <Text
                                    style={
                                        styles.retryText
                                    }
                                >
                                    Tentar novamente
                                </Text>

                            </TouchableOpacity>

                        </View>

                    )}


                {/* =================================================
                    CALENDÁRIO
                ================================================= */}

                <View
                    style={styles.calendarCard}
                >

                    {/* ---------------------------------------------
                        CABEÇALHO DO MÊS
                    --------------------------------------------- */}

                    <View
                        style={styles.monthHeader}
                    >

                        <TouchableOpacity
                            style={
                                styles.monthButton
                            }
                            activeOpacity={0.7}
                            onPress={() =>
                                alterarMes(-1)
                            }
                        >

                            <Ionicons
                                name="chevron-back-outline"
                                size={20}
                                color="#FFFFFF"
                            />

                        </TouchableOpacity>


                        <View
                            style={styles.monthCenter}
                        >

                            <Text
                                style={
                                    styles.monthTitle
                                }
                            >
                                {meses[mes]}
                            </Text>


                            <Text
                                style={
                                    styles.yearText
                                }
                            >
                                {ano}
                            </Text>

                        </View>


                        <TouchableOpacity
                            style={
                                styles.monthButton
                            }
                            activeOpacity={0.7}
                            onPress={() =>
                                alterarMes(1)
                            }
                        >

                            <Ionicons
                                name="chevron-forward-outline"
                                size={20}
                                color="#FFFFFF"
                            />

                        </TouchableOpacity>

                    </View>


                    {/* ---------------------------------------------
                        DIAS DA SEMANA
                    --------------------------------------------- */}

                    <View
                        style={styles.weekRow}
                    >

                        {diasSemana.map(
                            (dia) => (

                                <Text
                                    key={dia}
                                    style={
                                        styles.weekText
                                    }
                                >
                                    {dia}
                                </Text>

                            )
                        )}

                    </View>


                    {/* ---------------------------------------------
                        DIAS
                    --------------------------------------------- */}

                    <View
                        style={styles.daysGrid}
                    >

                        {diasCalendario.map(
                            (dia, index) => {

                                if (
                                    dia === null
                                ) {

                                    return (

                                        <View
                                            key={
                                                `empty-${index}`
                                            }
                                            style={
                                                styles.dayContainer
                                            }
                                        />

                                    );

                                }


                                const dataDia =
                                    new Date(
                                        ano,
                                        mes,
                                        dia
                                    );


                                const selecionado =
                                    formatarData(
                                        dataDia
                                    ) ===
                                    dataSelecionada;


                                const hoje =
                                    formatarData(
                                        dataDia
                                    ) ===
                                    formatarData(
                                        new Date()
                                    );


                                return (

                                    <TouchableOpacity
                                        key={dia}
                                        style={
                                            styles.dayContainer
                                        }
                                        activeOpacity={0.7}
                                        onPress={() =>
                                            selecionarDia(
                                                dia
                                            )
                                        }
                                    >

                                        <View
                                            style={[
                                                styles.day,

                                                selecionado &&
                                                styles.daySelected,

                                                hoje &&
                                                !selecionado &&
                                                styles.dayToday,
                                            ]}
                                        >

                                            <Text
                                                style={[
                                                    styles.dayText,

                                                    selecionado &&
                                                    styles.dayTextSelected,
                                                ]}
                                            >
                                                {dia}
                                            </Text>

                                        </View>


                                        {/* ---------------------------------
                                            INDICADOR DE EVENTO
                                        --------------------------------- */}

                                        {possuiEventoNoDia(
                                            dia
                                        ) && (

                                                <View
                                                    style={
                                                        styles.eventDot
                                                    }
                                                />

                                            )}

                                    </TouchableOpacity>

                                );

                            }
                        )}

                    </View>

                </View>


                {/* =================================================
                    DIA SELECIONADO
                ================================================= */}

                <View
                    style={styles.dayHeader}
                >

                    <View>

                        <Text
                            style={
                                styles.dayHeaderTitle
                            }
                        >
                            Compromissos
                        </Text>


                        <Text
                            style={
                                styles.dayHeaderSubtitle
                            }
                        >
                            {diaSelecionado.toLocaleDateString(
                                "pt-BR",
                                {
                                    weekday: "long",
                                    day: "2-digit",
                                    month: "long",
                                }
                            )}
                        </Text>

                    </View>


                    <View
                        style={styles.eventCount}
                    >

                        <Text
                            style={
                                styles.eventCountText
                            }
                        >
                            {eventosDoDia.length}
                        </Text>

                    </View>

                </View>


                {/* =================================================
                    SEM EVENTOS
                ================================================= */}

                {!carregando &&
                    !erro &&
                    eventosDoDia.length === 0 && (

                        <View
                            style={
                                styles.emptyContainer
                            }
                        >

                            <Ionicons
                                name="calendar-outline"
                                size={30}
                                color="#64748B"
                            />


                            <Text
                                style={
                                    styles.emptyTitle
                                }
                            >
                                Nenhum compromisso
                            </Text>


                            <Text
                                style={
                                    styles.emptyText
                                }
                            >
                                Não existem compromissos
                                para este dia.
                            </Text>

                        </View>

                    )}


                {/* =================================================
                    EVENTOS
                ================================================= */}

                {!carregando &&
                    !erro &&
                    eventosDoDia.map(
                        (evento) => (

                            <TouchableOpacity
                                key={evento.id}
                                style={
                                    styles.eventCard
                                }
                                activeOpacity={0.85}
                                onPress={() =>
                                    navigation.navigate(
                                        "AgendaDetalhe",
                                        {
                                            id: evento.id,
                                        }
                                    )
                                }
                            >

                                {/* ---------------------------------
                                    ÍCONE
                                --------------------------------- */}

                                <View
                                    style={[
                                        styles.eventIcon,
                                        {
                                            backgroundColor:
                                                `${obterCorEvento(
                                                    evento.ag_tipo
                                                )}20`,
                                        },
                                    ]}
                                >

                                    <Ionicons
                                        name={
                                            obterIconeEvento(
                                                evento.ag_tipo
                                            )
                                        }
                                        size={22}
                                        color={
                                            obterCorEvento(
                                                evento.ag_tipo
                                            )
                                        }
                                    />

                                </View>


                                {/* ---------------------------------
                                    CONTEÚDO
                                --------------------------------- */}

                                <View
                                    style={
                                        styles.eventContent
                                    }
                                >

                                    <Text
                                        style={
                                            styles.eventTime
                                        }
                                    >
                                        {evento.ag_data_inicio
                                            ?.substring(
                                                11,
                                                16
                                            )}
                                    </Text>


                                    <Text
                                        style={
                                            styles.eventTitle
                                        }
                                        numberOfLines={1}
                                    >
                                        {evento.ag_titulo}
                                    </Text>


                                    {(
                                        evento.cli_fantasia ||
                                        evento.cli_razaosocial
                                    ) && (

                                            <Text
                                                style={
                                                    styles.eventClient
                                                }
                                                numberOfLines={1}
                                            >
                                                {evento.cli_fantasia ||
                                                    evento.cli_razaosocial}
                                            </Text>

                                        )}


                                    {evento.ag_descricao && (

                                        <Text
                                            style={
                                                styles.eventDescription
                                            }
                                            numberOfLines={1}
                                        >
                                            {evento.ag_descricao}
                                        </Text>

                                    )}

                                </View>


                                {/* ---------------------------------
                                    SETA
                                --------------------------------- */}

                                <Ionicons
                                    name="chevron-forward-outline"
                                    size={20}
                                    color="#64748B"
                                />

                            </TouchableOpacity>

                        )
                    )}


                {/* =================================================
                    ESPAÇO FINAL
                ================================================= */}

                <View
                    style={styles.bottomSpace}
                />

            </ScrollView>

            <TouchableOpacity
                style={styles.floatingButton}
                activeOpacity={0.85}
                onPress={() =>
                    navigation.navigate(
                        "NovoCompromisso"
                    )
                }
            >

                <Ionicons
                    name="add-outline"
                    size={30}
                    color="#FFFFFF"
                />

            </TouchableOpacity>

        </SafeAreaView>

    );

}