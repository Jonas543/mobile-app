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
import BlogCard from "../components/BlogCard.js";

const BlogsScreen = ({ navigation }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(!isEnabled);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Blogs</Text>
      <TextInput placeholder="Search a blog..." style={styles.input} />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginVertical: 12,
          justifyContent: "space-between",
        }}
      >
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
        <BlogCard
          image={require("../images/beyerdynamic.jpg")}
          name="Top 5 Skateboards for Beginners"
          description="A roundup of the best skateboards for those just starting out."
          onPress={() =>
            navigation.navigate("Details", {
              image: require("../images/beyerdynamic.jpg"),
              title: "Top 5 Skateboards for Beginners",
              shortDesc:
                "A roundup of the best skateboards for those just starting out.",
              longDesc:
                "Choosing your first skateboard can be overwhelming. In this blog, we review the top 5 boards for beginners, covering features, price, and durability. Learn what to look for and how to avoid common mistakes when buying your first skateboard.",
            })
          }
        />
        <BlogCard
          image={require("../images/beyerdynamic.jpg")}
          name="How to Maintain Your Skateboard"
          description="Tips and tricks for keeping your skateboard in top shape."
          onPress={() =>
            navigation.navigate("Details", {
              image: require("../images/beyerdynamic.jpg"),
              title: "How to Maintain Your Skateboard",
              shortDesc:
                "Tips and tricks for keeping your skateboard in top shape.",
              longDesc:
                "Proper maintenance is key to a smooth ride and long-lasting board. This blog covers cleaning, bearing care, wheel rotation, and deck protection. Discover how regular upkeep can save you money and improve your skating experience.",
            })
          }
        />
        <BlogCard
          image={require("../images/beyerdynamic.jpg")}
          name="Skateboarding Safety: Essential Gear"
          description="A guide to helmets, pads, and shoes for safe skating."
          onPress={() =>
            navigation.navigate("Details", {
              image: require("../images/beyerdynamic.jpg"),
              title: "Skateboarding Safety: Essential Gear",
              shortDesc:
                "A guide to helmets, pads, and shoes for safe skating.",
              longDesc:
                "Safety should always come first. We break down the must-have gear for skateboarders, including helmet types, knee and elbow pads, and the best shoes for grip and protection. Stay safe and skate smart with these expert recommendations.",
            })
          }
        />
        <BlogCard
          image={require("../images/beyerdynamic.jpg")}
          name="The History of Skateboarding"
          description="Explore the origins and evolution of skateboarding culture."
          onPress={() =>
            navigation.navigate("Details", {
              image: require("../images/beyerdynamic.jpg"),
              title: "The History of Skateboarding",
              shortDesc:
                "Explore the origins and evolution of skateboarding culture.",
              longDesc:
                "From its humble beginnings in the 1950s to the global phenomenon it is today, skateboarding has a rich history. This blog traces the sport’s evolution, key figures, and how skateboarding became a cultural icon.",
            })
          }
        />
        <BlogCard
          image={require("../images/beyerdynamic.jpg")}
          name="Skateboarding Tricks: Step-by-Step Guide"
          description="Learn how to master basic and advanced tricks."
          onPress={() =>
            navigation.navigate("Details", {
              image: require("../images/beyerdynamic.jpg"),
              title: "Skateboarding Tricks: Step-by-Step Guide",
              shortDesc: "Learn how to master basic and advanced tricks.",
              longDesc:
                "Ready to take your skills to the next level? This blog offers step-by-step instructions for popular tricks like ollies, kickflips, and grinds. Perfect for skaters looking to progress and impress at the skatepark.",
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

export default BlogsScreen;