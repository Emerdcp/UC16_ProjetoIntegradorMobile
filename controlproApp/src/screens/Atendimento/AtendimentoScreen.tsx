import React from "react";
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
import { styles } from "./styles";
import { DrawerActions } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";


interface Atendimento {
    id: number;
    numero: string;
    titulo: string;
    cliente: string;
    status: "Em andamento" | "Aguardando" | "Resolvido";
    prioridade: "Alta" | "Média" | "Baixa";
    data: string;
}

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


export default function AtendimentoScreen() {

    const navigation = useNavigation();

    return (

        <ImageBackground
            source={require("../../assets/images/login/background-login.png")}
            style={styles.background}
            resizeMode="cover"
        >

            <SafeAreaView style={styles.container}>

                {/* HEADER */}

                <View style={styles.header}>

                    <TouchableOpacity
                        style={styles.headerButton}
                        activeOpacity={0.8}
                        onPress={() => {
                            navigation.dispatch(DrawerActions.openDrawer());
                        }}
                    >

                        <Ionicons
                            name="menu-outline"
                            size={24}
                            color="#FFFFFF"
                        />

                    </TouchableOpacity>


                    <View style={styles.headerInfo}>

                        <Text style={styles.title}>
                            Atendimentos
                        </Text>

                        <Text style={styles.subtitle}>
                            Controle e acompanhamento
                        </Text>

                    </View>


                    <TouchableOpacity
                        style={styles.notificationButton}
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


                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.content}
                >

                    {/* BUSCA */}

                    <View style={styles.searchContainer}>

                        <Ionicons
                            name="search-outline"
                            size={20}
                            color="#94A3B8"
                        />

                        <TextInput
                            style={styles.searchInput}
                            placeholder="Pesquisar atendimento..."
                            placeholderTextColor="#94A3B8"
                        />

                    </View>


                    {/* FILTROS */}

                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.filters}
                    >

                        <TouchableOpacity
                            style={[
                                styles.filterButton,
                                styles.filterButtonActive,
                            ]}
                        >

                            <Text
                                style={[
                                    styles.filterText,
                                    styles.filterTextActive,
                                ]}
                            >
                                Todos
                            </Text>

                        </TouchableOpacity>


                        <TouchableOpacity style={styles.filterButton}>

                            <Text style={styles.filterText}>
                                Aguardando
                            </Text>

                        </TouchableOpacity>


                        <TouchableOpacity style={styles.filterButton}>

                            <Text style={styles.filterText}>
                                Em andamento
                            </Text>

                        </TouchableOpacity>


                        <TouchableOpacity style={styles.filterButton}>

                            <Text style={styles.filterText}>
                                Resolvidos
                            </Text>

                        </TouchableOpacity>

                    </ScrollView>


                    {/* CABEÇALHO DA LISTA */}

                    <View style={styles.listHeader}>

                        <Text style={styles.listTitle}>
                            Atendimentos
                        </Text>

                        <Text style={styles.total}>
                            {atendimentos.length} registros
                        </Text>

                    </View>


                    {/* CARDS */}

                    {atendimentos.map((item) => (

                        <TouchableOpacity
                            key={item.id}
                            style={styles.card}
                            activeOpacity={0.85}
                        >

                            <View style={styles.cardTop}>

                                <Text style={styles.number}>
                                    {item.numero}
                                </Text>


                                <View
                                    style={[
                                        styles.status,
                                        item.status === "Resolvido"
                                            ? styles.statusResolved
                                            : item.status === "Aguardando"
                                                ? styles.statusWaiting
                                                : styles.statusProgress,
                                    ]}
                                >

                                    <Text
                                        style={[
                                            styles.statusText,
                                            item.status === "Resolvido"
                                                ? styles.statusTextResolved
                                                : item.status === "Aguardando"
                                                    ? styles.statusTextWaiting
                                                    : styles.statusTextProgress,
                                        ]}
                                    >
                                        {item.status}
                                    </Text>

                                </View>

                            </View>


                            <Text style={styles.cardTitle}>
                                {item.titulo}
                            </Text>


                            <Text style={styles.client}>
                                Cliente: {item.cliente}
                            </Text>


                            <View style={styles.cardFooter}>

                                <View style={styles.priorityContainer}>

                                    <Ionicons
                                        name="flag-outline"
                                        size={15}
                                        color={
                                            item.prioridade === "Alta"
                                                ? "#EF4444"
                                                : item.prioridade === "Média"
                                                    ? "#F59E0B"
                                                    : "#22C55E"
                                        }
                                    />

                                    <Text style={styles.priority}>
                                        {item.prioridade}
                                    </Text>

                                </View>


                                <Text style={styles.date}>
                                    {item.data}
                                </Text>

                            </View>

                        </TouchableOpacity>

                    ))}

                </ScrollView>


                {/* NOVO ATENDIMENTO */}

                <TouchableOpacity
                    style={styles.floatingButton}
                    activeOpacity={0.85}
                    onPress={() => {
                        console.log("Novo Atendimento");
                    }}
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