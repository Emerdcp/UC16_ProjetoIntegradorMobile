import React from "react";
import { View, Text, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";
import { InputProps } from "./types";

export default function Input({
  label,
  icon,
  ...rest
}: InputProps) {

  return (
    <View>

      {label && (
        <Text style={styles.label}>
          {label}
        </Text>
      )}

      <View style={styles.inputContainer}>

        {icon && (
          <Ionicons
            name={icon}
            size={22}
            color="#64748B"
            style={styles.icon}
          />
        )}

        <TextInput
          style={styles.input}
          placeholderTextColor="#94A3B8"
          {...rest}
        />
      </View>
    </View>
  );
}