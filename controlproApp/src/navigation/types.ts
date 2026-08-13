import { DrawerNavigationProp } from "@react-navigation/drawer";

export type AppDrawerParamList = {
    Home: undefined;
    Atendimento: undefined;
};

export type AppScreen = keyof AppDrawerParamList;

export type AppNavigationProp = DrawerNavigationProp<AppDrawerParamList>;