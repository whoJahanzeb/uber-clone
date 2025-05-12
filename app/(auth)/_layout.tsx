import { Redirect, Stack } from "expo-router";
import { useAuth } from "@clerk/clerk-expo";

export default function Layout() {
  const { isSignedIn } = useAuth();
  if (isSignedIn) {
    return <Redirect href={"/(root)/(tabs)/home"} />;
  }
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="welcome" />
      <Stack.Screen name="sign-up" />
      <Stack.Screen name="sign-in" />
    </Stack>
  );
}
