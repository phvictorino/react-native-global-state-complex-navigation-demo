import { createSlice } from "@reduxjs/toolkit";

const settingsSlice = createSlice({
  initialState: {
    hasSeenOnboarding: false,
    hasSeenNotificationsScreen: false,
    hasSeenPaymentMethodsScreen: false,
    hasSeenLocationScreen: false,
  },
  name: "settings",
  reducers: {
    setHasSeenOnboarding(state, action) {
      state.hasSeenOnboarding = action.payload;
    },
    setHasSeenNotificationsScreen(state, action) {
      state.hasSeenNotificationsScreen = action.payload;
    },
    setHasSeenPaymentMethodsScreen(state, action) {
      state.hasSeenPaymentMethodsScreen = action.payload;
    },
    setHasSeenLocationScreen(state, action) {
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
