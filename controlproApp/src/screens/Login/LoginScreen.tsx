import React, { useState } from "react";

import {
    View,
    Text,
    Image,
    ImageBackground,
    Alert,
} from "react-native";

import {
    SafeAreaView,
} from "react-native-safe-area-context";

import { styles } from "./styles";

import Card from "@/components/Card";
import Input from "@/components/Input";
import Button from "@/components/Button";

import { useAuth } from "@/context/AuthContext";


export default function LoginScreen() {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const {
        signIn,
        loading,
    } = useAuth();


    async function handleLogin() {

        if (!email.trim() || !senha.trim()) {

            Alert.alert(
                "Atenção",
                "Informe o e-mail e a senha."
            );

            return;
        }


        const sucesso = await signIn(
            email.trim(),
            senha
        );


        if (!sucesso) {

            Alert.alert(
                "Login inválido",
                "E-mail ou senha incorretos."
            );

        }

    }


    return (

        <ImageBackground
            source={require("../../assets/images/login/background-login.png")}
            style={styles.background}
            resizeMode="cover"
        >

            <SafeAreaView style={styles.container}>

                {/* HEADER */}

                <View style={styles.header}>

                    <Image
                        source={require("../../assets/images/logo/logo.png")}
                        style={styles.logo}
                        resizeMode="contain"
                    />

                </View>


                {/* BODY */}

                <View style={styles.body}>

                    <Card>

                        <Input
                            label="E-mail"
                            placeholder="Digite seu e-mail"
                            icon="mail-outline"
                            keyboardType="email-address"
                            autoCapitalize="none"
                            autoCorrect={false}
                            value={email}
                            onChangeText={setEmail}
                        />


                        <Input
                            label="Senha"
                            placeholder="Digite sua senha"
                            icon="lock-closed-outline"
                            secureTextEntry
                            value={senha}
                            onChangeText={setSenha}
                        />


                        <Button
                            title="Entrar"
                            onPress={handleLogin}
                            loading={loading}
                            disabled={loading}
                        />

                    </Card>

                </View>


                {/* FOOTER */}

                <View style={styles.footer}>

                    <Text style={styles.footerText}>
                        Sistema Seguro e Protegido
                    </Text>

                    <Text style={styles.version}>
                        Versão 1.0.0
                    </Text>

                </View>

            </SafeAreaView>

        </ImageBackground>

    );
}