import React, { useEffect, useState } from "react";

import {
    ImageBackground,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView,
    Modal,
    FlatList,
    ActivityIndicator,
    Alert,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import { Ionicons } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";

import { styles } from "./NovoAtendimentoStyles";

import {
    getClientes,
    getClienteById,
    Cliente,
    ContatoCliente,
    SistemaCliente,
} from "@/services/clienteService";

import {
    getProjetos,
    Projeto,
} from "@/services/projetoService";

import {
    getTiposAtendimento,
    TipoAtendimento,
} from "@/services/tipoAtendimentoService";

import {
    getCategoriasAtendimento,
    CategoriaAtendimento,
} from "@/services/categoriaAtendimentoService";

import {
    createAtendimento,
} from "@/services/atendimentoService";


/* =====================================================
   TIPOS
===================================================== */

type TipoLista =
    | "cliente"
    | "projeto"
    | "sistema"
    | "tipo"
    | "categoria"
    | "contato"
    | null;


/* =====================================================
   COMPONENTE
===================================================== */

export default function NovoAtendimentoScreen() {

    const navigation = useNavigation();


    /* =====================================================
       CLIENTE
    ===================================================== */

    const [clientes, setClientes] = useState<Cliente[]>([]);
    const [clienteId, setClienteId] = useState<number | null>(null);
    const [clienteNome, setClienteNome] = useState("");
    const [carregandoClientes, setCarregandoClientes] = useState(false);
    const [mostrarClientes, setMostrarClientes] = useState(false);
    const [buscaCliente, setBuscaCliente] = useState("");

    /* =====================================================
       PROJETO
    ===================================================== */

    const [projetos, setProjetos] = useState<Projeto[]>([]);
    const [projetoId, setProjetoId] = useState<number | null>(null);
    const [projetoNome, setProjetoNome] = useState("");


    /* =====================================================
       SISTEMA
    ===================================================== */

    const [sistemas, setSistemas] = useState<SistemaCliente[]>([]);
    const [sistemaId, setSistemaId] = useState<number | null>(null);
    const [sistemaNome, setSistemaNome] = useState("");


    /* =====================================================
       TIPO
    ===================================================== */

    const [tipos, setTipos] = useState<TipoAtendimento[]>([]);
    const [tipoId, setTipoId] = useState<number | null>(null);
    const [tipoNome, setTipoNome] = useState("");


    /* =====================================================
       CATEGORIA
    ===================================================== */

    const [categorias, setCategorias] =
        useState<CategoriaAtendimento[]>([]);

    const [categoriaId, setCategoriaId] =
        useState<number | null>(null);

    const [categoriaNome, setCategoriaNome] =
        useState("");


    /* =====================================================
       CONTATO
    ===================================================== */

    const [contatos, setContatos] =
        useState<ContatoCliente[]>([]);

    const [contatoId, setContatoId] =
        useState<number | null>(null);

    const [contatoNome, setContatoNome] =
        useState("");


    /* =====================================================
       DESCRIÇÃO
    ===================================================== */

    const [descricao, setDescricao] = useState("");


    /* =====================================================
       CONTROLE
    ===================================================== */

    const [erro, setErro] = useState("");

    const [modalLista, setModalLista] =
        useState<TipoLista>(null);

    const [carregando, setCarregando] =
        useState(true);

    const [carregandoCliente, setCarregandoCliente] =
        useState(false);

    const [salvando, setSalvando] =
        useState(false);


    /* =====================================================
       CARREGAR DADOS INICIAIS
    ===================================================== */

    useEffect(() => {

        carregarDados();

    }, []);


    async function carregarDados() {

        try {

            setCarregando(true);

            const [
                clientesResponse,
                tiposResponse,
                categoriasResponse,
            ] = await Promise.all([

                getClientes("", 1),

                getTiposAtendimento(),

                getCategoriasAtendimento(),

            ]);


            /* =================================================
               CLIENTES
            ================================================= */

            setClientes(
                clientesResponse?.data || []
            );


            /* =================================================
               TIPOS
            ================================================= */

            setTipos(
                tiposResponse || []
            );


            /* =================================================
               CATEGORIAS
            ================================================= */

            setCategorias(
                categoriasResponse || []
            );


        } catch (error) {

            console.log(
                "Erro ao carregar dados do atendimento:",
                error
            );

            setErro(
                "Não foi possível carregar os dados do atendimento."
            );

        } finally {

            setCarregando(false);

        }

    }


    /* =====================================================
       SELECIONAR CLIENTE
    ===================================================== */

    async function selecionarCliente(
        cliente: Cliente
    ) {

        setClienteId(cliente.id);

        setClienteNome(
            cliente.cli_fantasia ||
            cliente.cli_razaosocial
        );

        setModalLista(null);

        /* ---------------------------------------------
           Limpa os dados dependentes
        --------------------------------------------- */

        setProjetoId(null);
        setProjetoNome("");

        setSistemaId(null);
        setSistemaNome("");

        setContatoId(null);
        setContatoNome("");

        setProjetos([]);
        setSistemas([]);
        setContatos([]);


        try {

            setCarregandoCliente(true);


            /* ---------------------------------------------
               Carrega projeto do cliente
            --------------------------------------------- */

            const projetosResponse =
                await getProjetos(cliente.id);

            setProjetos(
                projetosResponse?.data ||
                projetosResponse ||
                []
            );


            /* ---------------------------------------------
               Carrega detalhes do cliente
               contendo contatos e sistemas
            --------------------------------------------- */

            const clienteResponse =
                await getClienteById(cliente.id);


            setContatos(
                clienteResponse?.contatos || []
            );

            setSistemas(
                clienteResponse?.sistemas || []
            );


        } catch (error) {

            console.log(
                "Erro ao carregar dados do cliente:",
                error
            );

            setErro(
                "Não foi possível carregar os dados do cliente."
            );

        } finally {

            setCarregandoCliente(false);

        }

    }

    /* =================================================
        FILTRAR CLIENTES
    ================================================= */

    const clientesFiltrados =
        clientes.filter((cliente) => {

            const busca =
                buscaCliente
                    .toLowerCase()
                    .trim();

            if (!busca) {
                return true;
            }

            const nomeFantasia =
                cliente.cli_fantasia
                    ?.toLowerCase() || "";

            const razaoSocial =
                cliente.cli_razaosocial
                    ?.toLowerCase() || "";

            const documento =
                cliente.cli_cnpjcpf
                    ?.toLowerCase() || "";

            return (
                nomeFantasia.includes(busca) ||
                razaoSocial.includes(busca) ||
                documento.includes(busca)
            );

        });


    /* =====================================================
       SALVAR ATENDIMENTO
    ===================================================== */

    async function salvarAtendimento() {

        setErro("");


        /* ---------------------------------------------
           Validações
        --------------------------------------------- */

        if (!clienteId) {

            setErro(
                "Selecione o cliente."
            );

            return;

        }


        if (!tipoId) {

            setErro(
                "Selecione o tipo de atendimento."
            );

            return;

        }


        if (!categoriaId) {

            setErro(
                "Selecione a categoria."
            );

            return;

        }


        if (!descricao.trim()) {

            setErro(
                "Informe a descrição do atendimento."
            );

            return;

        }


        try {

            setSalvando(true);


            /* ---------------------------------------------
               Envia para API
            --------------------------------------------- */

            await createAtendimento({

                at_cliente_id:
                    clienteId,

                at_projeto_id:
                    projetoId,

                at_sistema_id:
                    sistemaId,

                at_tipo_id:
                    tipoId,

                at_categoria_id:
                    categoriaId,

                at_contato_id:
                    contatoId,

                at_descricao:
                    descricao.trim(),

            });


            /* ---------------------------------------------
               Sucesso
            --------------------------------------------- */

            Alert.alert(
                "Atendimento criado",
                "O atendimento foi aberto com sucesso.",
                [
                    {
                        text: "OK",
                        onPress: () =>
                            navigation.goBack(),
                    },
                ]
            );


        } catch (error) {

            console.log(
                "Erro ao criar atendimento:",
                error
            );

            setErro(
                "Não foi possível abrir o atendimento."
            );

        } finally {

            setSalvando(false);

        }

    }


    /* =====================================================
       TÍTULO DO MODAL
    ===================================================== */

    function tituloModal() {

        switch (modalLista) {

            case "cliente":
                return "Selecione o cliente";

            case "projeto":
                return "Selecione o projeto";

            case "sistema":
                return "Selecione o sistema";

            case "tipo":
                return "Selecione o tipo";

            case "categoria":
                return "Selecione a categoria";

            case "contato":
                return "Selecione o contato";

            default:
                return "";

        }

    }


    /* =====================================================
       ITEM DO MODAL
    ===================================================== */

    function renderItem() {

        switch (modalLista) {

            /* =============================================
               CLIENTES
            ============================================= */

            case "cliente":

                return (

                    <FlatList
                        data={clientesFiltrados}
                        keyExtractor={(item) =>
                            String(item.id)
                        }
                        renderItem={({ item }) => (

                            <TouchableOpacity
                                style={styles.modalItem}
                                onPress={() =>
                                    selecionarCliente(item)
                                }
                            >

                                <View style={styles.modalItemIcon}>

                                    <Ionicons
                                        name="business-outline"
                                        size={20}
                                        color="#64748B"
                                    />

                                </View>

                                <View style={styles.modalItemTextArea}>

                                    <Text style={styles.modalItemTitle}>

                                        {item.cli_fantasia ||
                                            item.cli_razaosocial}

                                    </Text>

                                    {item.cli_fantasia &&
                                        item.cli_razaosocial &&
                                        item.cli_fantasia !==
                                        item.cli_razaosocial && (

                                            <Text
                                                style={styles.modalItemSubtitle}
                                            >
                                                {item.cli_razaosocial}
                                            </Text>

                                        )}

                                </View>

                            </TouchableOpacity>

                        )}
                        ListEmptyComponent={

                            <Text style={styles.emptyText}>
                                Nenhum cliente encontrado.
                            </Text>

                        }
                    />

                );


            /* =============================================
               PROJETOS
            ============================================= */

            case "projeto":

                return (

                    <FlatList
                        data={projetos}
                        keyExtractor={(item) =>
                            String(item.id)
                        }
                        renderItem={({ item }) => (

                            <TouchableOpacity
                                style={styles.modalItem}
                                onPress={() => {

                                    setProjetoId(
                                        item.id
                                    );

                                    setProjetoNome(
                                        `${item.pj_codigo} - ${item.pj_descresumo || ""}`
                                    );

                                    setModalLista(null);

                                }}
                            >

                                <View style={styles.modalItemIcon}>

                                    <Ionicons
                                        name="folder-outline"
                                        size={20}
                                        color="#64748B"
                                    />

                                </View>

                                <View style={styles.modalItemTextArea}>

                                    <Text
                                        style={styles.modalItemTitle}
                                    >
                                        {item.pj_codigo}
                                    </Text>

                                    <Text
                                        style={styles.modalItemSubtitle}
                                    >
                                        {item.pj_descresumo}
                                    </Text>

                                </View>

                            </TouchableOpacity>

                        )}
                        ListEmptyComponent={

                            <Text style={styles.emptyText}>
                                Nenhum projeto encontrado para este cliente.
                            </Text>

                        }
                    />

                );


            /* =============================================
               SISTEMAS
            ============================================= */

            case "sistema":

                return (

                    <FlatList
                        data={sistemas}
                        keyExtractor={(item) =>
                            String(item.id)
                        }
                        renderItem={({ item }) => (

                            <TouchableOpacity
                                style={styles.modalItem}
                                onPress={() => {

                                    setSistemaId(
                                        item.id
                                    );

                                    setSistemaNome(
                                        item.sis_sigla
                                            ? `${item.sis_sigla} - ${item.sis_descricao || ""}`
                                            : item.sis_descricao || ""
                                    );

                                    setModalLista(null);

                                }}
                            >

                                <View style={styles.modalItemIcon}>

                                    <Ionicons
                                        name="desktop-outline"
                                        size={20}
                                        color="#64748B"
                                    />

                                </View>

                                <View style={styles.modalItemTextArea}>

                                    <Text
                                        style={styles.modalItemTitle}
                                    >
                                        {item.sis_sigla}
                                    </Text>

                                    <Text
                                        style={styles.modalItemSubtitle}
                                    >
                                        {item.sis_descricao}
                                    </Text>

                                </View>

                            </TouchableOpacity>

                        )}
                        ListEmptyComponent={

                            <Text style={styles.emptyText}>
                                Nenhum sistema vinculado a este cliente.
                            </Text>

                        }
                    />

                );


            /* =============================================
               TIPO
            ============================================= */

            case "tipo":

                return (

                    <FlatList
                        data={tipos}
                        keyExtractor={(item) =>
                            String(item.id)
                        }
                        renderItem={({ item }) => (

                            <TouchableOpacity
                                style={styles.modalItem}
                                onPress={() => {

                                    setTipoId(
                                        item.id
                                    );

                                    setTipoNome(
                                        item.ta_descricao
                                    );

                                    setModalLista(null);

                                }}
                            >

                                <View style={styles.modalItemIcon}>

                                    <Ionicons
                                        name="layers-outline"
                                        size={20}
                                        color="#64748B"
                                    />

                                </View>

                                <View style={styles.modalItemTextArea}>

                                    <Text
                                        style={styles.modalItemTitle}
                                    >
                                        {item.ta_descricao}
                                    </Text>

                                </View>

                            </TouchableOpacity>

                        )}
                        ListEmptyComponent={

                            <Text style={styles.emptyText}>
                                Nenhum tipo de atendimento cadastrado.
                            </Text>

                        }
                    />

                );


            /* =============================================
               CATEGORIA
            ============================================= */

            case "categoria":

                return (

                    <FlatList
                        data={categorias}
                        keyExtractor={(item) =>
                            String(item.id)
                        }
                        renderItem={({ item }) => (

                            <TouchableOpacity
                                style={styles.modalItem}
                                onPress={() => {

                                    setCategoriaId(
                                        item.id
                                    );

                                    setCategoriaNome(
                                        item.ca_descricao
                                    );

                                    setModalLista(null);

                                }}
                            >

                                <View style={styles.modalItemIcon}>

                                    <Ionicons
                                        name="pricetag-outline"
                                        size={20}
                                        color="#64748B"
                                    />

                                </View>

                                <View style={styles.modalItemTextArea}>

                                    <Text
                                        style={styles.modalItemTitle}
                                    >
                                        {item.ca_descricao}
                                    </Text>

                                </View>

                            </TouchableOpacity>

                        )}
                        ListEmptyComponent={

                            <Text style={styles.emptyText}>
                                Nenhuma categoria cadastrada.
                            </Text>

                        }
                    />

                );


            /* =============================================
               CONTATO
            ============================================= */

            case "contato":

                return (

                    <FlatList
                        data={contatos}
                        keyExtractor={(item, index) =>
                            String(
                                item.id ??
                                `${item.cc_nome}-${index}`
                            )
                        }
                        renderItem={({ item }) => (

                            <TouchableOpacity
                                style={styles.modalItem}
                                onPress={() => {

                                    setContatoId(
                                        item.id ?? null
                                    );

                                    setContatoNome(
                                        item.cc_nome
                                    );

                                    setModalLista(null);

                                }}
                            >

                                <View style={styles.modalItemIcon}>

                                    <Ionicons
                                        name="person-outline"
                                        size={20}
                                        color="#64748B"
                                    />

                                </View>

                                <View style={styles.modalItemTextArea}>

                                    <Text
                                        style={styles.modalItemTitle}
                                    >
                                        {item.cc_nome}
                                    </Text>

                                    {item.cc_funcao && (

                                        <Text
                                            style={styles.modalItemSubtitle}
                                        >
                                            {item.cc_funcao}
                                        </Text>

                                    )}

                                </View>

                            </TouchableOpacity>

                        )}
                        ListEmptyComponent={

                            <Text style={styles.emptyText}>
                                Nenhum contato cadastrado para este cliente.
                            </Text>

                        }
                    />

                );


            default:
                return null;

        }

    }


    /* =====================================================
       SELECT
    ===================================================== */

    function SelectField({
        label,
        value,
        placeholder,
        icon,
        type,
        disabled = false,
    }: {
        label: string;
        value: string;
        placeholder: string;
        icon: keyof typeof Ionicons.glyphMap;
        type: TipoLista;
        disabled?: boolean;
    }) {

        return (

            <View style={styles.field}>

                <Text style={styles.label}>
                    {label}
                </Text>

                <TouchableOpacity
                    style={[
                        styles.inputContainer,
                        disabled &&
                        styles.inputDisabled,
                    ]}
                    activeOpacity={0.8}
                    disabled={disabled}
                    onPress={() =>
                        setModalLista(type)
                    }
                >

                    <Ionicons
                        name={icon}
                        size={20}
                        color={
                            disabled
                                ? "#475569"
                                : "#64748B"
                        }
                    />

                    <Text
                        style={[
                            styles.selectText,
                            !value &&
                            styles.selectPlaceholder,
                        ]}
                        numberOfLines={1}
                    >
                        {value || placeholder}
                    </Text>

                    <Ionicons
                        name="chevron-down"
                        size={18}
                        color="#64748B"
                    />

                </TouchableOpacity>

            </View>

        );

    }


    /* =====================================================
       CARREGANDO
    ===================================================== */

    if (carregando) {

        return (

            <ImageBackground
                source={require("../../assets/images/login/background-login.png")}
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

                    <View style={styles.loadingContainer}>

                        <ActivityIndicator
                            size="large"
                            color="#FFFFFF"
                        />

                        <Text style={styles.loadingText}>
                            Carregando dados...
                        </Text>

                    </View>

                </SafeAreaView>

            </ImageBackground>

        );

    }


    /* =====================================================
       RENDER
    ===================================================== */

    return (

        <ImageBackground
            source={require("../../assets/images/login/background-login.png")}
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
                        onPress={() => navigation.goBack()}
                    >

                        <Ionicons
                            name="arrow-back"
                            size={23}
                            color="#FFFFFF"
                        />

                    </TouchableOpacity>


                    <View style={styles.headerTextArea}>

                        <Text style={styles.headerTitle}>
                            Novo Atendimento
                        </Text>

                        <Text style={styles.headerSubtitle}>
                            Cadastre um novo atendimento
                        </Text>

                    </View>

                </View>


                {/* =================================================
                   FORMULÁRIO
                ================================================= */}

                <ScrollView
                    showsVerticalScrollIndicator={false}
                    keyboardShouldPersistTaps="handled"
                    contentContainerStyle={styles.content}
                >


                    {/* =================================================
                       CLIENTE
                    ================================================= */}

                    <SelectField
                        label="Cliente *"
                        value={clienteNome}
                        placeholder="Selecione o cliente"
                        icon="business-outline"
                        type="cliente"
                    />


                    {/* =================================================
                       CARREGANDO DADOS DO CLIENTE
                    ================================================= */}

                    {carregandoCliente && (

                        <View style={styles.loadingInline}>

                            <ActivityIndicator
                                size="small"
                                color="#FFFFFF"
                            />

                            <Text style={styles.loadingInlineText}>
                                Carregando dados do cliente...
                            </Text>

                        </View>

                    )}


                    {/* =================================================
                       PROJETO
                    ================================================= */}

                    <SelectField
                        label="Projeto"
                        value={projetoNome}
                        placeholder={
                            clienteId
                                ? "Selecione o projeto"
                                : "Selecione primeiro o cliente"
                        }
                        icon="folder-outline"
                        type="projeto"
                        disabled={!clienteId}
                    />


                    {/* =================================================
                       SISTEMA
                    ================================================= */}

                    <SelectField
                        label="Sistema"
                        value={sistemaNome}
                        placeholder={
                            clienteId
                                ? "Selecione o sistema"
                                : "Selecione primeiro o cliente"
                        }
                        icon="desktop-outline"
                        type="sistema"
                        disabled={!clienteId}
                    />


                    {/* =================================================
                       TIPO
                    ================================================= */}

                    <SelectField
                        label="Tipo de Atendimento *"
                        value={tipoNome}
                        placeholder="Selecione o tipo"
                        icon="layers-outline"
                        type="tipo"
                    />


                    {/* =================================================
                       CATEGORIA
                    ================================================= */}

                    <SelectField
                        label="Categoria *"
                        value={categoriaNome}
                        placeholder="Selecione a categoria"
                        icon="pricetag-outline"
                        type="categoria"
                    />


                    {/* =================================================
                       CONTATO
                    ================================================= */}

                    <SelectField
                        label="Contato"
                        value={contatoNome}
                        placeholder={
                            clienteId
                                ? "Selecione o contato"
                                : "Selecione primeiro o cliente"
                        }
                        icon="person-outline"
                        type="contato"
                        disabled={!clienteId}
                    />


                    {/* =================================================
                       DESCRIÇÃO
                    ================================================= */}

                    <View style={styles.field}>

                        <Text style={styles.label}>
                            Descrição *
                        </Text>

                        <View
                            style={[
                                styles.inputContainer,
                                styles.textAreaContainer,
                            ]}
                        >

                            <TextInput
                                value={descricao}
                                onChangeText={(texto) => {

                                    if (texto.length <= 500) {

                                        setDescricao(texto);

                                    }

                                }}
                                placeholder="Descreva o problema ou solicitação..."
                                placeholderTextColor="#94A3B8"
                                style={[
                                    styles.input,
                                    styles.textArea,
                                ]}
                                multiline
                                textAlignVertical="top"
                            />

                        </View>

                        <Text style={styles.counter}>
                            {descricao.length}/500
                        </Text>

                    </View>


                    {/* =================================================
                       ERRO
                    ================================================= */}

                    {erro !== "" && (

                        <View style={styles.errorContainer}>

                            <Ionicons
                                name="alert-circle-outline"
                                size={19}
                                color="#EF4444"
                            />

                            <Text style={styles.errorText}>
                                {erro}
                            </Text>

                        </View>

                    )}


                    {/* =================================================
                       BOTÃO
                    ================================================= */}

                    <TouchableOpacity
                        style={[
                            styles.saveButton,
                            salvando &&
                            styles.saveButtonDisabled,
                        ]}
                        activeOpacity={0.85}
                        disabled={salvando}
                        onPress={salvarAtendimento}
                    >

                        {salvando ? (

                            <ActivityIndicator
                                size="small"
                                color="#FFFFFF"
                            />

                        ) : (

                            <Ionicons
                                name="checkmark-circle-outline"
                                size={21}
                                color="#FFFFFF"
                            />

                        )}

                        <Text style={styles.saveButtonText}>

                            {salvando
                                ? "Abrindo atendimento..."
                                : "Abrir Atendimento"}

                        </Text>

                    </TouchableOpacity>


                </ScrollView>


                {/* =================================================
                   MODAL DE SELEÇÃO
                ================================================= */}

                <Modal
                    visible={modalLista !== null}
                    transparent
                    animationType="slide"
                    onRequestClose={() =>
                        setModalLista(null)
                    }
                >

                    <View style={styles.modalOverlay}>

                        <View style={styles.modalContainer}>


                            {/* =====================================
                               HEADER MODAL
                            ===================================== */}

                            <View style={styles.modalHeader}>

                                <Text style={styles.modalTitle}>
                                    {tituloModal()}
                                </Text>

                                <TouchableOpacity
                                    onPress={() =>
                                        setModalLista(null)
                                    }
                                >

                                    <Ionicons
                                        name="close"
                                        size={25}
                                        color="#FFFFFF"
                                    />

                                </TouchableOpacity>

                            </View>

                            <View style={styles.modalSearchContainer}>

                                <Ionicons
                                    name="search-outline"
                                    size={20}
                                    color="#64748B"
                                />

                                <TextInput
                                    value={buscaCliente}
                                    onChangeText={setBuscaCliente}
                                    placeholder="Buscar cliente..."
                                    placeholderTextColor="#64748B"
                                    style={styles.modalSearchInput}
                                    autoCapitalize="none"
                                />

                                {buscaCliente.length > 0 && (

                                    <TouchableOpacity
                                        onPress={() =>
                                            setBuscaCliente("")
                                        }
                                    >

                                        <Ionicons
                                            name="close-circle"
                                            size={19}
                                            color="#64748B"
                                        />

                                    </TouchableOpacity>

                                )}

                            </View>


                            {/* =====================================
                               LISTA
                            ===================================== */}

                            <View style={styles.modalList}>

                                {renderItem()}

                            </View>


                        </View>

                    </View>

                </Modal>

            </SafeAreaView>

        </ImageBackground>

    );

}