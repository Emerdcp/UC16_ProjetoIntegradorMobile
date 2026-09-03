import React from "react";

import {
    createNativeStackNavigator,
} from "@react-navigation/native-stack";

import AgendaScreen from "@/screens/Agenda/AgendaScreen";

import NovoCompromissoScreen
    from "@/screens/Agenda/NovoCompromissoScreen";


/* =====================================================
   ROTAS DA AGENDA
===================================================== */

export type AgendaStackParamList = {

    Agenda: undefined;

    NovoCompromisso: undefined;

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

        </Stack.Navigator>

    );

}