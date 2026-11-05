import { useEffect, useState } from "react";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import Carregamento from "../components/Carregamento";

export default function RootLayout() {
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setCarregando(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <StatusBar style="dark" />
      <Stack screenOptions={{ headerShown: false }} />
      <Carregamento visivel={carregando} />
    </>
  );
}
