import React from "react";
import { createDrawerNavigator,} from "@react-navigation/drawer";
import HomeScreen from "@/screens/Home";
import CustomDrawer from "@/components/CustomDrawer";
import AtendimentoNavigator from "./AtendimentoNavigator";
import ClientesNavigator from "./ClientesNavigator";
import { AppDrawerParamList,} from "./types";

const Drawer = createDrawerNavigator<AppDrawerParamList>();

export default function AppNavigator() {
    return (
        <Drawer.Navigator
            drawerContent={(props) => (
                <CustomDrawer {...props} />
            )}
            screenOptions={{
                headerShown: false,
                drawerType: "slide",
                drawerStyle: {
                    width: "82%",
                },
            }}
        >

            {/* =================================================
               HOME
            ================================================= */}
            <Drawer.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    title: "Início",
                }}
            />

            {/* =================================================
               ATENDIMENTOS
            ================================================= */}
            <Drawer.Screen
                name="Atendimento"
                component={AtendimentoNavigator}
                options={{
                    title: "Atendimento",
                }}
            />

            {/* =================================================
               CLIENTES
            ================================================= */}
            <Drawer.Screen
                name="Clientes"
                component={ClientesNavigator}
                options={{
                    title: "Clientes",
                }}
            />

        </Drawer.Navigator>
    );
}