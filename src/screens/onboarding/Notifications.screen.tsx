import { Layout } from "../../components/Layout";
import { PrimaryButton } from "../../components/PrimaryButton";
import { useAppDispatch } from "../../store";
import { setHasSeenNotificationsScreen } from "../../store/settings.slice";

export const NotificationsScreen = () => {
  const dispatch = useAppDispatch();
  const handleSkipNotifications = () => {
    dispatch(setHasSeenNotificationsScreen(true));
  };

  return (
    <Layout
      text="Notifications Permissions"
      Button={<PrimaryButton onPress={handleSkipNotifications}>Skip</PrimaryButton>}
    />
  );
};
