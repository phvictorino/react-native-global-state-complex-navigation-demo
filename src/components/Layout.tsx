import { ReactNode } from "react";
import { SafeAreaView, Text } from "react-native";

export const Layout = ({ text, Button }: { text: string; Button?: ReactNode }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 32,
        paddingHorizontal: 16,
      }}>
      <Text>{text}</Text>
      {Button && Button}
    </SafeAreaView>
  );
};
