import { PropsWithChildren } from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

import { primaryButtonStyles } from "./PrimaryButton.styles";

export const PrimaryButton = ({ children }: PropsWithChildren<TouchableOpacityProps>) => {
  return (
    <TouchableOpacity style={primaryButtonStyles.container}>
      <Text style={primaryButtonStyles.text}>{children}</Text>
    </TouchableOpacity>
  );
};
