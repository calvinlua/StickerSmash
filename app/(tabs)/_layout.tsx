import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import {
  BannerAd,
  BannerAdSize,
  TestIds,
} from "react-native-google-mobile-ads";

export default function TabLayout() {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#BF77F6",
          headerStyle: {
            backgroundColor: "#25292e",
          },
          headerShadowVisible: false,
          headerTintColor: "#fff",
          tabBarStyle: { backgroundColor: "#25292e" },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                name={focused ? "home-sharp" : "home-outline"}
                color={color}
                size={24}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="about"
          options={{
            title: "About",
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                name={
                  focused ? "information-circle" : "information-circle-outline"
                }
                color={color}
                size={24}
              />
            ),
          }}
        />
      </Tabs>
      <BannerAd
        unitId={TestIds.BANNER}
        size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
        requestOptions={{
          requestNonPersonalizedAdsOnly: true,
          networkExtras: {
            collapsible: "bottom",
          },
        }}
      />
    </>
  );
}
