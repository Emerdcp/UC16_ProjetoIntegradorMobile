import React, { useState } from "react";

import {
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

import {
    SafeAreaView,
} from "react-native-safe-area-context";

import {
    Ionicons,
} from "@expo/vector-icons";

import {
    useNavigation,
} from "@react-navigation/native";

import type {
    NativeStackNavigationProp,
} from "@react-navigation/native-stack";

import type {
    ClientesStackParamList,
} from "@/navigation/ClientesNavigator";

import {
    cpfMask,
    cnpjMask,
    telefoneMask,
    cepMask,
} from "@/utils/mask";

import {
    buscarCep,
} from "@/services/cepService";

import {
    buscarCnpj,
} from "@/services/cnpjService";

import { styles } from "./NovoClienteScreenStyles";


type NavigationProp =
    NativeStackNavigationProp<
        ClientesStackParamList,
        "NovoCliente"
    >;


export default function NovoClienteScreen() {

    const navigation =
        useNavigation<NavigationProp>();


    /* =====================================================
       ESTADOS
    ===================================================== */

    const [pessoa, setPessoa] =
        useState<"F" | "J">("J");

    const [documento, setDocumento] =
        useState("");

    const [nome, setNome] =
        useState("");

    const [nomeFantasia, setNomeFantasia] =
        useState("");

    const [telefone, setTelefone] =
        useState("");

    const [email, setEmail] =
        useState("");

    const [cep, setCep] =
        useState("");

    const [endereco, setEndereco] =
        useState("");

    const [numero, setNumero] =
        useState("");

    const [bairro, setBairro] =
        useState("");

    const [cidade, setCidade] =
        useState("");

    const [estado, setEstado] =
        useState("");

    const [observacao, setObservacao] =
        useState("");


    const [carregandoCnpj, setCarregandoCnpj] =
        useState(false);

    const [carregandoCep, setCarregandoCep] =
        useState(false);


    /* =====================================================
       MÁSCARA DOCUMENTO
    ===================================================== */

    function handleDocumento(value: string) {

        if (pessoa === "F") {

            setDocumento(
                cpfMask(value)
            );

            return;
        }

        setDocumento(
            cnpjMask(value)
        );
    }


    /* =====================================================
       TROCAR PESSOA
    ===================================================== */

    function handlePessoa(
        tipo: "F" | "J"
    ) {

        setPessoa(tipo);

        setDocumento("");

        setNome("");

        setNomeFantasia("");
    }


    /* =====================================================
       BUSCAR CNPJ
    ===================================================== */

    async function handleBuscarCnpj() {

        if (pessoa !== "J") {
            return;
        }

        const numeroCnpj =
            documento.replace(/\D/g, "");

        if (numeroCnpj.length !== 14) {
            return;
        }

        try {

            setCarregandoCnpj(true);

            const data =
                await buscarCnpj(documento);

            if (!data) {
                return;
            }

            setNome(
                data.razao_social ||
                data.razaoSocial ||
                ""
            );

            setNomeFantasia(
                data.nome_fantasia ||
                data.nomeFantasia ||
                ""
            );

            if (data.email) {
                setEmail(data.email);
            }

            if (data.ddd_telefone_1) {

                setTelefone(
                    telefoneMask(
                        data.ddd_telefone_1
                    )
                );

            }

            if (data.cep) {

                setCep(
                    cepMask(
                        String(data.cep)
                    )
                );

            }

            if (data.logradouro) {
                setEndereco(
                    data.logradouro
                );
            }

            if (data.numero) {
                setNumero(
                    String(data.numero)
                );
            }

            if (data.bairro) {
                setBairro(
                    data.bairro
                );
            }

            if (data.municipio) {
                setCidade(
                    data.municipio
                );
            }

            if (data.uf) {
                setEstado(
                    data.uf
                );
            }

        } catch (error) {

            console.log(
                "Erro ao consultar CNPJ:",
                error
            );

        } finally {

            setCarregandoCnpj(false);

        }
    }


    /* =====================================================
       BUSCAR CEP
    ===================================================== */

    async function handleBuscarCep() {

        const numeroCep =
            cep.replace(/\D/g, "");

        if (numeroCep.length !== 8) {
            return;
        }

        try {

            setCarregandoCep(true);

            const data =
                await buscarCep(cep);

            if (!data || data.erro) {
                return;
            }

            setEndereco(
                data.logradouro || ""
            );

            setBairro(
                data.bairro || ""
            );

            setCidade(
                data.localidade || ""
            );

            setEstado(
                data.uf || ""
            );

        } catch (error) {

            console.log(
                "Erro ao consultar CEP:",
                error
            );

        } finally {

            setCarregandoCep(false);

        }
    }


    /* =====================================================
       SALVAR
    ===================================================== */

    function handleSalvar() {

        console.log(
            "CLIENTE:",
            {
                pessoa,
                documento,
                nome,
                nomeFantasia,
                telefone,
                email,
                cep,
                endereco,
                numero,
                bairro,
                cidade,
                estado,
                observacao,
            }
        );

        navigation.goBack();
    }


    /* =====================================================
       TELA
    ===================================================== */

    return (

        <SafeAreaView style={styles.container}>

            <KeyboardAvoidingView
                style={styles.keyboard}
                behavior={
                    Platform.OS === "ios"
                        ? "padding"
                        : undefined
                }
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
                            size={24}
                            color="#FFFFFF"
                        />

                    </TouchableOpacity>


                    <View style={styles.headerText}>

                        <Text style={styles.title}>
                            Novo Cliente
                        </Text>

                        <Text style={styles.subtitle}>
                            Cadastre um novo cliente
                        </Text>

                    </View>

                </View>


                {/* =================================================
                   FORMULÁRIO
                ================================================= */}

                <ScrollView
                    style={styles.scroll}
                    contentContainerStyle={
                        styles.content
                    }
                    showsVerticalScrollIndicator={false}
                    keyboardShouldPersistTaps="handled"
                >

                    {/* TIPO DE PESSOA */}

                    <Text style={styles.sectionTitle}>
                        Tipo de cliente
                    </Text>


                    <View style={styles.personContainer}>

                        <TouchableOpacity
                            style={[
                                styles.personButton,
                                pessoa === "J" &&
                                    styles.personButtonActive,
                            ]}
                            onPress={() =>
                                handlePessoa("J")
                            }
                        >

                            <Ionicons
                                name="business-outline"
                                size={20}
                                color={
                                    pessoa === "J"
                                        ? "#FFFFFF"
                                        : "#94A3B8"
                                }
                            />

                            <Text
                                style={[
                                    styles.personText,
                                    pessoa === "J" &&
                                        styles.personTextActive,
                                ]}
                            >
                                Pessoa Jurídica
                            </Text>

                        </TouchableOpacity>


                        <TouchableOpacity
                            style={[
                                styles.personButton,
                                pessoa === "F" &&
                                    styles.personButtonActive,
                            ]}
                            onPress={() =>
                                handlePessoa("F")
                            }
                        >

                            <Ionicons
                                name="person-outline"
                                size={20}
                                color={
                                    pessoa === "F"
                                        ? "#FFFFFF"
                                        : "#94A3B8"
                                }
                            />

                            <Text
                                style={[
                                    styles.personText,
                                    pessoa === "F" &&
                                        styles.personTextActive,
                                ]}
                            >
                                Pessoa Física
                            </Text>

                        </TouchableOpacity>

                    </View>


                    {/* DOCUMENTO */}

                    <View style={styles.inputGroup}>

                        <Text style={styles.label}>
                            {pessoa === "J"
                                ? "CNPJ"
                                : "CPF"}
                        </Text>


                        <View style={styles.inputWithAction}>

                            <TextInput
                                style={styles.inputAction}
                                value={documento}
                                onChangeText={
                                    handleDocumento
                                }
                                placeholder={
                                    pessoa === "J"
                                        ? "00.000.000/0000-00"
                                        : "000.000.000-00"
                                }
                                placeholderTextColor="#64748B"
                                keyboardType="numeric"
                            />


                            {pessoa === "J" && (

                                <TouchableOpacity
                                    style={styles.searchButton}
                                    activeOpacity={0.8}
                                    onPress={
                                        handleBuscarCnpj
                                    }
                                    disabled={
                                        carregandoCnpj
                                    }
                                >

                                    <Ionicons
                                        name={
                                            carregandoCnpj
                                                ? "hourglass-outline"
                                                : "search-outline"
                                        }
                                        size={21}
                                        color="#FFFFFF"
                                    />

                                </TouchableOpacity>

                            )}

                        </View>

                    </View>


                    {/* NOME */}

                    <View style={styles.inputGroup}>

                        <Text style={styles.label}>
                            {pessoa === "J"
                                ? "Razão Social"
                                : "Nome"}
                        </Text>

                        <TextInput
                            style={styles.input}
                            value={nome}
                            onChangeText={setNome}
                            placeholder={
                                pessoa === "J"
                                    ? "Digite a razão social"
                                    : "Digite o nome"
                            }
                            placeholderTextColor="#64748B"
                        />

                    </View>


                    {/* NOME FANTASIA */}

                    {pessoa === "J" && (

                        <View style={styles.inputGroup}>

                            <Text style={styles.label}>
                                Nome Fantasia
                            </Text>

                            <TextInput
                                style={styles.input}
                                value={nomeFantasia}
                                onChangeText={
                                    setNomeFantasia
                                }
                                placeholder="Digite o nome fantasia"
                                placeholderTextColor="#64748B"
                            />

                        </View>

                    )}


                    {/* TELEFONE */}

                    <View style={styles.inputGroup}>

                        <Text style={styles.label}>
                            Telefone
                        </Text>

                        <TextInput
                            style={styles.input}
                            value={telefone}
                            onChangeText={(value) =>
                                setTelefone(
                                    telefoneMask(value)
                                )
                            }
                            placeholder="(00) 00000-0000"
                            placeholderTextColor="#64748B"
                            keyboardType="phone-pad"
                        />

                    </View>


                    {/* EMAIL */}

                    <View style={styles.inputGroup}>

                        <Text style={styles.label}>
                            E-mail
                        </Text>

                        <TextInput
                            style={styles.input}
                            value={email}
                            onChangeText={setEmail}
                            placeholder="cliente@email.com"
                            placeholderTextColor="#64748B"
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />

                    </View>


                    {/* ENDEREÇO */}

                    <Text style={styles.sectionTitle}>
                        Endereço
                    </Text>


                    {/* CEP */}

                    <View style={styles.inputGroup}>

                        <Text style={styles.label}>
                            CEP
                        </Text>


                        <View style={styles.inputWithAction}>

                            <TextInput
                                style={styles.inputAction}
                                value={cep}
                                onChangeText={(value) =>
                                    setCep(
                                        cepMask(value)
                                    )
                                }
                                placeholder="00000-000"
                                placeholderTextColor="#64748B"
                                keyboardType="numeric"
                                onBlur={
                                    handleBuscarCep
                                }
                            />


                            <TouchableOpacity
                                style={styles.searchButton}
                                activeOpacity={0.8}
                                onPress={
                                    handleBuscarCep
                                }
                                disabled={
                                    carregandoCep
                                }
                            >

                                <Ionicons
                                    name={
                                        carregandoCep
                                            ? "hourglass-outline"
                                            : "search-outline"
                                    }
                                    size={21}
                                    color="#FFFFFF"
                                />

                            </TouchableOpacity>

                        </View>

                    </View>


                    {/* LOGRADOURO */}

                    <View style={styles.inputGroup}>

                        <Text style={styles.label}>
                            Endereço
                        </Text>

                        <TextInput
                            style={styles.input}
                            value={endereco}
                            onChangeText={setEndereco}
                            placeholder="Rua, Avenida..."
                            placeholderTextColor="#64748B"
                        />

                    </View>


                    {/* NÚMERO / BAIRRO */}

                    <View style={styles.row}>

                        <View
                            style={[
                                styles.inputGroup,
                                styles.numberField,
                            ]}
                        >

                            <Text style={styles.label}>
                                Número
                            </Text>

                            <TextInput
                                style={styles.input}
                                value={numero}
                                onChangeText={setNumero}
                                placeholder="123"
                                placeholderTextColor="#64748B"
                                keyboardType="numeric"
                            />

                        </View>


                        <View
                            style={[
                                styles.inputGroup,
                                styles.neighborhoodField,
                            ]}
                        >

                            <Text style={styles.label}>
                                Bairro
                            </Text>

                            <TextInput
                                style={styles.input}
                                value={bairro}
                                onChangeText={setBairro}
                                placeholder="Bairro"
                                placeholderTextColor="#64748B"
                            />

                        </View>

                    </View>


                    {/* CIDADE / ESTADO */}

                    <View style={styles.row}>

                        <View
                            style={[
                                styles.inputGroup,
                                styles.cityField,
                            ]}
                        >

                            <Text style={styles.label}>
                                Cidade
                            </Text>

                            <TextInput
                                style={styles.input}
                                value={cidade}
                                onChangeText={setCidade}
                                placeholder="Cidade"
                                placeholderTextColor="#64748B"
                            />

                        </View>


                        <View
                            style={[
                                styles.inputGroup,
                                styles.stateField,
                            ]}
                        >

                            <Text style={styles.label}>
                                UF
                            </Text>

                            <TextInput
                                style={styles.input}
                                value={estado}
                                onChangeText={setEstado}
                                placeholder="SP"
                                placeholderTextColor="#64748B"
                                autoCapitalize="characters"
                                maxLength={2}
                            />

                        </View>

                    </View>


                    {/* OBSERVAÇÕES */}

                    <View style={styles.inputGroup}>

                        <Text style={styles.label}>
                            Observações
                        </Text>

                        <TextInput
                            style={[
                                styles.input,
                                styles.textarea,
                            ]}
                            value={observacao}
                            onChangeText={setObservacao}
                            placeholder="Observações sobre o cliente..."
                            placeholderTextColor="#64748B"
                            multiline
                            textAlignVertical="top"
                        />

                    </View>


                    {/* BOTÕES */}

                    <View style={styles.actions}>

                        <TouchableOpacity
                            style={styles.cancelButton}
                            activeOpacity={0.8}
                            onPress={() =>
                                navigation.goBack()
                            }
                        >

                            <Text style={styles.cancelText}>
                                Cancelar
                            </Text>

                        </TouchableOpacity>


                        <TouchableOpacity
                            style={styles.saveButton}
                            activeOpacity={0.8}
                            onPress={handleSalvar}
                        >

                            <Ionicons
                                name="checkmark-outline"
                                size={20}
                                color="#FFFFFF"
                            />

                            <Text style={styles.saveText}>
                                Salvar Cliente
                            </Text>

                        </TouchableOpacity>

                    </View>

                </ScrollView>

            </KeyboardAvoidingView>

        </SafeAreaView>
    );
}