import React from "react";

import {
    createNativeStackNavigator,
} from "@react-navigation/native-stack";

import ClientesScreen from "@/screens/Clientes/ClientesScreen";
import NovoClienteScreen from "@/screens/Clientes/NovoClienteScreen";
import ClienteDetalheScreen from "@/screens/Clientes/ClienteDetalheScreen";

export type ClientesStackParamList = {
    Clientes: undefined;
    NovoCliente: undefined;
    ClienteDetalhe: {
        id: number;
    };
};


const Stack =
    createNativeStackNavigator<ClientesStackParamList>();


export default function ClientesNavigator() {

    return (

        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >

            <Stack.Screen
                name="Clientes"
                component={ClientesScreen}
            />

            <Stack.Screen
                name="NovoCliente"
                component={NovoClienteScreen}
            />

            <Stack.Screen
                name="ClienteDetalhe"
                component={ClienteDetalheScreen}
            />

        </Stack.Navigator>

    );
}