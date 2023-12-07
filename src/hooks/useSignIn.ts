import { signIn } from "../services/auth.service";
import { useAppDispatch } from "../store";
import { setHasSeenPaymentMethodsScreen } from "../store/settings.slice";

export const useSignIn = () => {
  const dispatch = useAppDispatch();
  const signInUser = async () => {
    const { hasPaymentMethods } = await signIn();

    dispatch(setHasSeenPaymentMethodsScreen(hasPaymentMethods));
  };

  return {
    signInUser,
  };
};
