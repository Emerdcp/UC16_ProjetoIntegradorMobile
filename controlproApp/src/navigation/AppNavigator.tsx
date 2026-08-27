import React from "react";
import { createDrawerNavigator, } from "@react-navigation/drawer";
import HomeScreen from "@/screens/Home";
import CustomDrawer from "@/components/CustomDrawer";
import AtendimentoScreen from "@/screens/Atendimento";
import NovoAtendimentoScreen from "@/screens/Atendimento/NovoAtendimentoScreen";
// import ClientesScreen from "@/screens/Clientes";
// import NovoClienteScreen from "@/screens/Clientes/NovoClienteScreen";
import ClientesNavigator from "./ClientesNavigator";

const Drawer = createDrawerNavigator();

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

            <Drawer.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    title: "Início",
                }}
            />

            <Drawer.Screen
                name="Atendimento"
                component={AtendimentoScreen}
                options={{
                    title: "Atendimento",
                }}
            />

            <Drawer.Screen
                name="NovoAtendimento"
                component={NovoAtendimentoScreen}
                options={{
                    title: "Novo Atendimento",
                    drawerItemStyle: {
                        display: "none",
                    },
                }}
            />

            {/* CLIENTES */}

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