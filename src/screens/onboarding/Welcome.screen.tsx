import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { Layout } from "../../components/Layout";
import { PrimaryButton } from "../../components/PrimaryButton";
import { useSignIn } from "../../hooks/useSignIn";
import { MainStackParamList } from "../../router/MainStack";

type Props = NativeStackScreenProps<MainStackParamList, "Welcome">;
export const WelcomeScreen = ({ navigation }: Props) => {
  const { signInUser } = useSignIn();

  const handlePressStartApp = async () => {
    await signInUser();
    navigation.navigate("OnboardingStack");
  };

  return (
    <Layout
      text="Welcome to our App"
      Button={<PrimaryButton onPress={handlePressStartApp}>Start app</PrimaryButton>}
    />
  );
};
