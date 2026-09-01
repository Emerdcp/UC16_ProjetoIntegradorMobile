import React, { useEffect, useState, } from "react";
import {
    ActivityIndicator,
    ImageBackground,
    Linking,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView, } from "react-native-safe-area-context";
import { Ionicons, } from "@expo/vector-icons";
import { useNavigation, useRoute, } from "@react-navigation/native";
import type { NativeStackNavigationProp, } from "@react-navigation/native-stack";
import type { RouteProp, } from "@react-navigation/native";
import type { ClientesStackParamList, } from "@/navigation/ClientesNavigator";
import { cpfMask, cnpjMask, } from "@/utils/mask";
import { getClienteById, } from "@/services/clienteService";
import { styles, } from "./ClienteDetalheStyles";


type NavigationProp =
    NativeStackNavigationProp<
        ClientesStackParamList
    >;

type RouteProps =
    RouteProp<
        ClientesStackParamList,
        "ClienteDetalhe"
    >;


export default function ClienteDetalheScreen() {

    const navigation =
        useNavigation<NavigationProp>();

    const route =
        useRoute<RouteProps>();


    const [
        cliente,
        setCliente
    ] = useState<any>(null);


    const [
        loading,
        setLoading
    ] = useState(true);


    const [
        erro,
        setErro
    ] = useState(false);


    /* =====================================================
       CARREGAR CLIENTE
    ===================================================== */

    async function carregarCliente() {

        try {

            setLoading(true);
            setErro(false);

            const response =
                await getClienteById(
                    route.params.id
                );

            setCliente(response);

        } catch (error) {

            console.log(
                "Erro ao carregar cliente:",
                error
            );

            setErro(true);

        } finally {

            setLoading(false);

        }

    }


    useEffect(() => {

        carregarCliente();

    }, [route.params.id]);


    /* =====================================================
       DOCUMENTO
    ===================================================== */

    function formatarDocumento() {

        if (!cliente?.cliente?.cli_cnpjcpf) {
            return "";
        }

        const documento =
            cliente.cliente.cli_cnpjcpf;

        if (
            cliente.cliente.cli_pessoa === "F"
        ) {

            return cpfMask(documento);

        }

        return cnpjMask(documento);

    }


    /* =====================================================
       MAPA
    ===================================================== */

    async function abrirMapa() {

        const endereco =
            cliente?.endereco;

        if (!endereco) {
            return;
        }

        const enderecoCompleto =
            `${endereco.ce_endereco}, ` +
            `${endereco.ce_numero}, ` +
            `${endereco.ce_bairro}, ` +
            `${endereco.ce_cidade} - ` +
            `${endereco.ce_estado}, ` +
            `${endereco.ce_cep}`;

        const url =
            `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                enderecoCompleto
            )}`;

        try {

            await Linking.openURL(url);

        } catch (error) {

            console.log(
                "Erro ao abrir mapa:",
                error
            );

        }

    }


    /* =====================================================
       TELEFONE
    ===================================================== */

    async function ligar(
        telefone: string
    ) {

        if (!telefone) {
            return;
        }

        const numero =
            telefone.replace(
                /\D/g,
                ""
            );

        await Linking.openURL(
            `tel:${numero}`
        );

    }


    /* =====================================================
       E-MAIL
    ===================================================== */

    async function enviarEmail(
        email: string
    ) {

        if (!email) {
            return;
        }

        await Linking.openURL(
            `mailto:${email}`
        );

    }


    /* =====================================================
       CARREGANDO
    ===================================================== */

    if (loading) {

        return (

            <View style={styles.loadingContainer}>

                <ActivityIndicator
                    size="large"
                    color="#4F7DF3"
                />

                <Text
                    style={styles.loadingText}
                >
                    Carregando cliente...
                </Text>

            </View>

        );

    }


    /* =====================================================
       ERRO
    ===================================================== */

    if (erro || !cliente) {

        return (

            <View style={styles.loadingContainer}>

                <Ionicons
                    name="cloud-offline-outline"
                    size={50}
                    color="#64748B"
                />

                <Text
                    style={styles.errorTitle}
                >
                    Não foi possível carregar
                </Text>

                <TouchableOpacity
                    style={styles.retryButton}
                    onPress={carregarCliente}
                >

                    <Text
                        style={styles.retryText}
                    >
                        Tentar novamente
                    </Text>

                </TouchableOpacity>

            </View>

        );

    }


    const dados =
        cliente.cliente;

    const endereco =
        cliente.endereco;

    const contatos =
        cliente.contatos || [];

    const sistemas =
        cliente.sistemas || [];


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
                        style={styles.backButton}
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


                    <View
                        style={styles.headerText}
                    >

                        <Text
                            style={styles.headerTitle}
                            numberOfLines={1}
                        >
                            Cliente
                        </Text>

                        <Text
                            style={styles.headerSubtitle}
                            numberOfLines={1}
                        >
                            Detalhes do cliente
                        </Text>

                    </View>

                </View>


                <ScrollView
                    showsVerticalScrollIndicator={
                        false
                    }
                    contentContainerStyle={
                        styles.content
                    }
                >

                    {/* =================================================
                       IDENTIFICAÇÃO
                    ================================================= */}

                    <View style={styles.card}>

                        <View
                            style={
                                styles.companyIcon
                            }
                        >

                            <Ionicons
                                name={
                                    dados.cli_pessoa === "F"
                                        ? "person-outline"
                                        : "business-outline"
                                }
                                size={30}
                                color="#4F7DF3"
                            />

                        </View>


                        <View
                            style={
                                styles.companyInfo
                            }
                        >

                            <Text
                                style={
                                    styles.companyName
                                }
                                numberOfLines={2}
                            >
                                {
                                    dados.cli_fantasia
                                }
                            </Text>

                            <Text
                                style={
                                    styles.companyLegalName
                                }
                                numberOfLines={2}
                            >
                                {
                                    dados.cli_razaosocial
                                }
                            </Text>


                            <View
                                style={
                                    styles.status
                                }
                            >

                                <View
                                    style={[
                                        styles.statusDot,
                                        dados.cli_status === "A"
                                            ? styles.statusDotActive
                                            : styles.statusDotInactive,
                                    ]}
                                />

                                <Text
                                    style={[
                                        styles.statusText,
                                        dados.cli_status === "A"
                                            ? styles.statusTextActive
                                            : styles.statusTextInactive,
                                    ]}
                                >
                                    {
                                        dados.cli_status === "A"
                                            ? "Ativo"
                                            : "Inativo"
                                    }
                                </Text>

                            </View>

                        </View>

                    </View>


                    {/* =================================================
                       DADOS
                    ================================================= */}

                    <Text
                        style={styles.sectionTitle}
                    >
                        Dados do cliente
                    </Text>


                    <View style={styles.card}>

                        <View
                            style={
                                styles.infoRow
                            }
                        >

                            <Ionicons
                                name="document-text-outline"
                                size={20}
                                color="#7FA7FF"
                            />

                            <View
                                style={
                                    styles.infoContent
                                }
                            >

                                <Text
                                    style={
                                        styles.infoLabel
                                    }
                                >
                                    {
                                        dados.cli_pessoa === "F"
                                            ? "CPF"
                                            : "CNPJ"
                                    }
                                </Text>

                                <Text
                                    style={
                                        styles.infoValue
                                    }
                                >
                                    {
                                        formatarDocumento()
                                    }
                                </Text>

                            </View>

                        </View>


                        {dados.cli_telefone && (

                            <TouchableOpacity
                                style={
                                    styles.infoRow
                                }
                                onPress={() =>
                                    ligar(
                                        dados.cli_telefone
                                    )
                                }
                            >

                                <Ionicons
                                    name="call-outline"
                                    size={20}
                                    color="#7FA7FF"
                                />

                                <View
                                    style={
                                        styles.infoContent
                                    }
                                >

                                    <Text
                                        style={
                                            styles.infoLabel
                                        }
                                    >
                                        Telefone
                                    </Text>

                                    <Text
                                        style={
                                            styles.infoValue
                                        }
                                    >
                                        {
                                            dados.cli_telefone
                                        }
                                    </Text>

                                </View>

                                <Ionicons
                                    name="chevron-forward"
                                    size={18}
                                    color="#64748B"
                                />

                            </TouchableOpacity>

                        )}


                        {dados.cli_email && (

                            <TouchableOpacity
                                style={
                                    styles.infoRow
                                }
                                onPress={() =>
                                    enviarEmail(
                                        dados.cli_email
                                    )
                                }
                            >

                                <Ionicons
                                    name="mail-outline"
                                    size={20}
                                    color="#7FA7FF"
                                />

                                <View
                                    style={
                                        styles.infoContent
                                    }
                                >

                                    <Text
                                        style={
                                            styles.infoLabel
                                        }
                                    >
                                        E-mail
                                    </Text>

                                    <Text
                                        style={
                                            styles.infoValue
                                        }
                                        numberOfLines={1}
                                    >
                                        {
                                            dados.cli_email
                                        }
                                    </Text>

                                </View>

                                <Ionicons
                                    name="chevron-forward"
                                    size={18}
                                    color="#64748B"
                                />

                            </TouchableOpacity>

                        )}

                    </View>


                    {/* =================================================
                       ENDEREÇO
                    ================================================= */}

                    {endereco && (

                        <>

                            <Text
                                style={
                                    styles.sectionTitle
                                }
                            >
                                Endereço
                            </Text>


                            <View
                                style={
                                    styles.card
                                }
                            >

                                <View
                                    style={
                                        styles.addressRow
                                    }
                                >

                                    <Ionicons
                                        name="location-outline"
                                        size={23}
                                        color="#7FA7FF"
                                    />

                                    <View
                                        style={
                                            styles.addressContent
                                        }
                                    >

                                        <Text
                                            style={
                                                styles.addressText
                                            }
                                        >
                                            {
                                                endereco.ce_endereco
                                            }, {
                                                endereco.ce_numero
                                            }
                                        </Text>

                                        <Text
                                            style={
                                                styles.addressText
                                            }
                                        >
                                            {
                                                endereco.ce_bairro
                                            }
                                        </Text>

                                        <Text
                                            style={
                                                styles.addressText
                                            }
                                        >
                                            {
                                                endereco.ce_cidade
                                            } - {
                                                endereco.ce_estado
                                            }
                                        </Text>

                                        <Text
                                            style={
                                                styles.addressCep
                                            }
                                        >
                                            CEP {
                                                endereco.ce_cep
                                            }
                                        </Text>

                                    </View>

                                </View>


                                <TouchableOpacity
                                    style={
                                        styles.mapButton
                                    }
                                    onPress={
                                        abrirMapa
                                    }
                                >

                                    <Ionicons
                                        name="map-outline"
                                        size={20}
                                        color="#FFFFFF"
                                    />

                                    <Text
                                        style={
                                            styles.mapButtonText
                                        }
                                    >
                                        Ver no mapa
                                    </Text>

                                </TouchableOpacity>

                            </View>

                        </>

                    )}


                    {/* =================================================
                       CONTATOS
                    ================================================= */}

                    {contatos.length > 0 && (

                        <>

                            <Text
                                style={
                                    styles.sectionTitle
                                }
                            >
                                Contatos
                            </Text>


                            {contatos
                                .filter(
                                    (contato: any) =>
                                        contato.cc_status !== "I"
                                )
                                .map(
                                    (
                                        contato: any,
                                        index: number
                                    ) => (

                                        <View
                                            style={
                                                styles.card
                                            }
                                            key={
                                                contato.id ||
                                                index
                                            }
                                        >

                                            <Text
                                                style={
                                                    styles.contactName
                                                }
                                            >
                                                {
                                                    contato.cc_nome
                                                }
                                            </Text>

                                            {!!contato.cc_funcao && (

                                                <Text
                                                    style={
                                                        styles.contactFunction
                                                    }
                                                >
                                                    {
                                                        contato.cc_funcao
                                                    }
                                                </Text>

                                            )}


                                            <View
                                                style={
                                                    styles.contactActions
                                                }
                                            >

                                                {contato.cc_telefone && (

                                                    <TouchableOpacity
                                                        style={
                                                            styles.smallAction
                                                        }
                                                        onPress={() =>
                                                            ligar(
                                                                contato.cc_telefone
                                                            )
                                                        }
                                                    >

                                                        <Ionicons
                                                            name="call-outline"
                                                            size={18}
                                                            color="#FFFFFF"
                                                        />

                                                        <Text
                                                            style={
                                                                styles.smallActionText
                                                            }
                                                        >
                                                            Ligar
                                                        </Text>

                                                    </TouchableOpacity>

                                                )}


                                                {contato.cc_email && (

                                                    <TouchableOpacity
                                                        style={
                                                            styles.smallAction
                                                        }
                                                        onPress={() =>
                                                            enviarEmail(
                                                                contato.cc_email
                                                            )
                                                        }
                                                    >

                                                        <Ionicons
                                                            name="mail-outline"
                                                            size={18}
                                                            color="#FFFFFF"
                                                        />

                                                        <Text
                                                            style={
                                                                styles.smallActionText
                                                            }
                                                        >
                                                            E-mail
                                                        </Text>

                                                    </TouchableOpacity>

                                                )}

                                            </View>

                                        </View>

                                    )
                                )}

                        </>

                    )}


                    {/* =================================================
                       SISTEMAS
                    ================================================= */}

                    {sistemas.length > 0 && (

                        <>

                            <Text
                                style={
                                    styles.sectionTitle
                                }
                            >
                                Sistemas
                            </Text>


                            {sistemas.map(
                                (
                                    sistema: any,
                                    index: number
                                ) => (

                                    <View
                                        style={
                                            styles.systemCard
                                        }
                                        key={
                                            sistema.id ||
                                            index
                                        }
                                    >

                                        <Ionicons
                                            name="apps-outline"
                                            size={21}
                                            color="#7FA7FF"
                                        />

                                        <View
                                            style={
                                                styles.systemInfo
                                            }
                                        >

                                            <Text
                                                style={
                                                    styles.systemTitle
                                                }
                                            >
                                                {
                                                    sistema.sis_sigla
                                                }
                                            </Text>

                                            <Text
                                                style={
                                                    styles.systemDescription
                                                }
                                            >
                                                {
                                                    sistema.sis_descricao
                                                }
                                            </Text>

                                        </View>

                                    </View>

                                )
                            )}

                        </>

                    )}

                </ScrollView>

            </SafeAreaView>

        </ImageBackground>

    );

}