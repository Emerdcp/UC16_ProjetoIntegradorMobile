import { DrawerNavigationProp,} from "@react-navigation/drawer";
import { NavigatorScreenParams,} from "@react-navigation/native";
import { AtendimentoStackParamList,} from "./AtendimentoNavigator";
import { ClientesStackParamList,} from "./ClientesNavigator";


export type AppDrawerParamList = {
    Home: undefined;
    Atendimento:
        NavigatorScreenParams<
            AtendimentoStackParamList
        >;
    Clientes:
        NavigatorScreenParams<
            ClientesStackParamList
        >;
};

export type AppScreen = keyof AppDrawerParamList;
export type AppNavigationProp =
        DrawerNavigationProp<
        AppDrawerParamList
    >;