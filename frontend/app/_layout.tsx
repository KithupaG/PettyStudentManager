import { Stack } from "expo-router";

import "react-native-reanimated";

export const unstable_settings = {};

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="dashboard" />
    </Stack>
  );
}
