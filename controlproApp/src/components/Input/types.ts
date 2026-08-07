// import { KeyboardTypeOptions, TextInputProps } from "react-native";

// export interface InputProps extends TextInputProps{
//     label?: string;
//     error?: string;
//     leftIcon?: string;
//     rightIcon?: string;
//     required?: boolean;
//     secure?: boolean;
//     disabled?: boolean;
//     multiline?: boolean;
//     keyboardType?: KeyboardTypeOptions;
// }

import { TextInputProps } from "react-native";
import { ComponentProps } from "react";
import { Ionicons } from "@expo/vector-icons";

export interface InputProps extends TextInputProps {

    label?: string;

    icon?: ComponentProps<typeof Ionicons>["name"];

}