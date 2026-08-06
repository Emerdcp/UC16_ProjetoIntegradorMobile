import { GestureResponderEvent } from "react-native";

export type ButtonVariant =
    | "primary"
    | "secondary"
    | "danger"
    | "success";

export interface ButtonProps {
    title: string;
    onPress: (event: GestureResponderEvent) => void;
    variant?: ButtonVariant;
    loading?: boolean;
    disabled?: boolean;
}