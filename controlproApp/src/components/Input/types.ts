import { TextInputProps } from "react-native";
import { ComponentProps } from "react";
import { Ionicons } from "@expo/vector-icons";

export interface InputProps extends TextInputProps {
    label?: string;
    icon?: ComponentProps<typeof Ionicons>["name"];
}