import React, { useState } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "./screens/HomeScreen.js";
import ProductDetail from "./screens/ProductDetail.js";
import BlogsScreen from "./screens/BlogsScreen.js";
import BlogDetail from "./screens/BlogDetail.js";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProductsList"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetail}
        options={{ tabBarStyle: { display: "none" }, headerShown: true }}
      />
    </Stack.Navigator>
  );
}

function BlogsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BlogsList"
        component={BlogsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="BlogDetail"
        component={BlogDetail}
        options={{ tabBarStyle: { display: "none" }, headerShown: true }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  const [tabKey, setTabKey] = React.useState({ ProductsTab: 0, BlogsTab: 0 });

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="ProductsTab"
          options={{
            headerShown: false,
            unmountOnBlur: true,
            title: "Products",
          }}
          listeners={({ navigation }) => ({
            tabPress: (e) => {
              setTabKey((prev) => ({
                ...prev,
                ProductsTab: prev.ProductsTab + 1,
              }));
              navigation.navigate("ProductsTab", { screen: "ProductsList" });
            },
          })}
          children={() => <HomeStack key={tabKey.ProductsTab} />}
        />
        <Tab.Screen
          name="BlogsTab"
          options={{ headerShown: false, unmountOnBlur: true, title: "Blogs" }}
          listeners={({ navigation }) => ({
            tabPress: (e) => {
              setTabKey((prev) => ({ ...prev, BlogsTab: prev.BlogsTab + 1 }));
              navigation.navigate("BlogsTab", { screen: "BlogsList" });
            },
          })}
          children={() => <BlogsStack key={tabKey.BlogsTab} />}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}