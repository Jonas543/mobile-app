import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import ProductCard from "../components/ProductCard";

const ProductDetail = ({ route, navigation }) => {
  const { image, title, body } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Details</Text>
      <Image source={image} style={styles.image} />
      <Text style={styles.blogTitle}>{title}</Text>
      <Text style={styles.blogContent}>{body}</Text>

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
  image: {
    width: "100%",
    height: 300,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  blogTitle: {
    fontSize: 24,
    fontWeight: "800",
    color: "#ffffff",
    marginTop: 20,
    textAlign: "center",
    paddingHorizontal: 16,
    lineHeight: 32,
  },
  blogDescription: {
    fontSize: 16,
    color: "#d0d0d0",
    marginTop: 8,
    textAlign: "center",
  },
  blogContent: {
    fontSize: 16,
    color: "#e0e0e0",
    marginTop: 24,
    marginHorizontal: 20,
    marginBottom: 40,
    fontWeight: "400",
    textAlign: "left",
    lineHeight: 28,
    backgroundColor: "#1e1e1e",
    borderRadius: 16,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 3,
  },
  input: {
    marginTop: 16,
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginHorizontal: 32,
    fontSize: 16,
    color: "#737373",
  },
  button: {
    marginTop: 24,
    backgroundColor: "#ff0000",
    borderRadius: 10,
    paddingVertical: 12,
    marginHorizontal: 32,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },
  quantityContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
  },
  quantityButton: {
    backgroundColor: "#555",
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 20,
  },
  quantityButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },
  quantityText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },
});

export default ProductDetail;