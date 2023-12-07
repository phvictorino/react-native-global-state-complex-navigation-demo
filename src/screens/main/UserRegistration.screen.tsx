import { FormProvider } from "react-hook-form";
import { View } from "react-native";

import { userRegistrationStyles } from "./UserRegistration.styles";
import { CustomInput } from "../../components/CustomInput";
import { PrimaryButton } from "../../components/PrimaryButton";
import { useUserRegistrationScreen } from "../../hooks/useUserRegistrationScreen";

export const UserRegistrationScreen = () => {
  const { methods, submitForm } = useUserRegistrationScreen();
  return (
    <FormProvider {...methods}>
      <View style={userRegistrationStyles.container}>
        <CustomInput placeholder="First name" name="firstName" />
        <CustomInput placeholder="Last name" name="lastName" />
        <PrimaryButton onPress={methods.handleSubmit(submitForm)}>Submit</PrimaryButton>
      </View>
    </FormProvider>
  );
};
