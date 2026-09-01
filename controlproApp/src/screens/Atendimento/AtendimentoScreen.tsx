import React, {
    useCallback,
    useEffect,
    useState,
} from "react";

import {
    ImageBackground,
    ScrollView,
    View,
    Text,
    TouchableOpacity,
    TextInput,
    ActivityIndicator,
    RefreshControl,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import { Ionicons } from "@expo/vector-icons";

import {
    useFocusEffect,
    useNavigation,
} from "@react-navigation/native";

import { AppNavigationProp } from "@/navigation/types";

import {
    getAtendimentos,
    Atendimento,
    AtendimentoStatus,
} from "@/services/atendimentoService";

import { styles } from "./styles";


/* =====================================================
   STATUS
===================================================== */

type FiltroStatus =
    | "Todos"
    | AtendimentoStatus;


/* =====================================================
   TELA
===================================================== */

export default function AtendimentoScreen() {

    const navigation =
        useNavigation<AppNavigationProp>();


    /* =================================================
       ESTADOS
    ================================================= */

    const [atendimentos, setAtendimentos] =
        useState<Atendimento[]>([]);

    const [search, setSearch] =
        useState("");

    const [filtro, setFiltro] =
        useState<FiltroStatus>("Todos");

    const [loading, setLoading] =
        useState(true);

    const [refreshing, setRefreshing] =
        useState(false);

    const [erro, setErro] =
        useState("");


    /* =================================================
       CARREGAR ATENDIMENTOS
    ================================================= */

    async function carregarAtendimentos(
        mostrarLoading = true
    ) {

        try {

            if (mostrarLoading) {
                setLoading(true);
            }

            setErro("");

            const response =
                await getAtendimentos(
                    "",
                    1,
                    100
                );

            setAtendimentos(
                response?.data || []
            );

        } catch (error) {

            console.log(
                "Erro ao carregar atendimentos:",
                error
            );

            setErro(
                "Não foi possível carregar os atendimentos."
            );

        } finally {

            setLoading(false);
            setRefreshing(false);

        }

    }


    /* =================================================
       ATUALIZAR
    ================================================= */

    async function atualizar() {

        setRefreshing(true);

        await carregarAtendimentos(false);

    }


    /* =================================================
       CARREGAR AO ENTRAR NA TELA
    ================================================= */

    useFocusEffect(
        useCallback(() => {

            carregarAtendimentos();

        }, [])
    );


    /* =================================================
       FILTRO
    ================================================= */

    const atendimentosFiltrados =
        atendimentos.filter(
            (item) => {

                const texto =
                    search
                        .toLowerCase()
                        .trim();


                const correspondeBusca =
                    !texto ||

                    item.at_codigo
                        ?.toLowerCase()
                        .includes(texto) ||

                    item.cli_fantasia
                        ?.toLowerCase()
                        .includes(texto) ||

                    item.pj_descresumo
                        ?.toLowerCase()
                        .includes(texto) ||

                    item.sis_descricao
                        ?.toLowerCase()
                        .includes(texto) ||

                    item.ta_descricao
                        ?.toLowerCase()
                        .includes(texto) ||

                    item.ca_descricao
                        ?.toLowerCase()
                        .includes(texto) ||

                    item.responsavel_nome
                        ?.toLowerCase()
                        .includes(texto);


                const correspondeStatus =
                    filtro === "Todos" ||
                    item.at_status === filtro;


                return (
                    correspondeBusca &&
                    correspondeStatus
                );

            }
        );


    /* =================================================
       LABEL DO STATUS
    ================================================= */

    function getStatusLabel(
        status: AtendimentoStatus
    ) {

        switch (status) {

            case "A":
                return "Aberto";

            case "E":
                return "Em Atendimento";

            case "D":
                return "Desenvolvimento";

            case "F":
                return "Finalizado";

            case "C":
                return "Cancelado";

            default:
                return status;

        }

    }


    /* =================================================
       ESTILO DO STATUS
    ================================================= */

    function getStatusStyle(
        status: AtendimentoStatus
    ) {

        switch (status) {

            case "A":
                return styles.statusWaiting;

            case "E":
                return styles.statusInProgress;

            case "D":
                return styles.statusDevelopment;

            case "F":
                return styles.statusResolved;

            case "C":
                return styles.statusCancelled;

            default:
                return styles.statusWaiting;

        }

    }


    /* =================================================
       ÍCONE DO STATUS
    ================================================= */

    function getStatusIcon(
        status: AtendimentoStatus
    ) {

        switch (status) {

            case "A":
                return "time-outline";

            case "E":
                return "play-circle-outline";

            case "D":
                return "construct-outline";

            case "F":
                return "checkmark-circle-outline";

            case "C":
                return "close-circle-outline";

            default:
                return "help-circle-outline";

        }

    }


    /* =================================================
       DATA
    ================================================= */

    function formatarData(
        data?: string
    ) {

        if (!data) {
            return "-";
        }

        try {

            return new Date(
                data
            ).toLocaleDateString(
                "pt-BR"
            );

        } catch {

            return "-";

        }

    }


    /* =================================================
       ABRIR DETALHE
    ================================================= */

    function abrirAtendimento(
        atendimento: Atendimento
    ) {

        console.log(
            "Atendimento selecionado:",
            atendimento.id
        );

        /*
         * Próxima etapa:
         *
         * navigation.navigate(
         *     "DetalheAtendimento",
         *     {
         *         id: atendimento.id
         *     }
         * )
         */

    }


    /* =================================================
       RENDER
    ================================================= */

    return (

        <ImageBackground
            source={
                require(
                    "../../assets/images/login/background-login.png"
                )
            }
            style={styles.background}
            resizeMode="cover"
        >

            <SafeAreaView
                style={styles.container}
                edges={[
                    "top",
                    "left",
                    "right",
                    "bottom",
                ]}
            >

                {/* =================================================
                   HEADER
                ================================================= */}

                <View style={styles.header}>

                    <TouchableOpacity
                        style={styles.headerButton}
                        activeOpacity={0.8}
                        onPress={() =>
                            navigation.openDrawer()
                        }
                    >

                        <Ionicons
                            name="menu-outline"
                            size={25}
                            color="#FFFFFF"
                        />

                    </TouchableOpacity>


                    <View
                        style={
                            styles.headerTitleArea
                        }
                    >

                        <Text
                            style={
                                styles.headerTitle
                            }
                        >
                            Atendimentos
                        </Text>

                        <Text
                            style={
                                styles.headerSubtitle
                            }
                        >
                            Controle e acompanhamento
                        </Text>

                    </View>


                    <TouchableOpacity
                        style={styles.headerButton}
                        activeOpacity={0.8}
                        onPress={atualizar}
                    >

                        <Ionicons
                            name="refresh-outline"
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

                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={atualizar}
                        />
                    }
                >

                    {/* =================================================
                       PESQUISA
                    ================================================= */}

                    <View
                        style={
                            styles.searchContainer
                        }
                    >

                        <Ionicons
                            name="search-outline"
                            size={21}
                            color="#94A3B8"
                        />

                        <TextInput
                            value={search}
                            onChangeText={
                                setSearch
                            }
                            placeholder={
                                "Pesquisar atendimento..."
                            }
                            placeholderTextColor={
                                "#94A3B8"
                            }
                            style={
                                styles.searchInput
                            }
                        />

                        {search.length > 0 && (

                            <TouchableOpacity
                                onPress={() =>
                                    setSearch("")
                                }
                            >

                                <Ionicons
                                    name="close-circle"
                                    size={20}
                                    color="#64748B"
                                />

                            </TouchableOpacity>

                        )}

                    </View>


                    {/* =================================================
                       FILTROS
                    ================================================= */}

                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={
                            false
                        }
                        contentContainerStyle={
                            styles.filters
                        }
                    >

                        {[
                            {
                                label: "Todos",
                                value: "Todos",
                            },

                            {
                                label: "Aberto",
                                value: "A",
                            },

                            {
                                label: "Em Atendimento",
                                value: "E",
                            },

                            {
                                label: "Desenvolvimento",
                                value: "D",
                            },

                            {
                                label: "Finalizado",
                                value: "F",
                            },

                            {
                                label: "Cancelado",
                                value: "C",
                            },

                        ].map((item) => (

                            <TouchableOpacity
                                key={
                                    item.value
                                }

                                activeOpacity={0.8}

                                onPress={() =>
                                    setFiltro(
                                        item.value as FiltroStatus
                                    )
                                }

                                style={[
                                    styles.filterButton,

                                    filtro ===
                                        item.value &&
                                    styles.filterButtonActive,
                                ]}
                            >

                                <Text
                                    style={[
                                        styles.filterText,

                                        filtro ===
                                            item.value &&
                                        styles.filterTextActive,
                                    ]}
                                >
                                    {item.label}
                                </Text>

                            </TouchableOpacity>

                        ))}

                    </ScrollView>


                    {/* =================================================
                       CABEÇALHO DA LISTA
                    ================================================= */}

                    <View
                        style={
                            styles.listHeader
                        }
                    >

                        <Text
                            style={
                                styles.listTitle
                            }
                        >
                            Atendimentos
                        </Text>

                        <Text
                            style={
                                styles.listCount
                            }
                        >
                            {
                                atendimentosFiltrados.length
                            } registros
                        </Text>

                    </View>


                    {/* =================================================
                       CARREGANDO
                    ================================================= */}

                    {loading && (

                        <View
                            style={
                                styles.empty
                            }
                        >

                            <ActivityIndicator
                                size="large"
                                color="#3B82F6"
                            />

                            <Text
                                style={
                                    styles.emptyTitle
                                }
                            >
                                Carregando atendimentos...
                            </Text>

                        </View>

                    )}


                    {/* =================================================
                       ERRO
                    ================================================= */}

                    {!loading &&
                        erro !== "" && (

                            <View
                                style={
                                    styles.empty
                                }
                            >

                                <Ionicons
                                    name="cloud-offline-outline"
                                    size={40}
                                    color="#64748B"
                                />

                                <Text
                                    style={
                                        styles.emptyTitle
                                    }
                                >
                                    Erro ao carregar
                                </Text>

                                <Text
                                    style={
                                        styles.emptyText
                                    }
                                >
                                    {erro}
                                </Text>

                                <TouchableOpacity
                                    style={
                                        styles.retryButton
                                    }
                                    onPress={() =>
                                        carregarAtendimentos()
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
                       LISTA
                    ================================================= */}

                    {!loading &&
                        erro === "" &&
                        atendimentosFiltrados.map(
                            (item) => (

                                <TouchableOpacity
                                    key={item.id}
                                    style={
                                        styles.attendanceCard
                                    }
                                    activeOpacity={0.85}
                                    onPress={() =>
                                        abrirAtendimento(
                                            item
                                        )
                                    }
                                >

                                    {/* =================================
                                       TOPO
                                    ================================= */}

                                    <View
                                        style={
                                            styles.attendanceTop
                                        }
                                    >

                                        <View
                                            style={
                                                styles.numberArea
                                            }
                                        >

                                            <Text
                                                style={
                                                    styles.attendanceNumber
                                                }
                                            >
                                                {item.at_codigo ||
                                                    `#${item.id}`}
                                            </Text>

                                        </View>


                                        <View
                                            style={[
                                                styles.status,

                                                getStatusStyle(
                                                    item.at_status
                                                ),
                                            ]}
                                        >

                                            <Ionicons
                                                name={
                                                    getStatusIcon(
                                                        item.at_status
                                                    ) as any
                                                }
                                                size={14}
                                                color="#FFFFFF"
                                            />

                                            <Text
                                                style={
                                                    styles.statusText
                                                }
                                            >
                                                {getStatusLabel(
                                                    item.at_status
                                                )}
                                            </Text>

                                        </View>

                                    </View>


                                    {/* =================================
                                       DESCRIÇÃO
                                    ================================= */}

                                    <Text
                                        style={
                                            styles.attendanceTitle
                                        }
                                        numberOfLines={2}
                                    >
                                        {item.at_descricao ||
                                            "Sem descrição"}
                                    </Text>


                                    {/* =================================
                                       CLIENTE
                                    ================================= */}

                                    <View
                                        style={
                                            styles.infoRow
                                        }
                                    >

                                        <Ionicons
                                            name="business-outline"
                                            size={15}
                                            color="#94A3B8"
                                        />

                                        <Text
                                            style={
                                                styles.attendanceClient
                                            }
                                            numberOfLines={1}
                                        >
                                            {item.cli_fantasia ||
                                                "Cliente não informado"}
                                        </Text>

                                    </View>


                                    {/* =================================
                                       INFORMAÇÕES
                                    ================================= */}

                                    <View
                                        style={
                                            styles.detailsArea
                                        }
                                    >

                                        {item.ta_descricao && (

                                            <View
                                                style={
                                                    styles.detailItem
                                                }
                                            >

                                                <Text
                                                    style={
                                                        styles.detailLabel
                                                    }
                                                >
                                                    Tipo
                                                </Text>

                                                <Text
                                                    style={
                                                        styles.detailValue
                                                    }
                                                    numberOfLines={1}
                                                >
                                                    {
                                                        item.ta_descricao
                                                    }
                                                </Text>

                                            </View>

                                        )}


                                        {item.ca_descricao && (

                                            <View
                                                style={
                                                    styles.detailItem
                                                }
                                            >

                                                <Text
                                                    style={
                                                        styles.detailLabel
                                                    }
                                                >
                                                    Categoria
                                                </Text>

                                                <Text
                                                    style={
                                                        styles.detailValue
                                                    }
                                                    numberOfLines={1}
                                                >
                                                    {
                                                        item.ca_descricao
                                                    }
                                                </Text>

                                            </View>

                                        )}

                                    </View>


                                    {/* =================================
                                       RODAPÉ
                                    ================================= */}

                                    <View
                                        style={
                                            styles.attendanceFooter
                                        }
                                    >

                                        <View
                                            style={
                                                styles.dateArea
                                            }
                                        >

                                            <Ionicons
                                                name="calendar-outline"
                                                size={15}
                                                color="#94A3B8"
                                            />

                                            <Text
                                                style={
                                                    styles.attendanceDate
                                                }
                                            >
                                                {
                                                    formatarData(
                                                        item.at_data_abertura
                                                    )
                                                }
                                            </Text>

                                        </View>


                                        <Ionicons
                                            name="chevron-forward"
                                            size={20}
                                            color="#64748B"
                                        />

                                    </View>

                                </TouchableOpacity>

                            )
                        )}


                    {/* =================================================
                       VAZIO
                    ================================================= */}

                    {!loading &&
                        erro === "" &&
                        atendimentosFiltrados.length === 0 && (

                            <View
                                style={
                                    styles.empty
                                }
                            >

                                <Ionicons
                                    name="file-tray-outline"
                                    size={42}
                                    color="#64748B"
                                />

                                <Text
                                    style={
                                        styles.emptyTitle
                                    }
                                >
                                    Nenhum atendimento encontrado
                                </Text>

                                <Text
                                    style={
                                        styles.emptyText
                                    }
                                >
                                    Tente alterar os filtros
                                    ou pesquisar outro termo.
                                </Text>

                            </View>

                        )}

                </ScrollView>


                {/* =================================================
                   BOTÃO NOVO
                ================================================= */}

                <TouchableOpacity
                    style={
                        styles.floatingButton
                    }
                    activeOpacity={0.85}
                    onPress={() =>
                        navigation.navigate(
                            "NovoAtendimento"
                        )
                    }
                >

                    <Ionicons
                        name="add"
                        size={32}
                        color="#FFFFFF"
                    />

                </TouchableOpacity>

            </SafeAreaView>

        </ImageBackground>

    );

}