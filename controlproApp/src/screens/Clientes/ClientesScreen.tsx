import React, { useMemo, useState } from "react";

import {
    ImageBackground,
    ScrollView,
    View,
    Text,
    TextInput,
    TouchableOpacity,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import { Ionicons } from "@expo/vector-icons";

import { useNavigation, } from "@react-navigation/native";

import type { NativeStackNavigationProp, } from "@react-navigation/native-stack";

import type { ClientesStackParamList, } from "@/navigation/ClientesNavigator";

import { DrawerActions } from "@react-navigation/native";

import { cpfMask, cnpjMask } from "@/utils/mask";

import { styles } from "./styles";

import type { Cliente } from "@/types/cliente";


// interface Cliente {
//     id: number;
//     razaoSocial: string;
//     nomeFantasia: string;
//     cnpj: string;
//     cidade: string;
//     estado: string;
//     status: "A" | "I";
// }


/*
 * Dados temporários.
 *
 * Depois serão substituídos pelos dados
 * vindos do SQLite.
 */


export default function ClientesScreen() {

    const navigation =
        useNavigation<
            NativeStackNavigationProp<ClientesStackParamList>
        >();


    const [busca, setBusca] = useState("");


    /* =====================================================
       CLIENTES TEMPORÁRIOS
    ===================================================== */

    const [clientes, setClientes] = useState<Cliente[]>([
        {
            id: 1,
            pessoa: "J",
            nome: "Empresa XYZ Ltda",
            nomeFantasia: "Empresa XYZ",
            documento: "12345678000195",
            telefone: "",
            email: "",
            cep: "",
            endereco: "",
            numero: "",
            bairro: "",
            cidade: "Americana",
            estado: "SP",
            observacao: "",
            status: "A",
        },

        {
            id: 2,
            pessoa: "J",
            nome: "Cliente ABC Ltda",
            nomeFantasia: "Cliente ABC",
            documento: "98765432000110",
            telefone: "",
            email: "",
            cep: "",
            endereco: "",
            numero: "",
            bairro: "",
            cidade: "Campinas",
            estado: "SP",
            observacao: "",
            status: "A",
        },

        {
            id: 3,
            pessoa: "J",
            nome: "Comercial ControlPro Ltda",
            nomeFantasia: "ControlPro",
            documento: "11222333000144",
            telefone: "",
            email: "",
            cep: "",
            endereco: "",
            numero: "",
            bairro: "",
            cidade: "São Paulo",
            estado: "SP",
            observacao: "",
            status: "I",
        },
    ]);


    /* =====================================================
       FILTRO
    ===================================================== */

    const clientesFiltrados = useMemo(() => {

        const termo =
            busca.toLowerCase().trim();


        if (!termo) {

            return clientes;

        }


        const numerosBusca =
            termo.replace(/\D/g, "");


        return clientes.filter((cliente) => {

            const nome =
                cliente.nome.toLowerCase();

            const nomeFantasia =
                cliente.nomeFantasia.toLowerCase();

            const documento =
                cliente.documento.replace(
                    /\D/g,
                    ""
                );


            return (

                nome.includes(termo) ||

                nomeFantasia.includes(termo) ||

                (
                    numerosBusca.length > 0 &&
                    documento.includes(numerosBusca)
                )

            );

        });

    }, [busca, clientes]);


    return (

        <ImageBackground
            source={require("../../assets/images/login/background-login.png")}
            style={styles.background}
            resizeMode="cover"
        >

            <SafeAreaView
                style={styles.container}
                edges={["top", "left", "right", "bottom"]}
            >


                {/* =================================================
                   HEADER
                ================================================= */}

                <View style={styles.header}>

                    <TouchableOpacity
                        style={styles.menuButton}
                        activeOpacity={0.8}
                        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
                    >

                        <Ionicons
                            name="menu-outline"
                            size={25}
                            color="#FFFFFF"
                        />

                    </TouchableOpacity>


                    <View style={styles.headerText}>

                        <Text style={styles.headerTitle}>
                            Clientes
                        </Text>

                        <Text style={styles.headerSubtitle}>
                            Consulte e gerencie seus clientes
                        </Text>

                    </View>
                </View>


                {/* =================================================
                   CONTEÚDO
                ================================================= */}

                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.content}
                >


                    {/* =================================================
                       BUSCA
                    ================================================= */}

                    <View style={styles.searchContainer}>

                        <Ionicons
                            name="search-outline"
                            size={21}
                            color="#64748B"
                        />

                        <TextInput
                            value={busca}
                            onChangeText={setBusca}
                            placeholder="Buscar por nome ou CNPJ"
                            placeholderTextColor="#94A3B8"
                            style={styles.searchInput}
                        />

                        {busca.length > 0 && (

                            <TouchableOpacity
                                onPress={() => setBusca("")}
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

                    <View style={styles.resultHeader}>

                        <Text style={styles.resultText}>
                            {clientesFiltrados.length} cliente(s)
                        </Text>

                    </View>


                    {/* =================================================
                       LISTA
                    ================================================= */}

                    <View style={styles.list}>

                        {clientesFiltrados.map((cliente) => (

                            <TouchableOpacity
                                key={cliente.id}
                                style={styles.clientCard}
                                activeOpacity={0.82}
                                onPress={() => {
                                    console.log(
                                        "Cliente:",
                                        cliente.id
                                    );
                                }}
                            >

                                <View style={styles.clientIcon}>

                                    <Ionicons
                                        name="business-outline"
                                        size={23}
                                        color="#4F7DF3"
                                    />

                                </View>


                                <View style={styles.clientInfo}>

                                    <Text
                                        style={styles.clientName}
                                        numberOfLines={1}
                                    >
                                        {cliente.nomeFantasia}
                                    </Text>

                                    <Text
                                        style={styles.clientCompany}
                                        numberOfLines={1}
                                    >
                                        {cliente.nome}
                                    </Text>

                                    <Text style={styles.clientDocument}>
                                        {cliente.pessoa === "F"
                                            ? `CPF: ${cpfMask(cliente.documento)}`
                                            : `CNPJ: ${cnpjMask(cliente.documento)}`
                                        }
                                    </Text>

                                    <Text style={styles.clientLocation}>
                                        {cliente.cidade} - {cliente.estado}
                                    </Text>

                                </View>


                                <View style={styles.clientRight}>

                                    <View
                                        style={[
                                            styles.status,
                                            cliente.status === "A"
                                                ? styles.statusActive
                                                : styles.statusInactive,
                                        ]}
                                    >

                                        <View
                                            style={[
                                                styles.statusDot,
                                                cliente.status === "A"
                                                    ? styles.statusDotActive
                                                    : styles.statusDotInactive,
                                            ]}
                                        />

                                        <Text
                                            style={[
                                                styles.statusText,
                                                cliente.status === "A"
                                                    ? styles.statusTextActive
                                                    : styles.statusTextInactive,
                                            ]}
                                        >
                                            {cliente.status === "A"
                                                ? "Ativo"
                                                : "Inativo"}
                                        </Text>

                                    </View>


                                    <Ionicons
                                        name="chevron-forward"
                                        size={20}
                                        color="#64748B"
                                    />

                                </View>

                            </TouchableOpacity>

                        ))}


                        {/* =================================================
                           VAZIO
                        ================================================= */}

                        {clientesFiltrados.length === 0 && (

                            <View style={styles.empty}>

                                <Ionicons
                                    name="search-outline"
                                    size={45}
                                    color="#64748B"
                                />

                                <Text style={styles.emptyTitle}>
                                    Nenhum cliente encontrado
                                </Text>

                                <Text style={styles.emptyText}>
                                    Tente pesquisar por outro nome ou CNPJ.
                                </Text>

                            </View>

                        )}

                    </View>

                </ScrollView>


                {/* =================================================
                   FAB
                ================================================= */}

                <TouchableOpacity
                    style={styles.fab}
                    activeOpacity={0.85}
                    onPress={() =>
                        navigation.navigate("NovoCliente")
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