import { Layout } from "../components/Layout";
import { PrimaryButton } from "../components/PrimaryButton";
import { useAppDispatch } from "../store";
import { setHasSeenLocationScreen } from "../store/settings.slice";

export const LocationScreen = () => {
  const dispatch = useAppDispatch();
  const handleSkipLocation = () => {
    dispatch(setHasSeenLocationScreen(true));
  };

  return (
    <Layout
      text="Location Permissions"
      Button={<PrimaryButton onPress={handleSkipLocation}>Skip</PrimaryButton>}
    />
  );
};
