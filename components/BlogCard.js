import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity,
} from "react-native";

const BlogCard = ({
  image,
  name,
  shortdescription,
  longdescription,
  onPress,
}) => {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.description}>{shortdescription}</Text>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>Read more</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "48%",
    padding: 16,
    backgroundColor: "#1c887f",
    borderRadius: 12,
    marginBottom: 16,
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 8,
    color: "#fff",
  },
  description: {
    fontSize: 14,
    color: "#d0d0d0",
    marginTop: 4,
  },
  price: {
    fontSize: 16,
    color: "#fff",
    marginTop: 8,
    fontWeight: "700",
  },
  button: {
    marginTop: 12,
    backgroundColor: "#ff0000",
    color: "#fff",
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontWeight: "700",
  },
});

export default BlogCard;