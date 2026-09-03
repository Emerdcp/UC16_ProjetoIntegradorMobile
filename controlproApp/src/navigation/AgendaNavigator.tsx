import React from "react";
import { createNativeStackNavigator, } from "@react-navigation/native-stack";
import AgendaScreen from "@/screens/Agenda/AgendaScreen";
import NovoCompromissoScreen from "@/screens/Agenda/NovoCompromissoScreen";
import AgendaDetalheScreen from "@/screens/Agenda/AgendaDetalheScreen";


/* =====================================================
   ROTAS DA AGENDA
===================================================== */

export type AgendaStackParamList = {
    Agenda: undefined;

    NovoCompromisso: undefined;

    AgendaDetalhe: {
        id: number;
    };
};


/* =====================================================
   STACK
===================================================== */

const Stack =
    createNativeStackNavigator<
        AgendaStackParamList
    >();


/* =====================================================
   NAVIGATOR
===================================================== */

export default function AgendaNavigator() {

    return (

        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >

            <Stack.Screen
                name="Agenda"
                component={AgendaScreen}
            />

            <Stack.Screen
                name="NovoCompromisso"
                component={
                    NovoCompromissoScreen
                }
            />

            <Stack.Screen
                name="AgendaDetalhe"
                component={AgendaDetalheScreen}
            />

        </Stack.Navigator>

    );

}