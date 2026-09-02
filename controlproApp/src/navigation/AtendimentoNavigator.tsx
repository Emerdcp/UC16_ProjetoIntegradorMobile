import React from "react";

import {
    createNativeStackNavigator,
} from "@react-navigation/native-stack";

import AtendimentoScreen
    from "@/screens/Atendimento/AtendimentoScreen";

import NovoAtendimentoScreen
    from "@/screens/Atendimento/NovoAtendimentoScreen";

import AtendimentoDetalheScreen
    from "@/screens/Atendimento/AtendimentoDetalheScreen";


export type AtendimentoStackParamList = {

    Atendimento: undefined;

    NovoAtendimento: undefined;

    AtendimentoDetalhe: {
        id: number;
    };

};


const Stack =
    createNativeStackNavigator<
        AtendimentoStackParamList
    >();


export default function AtendimentoNavigator() {

    return (

        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >

            <Stack.Screen
                name="Atendimento"
                component={AtendimentoScreen}
            />

            <Stack.Screen
                name="NovoAtendimento"
                component={NovoAtendimentoScreen}
            />

            <Stack.Screen
                name="AtendimentoDetalhe"
                component={AtendimentoDetalheScreen}
            />

        </Stack.Navigator>

    );

}