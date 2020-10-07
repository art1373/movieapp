import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { navigationRef, isReadyRef } from "App/Services/NavigationService";
import { MainStack } from "./BottomTab";
export const AppNavigator = () => {
  useEffect(() => {
    return () => (isReadyRef.current = false);
  }, []);
  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        isReadyRef.current = true;
      }}
    >
      <MainStack />
    </NavigationContainer>
  );
};
