import React, { useEffect, useState,} from "react";
import {
    Alert,
    FlatList,
    Modal,
    ScrollView,
    Switch,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { Ionicons,} from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useNavigation,} from "@react-navigation/native";
import { NativeStackNavigationProp,} from "@react-navigation/native-stack";
import { SafeAreaView,} from "react-native-safe-area-context";
import { AgendaStackParamList,} from "@/navigation/AgendaNavigator";
import { createAgenda,} from "@/services/agendaService";
import { getClientes, getClienteById, Cliente, EnderecoCliente,} from "@/services/clienteService";
import { getProjetos, Projeto,} from "@/services/projetoService";
import { styles,} from "./NovoCompromissoStyles";


/* =====================================================
   NAVEGAÇÃO
===================================================== */

type NavigationProp =
    NativeStackNavigationProp<
        AgendaStackParamList
    >;


/* =====================================================
   TIPOS DE COMPROMISSO
===================================================== */

type TipoCompromisso =
    | "V"
    | "R"
    | "C"
    | "E";


interface TipoOpcao {

    codigo: TipoCompromisso;

    titulo: string;

    subtitulo: string;

    icone: keyof typeof Ionicons.glyphMap;

    cor: string;

}


/* =====================================================
   OPÇÕES DE COMPROMISSO
===================================================== */

const tipos: TipoOpcao[] = [

    {
        codigo: "V",
        titulo: "Visita",
        subtitulo: "Visita ao cliente",
        icone: "business-outline",
        cor: "#F59E0B",
    },

    {
        codigo: "R",
        titulo: "Reunião",
        subtitulo: "Reunião presencial ou online",
        icone: "people-outline",
        cor: "#4F8DF7",
    },

    {
        codigo: "C",
        titulo: "Retorno",
        subtitulo: "Retorno ou ligação",
        icone: "call-outline",
        cor: "#34D399",
    },

    {
        codigo: "E",
        titulo: "Evento",
        subtitulo: "Outro compromisso",
        icone: "calendar-outline",
        cor: "#A78BFA",
    },

];


/* =====================================================
   FUNÇÃO PARA EXTRAIR LISTA DA API
===================================================== */

function extrairLista(
    resposta: any
): any[] {

    if (Array.isArray(resposta)) {
        return resposta;
    }

    if (Array.isArray(resposta?.data)) {
        return resposta.data;
    }

    if (Array.isArray(resposta?.clientes)) {
        return resposta.clientes;
    }

    if (Array.isArray(resposta?.projetos)) {
        return resposta.projetos;
    }

    if (Array.isArray(resposta?.rows)) {
        return resposta.rows;
    }

    return [];

}


/* =====================================================
   FORMATAR DATA PARA EXIBIÇÃO
===================================================== */

function formatarDataExibicao(
    data: Date
) {

    const dia =
        String(
            data.getDate()
        ).padStart(2, "0");

    const mes =
        String(
            data.getMonth() + 1
        ).padStart(2, "0");

    const ano =
        data.getFullYear();

    return `${dia}/${mes}/${ano}`;

}


/* =====================================================
   FORMATAR DATA PARA MYSQL
===================================================== */

function formatarDataMySQL(
    data: Date,
    hora: string
) {

    const dia =
        String(
            data.getDate()
        ).padStart(2, "0");

    const mes =
        String(
            data.getMonth() + 1
        ).padStart(2, "0");

    const ano =
        data.getFullYear();

    return `${ano}-${mes}-${dia} ${hora}:00`;

}


/* =====================================================
   COMPONENTE
===================================================== */

