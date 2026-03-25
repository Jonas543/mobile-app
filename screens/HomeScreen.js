import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Switch,
  TextInput,
} from "react-native";
import ProductCard from "../components/ProductCard";

const HomeScreen = ({ navigation }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(!isEnabled);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Our offer</Text>
      <TextInput placeholder="Search a product..." style={styles.input} />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginVertical: 12,
          justifyContent: "space-between",
        }}
      >
        <Text style={{ color: "#fff", marginLeft: 8 }}>
          Only show promotions
        </Text>
        <Switch
          style={styles.switch}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#81b0ff" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <ScrollView style={styles.container} contentContainerStyle={styles.list}>
        <ProductCard
          image={require("../images/beyerdynamic.jpg")}
          name="Batman Skateboard"
          description="Skateboard met batman logo"
          price={29.99}
          onPress={() =>
            navigation.navigate("Details", {
              image: require("../images/beyerdynamic.jpg"),
              title: "Batman Skateboard",
              description: "Skateboard met batman logo",
              price: "29.99",
            })
          }
        />
        <ProductCard
          image={require("../images/beyerdynamic.jpg")}
          name="Superman Skateboard"
          description="Skateboard met superman logo"
          price={34.99}
          onPress={() =>
            navigation.navigate("Details", {
              image: require("../images/beyerdynamic.jpg"),
              name: "Superman Skateboard",
              description: "Skateboard met superman logo",
              price: "34.99",
            })
          }
        />
        <ProductCard
          image={require("../images/beyerdynamic.jpg")}
          name="Wonder Woman Skateboard"
          description="Skateboard met wonder woman logo"
          price={39.99}
          onPress={() =>
            navigation.navigate("Details", {
              image: require("../images/beyerdynamic.jpg"),
              name: "Wonder Woman Skateboard",
              description: "Skateboard met wonder woman logo",
              price: "39.99",
            })
          }
        />
        <ProductCard
          image={require("../images/beyerdynamic.jpg")}
          name="Flash Skateboard"
          description="Skateboard met flash logo"
          price={27.99}
          onPress={() =>
            navigation.navigate("Details", {
              image: require("../images/beyerdynamic.jpg"),
              name: "Flash Skateboard",
              description: "Skateboard met flash logo",
              price: "27.99",
            })
          }
        />
        <ProductCard
          image={require("../images/beyerdynamic.jpg")}
          name="Green Lantern Skateboard"
          description="Skateboard met green lantern logo"
          price={31.99}
          onPress={() =>
            navigation.navigate("Details", {
              image: require("../images/beyerdynamic.jpg"),
              name: "Green Lantern Skateboard",
              description: "Skateboard met green lantern logo",
              price: "31.99",
            })
          }
        />
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  heading: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
    marginTop: 64,
    marginBottom: 12,
  },
  list: {
    paddingHorizontal: 12,
    paddingBottom: 24,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  switch: {
    marginVertical: 12,
  },
  input: {
    marginVertical: 12,
    backgroundColor: "#fff",
    borderColor: "#555",
    borderWidth: 1,
    color: "#737373",
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
});

export default HomeScreen;