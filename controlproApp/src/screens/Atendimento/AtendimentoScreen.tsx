import React, { useMemo, useState } from "react";

import {
    ImageBackground,
    ScrollView,
    View,
    Text,
    TouchableOpacity,
    TextInput,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import { Ionicons } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";
import { AppNavigationProp } from "@/navigation/types";

import { styles } from "./styles";



/* =====================================================
   TIPOS
===================================================== */

type Status =
    | "Aguardando"
    | "Em andamento"
    | "Resolvido";

interface Atendimento {
    id: number;
    numero: string;
    titulo: string;
    cliente: string;
    status: Status;
    prioridade: "Alta" | "Média" | "Baixa";
    data: string;
}


/* =====================================================
   DADOS TEMPORÁRIOS
===================================================== */

const atendimentos: Atendimento[] = [

    {
        id: 1,
        numero: "#0025",
        titulo: "Problema no faturamento",
        cliente: "Empresa XYZ",
        status: "Em andamento",
        prioridade: "Alta",
        data: "12/08/2026",
    },

    {
        id: 2,
        numero: "#0024",
        titulo: "Dúvida sobre o sistema",
        cliente: "Cliente ABC",
        status: "Aguardando",
        prioridade: "Média",
        data: "12/08/2026",
    },

    {
        id: 3,
        numero: "#0023",
        titulo: "Erro na emissão da nota",
        cliente: "Comercial Silva",
        status: "Resolvido",
        prioridade: "Baixa",
        data: "11/08/2026",
    },

];


/* =====================================================
   TELA
===================================================== */

export default function AtendimentoScreen() {

    const navigation = useNavigation<AppNavigationProp>();

    const [search, setSearch] = useState("");

    const [filtro, setFiltro] = useState<
        "Todos" |
        "Aguardando" |
        "Em andamento" |
        "Resolvido"
    >("Todos");


    /* =================================================
       FILTROS
    ================================================= */

    const atendimentosFiltrados = useMemo(() => {

        return atendimentos.filter((item) => {

            const correspondeStatus =
                filtro === "Todos" ||
                item.status === filtro;


            const texto =
                search.toLowerCase().trim();


            const correspondeBusca =
                item.numero.toLowerCase().includes(texto) ||
                item.titulo.toLowerCase().includes(texto) ||
                item.cliente.toLowerCase().includes(texto);


            return correspondeStatus && correspondeBusca;

        });

    }, [search, filtro]);


    /* =================================================
       STATUS
    ================================================= */

    function getStatusStyle(status: Status) {

        switch (status) {

            case "Em andamento":
                return styles.statusInProgress;

            case "Aguardando":
                return styles.statusWaiting;

            case "Resolvido":
                return styles.statusResolved;

            default:
                return styles.statusWaiting;
        }
    }


    /* =================================================
       PRIORIDADE
    ================================================= */

    function getPriorityColor(
        prioridade: Atendimento["prioridade"]
    ) {

        switch (prioridade) {

            case "Alta":
                return "#EF4444";

            case "Média":
                return "#F59E0B";

            case "Baixa":
                return "#22C55E";

            default:
                return "#94A3B8";
        }
    }


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


                    <View style={styles.headerTitleArea}>

                        <Text style={styles.headerTitle}>
                            Atendimentos
                        </Text>

                        <Text style={styles.headerSubtitle}>
                            Controle e acompanhamento
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

                    </TouchableOpacity>

                </View>


                {/* =================================================
                   CONTEÚDO
                ================================================= */}

                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.content}
                >


                    {/* =================================================
                       PESQUISA
                    ================================================= */}

                    <View style={styles.searchContainer}>

                        <Ionicons
                            name="search-outline"
                            size={21}
                            color="#94A3B8"
                        />

                        <TextInput
                            value={search}
                            onChangeText={setSearch}
                            placeholder="Pesquisar atendimento..."
                            placeholderTextColor="#94A3B8"
                            style={styles.searchInput}
                        />

                    </View>


                    {/* =================================================
                       FILTROS
                    ================================================= */}

                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.filters}
                    >

                        {[
                            "Todos",
                            "Aguardando",
                            "Em andamento",
                            "Resolvido",
                        ].map((item) => (

                            <TouchableOpacity
                                key={item}
                                activeOpacity={0.8}
                                onPress={() =>
                                    setFiltro(
                                        item as
                                        "Todos" |
                                        "Aguardando" |
                                        "Em andamento" |
                                        "Resolvido"
                                    )
                                }
                                style={[
                                    styles.filterButton,
                                    filtro === item &&
                                    styles.filterButtonActive,
                                ]}
                            >

                                <Text
                                    style={[
                                        styles.filterText,
                                        filtro === item &&
                                        styles.filterTextActive,
                                    ]}
                                >
                                    {item}
                                </Text>

                            </TouchableOpacity>

                        ))}

                    </ScrollView>


                    {/* =================================================
                       TÍTULO DA LISTA
                    ================================================= */}

                    <View style={styles.listHeader}>

                        <Text style={styles.listTitle}>
                            Atendimentos
                        </Text>

                        <Text style={styles.listCount}>
                            {atendimentosFiltrados.length} registros
                        </Text>

                    </View>


                    {/* =================================================
                       LISTA
                    ================================================= */}

                    {atendimentosFiltrados.map((item) => (

                        <TouchableOpacity
                            key={item.id}
                            style={styles.attendanceCard}
                            activeOpacity={0.85}
                            onPress={() => {

                                console.log(
                                    "Atendimento:",
                                    item.numero
                                );

                            }}
                        >


                            {/* TOPO */}

                            <View style={styles.attendanceTop}>

                                <Text style={styles.attendanceNumber}>
                                    {item.numero}
                                </Text>


                                <View
                                    style={[
                                        styles.status,
                                        getStatusStyle(item.status),
                                    ]}
                                >

                                    <Text style={styles.statusText}>
                                        {item.status}
                                    </Text>

                                </View>

                            </View>


                            {/* TÍTULO */}

                            <Text style={styles.attendanceTitle}>
                                {item.titulo}
                            </Text>


                            {/* CLIENTE */}

                            <Text style={styles.attendanceClient}>
                                Cliente: {item.cliente}
                            </Text>


                            {/* RODAPÉ */}

                            <View style={styles.attendanceFooter}>


                                <View style={styles.priorityArea}>

                                    <Ionicons
                                        name="flag-outline"
                                        size={15}
                                        color={getPriorityColor(
                                            item.prioridade
                                        )}
                                    />

                                    <Text style={styles.priorityText}>
                                        {item.prioridade}
                                    </Text>

                                </View>


                                <Text style={styles.attendanceDate}>
                                    {item.data}
                                </Text>

                            </View>

                        </TouchableOpacity>

                    ))}


                    {/* =================================================
                       VAZIO
                    ================================================= */}

                    {atendimentosFiltrados.length === 0 && (

                        <View style={styles.empty}>

                            <Ionicons
                                name="search-outline"
                                size={40}
                                color="#64748B"
                            />

                            <Text style={styles.emptyTitle}>
                                Nenhum atendimento encontrado
                            </Text>

                            <Text style={styles.emptyText}>
                                Tente alterar os filtros ou pesquisar
                                outro termo.
                            </Text>

                        </View>

                    )}

                </ScrollView>


                {/* =================================================
                   BOTÃO FLUTUANTE
                ================================================= */}

                <TouchableOpacity
                    style={styles.floatingButton}
                    activeOpacity={0.85}
                    onPress={() => navigation.navigate("NovoAtendimento")}
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