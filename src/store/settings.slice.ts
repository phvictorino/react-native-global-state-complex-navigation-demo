import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const settingsSlice = createSlice({
  initialState: {
    hasSeenOnboarding: false,
    hasSeenNotificationsScreen: false,
    hasSeenPaymentMethodsScreen: false,
    hasSeenLocationScreen: false,
  },
  name: "settings",
  reducers: {
    setHasSeenOnboarding(state, action: PayloadAction<boolean>) {
      state.hasSeenOnboarding = action.payload;
    },
    setHasSeenNotificationsScreen(state, action: PayloadAction<boolean>) {
      state.hasSeenNotificationsScreen = action.payload;
    },
    setHasSeenPaymentMethodsScreen(state, action: PayloadAction<boolean>) {
      state.hasSeenPaymentMethodsScreen = action.payload;
    },
    setHasSeenLocationScreen(state, action: PayloadAction<boolean>) {
      state.hasSeenLocationScreen = action.payload;
    },
  },
});

export const {
  setHasSeenOnboarding,
  setHasSeenNotificationsScreen,
  setHasSeenPaymentMethodsScreen,
  setHasSeenLocationScreen,
} = settingsSlice.actions;
export default settingsSlice.reducer;
