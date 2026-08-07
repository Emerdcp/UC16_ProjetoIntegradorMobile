import React from "react";
import { View, Text, Image, ImageBackground, SafeAreaView, } from "react-native";
import { styles } from "./styles";
import Card from "@/components/Card";
import Input from "@/components/Input";
import Button from "@/components/Button";

export default function LoginScreen() {
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
                    {/* <Text style={styles.subtitle}>
                        CONTROLE • GESTÃO • RESULTADOS
                    </Text> */}
                </View>

                {/* BODY */}
                <View style={styles.body}>
                    <Card>
                        {/* <Input
                            label="Usuário:"
                            placeholder="📧 Digite seu e-mail"
                        />
                        <Input
                            label="Senha:"
                            placeholder="🔒 Digite sua senha"
                            secureTextEntry
                        /> */}
                        <Input
                            label="E-mail"
                            placeholder="Digite seu e-mail"
                            icon="mail-outline"
                        />
                        <Input
                            label="Senha"
                            placeholder="Digite sua senha"
                            icon="lock-closed-outline"
                            secureTextEntry
                        />
                        <Button
                            title="Entrar"
                            onPress={() => { }}
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