export default function NovoCompromissoScreen() {

    const navigation =
        useNavigation<NavigationProp>();


    /* =================================================
       CAMPOS
    ================================================= */

    const [titulo, setTitulo] =
        useState("");

    const [descricao, setDescricao] =
        useState("");

    const [tipo, setTipo] =
        useState<TipoCompromisso>("V");


    /* =================================================
       DATA
    ================================================= */

    const [dataSelecionada, setDataSelecionada] =
        useState(new Date());

    const [mostrarCalendario, setMostrarCalendario] =
        useState(false);


    /* =================================================
       HORÁRIOS
    ================================================= */

    const [horaInicio, setHoraInicio] =
        useState("09:00");

    const [horaFim, setHoraFim] =
        useState("10:00");

    const [mostrarHoraInicio, setMostrarHoraInicio] =
        useState(false);

    const [mostrarHoraFim, setMostrarHoraFim] =
        useState(false);


    /* =================================================
       DIA INTEIRO
    ================================================= */

    const [diaInteiro, setDiaInteiro] =
        useState(false);


    /* =================================================
       CLIENTE
    ================================================= */

    const [clienteSelecionado, setClienteSelecionado] =
        useState<Cliente | null>(null);

    const [clientes, setClientes] =
        useState<Cliente[]>([]);

    const [carregandoClientes, setCarregandoClientes] =
        useState(false);

    const [mostrarClientes, setMostrarClientes] =
        useState(false);


    /* =================================================
       PROJETO
    ================================================= */

    const [projetoSelecionado, setProjetoSelecionado] =
        useState<Projeto | null>(null);

    const [projetos, setProjetos] =
        useState<Projeto[]>([]);

    const [mostrarProjetos, setMostrarProjetos] =
        useState(false);

    const [carregandoProjetos, setCarregandoProjetos] =
        useState(false);


    /* =================================================
       ENDEREÇO
    ================================================= */

    const [enderecoCliente, setEnderecoCliente] =
        useState<EnderecoCliente | null>(null);

    const [local, setLocal] =
        useState("");


    /* =================================================
       ATENDIMENTO
    ================================================= */

    const [atendimento, setAtendimento] =
        useState("");


    /* =================================================
       SALVAMENTO
    ================================================= */

    const [salvando, setSalvando] =
        useState(false);



    /* =================================================
       HORAS
    ================================================= */

    function formatarHora(
        data: Date
    ) {

        const hora =
            String(
                data.getHours()
            ).padStart(2, "0");

        const minuto =
            String(
                data.getMinutes()
            ).padStart(2, "0");

        return `${hora}:${minuto}`;

    }

    function alterarHoraInicio(
        event: any,
        data?: Date
    ) {

        setMostrarHoraInicio(false);

        if (data) {

            setHoraInicio(
                formatarHora(data)
            );

        }

    }

    function alterarHoraFim(
        event: any,
        data?: Date
    ) {

        setMostrarHoraFim(false);

        if (data) {

            setHoraFim(
                formatarHora(data)
            );

        }

    }


    /* =================================================
       CARREGAR CLIENTES
    ================================================= */

    async function carregarClientes() {

        try {

            setCarregandoClientes(true);

            const resposta =
                await getClientes(
                    "",
                    1
                );

            const lista =
                extrairLista(
                    resposta
                ) as Cliente[];

            setClientes(lista);

        }
        catch (error) {

            console.log(
                "Erro ao carregar clientes:",
                error
            );

            Alert.alert(
                "Atenção",
                "Não foi possível carregar os clientes."
            );

        }
        finally {

            setCarregandoClientes(false);

        }

    }


    /* =================================================
       ABRIR CLIENTES
    ================================================= */

    async function abrirClientes() {

        setMostrarClientes(true);

        if (
            clientes.length === 0
        ) {

            await carregarClientes();

        }

    }


    /* =================================================
       SELECIONAR CLIENTE
    ================================================= */

    async function selecionarCliente(
        cliente: Cliente
    ) {

        setClienteSelecionado(
            cliente
        );

        setMostrarClientes(false);

        /*
         * Ao trocar de cliente,
         * o projeto anterior deixa
         * de ser válido.
         */

        setProjetoSelecionado(
            null
        );

        setProjetos([]);

        setEnderecoCliente(
            null
        );

        setLocal("");


        try {

            const resposta =
                await getClienteById(
                    cliente.id
                );


            /*
             * Endereço
             */

            if (
                resposta?.endereco
            ) {

                setEnderecoCliente(
                    resposta.endereco
                );


                const endereco =
                    resposta.endereco;


                const partes = [
                    endereco.ce_endereco,
                    endereco.ce_numero,
                    endereco.ce_complemento,
                    endereco.ce_bairro,
                    endereco.ce_cidade,
                    endereco.ce_estado,
                ].filter(Boolean);


                setLocal(
                    partes.join(", ")
                );

            }


            /*
             * Projetos
             */

            await carregarProjetos(
                cliente.id
            );

        }
        catch (error) {

            console.log(
                "Erro ao carregar dados do cliente:",
                error
            );

            Alert.alert(
                "Atenção",
                "Não foi possível carregar os dados do cliente."
            );

        }

    }


    /* =================================================
       CARREGAR PROJETOS
    ================================================= */

    async function carregarProjetos(
        clienteId: number
    ) {

        try {

            setCarregandoProjetos(true);

            const resposta =
                await getProjetos(
                    clienteId
                );


            const lista =
                extrairLista(
                    resposta
                ) as Projeto[];


            setProjetos(
                lista
            );

        }
        catch (error) {

            console.log(
                "Erro ao carregar projetos:",
                error
            );

            setProjetos([]);

        }
        finally {

            setCarregandoProjetos(false);

        }

    }


    /* =================================================
       ABRIR PROJETOS
    ================================================= */

    function abrirProjetos() {

        if (
            !clienteSelecionado
        ) {

            Alert.alert(
                "Cliente",
                "Selecione um cliente primeiro."
            );

            return;

        }


        setMostrarProjetos(
            true
        );

    }


    /* =================================================
       SELECIONAR PROJETO
    ================================================= */

    function selecionarProjeto(
        projeto: Projeto
    ) {

        setProjetoSelecionado(
            projeto
        );

        setMostrarProjetos(
            false
        );

    }


    /* =================================================
       DATA
    ================================================= */

    function alterarData(
        event: any,
        data?: Date
    ) {

        setMostrarCalendario(
            false
        );


        if (data) {

            setDataSelecionada(
                data
            );

        }

    }


    /* =================================================
       SALVAR
    ================================================= */

    async function salvar() {

        if (
            !titulo.trim()
        ) {

            Alert.alert(
                "Atenção",
                "Informe o título do compromisso."
            );

            return;

        }


        if (
            !diaInteiro &&
            !horaInicio.trim()
        ) {

            Alert.alert(
                "Atenção",
                "Informe o horário de início."
            );

            return;

        }


        try {

            setSalvando(true);


            const dataInicio =
                diaInteiro

                    ? formatarDataMySQL(
                        dataSelecionada,
                        "00:00"
                    )

                    : formatarDataMySQL(
                        dataSelecionada,
                        horaInicio
                    );


            const dataFim =
                diaInteiro

                    ? formatarDataMySQL(
                        dataSelecionada,
                        "23:59"
                    )

                    : horaFim.trim()

                        ? formatarDataMySQL(
                            dataSelecionada,
                            horaFim
                        )

                        : null;


            await createAgenda({

                ag_titulo:
                    titulo.trim(),

                ag_descricao:
                    descricao.trim() ||
                    null,

                ag_tipo:
                    tipo,

                ag_data_inicio:
                    dataInicio,

                ag_data_fim:
                    dataFim,

                ag_dia_inteiro:
                    diaInteiro
                        ? "S"
                        : "N",

                ag_local:
                    local.trim() ||
                    null,

                ag_cliente_id:
                    clienteSelecionado?.id ||
                    null,

                ag_projeto_id:
                    projetoSelecionado?.id ||
                    null,

                ag_atendimento_id:
                    null,

                ag_tarefa_id:
                    null,

                ag_status:
                    "A",

            });


            Alert.alert(
                "Sucesso",
                "Compromisso salvo com sucesso.",
                [
                    {
                        text: "OK",
                        onPress: () =>
                            navigation.goBack(),
                    },
                ]
            );

        }
        catch (error: any) {

            console.log(
                "Erro ao salvar compromisso:",
                error
            );


            console.log(
                "Resposta da API:",
                error?.response?.data
            );


            Alert.alert(
                "Erro",
                error?.response?.data?.message ||
                "Não foi possível salvar o compromisso."
            );

        }
        finally {

            setSalvando(false);

        }

    }


    /* =================================================
       CLIENTE EXIBIDO
    ================================================= */

    const nomeCliente =
        clienteSelecionado?.cli_fantasia ||
        clienteSelecionado?.cli_razaosocial ||
        "";


    /* =================================================
       PROJETO EXIBIDO
    ================================================= */

    const nomeProjeto =
        projetoSelecionado
            ? `${projetoSelecionado.pj_codigo} - ${projetoSelecionado.pj_descresumo || ""}`
            : "";


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
                    >
                        Novo compromisso
                    </Text>


                    <Text
                        style={styles.headerSubtitle}
                    >
                        Cadastre um compromisso
                    </Text>

                </View>

            </View>


            {/* =================================================
                FORMULÁRIO
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

                <View style={styles.field}>

                    <Text style={styles.label}>
                        Título
                    </Text>


                    <View
                        style={
                            styles.inputContainer
                        }
                    >

                        <Ionicons
                            name="create-outline"
                            size={19}
                            color="#64748B"
                        />


                        <TextInput
                            style={styles.input}
                            placeholder="Ex.: Visita técnica"
                            placeholderTextColor="#64748B"
                            value={titulo}
                            onChangeText={
                                setTitulo
                            }
                        />

                    </View>

                </View>


                {/* =================================================
                    TIPO
                ================================================= */}

                <View style={styles.field}>

                    <Text style={styles.label}>
                        Tipo de compromisso
                    </Text>


                    <View
                        style={styles.tipoGrid}
                    >

                        {tipos.map(
                            (item) => {

                                const selecionado =
                                    tipo ===
                                    item.codigo;


                                return (

                                    <TouchableOpacity
                                        key={
                                            item.codigo
                                        }
                                        style={[
                                            styles.tipoCard,

                                            selecionado &&
                                            styles.tipoCardSelected,
                                        ]}
                                        activeOpacity={0.8}
                                        onPress={() =>
                                            setTipo(
                                                item.codigo
                                            )
                                        }
                                    >

                                        <View
                                            style={[
                                                styles.tipoIcon,
                                                {
                                                    backgroundColor:
                                                        `${item.cor}20`,
                                                },
                                            ]}
                                        >

                                            <Ionicons
                                                name={
                                                    item.icone
                                                }
                                                size={22}
                                                color={
                                                    item.cor
                                                }
                                            />

                                        </View>


                                        <View
                                            style={
                                                styles.tipoContent
                                            }
                                        >

                                            <Text
                                                style={
                                                    styles.tipoTitle
                                                }
                                            >
                                                {
                                                    item.titulo
                                                }
                                            </Text>


                                            <Text
                                                style={
                                                    styles.tipoSubtitle
                                                }
                                            >
                                                {
                                                    item.subtitulo
                                                }
                                            </Text>

                                        </View>


                                        {selecionado && (

                                            <Ionicons
                                                name="checkmark-circle"
                                                size={20}
                                                color="#4F8DF7"
                                            />

                                        )}

                                    </TouchableOpacity>

                                );

                            }
                        )}

                    </View>

                </View>


                {/* =================================================
                    DATA
                ================================================= */}

                <View style={styles.field}>

                    <Text style={styles.label}>
                        Data
                    </Text>


                    <TouchableOpacity
                        style={
                            styles.inputContainer
                        }
                        activeOpacity={0.8}
                        onPress={() =>
                            setMostrarCalendario(
                                true
                            )
                        }
                    >

                        <Ionicons
                            name="calendar-outline"
                            size={19}
                            color="#64748B"
                        />


                        <Text
                            style={[
                                styles.input,
                                {
                                    paddingVertical: 15,
                                },
                            ]}
                        >
                            {
                                formatarDataExibicao(
                                    dataSelecionada
                                )
                            }
                        </Text>


                        <Ionicons
                            name="chevron-forward-outline"
                            size={18}
                            color="#64748B"
                        />

                    </TouchableOpacity>


                    {mostrarCalendario && (

                        <DateTimePicker
                            value={
                                dataSelecionada
                            }
                            mode="date"
                            display="calendar"
                            onChange={
                                alterarData
                            }
                        />

                    )}

                </View>


                {/* =================================================
                    DIA INTEIRO
                ================================================= */}

                <View
                    style={
                        styles.switchContainer
                    }
                >

                    <View
                        style={
                            styles.switchContent
                        }
                    >

                        <Ionicons
                            name="time-outline"
                            size={21}
                            color="#4F8DF7"
                        />


                        <View
                            style={
                                styles.switchTextContainer
                            }
                        >

                            <Text
                                style={
                                    styles.switchTitle
                                }
                            >
                                Dia inteiro
                            </Text>


                            <Text
                                style={
                                    styles.switchSubtitle
                                }
                            >
                                Sem horário específico
                            </Text>

                        </View>

                    </View>


                    <Switch
                        value={diaInteiro}
                        onValueChange={
                            setDiaInteiro
                        }
                        trackColor={{
                            false: "#334155",
                            true: "#4F8DF7",
                        }}
                        thumbColor="#FFFFFF"
                    />

                </View>


                {/* =================================================
                    HORÁRIOS
                ================================================= */}

                {!diaInteiro && (

                    <View
                        style={
                            styles.timeRow
                        }
                    >

                        <View
                            style={styles.timeField}
                        >

                            <Text
                                style={styles.label}
                            >
                                Início
                            </Text>


                            <TouchableOpacity
                                style={styles.inputContainer}
                                activeOpacity={0.8}
                                onPress={() =>
                                    setMostrarHoraInicio(true)
                                }
                            >

                                <Ionicons
                                    name="time-outline"
                                    size={18}
                                    color="#64748B"
                                />


                                <Text
                                    style={[
                                        styles.input,
                                        {
                                            paddingVertical: 15,
                                            color: "#FFFFFF",
                                        },
                                    ]}
                                >
                                    {horaInicio}
                                </Text>


                                <Ionicons
                                    name="chevron-forward-outline"
                                    size={18}
                                    color="#64748B"
                                />

                            </TouchableOpacity>


                            {mostrarHoraInicio && (

                                <DateTimePicker
                                    value={
                                        (() => {

                                            const [hora, minuto] =
                                                horaInicio.split(":");

                                            const data =
                                                new Date();

                                            data.setHours(
                                                Number(hora)
                                            );

                                            data.setMinutes(
                                                Number(minuto)
                                            );

                                            return data;

                                        })()
                                    }
                                    mode="time"
                                    display="clock"
                                    is24Hour={true}
                                    onChange={
                                        alterarHoraInicio
                                    }
                                />

                            )}

                        </View>

                        <View
                            style={styles.timeField}
                        >

                            <Text
                                style={styles.label}
                            >
                                Término
                            </Text>


                            <TouchableOpacity
                                style={styles.inputContainer}
                                activeOpacity={0.8}
                                onPress={() =>
                                    setMostrarHoraFim(true)
                                }
                            >

                                <Ionicons
                                    name="time-outline"
                                    size={18}
                                    color="#64748B"
                                />


                                <Text
                                    style={[
                                        styles.input,
                                        {
                                            paddingVertical: 15,
                                            color: "#FFFFFF",
                                        },
                                    ]}
                                >
                                    {horaFim}
                                </Text>


                                <Ionicons
                                    name="chevron-forward-outline"
                                    size={18}
                                    color="#64748B"
                                />

                            </TouchableOpacity>


                            {mostrarHoraFim && (

                                <DateTimePicker
                                    value={
                                        (() => {

                                            const [hora, minuto] =
                                                horaFim.split(":");

                                            const data =
                                                new Date();

                                            data.setHours(
                                                Number(hora)
                                            );

                                            data.setMinutes(
                                                Number(minuto)
                                            );

                                            return data;

                                        })()
                                    }
                                    mode="time"
                                    display="clock"
                                    is24Hour={true}
                                    onChange={
                                        alterarHoraFim
                                    }
                                />

                            )}

                        </View>

                    </View>

                )}


            {/* =================================================
                    CLIENTE
                ================================================= */}

            <View style={styles.field}>

                <Text style={styles.label}>
                    Cliente
                    <Text style={styles.optional}>
                        {" "}opcional
                    </Text>
                </Text>


                <TouchableOpacity
                    style={
                        styles.inputContainer
                    }
                    activeOpacity={0.8}
                    onPress={
                        abrirClientes
                    }
                >

                    <Ionicons
                        name="business-outline"
                        size={19}
                        color="#64748B"
                    />


                    <Text
                        style={[
                            styles.input,
                            {
                                color:
                                    nomeCliente
                                        ? "#FFFFFF"
                                        : "#64748B",
                                paddingVertical: 15,
                            },
                        ]}
                        numberOfLines={1}
                    >
                        {
                            nomeCliente ||
                            "Selecionar cliente"
                        }
                    </Text>


                    <Ionicons
                        name="chevron-forward-outline"
                        size={18}
                        color="#64748B"
                    />

                </TouchableOpacity>

            </View>


            {/* =================================================
                    PROJETO
                ================================================= */}

            <View style={styles.field}>

                <Text style={styles.label}>
                    Projeto
                    <Text style={styles.optional}>
                        {" "}opcional
                    </Text>
                </Text>


                <TouchableOpacity
                    style={[
                        styles.inputContainer,

                        !clienteSelecionado &&
                        {
                            opacity: 0.55,
                        },
                    ]}
                    activeOpacity={0.8}
                    onPress={
                        abrirProjetos
                    }
                >

                    <Ionicons
                        name="folder-outline"
                        size={19}
                        color="#64748B"
                    />


                    <Text
                        style={[
                            styles.input,
                            {
                                color:
                                    nomeProjeto
                                        ? "#FFFFFF"
                                        : "#64748B",
                                paddingVertical: 15,
                            },
                        ]}
                        numberOfLines={1}
                    >
                        {
                            nomeProjeto ||
                            (
                                clienteSelecionado
                                    ? "Selecionar projeto"
                                    : "Selecione um cliente primeiro"
                            )
                        }
                    </Text>


                    <Ionicons
                        name="chevron-forward-outline"
                        size={18}
                        color="#64748B"
                    />

                </TouchableOpacity>

            </View>


            {/* =================================================
                    ATENDIMENTO
                ================================================= */}

            <View style={styles.field}>

                <Text style={styles.label}>
                    Atendimento
                    <Text style={styles.optional}>
                        {" "}opcional
                    </Text>
                </Text>


                <View
                    style={
                        styles.inputContainer
                    }
                >

                    <Ionicons
                        name="headset-outline"
                        size={19}
                        color="#64748B"
                    />


                    <TextInput
                        style={styles.input}
                        placeholder="Selecionar atendimento"
                        placeholderTextColor="#64748B"
                        value={
                            atendimento
                        }
                        onChangeText={
                            setAtendimento
                        }
                    />

                </View>

            </View>


            {/* =================================================
                    LOCAL
                ================================================= */}

            <View style={styles.field}>

                <Text style={styles.label}>
                    Local
                    <Text style={styles.optional}>
                        {" "}preenchido pelo cliente
                    </Text>
                </Text>


                <View
                    style={
                        styles.inputContainer
                    }
                >

                    <Ionicons
                        name="location-outline"
                        size={19}
                        color="#64748B"
                    />


                    <TextInput
                        style={styles.input}
                        placeholder="Endereço do compromisso"
                        placeholderTextColor="#64748B"
                        value={local}
                        onChangeText={
                            setLocal
                        }
                    />

                </View>

            </View>


            {/* =================================================
                    OBSERVAÇÃO
                ================================================= */}

            <View style={styles.field}>

                <Text style={styles.label}>
                    Observação
                </Text>


                <View
                    style={[
                        styles.inputContainer,
                        styles.textAreaContainer,
                    ]}
                >

                    <Ionicons
                        name="document-text-outline"
                        size={19}
                        color="#64748B"
                        style={
                            styles.textAreaIcon
                        }
                    />


                    <TextInput
                        style={[
                            styles.input,
                            styles.textArea,
                        ]}
                        placeholder="Descreva o compromisso..."
                        placeholderTextColor="#64748B"
                        multiline
                        textAlignVertical="top"
                        value={
                            descricao
                        }
                        onChangeText={
                            setDescricao
                        }
                    />

                </View>

            </View>


            {/* =================================================
                    SALVAR
                ================================================= */}

            <TouchableOpacity
                style={[
                    styles.saveButton,

                    salvando && {
                        opacity: 0.65,
                    },
                ]}
                activeOpacity={0.85}
                disabled={salvando}
                onPress={
                    salvar
                }
            >

                {salvando ? (

                    <Ionicons
                        name="sync-outline"
                        size={21}
                        color="#FFFFFF"
                    />

                ) : (

                    <Ionicons
                        name="checkmark-outline"
                        size={21}
                        color="#FFFFFF"
                    />

                )}


                <Text
                    style={
                        styles.saveButtonText
                    }
                >
                    {salvando
                        ? "Salvando..."
                        : "Salvar compromisso"}
                </Text>

            </TouchableOpacity>


            <View
                style={
                    styles.bottomSpace
                }
            />

        </ScrollView>


            {/* =================================================
                MODAL DE CLIENTES
            ================================================= */}

    <Modal
        visible={
            mostrarClientes
        }
        transparent
        animationType="slide"
        onRequestClose={() =>
            setMostrarClientes(false)
        }
    >

        <View
            style={
                styles.modalOverlay
            }
        >

            <View
                style={
                    styles.modalContainer
                }
            >

                <View
                    style={
                        styles.modalHeader
                    }
                >

                    <View>

                        <Text
                            style={
                                styles.modalTitle
                            }
                        >
                            Selecionar cliente
                        </Text>


                        <Text
                            style={
                                styles.modalSubtitle
                            }
                        >
                            Clientes cadastrados
                        </Text>

                    </View>


                    <TouchableOpacity
                        style={
                            styles.modalClose
                        }
                        onPress={() =>
                            setMostrarClientes(
                                false
                            )
                        }
                    >

                        <Ionicons
                            name="close-outline"
                            size={23}
                            color="#FFFFFF"
                        />

                    </TouchableOpacity>

                </View>


                {carregandoClientes ? (

                    <View
                        style={
                            styles.modalLoading
                        }
                    >

                        <Text
                            style={
                                styles.modalLoadingText
                            }
                        >
                            Carregando clientes...
                        </Text>

                    </View>

                ) : (

                    <FlatList
                        data={
                            clientes
                        }
                        keyExtractor={
                            (item) =>
                                String(
                                    item.id
                                )
                        }
                        showsVerticalScrollIndicator={
                            false
                        }
                        renderItem={({
                            item,
                        }) => (

                            <TouchableOpacity
                                style={
                                    styles.modalItem
                                }
                                activeOpacity={
                                    0.8
                                }
                                onPress={() =>
                                    selecionarCliente(
                                        item
                                    )
                                }
                            >

                                <View
                                    style={
                                        styles.modalItemIcon
                                    }
                                >

                                    <Ionicons
                                        name="business-outline"
                                        size={20}
                                        color="#4F8DF7"
                                    />

                                </View>


                                <View
                                    style={
                                        styles.modalItemContent
                                    }
                                >

                                    <Text
                                        style={
                                            styles.modalItemTitle
                                        }
                                        numberOfLines={
                                            1
                                        }
                                    >
                                        {
                                            item.cli_fantasia ||
                                            item.cli_razaosocial
                                        }
                                    </Text>


                                    <Text
                                        style={
                                            styles.modalItemSubtitle
                                        }
                                        numberOfLines={
                                            1
                                        }
                                    >
                                        {
                                            item.cli_cnpjcpf ||
                                            "Cliente"
                                        }
                                    </Text>

                                </View>


                                <Ionicons
                                    name="chevron-forward-outline"
                                    size={18}
                                    color="#64748B"
                                />

                            </TouchableOpacity>

                        )}
                        ListEmptyComponent={

                            <View
                                style={
                                    styles.modalEmpty
                                }
                            >

                                <Text
                                    style={
                                        styles.modalEmptyText
                                    }
                                >
                                    Nenhum cliente encontrado.
                                </Text>

                            </View>

                        }
                    />

                )}

            </View>

        </View>

    </Modal>


    {/* =================================================
                MODAL DE PROJETOS
            ================================================= */}

    <Modal
        visible={
            mostrarProjetos
        }
        transparent
        animationType="slide"
        onRequestClose={() =>
            setMostrarProjetos(false)
        }
    >

        <View
            style={
                styles.modalOverlay
            }
        >

            <View
                style={
                    styles.modalContainer
                }
            >

                <View
                    style={
                        styles.modalHeader
                    }
                >

                    <View>

                        <Text
                            style={
                                styles.modalTitle
                            }
                        >
                            Selecionar projeto
                        </Text>


                        <Text
                            style={
                                styles.modalSubtitle
                            }
                        >
                            Projetos do cliente
                        </Text>

                    </View>


                    <TouchableOpacity
                        style={
                            styles.modalClose
                        }
                        onPress={() =>
                            setMostrarProjetos(
                                false
                            )
                        }
                    >

                        <Ionicons
                            name="close-outline"
                            size={23}
                            color="#FFFFFF"
                        />

                    </TouchableOpacity>

                </View>


                {carregandoProjetos ? (

                    <View
                        style={
                            styles.modalLoading
                        }
                    >

                        <Text
                            style={
                                styles.modalLoadingText
                            }
                        >
                            Carregando projetos...
                        </Text>

                    </View>

                ) : (

                    <FlatList
                        data={
                            projetos
                        }
                        keyExtractor={
                            (item) =>
                                String(
                                    item.id
                                )
                        }
                        showsVerticalScrollIndicator={
                            false
                        }
                        renderItem={({
                            item,
                        }) => (

                            <TouchableOpacity
                                style={
                                    styles.modalItem
                                }
                                activeOpacity={
                                    0.8
                                }
                                onPress={() =>
                                    selecionarProjeto(
                                        item
                                    )
                                }
                            >

                                <View
                                    style={
                                        styles.modalItemIcon
                                    }
                                >

                                    <Ionicons
                                        name="folder-outline"
                                        size={20}
                                        color="#A78BFA"
                                    />

                                </View>


                                <View
                                    style={
                                        styles.modalItemContent
                                    }
                                >

                                    <Text
                                        style={
                                            styles.modalItemTitle
                                        }
                                        numberOfLines={
                                            1
                                        }
                                    >
                                        {
                                            item.pj_codigo
                                        }
                                    </Text>


                                    <Text
                                        style={
                                            styles.modalItemSubtitle
                                        }
                                        numberOfLines={
                                            2
                                        }
                                    >
                                        {
                                            item.pj_descresumo ||
                                            "Projeto"
                                        }
                                    </Text>

                                </View>


                                <Ionicons
                                    name="chevron-forward-outline"
                                    size={18}
                                    color="#64748B"
                                />

                            </TouchableOpacity>

                        )}
                        ListEmptyComponent={

                            <View
                                style={
                                    styles.modalEmpty
                                }
                            >

                                <Text
                                    style={
                                        styles.modalEmptyText
                                    }
                                >
                                    Este cliente não possui
                                    projetos cadastrados.
                                </Text>

                            </View>

                        }
                    />

                )}

            </View>

        </View>

    </Modal>

        </SafeAreaView >

    );

}