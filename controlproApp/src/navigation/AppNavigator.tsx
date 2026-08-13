import React from "react";
import { createDrawerNavigator, } from "@react-navigation/drawer";
import HomeScreen from "@/screens/Home";
import CustomDrawer from "@/components/CustomDrawer";
import AtendimentoScreen from "@/screens/Atendimento";

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

        </Drawer.Navigator>

    );
}