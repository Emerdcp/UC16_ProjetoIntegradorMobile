import React, {
    useCallback,
    useState,
} from "react";

import {
    ScrollView,
    Text,
    TouchableOpacity,
    View,
    Alert,
} from "react-native";

import {
    Ionicons,
} from "@expo/vector-icons";

import {
    useNavigation,
} from "@react-navigation/native";

import {
    NativeStackNavigationProp,
} from "@react-navigation/native-stack";

import {
    SafeAreaView,
} from "react-native-safe-area-context";

import {
    AgendaEvento,
    getAgendaById,
} from "@/services/agendaService";

import {
    AgendaStackParamList,
} from "@/navigation/AgendaNavigator";

import {
    styles,
} from "./AgendaDetalheStyles";


/* =====================================================
   NAVEGAÇÃO
===================================================== */

type NavigationProp =
    NativeStackNavigationProp<
        AgendaStackParamList,
        "AgendaDetalhe"
    >;


/* =====================================================
   PROPS
===================================================== */

interface Props {

    route: {
        params: {
            id: number;
        };
    };

}


/* =====================================================
   FORMATAR DATA
===================================================== */

function formatarData(
    data?: string | null
) {

    if (!data) {
        return "-";
    }

    const somenteData =
        data.substring(
            0,
            10
        );

    const partes =
        somenteData.split("-");

    if (
        partes.length !== 3
    ) {
        return somenteData;
    }

    return `${partes[2]}/${partes[1]}/${partes[0]}`;

}


/* =====================================================
   FORMATAR HORA
===================================================== */

function formatarHora(
    data?: string | null
) {

    if (!data) {
        return "-";
    }

    return data.substring(
        11,
        16
    );

}


/* =====================================================
   TIPO
===================================================== */

function obterTipo(
    tipo?: AgendaEvento["ag_tipo"]
) {

    switch (tipo) {

        case "V":
            return "Visita";

        case "R":
            return "Reunião";

        case "C":
            return "Retorno";

        case "T":
            return "Tarefa";

        case "E":
            return "Evento";

        default:
            return "Compromisso";

    }

}


/* =====================================================
   ÍCONE
===================================================== */

