import { PropsWithChildren, ReactNode } from "react";
import { SafeAreaView, Text, View } from "react-native";

type Props = { text: string; Button?: ReactNode };
export const Layout = ({ text, Button, children }: PropsWithChildren<Props>) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 32,
        paddingHorizontal: 16,
      }}>
      <View />
      <Text style={{ fontSize: 24 }}>{text}</Text>
      {Button && Button}
      {children}
    </SafeAreaView>
  );
};
