import { useController } from "react-hook-form";
import { Text, TextInput, TextInputProps, View } from "react-native";

import { customInputStyle } from "./CustomInput.style";

type Props = {
  name: string;
} & TextInputProps;

export const CustomInput = ({ name, ...rest }: Props) => {
  const { fieldState, field } = useController({ name });

  const hasError = !!fieldState.error;

  return (
    <View>
      <TextInput
        {...rest}
        onChangeText={field.onChange}
        onBlur={field.onBlur}
        value={field.value}
        style={[
          customInputStyle.base,
          {
            borderColor: hasError ? "red" : "grey",
          },
          rest.style,
        ]}
      />
      {hasError && <Text style={customInputStyle.errorLabel}>{fieldState.error?.message}</Text>}
    </View>
  );
};