function obterIcone(
    tipo?: AgendaEvento["ag_tipo"]
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
   COR
===================================================== */

function obterCor(
    tipo?: AgendaEvento["ag_tipo"]
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
   STATUS
===================================================== */

function obterStatus(
    status?: AgendaEvento["ag_status"]
) {

    switch (status) {

        case "A":
            return "Agendado";

        case "R":
            return "Realizado";

        case "C":
            return "Cancelado";

        default:
            return "Agendado";

    }

}


/* =====================================================
   COMPONENTE
===================================================== */

export default function AgendaDetalheScreen(
    {
        route,
    }: Props
) {

    const navigation =
        useNavigation<NavigationProp>();


    const [evento, setEvento] =
        useState<AgendaEvento | null>(
            null
        );


    const [carregando, setCarregando] =
        useState(true);


    /* =================================================
       CARREGAR
    ================================================= */

    const carregarEvento =
        useCallback(
            async () => {

                try {

                    setCarregando(
                        true
                    );


                    const resultado =
                        await getAgendaById(
                            route.params.id
                        );


                    setEvento(
                        resultado
                    );

                }
                catch (error) {

                    console.log(
                        "Erro ao carregar compromisso:",
                        error
                    );

                    Alert.alert(
                        "Erro",
                        "Não foi possível carregar o compromisso.",
                        [
                            {
                                text: "OK",
                                onPress: () =>
                                    navigation.goBack(),
                            },
                        ]
                    );

                }
                finally {

                    setCarregando(
                        false
                    );

                }

            },
            [
                route.params.id,
                navigation,
            ]
        );


    React.useEffect(
        () => {

            carregarEvento();

        },
        [
            carregarEvento,
        ]
    );


    /* =================================================
       CARREGANDO
    ================================================= */

    if (carregando) {

        return (

            <SafeAreaView
                style={styles.container}
            >

                <View
                    style={styles.loadingContainer}
                >

                    <Ionicons
                        name="calendar-outline"
                        size={30}
                        color="#4F8DF7"
                    />

                    <Text
                        style={styles.loadingText}
                    >
                        Carregando compromisso...
                    </Text>

                </View>

            </SafeAreaView>

        );

    }


    /* =================================================
       SEM EVENTO
    ================================================= */

    if (!evento) {

        return (

            <SafeAreaView
                style={styles.container}
            >

                <View
                    style={styles.loadingContainer}
                >

                    <Text
                        style={styles.loadingText}
                    >
                        Compromisso não encontrado.
                    </Text>

                </View>

            </SafeAreaView>

        );

    }


    const cor =
        obterCor(
            evento.ag_tipo
        );


    const cliente =
        evento.cli_fantasia ||
        evento.cli_razaosocial;


    /* =================================================
       RENDER
    ================================================= */

    return (

        <SafeAreaView
            style={styles.container}
        >

            {/* =================================================
                HEADER
            ================================================= */}

            <View
                style={styles.header}
            >

                <TouchableOpacity
                    style={styles.headerButton}
                    activeOpacity={0.8}
                    onPress={() =>
                        navigation.goBack()
                    }
                >

                    <Ionicons
                        name="arrow-back-outline"
                        size={23}
                        color="#FFFFFF"
                    />

                </TouchableOpacity>


                <View
                    style={styles.headerContent}
                >

                    <Text
                        style={styles.headerTitle}
                        numberOfLines={1}
                    >
                        Compromisso
                    </Text>


                    <Text
                        style={styles.headerSubtitle}
                    >
                        Detalhes do compromisso
                    </Text>

                </View>

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
                    TÍTULO
                ================================================= */}

                <View
                    style={styles.titleCard}
                >

                    <View
                        style={[
                            styles.mainIcon,
                            {
                                backgroundColor:
                                    `${cor}20`,
                            },
                        ]}
                    >

                        <Ionicons
                            name={
                                obterIcone(
                                    evento.ag_tipo
                                )
                            }
                            size={28}
                            color={cor}
                        />

                    </View>


                    <View
                        style={styles.titleContent}
                    >

                        <Text
                            style={styles.typeText}
                        >
                            {
                                obterTipo(
                                    evento.ag_tipo
                                )
                            }
                        </Text>


                        <Text
                            style={styles.eventTitle}
                        >
                            {
                                evento.ag_titulo
                            }
                        </Text>

                    </View>


                    <View
                        style={[
                            styles.status,
                            {
                                backgroundColor:
                                    evento.ag_status === "A"
                                        ? "rgba(34,197,94,0.14)"
                                        : evento.ag_status === "R"
                                            ? "rgba(79,141,247,0.14)"
                                            : "rgba(239,68,68,0.14)",
                            },
                        ]}
                    >

                        <Text
                            style={[
                                styles.statusText,
                                {
                                    color:
                                        evento.ag_status === "A"
                                            ? "#22C55E"
                                            : evento.ag_status === "R"
                                                ? "#4F8DF7"
                                                : "#EF4444",
                                },
                            ]}
                        >
                            {
                                obterStatus(
                                    evento.ag_status
                                )
                            }
                        </Text>

                    </View>

                </View>


                {/* =================================================
                    DATA E HORÁRIO
                ================================================= */}

                <View
                    style={styles.infoCard}
                >

                    <View
                        style={styles.infoRow}
                    >

                        <View
                            style={styles.infoIcon}
                        >

                            <Ionicons
                                name="calendar-outline"
                                size={20}
                                color="#4F8DF7"
                            />

                        </View>


                        <View
                            style={styles.infoContent}
                        >

                            <Text
                                style={styles.infoLabel}
                            >
                                Data
                            </Text>


                            <Text
                                style={styles.infoValue}
                            >
                                {
                                    formatarData(
                                        evento.ag_data_inicio
                                    )
                                }
                            </Text>

                        </View>

                    </View>


                    {!(
                        evento.ag_dia_inteiro === "S"
                    ) && (

                        <View
                            style={styles.infoRow}
                        >

                            <View
                                style={styles.infoIcon}
                            >

                                <Ionicons
                                    name="time-outline"
                                    size={20}
                                    color="#4F8DF7"
                                />

                            </View>


                            <View
                                style={styles.infoContent}
                            >

                                <Text
                                    style={styles.infoLabel}
                                >
                                    Horário
                                </Text>


                                <Text
                                    style={styles.infoValue}
                                >
                                    {
                                        formatarHora(
                                            evento.ag_data_inicio
                                        )
                                    }

                                    {"  -  "}

                                    {
                                        formatarHora(
                                            evento.ag_data_fim
                                        )
                                    }
                                </Text>

                            </View>

                        </View>

                    )}

                </View>


                {/* =================================================
                    CLIENTE
                ================================================= */}

                {cliente && (

                    <View
                        style={styles.detailCard}
                    >

                        <View
                            style={styles.detailHeader}
                        >

                            <Ionicons
                                name="business-outline"
                                size={19}
                                color="#4F8DF7"
                            />

                            <Text
                                style={styles.detailHeaderText}
                            >
                                Cliente
                            </Text>

                        </View>


                        <Text
                            style={styles.detailValue}
                        >
                            {cliente}
                        </Text>

                    </View>

                )}


                {/* =================================================
                    PROJETO
                ================================================= */}

                {evento.pj_codigo && (

                    <View
                        style={styles.detailCard}
                    >

                        <View
                            style={styles.detailHeader}
                        >

                            <Ionicons
                                name="folder-outline"
                                size={19}
                                color="#A78BFA"
                            />

                            <Text
                                style={styles.detailHeaderText}
                            >
                                Projeto
                            </Text>

                        </View>


                        <Text
                            style={styles.detailValue}
                        >
                            {
                                evento.pj_codigo
                            }
                        </Text>


                        {evento.pj_descresumo && (

                            <Text
                                style={styles.detailSecondary}
                            >
                                {
                                    evento.pj_descresumo
                                }
                            </Text>

                        )}

                    </View>

                )}


                {/* =================================================
                    LOCAL
                ================================================= */}

                {evento.ag_local && (

                    <View
                        style={styles.detailCard}
                    >

                        <View
                            style={styles.detailHeader}
                        >

                            <Ionicons
                                name="location-outline"
                                size={19}
                                color="#F59E0B"
                            />

                            <Text
                                style={styles.detailHeaderText}
                            >
                                Local
                            </Text>

                        </View>


                        <Text
                            style={styles.detailValue}
                        >
                            {
                                evento.ag_local
                            }
                        </Text>

                    </View>

                )}


                {/* =================================================
                    OBSERVAÇÃO
                ================================================= */}

                {evento.ag_descricao && (

                    <View
                        style={styles.detailCard}
                    >

                        <View
                            style={styles.detailHeader}
                        >

                            <Ionicons
                                name="document-text-outline"
                                size={19}
                                color="#34D399"
                            />

                            <Text
                                style={styles.detailHeaderText}
                            >
                                Observação
                            </Text>

                        </View>


                        <Text
                            style={styles.detailValue}
                        >
                            {
                                evento.ag_descricao
                            }
                        </Text>

                    </View>

                )}


                <View
                    style={styles.bottomSpace}
                />

            </ScrollView>

        </SafeAreaView>

    );

}