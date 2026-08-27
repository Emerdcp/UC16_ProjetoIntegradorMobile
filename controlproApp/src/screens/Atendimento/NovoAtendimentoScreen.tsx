import React, { useState } from "react";

import {
    ImageBackground,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import { Ionicons } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";

import { styles } from "./NovoAtendimentoStyles";


export default function NovoAtendimentoScreen() {

    const navigation = useNavigation();

    const [cliente, setCliente] = useState("");
    const [projeto, setProjeto] = useState("");
    const [sistema, setSistema] = useState("");
    const [tipo, setTipo] = useState("");
    const [categoria, setCategoria] = useState("");
    const [contato, setContato] = useState("");
    const [descricao, setDescricao] = useState("");

    const [erro, setErro] = useState("");


    /* =====================================================
       SALVAR ATENDIMENTO
    ===================================================== */

    function salvarAtendimento() {

        if (!cliente.trim()) {
            setErro("Informe o cliente.");
            return;
        }

        if (!tipo.trim()) {
            setErro("Informe o tipo de atendimento.");
            return;
        }

        if (!categoria.trim()) {
            setErro("Informe a categoria.");
            return;
        }

        if (!descricao.trim()) {
            setErro("Informe a descrição do atendimento.");
            return;
        }


        /*
         * Por enquanto os dados ficam somente
         * no aplicativo.
         *
         * Depois substituiremos por uma chamada
         * para a API.
         */

        console.log("NOVO ATENDIMENTO");

        console.log({
            cliente,
            projeto,
            sistema,
            tipo,
            categoria,
            contato,
            descricao,
        });


        setErro("");

        navigation.goBack();
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

                    <View style={styles.field}>

                        <Text style={styles.label}>
                            Cliente *
                        </Text>

                        <View style={styles.inputContainer}>

                            <Ionicons
                                name="business-outline"
                                size={20}
                                color="#64748B"
                            />

                            <TextInput
                                value={cliente}
                                onChangeText={setCliente}
                                placeholder="Informe o cliente"
                                placeholderTextColor="#94A3B8"
                                style={styles.input}
                            />

                        </View>

                    </View>


                    {/* =================================================
                       PROJETO
                    ================================================= */}

                    <View style={styles.field}>

                        <Text style={styles.label}>
                            Projeto
                        </Text>

                        <View style={styles.inputContainer}>

                            <Ionicons
                                name="folder-outline"
                                size={20}
                                color="#64748B"
                            />

                            <TextInput
                                value={projeto}
                                onChangeText={setProjeto}
                                placeholder="Informe o projeto"
                                placeholderTextColor="#94A3B8"
                                style={styles.input}
                            />

                        </View>

                    </View>


                    {/* =================================================
                       SISTEMA
                    ================================================= */}

                    <View style={styles.field}>

                        <Text style={styles.label}>
                            Sistema
                        </Text>

                        <View style={styles.inputContainer}>

                            <Ionicons
                                name="desktop-outline"
                                size={20}
                                color="#64748B"
                            />

                            <TextInput
                                value={sistema}
                                onChangeText={setSistema}
                                placeholder="Informe o sistema"
                                placeholderTextColor="#94A3B8"
                                style={styles.input}
                            />

                        </View>

                    </View>


                    {/* =================================================
                       TIPO
                    ================================================= */}

                    <View style={styles.field}>

                        <Text style={styles.label}>
                            Tipo de Atendimento *
                        </Text>

                        <View style={styles.inputContainer}>

                            <Ionicons
                                name="layers-outline"
                                size={20}
                                color="#64748B"
                            />

                            <TextInput
                                value={tipo}
                                onChangeText={setTipo}
                                placeholder="Ex.: Suporte"
                                placeholderTextColor="#94A3B8"
                                style={styles.input}
                            />

                        </View>

                    </View>


                    {/* =================================================
                       CATEGORIA
                    ================================================= */}

                    <View style={styles.field}>

                        <Text style={styles.label}>
                            Categoria *
                        </Text>

                        <View style={styles.inputContainer}>

                            <Ionicons
                                name="pricetag-outline"
                                size={20}
                                color="#64748B"
                            />

                            <TextInput
                                value={categoria}
                                onChangeText={setCategoria}
                                placeholder="Ex.: Financeiro"
                                placeholderTextColor="#94A3B8"
                                style={styles.input}
                            />

                        </View>

                    </View>


                    {/* =================================================
                       CONTATO
                    ================================================= */}

                    <View style={styles.field}>

                        <Text style={styles.label}>
                            Contato
                        </Text>

                        <View style={styles.inputContainer}>

                            <Ionicons
                                name="person-outline"
                                size={20}
                                color="#64748B"
                            />

                            <TextInput
                                value={contato}
                                onChangeText={setContato}
                                placeholder="Nome do contato"
                                placeholderTextColor="#94A3B8"
                                style={styles.input}
                            />

                        </View>

                    </View>


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
                                onChangeText={setDescricao}
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
                        style={styles.saveButton}
                        activeOpacity={0.85}
                        onPress={salvarAtendimento}
                    >

                        <Ionicons
                            name="checkmark-circle-outline"
                            size={21}
                            color="#FFFFFF"
                        />

                        <Text style={styles.saveButtonText}>
                            Abrir Atendimento
                        </Text>

                    </TouchableOpacity>


                </ScrollView>

            </SafeAreaView>

        </ImageBackground>

    );
}