import { PropsWithChildren, ReactNode } from "react";
import { SafeAreaView, Text } from "react-native";

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
      <Text>{text}</Text>
      {Button && Button}
      {children}
    </SafeAreaView>
  );
};
