import React, {
    useCallback,
    useState,
} from "react";

import {
    ImageBackground,
    ScrollView,
    View,
    Text,
    TouchableOpacity,
    ActivityIndicator,
    TextInput,
    Alert,
    Modal,
} from "react-native";

import {
    SafeAreaView,
} from "react-native-safe-area-context";

import {
    Ionicons,
} from "@expo/vector-icons";

import {
    useFocusEffect,
    useNavigation,
    useRoute,
} from "@react-navigation/native";

import {
    NativeStackNavigationProp,
} from "@react-navigation/native-stack";

import {
    Atendimento,
    AtendimentoStatus,
    getAtendimentoById,
    updateAtendimento,
} from "@/services/atendimentoService";

import {
    AtendimentoStackParamList,
} from "@/navigation/AtendimentoNavigator";

import {
    styles,
} from "./AtendimentoDetalheStyles";


type NavigationProp =
    NativeStackNavigationProp<
        AtendimentoStackParamList
    >;


export default function AtendimentoDetalheScreen() {

    const navigation =
        useNavigation<NavigationProp>();


    const route =
        useRoute<{
            key: string;
            name: "AtendimentoDetalhe";
            params: {
                id: number;
            };
        }>();


    const { id } =
        route.params;


    /* =====================================================
       ESTADOS
    ===================================================== */

    const [atendimento, setAtendimento] =
        useState<Atendimento | null>(null);

    const [loading, setLoading] =
        useState(true);

    const [salvando, setSalvando] =
        useState(false);

    const [erro, setErro] =
        useState("");


    /* =====================================================
       CAMPOS DE ACOMPANHAMENTO
    ===================================================== */

    const [causa, setCausa] =
        useState("");

    const [observacaoDiagnostico, setObservacaoDiagnostico] =
        useState("");

    const [solucao, setSolucao] =
        useState("");

    const [modalCancelamento, setModalCancelamento] =
        useState(false);

    const [motivoCancelamento, setMotivoCancelamento] =
        useState("");


    /* =====================================================
       CARREGAR ATENDIMENTO
    ===================================================== */

    async function carregarAtendimento() {

        try {

            setLoading(true);

            setErro("");

            const response =
                await getAtendimentoById(id);

            const dados =
                response?.data ||
                response ||
                null;

            setAtendimento(dados);

            if (dados) {

                setCausa(
                    dados.at_causa || ""
                );

                setObservacaoDiagnostico(
                    dados.at_observacao_diagnostico || ""
                );

                setSolucao(
                    dados.at_solucao || ""
                );

            }

        } catch (error) {

            console.log(
                "Erro ao carregar atendimento:",
                error
            );

            setErro(
                "Não foi possível carregar o atendimento."
            );

        } finally {

            setLoading(false);

        }

    }


    /* =====================================================
       CARREGAR AO ENTRAR
    ===================================================== */

    useFocusEffect(
        useCallback(() => {

            carregarAtendimento();

        }, [id])
    );


    /* =====================================================
       STATUS
    ===================================================== */

    function getStatusLabel(
        status?: AtendimentoStatus
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
                return "-";

        }

    }


    function getStatusColor(
        status?: AtendimentoStatus
    ) {

        switch (status) {

            case "A":
                return "#F59E0B";

            case "E":
                return "#3B82F6";

            case "D":
                return "#A855F7";

            case "F":
                return "#22C55E";

            case "C":
                return "#EF4444";

            default:
                return "#94A3B8";

        }

    }


    /* =====================================================
       DATA
    ===================================================== */

    function formatarData(
        data?: string | null
    ) {

        if (!data) {
            return "-";
        }

        try {

            return new Date(
                data
            ).toLocaleString(
                "pt-BR"
            );

        } catch {

            return "-";

        }

    }


    /* =====================================================
       INICIAR ATENDIMENTO
    ===================================================== */

    async function iniciarAtendimento() {

        if (!atendimento) {
            return;
        }

        try {

            setSalvando(true);

            setErro("");


            await updateAtendimento(
                atendimento.id,
                {

                    at_cliente_id:
                        atendimento.at_cliente_id,

                    at_projeto_id:
                        atendimento.at_projeto_id ?? null,

                    at_sistema_id:
                        atendimento.at_sistema_id ?? null,

                    at_tipo_id:
                        atendimento.at_tipo_id,

                    at_categoria_id:
                        atendimento.at_categoria_id,

                    at_contato_id:
                        atendimento.at_contato_id ?? null,

                    at_descricao:
                        atendimento.at_descricao,

                    at_status:
                        "E",

                    at_data_inicio:
                        new Date().toISOString(),

                    at_usuario_responsavel_id:
                        atendimento.at_usuario_responsavel_id ?? null,

                    at_causa:
                        atendimento.at_causa ?? null,

                    at_observacao_diagnostico:
                        atendimento.at_observacao_diagnostico ?? null,

                    at_solucao:
                        atendimento.at_solucao ?? null,

                    at_data_finalizacao:
                        atendimento.at_data_finalizacao ?? null,

                    at_data_cancelamento:
                        atendimento.at_data_cancelamento ?? null,

                    at_motivo_cancelamento:
                        atendimento.at_motivo_cancelamento ?? null,

                }
            );


            await carregarAtendimento();


        } catch (error) {

            console.log(
                "Erro ao iniciar atendimento:",
                error
            );

            setErro(
                "Não foi possível iniciar o atendimento."
            );

        } finally {

            setSalvando(false);

        }

    }


    /* =====================================================
       SALVAR ACOMPANHAMENTO
    ===================================================== */

    async function salvarAcompanhamento() {

        if (!atendimento) {
            return;
        }

        try {

            setSalvando(true);

            setErro("");


            await updateAtendimento(
                atendimento.id,
                {

                    at_cliente_id:
                        atendimento.at_cliente_id,

                    at_projeto_id:
                        atendimento.at_projeto_id ?? null,

                    at_sistema_id:
                        atendimento.at_sistema_id ?? null,

                    at_tipo_id:
                        atendimento.at_tipo_id,

                    at_categoria_id:
                        atendimento.at_categoria_id,

                    at_contato_id:
                        atendimento.at_contato_id ?? null,

                    at_descricao:
                        atendimento.at_descricao,

                    at_status:
                        atendimento.at_status,

                    at_usuario_responsavel_id:
                        atendimento.at_usuario_responsavel_id ?? null,

                    at_data_inicio:
                        atendimento.at_data_inicio ?? null,

                    at_causa:
                        causa.trim() || null,

                    at_observacao_diagnostico:
                        observacaoDiagnostico.trim() || null,

                    at_solucao:
                        solucao.trim() || null,

                    at_data_finalizacao:
                        atendimento.at_data_finalizacao ?? null,

                    at_data_cancelamento:
                        atendimento.at_data_cancelamento ?? null,

                    at_motivo_cancelamento:
                        atendimento.at_motivo_cancelamento ?? null,

                }
            );


            await carregarAtendimento();


            Alert.alert(
                "Salvo",
                "As informações do atendimento foram atualizadas."
            );


        } catch (error) {

            console.log(
                "Erro ao salvar acompanhamento:",
                error
            );

            setErro(
                "Não foi possível salvar as alterações."
            );

        } finally {

            setSalvando(false);

        }

    }


    /* =====================================================
       FINALIZAR ATENDIMENTO
    ===================================================== */

    function confirmarFinalizacao() {

        Alert.alert(
            "Finalizar atendimento",
            "Deseja realmente finalizar este atendimento?",
            [
                {
                    text: "Cancelar",
                    style: "cancel",
                },
                {
                    text: "Finalizar",
                    onPress: finalizarAtendimento,
                },
            ]
        );

    }


    async function finalizarAtendimento() {

        if (!atendimento) {
            return;
        }

        if (!solucao.trim()) {

            setErro(
                "Informe a solução aplicada antes de finalizar."
            );

            return;

        }


        try {

            setSalvando(true);

            setErro("");


            await updateAtendimento(
                atendimento.id,
                {

                    at_cliente_id:
                        atendimento.at_cliente_id,

                    at_projeto_id:
                        atendimento.at_projeto_id ?? null,

                    at_sistema_id:
                        atendimento.at_sistema_id ?? null,

                    at_tipo_id:
                        atendimento.at_tipo_id,

                    at_categoria_id:
                        atendimento.at_categoria_id,

                    at_contato_id:
                        atendimento.at_contato_id ?? null,

                    at_descricao:
                        atendimento.at_descricao,

                    at_status:
                        "F",

                    at_usuario_responsavel_id:
                        atendimento.at_usuario_responsavel_id ?? null,

                    at_data_inicio:
                        atendimento.at_data_inicio ?? null,

                    at_causa:
                        causa.trim() || null,

                    at_observacao_diagnostico:
                        observacaoDiagnostico.trim() || null,

                    at_solucao:
                        solucao.trim(),

                    at_data_finalizacao:
                        new Date().toISOString(),

                    at_data_cancelamento:
                        atendimento.at_data_cancelamento ?? null,

                    at_motivo_cancelamento:
                        atendimento.at_motivo_cancelamento ?? null,

                }
            );


            await carregarAtendimento();


            Alert.alert(
                "Atendimento finalizado",
                "O atendimento foi finalizado com sucesso."
            );


        } catch (error) {

            console.log(
                "Erro ao finalizar atendimento:",
                error
            );

            setErro(
                "Não foi possível finalizar o atendimento."
            );

        } finally {

            setSalvando(false);

        }

    }

    /* =====================================================
        CANCELAR ATENDIMENTO
    ===================================================== */

    function abrirCancelamento() {

        setMotivoCancelamento("");

        setModalCancelamento(true);

    }


    async function cancelarAtendimento() {

        if (!atendimento) {
            return;
        }


        if (!motivoCancelamento.trim()) {

            setErro(
                "Informe o motivo do cancelamento."
            );

            return;

        }


        try {

            setSalvando(true);

            setErro("");

            setModalCancelamento(false);


            await updateAtendimento(
                atendimento.id,
                {

                    at_cliente_id:
                        atendimento.at_cliente_id,

                    at_projeto_id:
                        atendimento.at_projeto_id ?? null,

                    at_sistema_id:
                        atendimento.at_sistema_id ?? null,

                    at_tipo_id:
                        atendimento.at_tipo_id,

                    at_categoria_id:
                        atendimento.at_categoria_id,

                    at_contato_id:
                        atendimento.at_contato_id ?? null,

                    at_descricao:
                        atendimento.at_descricao,

                    at_status:
                        "C",

                    at_usuario_responsavel_id:
                        atendimento.at_usuario_responsavel_id ?? null,

                    at_data_inicio:
                        atendimento.at_data_inicio ?? null,

                    at_causa:
                        causa.trim() || null,

                    at_observacao_diagnostico:
                        observacaoDiagnostico.trim() || null,

                    at_solucao:
                        solucao.trim() || null,

                    at_data_finalizacao:
                        atendimento.at_data_finalizacao ?? null,

                    at_data_cancelamento:
                        new Date().toISOString(),

                    at_motivo_cancelamento:
                        motivoCancelamento.trim(),

                }
            );


            await carregarAtendimento();


            Alert.alert(
                "Atendimento cancelado",
                "O atendimento foi cancelado com sucesso."
            );


        } catch (error) {

            console.log(
                "Erro ao cancelar atendimento:",
                error
            );

            setErro(
                "Não foi possível cancelar o atendimento."
            );

        } finally {

            setSalvando(false);

        }

    }


    /* =====================================================
       LOADING
    ===================================================== */

    if (loading) {

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

                    <View
                        style={styles.loadingContainer}
                    >

                        <ActivityIndicator
                            size="large"
                            color="#3B82F6"
                        />

                        <Text
                            style={styles.loadingText}
                        >
                            Carregando atendimento...
                        </Text>

                    </View>

                    {/* =================================================
                        MODAL CANCELAMENTO
                    ================================================= */}

                    <Modal
                        visible={modalCancelamento}
                        transparent
                        animationType="fade"
                        onRequestClose={() =>
                            setModalCancelamento(false)
                        }
                    >

                        <View
                            style={
                                styles.cancelModalOverlay
                            }
                        >

                            <View
                                style={
                                    styles.cancelModalContainer
                                }
                            >

                                {/* =====================================
                                    CABEÇALHO
                                ===================================== */}

                                <View
                                    style={
                                        styles.cancelModalHeader
                                    }
                                >

                                    <View>

                                        <Text
                                            style={
                                                styles.cancelModalTitle
                                            }
                                        >
                                            Cancelar Atendimento
                                        </Text>

                                        <Text
                                            style={
                                                styles.cancelModalSubtitle
                                            }
                                        >
                                            Informe o motivo do cancelamento
                                        </Text>

                                    </View>


                                    <TouchableOpacity
                                        onPress={() =>
                                            setModalCancelamento(false)
                                        }
                                    >

                                        <Ionicons
                                            name="close"
                                            size={24}
                                            color="#FFFFFF"
                                        />

                                    </TouchableOpacity>

                                </View>


                                {/* =====================================
                                    CAMPO
                                ===================================== */}

                                <Text
                                    style={
                                        styles.cancelModalLabel
                                    }
                                >
                                    Motivo *
                                </Text>


                                <TextInput
                                    value={motivoCancelamento}
                                    onChangeText={(texto) => {

                                        if (texto.length <= 500) {

                                            setMotivoCancelamento(
                                                texto
                                            );

                                        }

                                    }}
                                    placeholder="Informe o motivo do cancelamento..."
                                    placeholderTextColor="#8190A5"
                                    style={
                                        styles.cancelModalInput
                                    }
                                    multiline
                                    textAlignVertical="top"
                                    maxLength={500}
                                />


                                <Text
                                    style={
                                        styles.cancelModalCounter
                                    }
                                >
                                    {motivoCancelamento.length}/500
                                </Text>


                                {/* =====================================
               BOTÕES
            ===================================== */}

                                <View
                                    style={
                                        styles.cancelModalActions
                                    }
                                >

                                    <TouchableOpacity
                                        style={
                                            styles.cancelModalBackButton
                                        }
                                        activeOpacity={0.85}
                                        onPress={() =>
                                            setModalCancelamento(false)
                                        }
                                    >

                                        <Text
                                            style={
                                                styles.cancelModalBackText
                                            }
                                        >
                                            Voltar
                                        </Text>

                                    </TouchableOpacity>


                                    <TouchableOpacity
                                        style={
                                            styles.cancelModalConfirmButton
                                        }
                                        activeOpacity={0.85}
                                        disabled={salvando}
                                        onPress={
                                            cancelarAtendimento
                                        }
                                    >

                                        {salvando ? (

                                            <ActivityIndicator
                                                size="small"
                                                color="#FFFFFF"
                                            />

                                        ) : (

                                            <Ionicons
                                                name="close-circle-outline"
                                                size={19}
                                                color="#FFFFFF"
                                            />

                                        )}

                                        <Text
                                            style={
                                                styles.cancelModalConfirmText
                                            }
                                        >
                                            Cancelar
                                        </Text>

                                    </TouchableOpacity>

                                </View>

                            </View>

                        </View>

                    </Modal>

                </SafeAreaView>

            </ImageBackground>

        );

    }


    /* =====================================================
       ERRO
    ===================================================== */

    if (erro !== "" && !atendimento) {

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

                    <View style={styles.header}>

                        <TouchableOpacity
                            style={styles.backButton}
                            onPress={() =>
                                navigation.goBack()
                            }
                        >

                            <Ionicons
                                name="arrow-back"
                                size={23}
                                color="#FFFFFF"
                            />

                        </TouchableOpacity>

                        <View
                            style={styles.headerTextArea}
                        >

                            <Text
                                style={styles.headerTitle}
                            >
                                Atendimento
                            </Text>

                            <Text
                                style={styles.headerSubtitle}
                            >
                                Detalhes do atendimento
                            </Text>

                        </View>

                    </View>


                    <View
                        style={styles.emptyContainer}
                    >

                        <Ionicons
                            name="cloud-offline-outline"
                            size={48}
                            color="#64748B"
                        />

                        <Text
                            style={styles.emptyTitle}
                        >
                            Não foi possível carregar
                        </Text>

                        <Text
                            style={styles.emptyText}
                        >
                            {erro ||
                                "Atendimento não encontrado."}
                        </Text>


                        <TouchableOpacity
                            style={styles.retryButton}
                            onPress={
                                carregarAtendimento
                            }
                        >

                            <Text
                                style={styles.retryText}
                            >
                                Tentar novamente
                            </Text>

                        </TouchableOpacity>

                    </View>

                </SafeAreaView>

            </ImageBackground>

        );

    }


    if (!atendimento) {
        return null;
    }


    const podeEditar =
        atendimento.at_status === "E" ||
        atendimento.at_status === "D";


    const podeIniciar =
        atendimento.at_status === "A";


    const podeFinalizar =
        atendimento.at_status === "E" ||
        atendimento.at_status === "D";


    /* =====================================================
       RENDER
    ===================================================== */

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
                        style={styles.backButton}
                        activeOpacity={0.8}
                        onPress={() =>
                            navigation.goBack()
                        }
                    >

                        <Ionicons
                            name="arrow-back"
                            size={23}
                            color="#FFFFFF"
                        />

                    </TouchableOpacity>


                    <View
                        style={styles.headerTextArea}
                    >

                        <Text
                            style={styles.headerTitle}
                        >
                            Atendimento
                        </Text>

                        <Text
                            style={styles.headerSubtitle}
                        >
                            {atendimento.at_codigo ||
                                `#${atendimento.id}`}
                        </Text>

                    </View>

                </View>


                {/* =================================================
                   CONTEÚDO
                ================================================= */}

                <ScrollView
                    showsVerticalScrollIndicator={false}
                    keyboardShouldPersistTaps="handled"
                    contentContainerStyle={
                        styles.content
                    }
                >

                    {/* =================================================
                       CABEÇALHO
                    ================================================= */}

                    <View
                        style={
                            styles.mainCard
                        }
                    >

                        <View
                            style={
                                styles.mainCardTop
                            }
                        >

                            <View
                                style={
                                    styles.mainCardInfo
                                }
                            >

                                <Text
                                    style={
                                        styles.code
                                    }
                                >
                                    {atendimento.at_codigo ||
                                        `#${atendimento.id}`}
                                </Text>

                                <Text
                                    style={
                                        styles.description
                                    }
                                >
                                    {atendimento.at_descricao ||
                                        "Sem descrição"}
                                </Text>

                            </View>


                            <View
                                style={[
                                    styles.status,
                                    {
                                        backgroundColor:
                                            `${getStatusColor(
                                                atendimento.at_status
                                            )}25`,
                                    },
                                ]}
                            >

                                <Text
                                    style={[
                                        styles.statusText,
                                        {
                                            color:
                                                getStatusColor(
                                                    atendimento.at_status
                                                ),
                                        },
                                    ]}
                                >
                                    {
                                        getStatusLabel(
                                            atendimento.at_status
                                        )
                                    }
                                </Text>

                            </View>

                        </View>

                    </View>


                    {/* =================================================
                       CLIENTE
                    ================================================= */}

                    <Text
                        style={styles.sectionTitle}
                    >
                        Cliente
                    </Text>


                    <View
                        style={styles.card}
                    >

                        <View
                            style={styles.infoRow}
                        >

                            <Ionicons
                                name="business-outline"
                                size={21}
                                color="#3B82F6"
                            />

                            <View
                                style={styles.infoContent}
                            >

                                <Text
                                    style={
                                        styles.infoLabel
                                    }
                                >
                                    Cliente
                                </Text>

                                <Text
                                    style={
                                        styles.infoValue
                                    }
                                >
                                    {atendimento.cli_fantasia ||
                                        "Não informado"}
                                </Text>

                            </View>

                        </View>

                    </View>


                    {/* =================================================
                       INFORMAÇÕES
                    ================================================= */}

                    <Text
                        style={styles.sectionTitle}
                    >
                        Informações
                    </Text>


                    <View
                        style={styles.card}
                    >

                        {atendimento.pj_descresumo && (

                            <View
                                style={styles.detailRow}
                            >

                                <Text
                                    style={
                                        styles.detailLabel
                                    }
                                >
                                    Projeto
                                </Text>

                                <Text
                                    style={
                                        styles.detailValue
                                    }
                                >
                                    {
                                        atendimento.pj_descresumo
                                    }
                                </Text>

                            </View>

                        )}


                        {atendimento.sis_descricao && (

                            <View
                                style={styles.detailRow}
                            >

                                <Text
                                    style={
                                        styles.detailLabel
                                    }
                                >
                                    Sistema
                                </Text>

                                <Text
                                    style={
                                        styles.detailValue
                                    }
                                >
                                    {
                                        atendimento.sis_descricao
                                    }
                                </Text>

                            </View>

                        )}


                        {atendimento.ta_descricao && (

                            <View
                                style={styles.detailRow}
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
                                >
                                    {
                                        atendimento.ta_descricao
                                    }
                                </Text>

                            </View>

                        )}


                        {atendimento.ca_descricao && (

                            <View
                                style={styles.detailRow}
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
                                >
                                    {
                                        atendimento.ca_descricao
                                    }
                                </Text>

                            </View>

                        )}

                    </View>


                    {/* =================================================
                       HISTÓRICO
                    ================================================= */}

                    <Text
                        style={styles.sectionTitle}
                    >
                        Histórico
                    </Text>


                    <View
                        style={styles.card}
                    >

                        <View
                            style={styles.detailRow}
                        >

                            <Text
                                style={
                                    styles.detailLabel
                                }
                            >
                                Abertura
                            </Text>

                            <Text
                                style={
                                    styles.detailValue
                                }
                            >
                                {
                                    formatarData(
                                        atendimento.at_data_abertura
                                    )
                                }
                            </Text>

                        </View>


                        {atendimento.at_data_inicio && (

                            <View
                                style={styles.detailRow}
                            >

                                <Text
                                    style={
                                        styles.detailLabel
                                    }
                                >
                                    Início
                                </Text>

                                <Text
                                    style={
                                        styles.detailValue
                                    }
                                >
                                    {
                                        formatarData(
                                            atendimento.at_data_inicio
                                        )
                                    }
                                </Text>

                            </View>

                        )}


                        {atendimento.at_data_finalizacao && (

                            <View
                                style={styles.detailRow}
                            >

                                <Text
                                    style={
                                        styles.detailLabel
                                    }
                                >
                                    Finalização
                                </Text>

                                <Text
                                    style={
                                        styles.detailValue
                                    }
                                >
                                    {
                                        formatarData(
                                            atendimento.at_data_finalizacao
                                        )
                                    }
                                </Text>

                            </View>

                        )}

                    </View>


                    {/* =================================================
                       RESPONSÁVEL
                    ================================================= */}

                    {atendimento.responsavel_nome && (

                        <>

                            <Text
                                style={
                                    styles.sectionTitle
                                }
                            >
                                Responsável
                            </Text>

                            <View
                                style={styles.card}
                            >

                                <View
                                    style={
                                        styles.infoRow
                                    }
                                >

                                    <Ionicons
                                        name="person-outline"
                                        size={21}
                                        color="#3B82F6"
                                    />

                                    <View
                                        style={
                                            styles.infoContent
                                        }
                                    >

                                        <Text
                                            style={
                                                styles.infoLabel
                                            }
                                        >
                                            Responsável
                                        </Text>

                                        <Text
                                            style={
                                                styles.infoValue
                                            }
                                        >
                                            {
                                                atendimento.responsavel_nome
                                            }
                                        </Text>

                                    </View>

                                </View>

                            </View>

                        </>

                    )}


                    {/* =================================================
                       INICIAR
                    ================================================= */}

                    {podeIniciar && (

                        <TouchableOpacity
                            style={
                                styles.primaryActionButton
                            }
                            activeOpacity={0.85}
                            disabled={salvando}
                            onPress={
                                iniciarAtendimento
                            }
                        >

                            {salvando ? (

                                <ActivityIndicator
                                    size="small"
                                    color="#FFFFFF"
                                />

                            ) : (

                                <Ionicons
                                    name="play-circle-outline"
                                    size={22}
                                    color="#FFFFFF"
                                />

                            )}

                            <Text
                                style={
                                    styles.primaryActionText
                                }
                            >
                                {salvando
                                    ? "Iniciando..."
                                    : "Iniciar Atendimento"}
                            </Text>

                        </TouchableOpacity>

                    )}

                    {/* =================================================
                        CANCELAR
                    ================================================= */}

                    {(podeIniciar || podeEditar) && (

                        <TouchableOpacity
                            style={
                                styles.cancelActionButton
                            }
                            activeOpacity={0.85}
                            disabled={salvando}
                            onPress={
                                abrirCancelamento
                            }
                        >

                            <Ionicons
                                name="close-circle-outline"
                                size={21}
                                color="#FFFFFF"
                            />

                            <Text
                                style={
                                    styles.primaryActionText
                                }
                            >
                                Cancelar Atendimento
                            </Text>

                        </TouchableOpacity>

                    )}



                    {/* =================================================
                       DIAGNÓSTICO / SOLUÇÃO
                    ================================================= */}

                    {podeEditar && (

                        <>

                            {/* =========================================
                               DIAGNÓSTICO
                            ========================================= */}

                            <Text
                                style={
                                    styles.sectionTitle
                                }
                            >
                                Diagnóstico
                            </Text>


                            <View
                                style={styles.card}
                            >

                                <Text
                                    style={
                                        styles.inputLabel
                                    }
                                >
                                    Causa identificada
                                </Text>

                                <TextInput
                                    value={causa}
                                    onChangeText={
                                        setCausa
                                    }
                                    placeholder="Descreva a causa identificada durante a análise..."
                                    placeholderTextColor="#8190A5"
                                    style={
                                        styles.editTextArea
                                    }
                                    multiline
                                    textAlignVertical="top"
                                    maxLength={2000}
                                />

                                <Text
                                    style={
                                        styles.inputCounter
                                    }
                                >
                                    {causa.length}/2000
                                </Text>


                                <Text
                                    style={[
                                        styles.inputLabel,
                                        styles.inputLabelSecond,
                                    ]}
                                >
                                    Observações do diagnóstico
                                </Text>

                                <TextInput
                                    value={
                                        observacaoDiagnostico
                                    }
                                    onChangeText={
                                        setObservacaoDiagnostico
                                    }
                                    placeholder="Informe alguma observação adicional..."
                                    placeholderTextColor="#8190A5"
                                    style={
                                        styles.editTextArea
                                    }
                                    multiline
                                    textAlignVertical="top"
                                    maxLength={2000}
                                />

                                <Text
                                    style={
                                        styles.inputCounter
                                    }
                                >
                                    {
                                        observacaoDiagnostico.length
                                    }/2000
                                </Text>

                            </View>


                            {/* =========================================
                               SOLUÇÃO
                            ========================================= */}

                            <Text
                                style={
                                    styles.sectionTitle
                                }
                            >
                                Solução
                            </Text>


                            <View
                                style={styles.card}
                            >

                                <Text
                                    style={
                                        styles.inputLabel
                                    }
                                >
                                    Solução aplicada
                                </Text>

                                <TextInput
                                    value={solucao}
                                    onChangeText={
                                        setSolucao
                                    }
                                    placeholder="Descreva o que foi realizado para solucionar o atendimento..."
                                    placeholderTextColor="#8190A5"
                                    style={
                                        styles.editTextArea
                                    }
                                    multiline
                                    textAlignVertical="top"
                                    maxLength={2000}
                                />

                                <Text
                                    style={
                                        styles.inputCounter
                                    }
                                >
                                    {solucao.length}/2000
                                </Text>

                            </View>


                            {/* =========================================
                               AÇÕES
                            ========================================= */}

                            <TouchableOpacity
                                style={
                                    styles.saveActionButton
                                }
                                activeOpacity={0.85}
                                disabled={salvando}
                                onPress={
                                    salvarAcompanhamento
                                }
                            >

                                {salvando ? (

                                    <ActivityIndicator
                                        size="small"
                                        color="#FFFFFF"
                                    />

                                ) : (

                                    <Ionicons
                                        name="save-outline"
                                        size={20}
                                        color="#FFFFFF"
                                    />

                                )}

                                <Text
                                    style={
                                        styles.primaryActionText
                                    }
                                >
                                    {salvando
                                        ? "Salvando..."
                                        : "Salvar alterações"}
                                </Text>

                            </TouchableOpacity>


                            {podeFinalizar && (

                                <TouchableOpacity
                                    style={
                                        styles.finishActionButton
                                    }
                                    activeOpacity={0.85}
                                    disabled={salvando}
                                    onPress={
                                        confirmarFinalizacao
                                    }
                                >

                                    <Ionicons
                                        name="checkmark-circle-outline"
                                        size={21}
                                        color="#FFFFFF"
                                    />

                                    <Text
                                        style={
                                            styles.primaryActionText
                                        }
                                    >
                                        Finalizar Atendimento
                                    </Text>

                                </TouchableOpacity>

                            )}

                        </>

                    )}


                    {/* =================================================
                       ERRO
                    ================================================= */}

                    {erro !== "" && (

                        <View
                            style={
                                styles.errorContainer
                            }
                        >

                            <Ionicons
                                name="alert-circle-outline"
                                size={19}
                                color="#EF4444"
                            />

                            <Text
                                style={
                                    styles.errorText
                                }
                            >
                                {erro}
                            </Text>

                        </View>

                    )}

                </ScrollView>

                {/* =================================================
                    MODAL CANCELAMENTO
                ================================================= */}

                <Modal
                    visible={modalCancelamento}
                    transparent
                    animationType="fade"
                    onRequestClose={() =>
                        setModalCancelamento(false)
                    }
                >

                    <View
                        style={styles.cancelModalOverlay}
                    >

                        <View
                            style={styles.cancelModalContainer}
                        >

                            <View
                                style={styles.cancelModalHeader}
                            >

                                <View>

                                    <Text
                                        style={styles.cancelModalTitle}
                                    >
                                        Cancelar Atendimento
                                    </Text>

                                    <Text
                                        style={styles.cancelModalSubtitle}
                                    >
                                        Informe o motivo do cancelamento
                                    </Text>

                                </View>


                                <TouchableOpacity
                                    onPress={() =>
                                        setModalCancelamento(false)
                                    }
                                >

                                    <Ionicons
                                        name="close"
                                        size={24}
                                        color="#FFFFFF"
                                    />

                                </TouchableOpacity>

                            </View>


                            <Text
                                style={styles.cancelModalLabel}
                            >
                                Motivo *
                            </Text>


                            <TextInput
                                value={motivoCancelamento}
                                onChangeText={(texto) => {

                                    if (texto.length <= 500) {

                                        setMotivoCancelamento(
                                            texto
                                        );

                                    }

                                }}
                                placeholder="Informe o motivo do cancelamento..."
                                placeholderTextColor="#8190A5"
                                style={styles.cancelModalInput}
                                multiline
                                textAlignVertical="top"
                                maxLength={500}
                            />


                            <Text
                                style={styles.cancelModalCounter}
                            >
                                {motivoCancelamento.length}/500
                            </Text>


                            <View
                                style={styles.cancelModalActions}
                            >

                                <TouchableOpacity
                                    style={
                                        styles.cancelModalBackButton
                                    }
                                    activeOpacity={0.85}
                                    onPress={() =>
                                        setModalCancelamento(false)
                                    }
                                >

                                    <Text
                                        style={
                                            styles.cancelModalBackText
                                        }
                                    >
                                        Voltar
                                    </Text>

                                </TouchableOpacity>


                                <TouchableOpacity
                                    style={
                                        styles.cancelModalConfirmButton
                                    }
                                    activeOpacity={0.85}
                                    disabled={salvando}
                                    onPress={
                                        cancelarAtendimento
                                    }
                                >

                                    {salvando ? (

                                        <ActivityIndicator
                                            size="small"
                                            color="#FFFFFF"
                                        />

                                    ) : (

                                        <Ionicons
                                            name="close-circle-outline"
                                            size={19}
                                            color="#FFFFFF"
                                        />

                                    )}

                                    <Text
                                        style={
                                            styles.cancelModalConfirmText
                                        }
                                    >
                                        Cancelar
                                    </Text>

                                </TouchableOpacity>

                            </View>

                        </View>

                    </View>

                </Modal>

            </SafeAreaView >

        </ImageBackground >

    );

}