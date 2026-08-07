import React from "react";
import { TouchableOpacity, Text, ActivityIndicator, } from "react-native";
import { Colors } from "@/designSystem";
import { styles } from "./styles";
import { ButtonProps } from "./types";

export default function Button({
  title,
  onPress,
  variant = "primary",
  loading = false,
  disabled = false,
}: ButtonProps) {
  const backgroundColor = {
    primary: Colors.primary,
    secondary: Colors.secondary,
    danger: Colors.error,
    success: Colors.success,
  }[variant];

  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor,
          opacity: disabled ? 0.5 : 1,
        },
      ]}
      disabled={disabled || loading}
      onPress={onPress}
    >
      {
        loading ?
          <ActivityIndicator color={Colors.white} />
          :
          <Text style={styles.text}>
            {title}
          </Text>
      }
    </TouchableOpacity>
  );
}