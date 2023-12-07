import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View } from "react-native";

import { Layout } from "../../components/Layout";
import { PrimaryButton } from "../../components/PrimaryButton";
import { MainStackParamList } from "../../router/MainStack";
import { useAppDispatch } from "../../store";

type Props = NativeStackScreenProps<MainStackParamList, "Home">;
export const HomeScreen = ({ navigation }: Props) => {
  const dispatch = useAppDispatch();

  const handleRegistrationButton = () => {
    navigation.navigate("UserRegistration");
  };

  return (
    <Layout text="Welcome to the app">
      <View style={{ flex: 1, justifyContent: "flex-end", alignItems: "center", gap: 12 }}>
        <PrimaryButton onPress={handleRegistrationButton}>Register</PrimaryButton>
        {/*<PrimaryButton onPress={handleResetAll}>Reset All</PrimaryButton>*/}
      </View>
    </Layout>
  );
};
