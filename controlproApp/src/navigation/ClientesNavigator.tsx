import React from "react";

import {
    createNativeStackNavigator,
} from "@react-navigation/native-stack";

import ClientesScreen from "@/screens/Clientes";
import NovoClienteScreen from "@/screens/Clientes/NovoClienteScreen";



export type ClientesStackParamList = {
    Clientes: undefined;
    NovoCliente: undefined;
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

        </Stack.Navigator>

    );
}