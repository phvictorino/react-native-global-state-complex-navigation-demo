import { Layout } from "../components/Layout";
import { PrimaryButton } from "../components/PrimaryButton";
import { useAppDispatch } from "../store";
import { setHasSeenOnboarding } from "../store/settings.slice";

export const OnboardingHomeScreen = () => {
  const dispatch = useAppDispatch();

  const handleOnPress = () => {
    dispatch(setHasSeenOnboarding(true));
  };

  return (
    <Layout
      text="Welcome to our App"
      Button={<PrimaryButton onPress={handleOnPress}>Start app</PrimaryButton>}
    />
  );
};
