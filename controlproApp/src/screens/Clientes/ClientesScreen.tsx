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
    TextInput,
    TouchableOpacity,
    ActivityIndicator,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import { Ionicons } from "@expo/vector-icons";

import {
    useNavigation,
} from "@react-navigation/native";

import type {
    NativeStackNavigationProp,
} from "@react-navigation/native-stack";

import {
    ClientesStackParamList,
} from "@/navigation/ClientesNavigator";

import {
    DrawerActions,
} from "@react-navigation/native";

import {
    cpfMask,
    cnpjMask,
} from "@/utils/mask";

import {
    styles,
} from "./styles";

import {
    Cliente,
    getClientes,
} from "@/services/clienteService";


export default function ClientesScreen() {

    const navigation =
        useNavigation<
            NativeStackNavigationProp<
                ClientesStackParamList
            >
        >();


    /* =====================================================
       ESTADOS
    ===================================================== */

    const [
        busca,
        setBusca
    ] = useState("");


    const [
        clientes,
        setClientes
    ] = useState<Cliente[]>([]);


    const [
        loading,
        setLoading
    ] = useState(false);


    const [
        erro,
        setErro
    ] = useState(false);


    const [
        total,
        setTotal
    ] = useState(0);


    /* =====================================================
       CARREGAR CLIENTES
    ===================================================== */

    const carregarClientes =
        useCallback(
            async () => {

                try {

                    setLoading(true);

                    setErro(false);


                    const response =
                        await getClientes(
                            busca,
                            1
                        );


                    setClientes(
                        response?.data || []
                    );


                    setTotal(
                        Number(
                            response?.total || 0
                        )
                    );


                } catch (error) {

                    console.log(
                        "Erro ao carregar clientes:",
                        error
                    );

                    setErro(true);

                    setClientes([]);

                    setTotal(0);

                } finally {

                    setLoading(false);

                }

            },
            [busca]
        );


    /* =====================================================
       BUSCAR CLIENTES
    ===================================================== */

    useEffect(() => {

        const timer =
            setTimeout(() => {

                carregarClientes();

            }, 300);


        return () =>
            clearTimeout(timer);

    }, [
        carregarClientes
    ]);


    /* =====================================================
       DOCUMENTO
    ===================================================== */

    function formatarDocumento(
        cliente: Cliente
    ) {

        if (
            !cliente.cli_cnpjcpf
        ) {

            return "";

        }


        if (
            cliente.cli_pessoa === "F"
        ) {

            return (
                `CPF: ${cpfMask(
                    cliente.cli_cnpjcpf
                )}`
            );

        }


        return (
            `CNPJ: ${cnpjMask(
                cliente.cli_cnpjcpf
            )}`
        );

    }


    /* =====================================================
       ABRIR CLIENTE
    ===================================================== */

    function abrirCliente(
        cliente: Cliente
    ) {

        navigation.navigate(
            "ClienteDetalhe",
            {
                id: cliente.id,
            }
        );

    }


    /* =====================================================
       RENDER
    ===================================================== */

    return (

        <ImageBackground
            source={require(
                "../../assets/images/login/background-login.png"
            )}
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
                        style={styles.menuButton}
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


                    <View style={styles.headerText}>

                        <Text
                            style={styles.headerTitle}
                        >
                            Clientes
                        </Text>


                        <Text
                            style={styles.headerSubtitle}
                        >
                            Consulte e gerencie seus clientes
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
                       BUSCA
                    ================================================= */}

                    <View
                        style={
                            styles.searchContainer
                        }
                    >

                        <Ionicons
                            name="search-outline"
                            size={21}
                            color="#64748B"
                        />


                        <TextInput
                            value={busca}
                            onChangeText={
                                setBusca
                            }
                            placeholder={
                                "Buscar por nome ou CNPJ"
                            }
                            placeholderTextColor={
                                "#94A3B8"
                            }
                            style={
                                styles.searchInput
                            }
                            autoCapitalize="none"
                            autoCorrect={false}
                        />


                        {busca.length > 0 && (

                            <TouchableOpacity
                                onPress={() =>
                                    setBusca("")
                                }
                            >

                                <Ionicons
                                    name="close-circle"
                                    size={20}
                                    color="#94A3B8"
                                />

                            </TouchableOpacity>

                        )}

                    </View>


                    {/* =================================================
                       CONTADOR
                    ================================================= */}

                    <View
                        style={
                            styles.resultHeader
                        }
                    >

                        <Text
                            style={
                                styles.resultText
                            }
                        >
                            {total} cliente(s)
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
                                color="#4F7DF3"
                            />


                            <Text
                                style={
                                    styles.emptyText
                                }
                            >
                                Carregando clientes...
                            </Text>

                        </View>

                    )}


                    {/* =================================================
                       ERRO
                    ================================================= */}

                    {!loading && erro && (

                        <View
                            style={
                                styles.empty
                            }
                        >

                            <Ionicons
                                name="cloud-offline-outline"
                                size={45}
                                color="#64748B"
                            />


                            <Text
                                style={
                                    styles.emptyTitle
                                }
                            >
                                Não foi possível carregar
                            </Text>


                            <Text
                                style={
                                    styles.emptyText
                                }
                            >
                                Verifique a conexão com o servidor.
                            </Text>


                            <TouchableOpacity
                                style={{
                                    marginTop: 18,
                                    paddingHorizontal: 20,
                                    paddingVertical: 10,
                                    borderRadius: 10,
                                    backgroundColor: "#2864E8",
                                }}
                                onPress={
                                    carregarClientes
                                }
                            >

                                <Text
                                    style={{
                                        color: "#FFFFFF",
                                        fontWeight: "700",
                                    }}
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
                        !erro &&
                        clientes.length > 0 && (

                            <View
                                style={
                                    styles.list
                                }
                            >

                                {clientes.map(
                                    (
                                        cliente
                                    ) => (

                                        <TouchableOpacity
                                            key={
                                                cliente.id
                                            }
                                            style={
                                                styles.clientCard
                                            }
                                            activeOpacity={
                                                0.82
                                            }
                                            onPress={() =>
                                                abrirCliente(
                                                    cliente
                                                )
                                            }
                                        >


                                            {/* ÍCONE */}

                                            <View
                                                style={
                                                    styles.clientIcon
                                                }
                                            >

                                                <Ionicons
                                                    name={
                                                        cliente.cli_pessoa === "F"
                                                            ? "person-outline"
                                                            : "business-outline"
                                                    }
                                                    size={23}
                                                    color="#4F7DF3"
                                                />

                                            </View>


                                            {/* INFORMAÇÕES */}

                                            <View
                                                style={
                                                    styles.clientInfo
                                                }
                                            >

                                                <Text
                                                    style={
                                                        styles.clientName
                                                    }
                                                    numberOfLines={
                                                        1
                                                    }
                                                >
                                                    {
                                                        cliente.cli_fantasia
                                                    }
                                                </Text>


                                                <Text
                                                    style={
                                                        styles.clientCompany
                                                    }
                                                    numberOfLines={
                                                        1
                                                    }
                                                >
                                                    {
                                                        cliente.cli_razaosocial
                                                    }
                                                </Text>


                                                <Text
                                                    style={
                                                        styles.clientDocument
                                                    }
                                                >
                                                    {
                                                        formatarDocumento(
                                                            cliente
                                                        )
                                                    }
                                                </Text>


                                                <Text
                                                    style={
                                                        styles.clientLocation
                                                    }
                                                >
                                                    {cliente.cli_pessoa === "F"
                                                        ? "Pessoa Física"
                                                        : "Pessoa Jurídica"
                                                    }
                                                </Text>

                                            </View>


                                            {/* DIREITA */}

                                            <View
                                                style={
                                                    styles.clientRight
                                                }
                                            >


                                                {/* STATUS */}

                                                <View
                                                    style={[
                                                        styles.status,

                                                        cliente.cli_status === "A"
                                                            ? styles.statusActive
                                                            : styles.statusInactive,
                                                    ]}
                                                >

                                                    <View
                                                        style={[
                                                            styles.statusDot,

                                                            cliente.cli_status === "A"
                                                                ? styles.statusDotActive
                                                                : styles.statusDotInactive,
                                                        ]}
                                                    />


                                                    <Text
                                                        style={[
                                                            styles.statusText,

                                                            cliente.cli_status === "A"
                                                                ? styles.statusTextActive
                                                                : styles.statusTextInactive,
                                                        ]}
                                                    >

                                                        {
                                                            cliente.cli_status === "A"
                                                                ? "Ativo"
                                                                : "Inativo"
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

                            </View>

                        )}


                    {/* =================================================
                       NENHUM CLIENTE
                    ================================================= */}

                    {!loading &&
                        !erro &&
                        clientes.length === 0 && (

                            <View
                                style={
                                    styles.empty
                                }
                            >

                                <Ionicons
                                    name="people-outline"
                                    size={45}
                                    color="#64748B"
                                />


                                <Text
                                    style={
                                        styles.emptyTitle
                                    }
                                >
                                    Nenhum cliente encontrado
                                </Text>


                                <Text
                                    style={
                                        styles.emptyText
                                    }
                                >
                                    {busca
                                        ? "Tente pesquisar por outro nome ou CNPJ."
                                        : "Ainda não existem clientes cadastrados."
                                    }
                                </Text>

                            </View>

                        )}

                </ScrollView>


                {/* =================================================
                   FAB
                ================================================= */}

                <TouchableOpacity
                    style={
                        styles.fab
                    }
                    activeOpacity={0.85}
                    onPress={() =>
                        navigation.navigate(
                            "NovoCliente"
                        )
                    }
                >

                    <Ionicons
                        name="add"
                        size={30}
                        color="#FFFFFF"
                    />

                </TouchableOpacity>


            </SafeAreaView>

        </ImageBackground>

    );

}