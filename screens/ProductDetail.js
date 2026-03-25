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

const ProductDetail = ({ route }) => {
  const { image, title, description, price } = route.params;

  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    quantity < 100 ? setQuantity(quantity + 1) : null;
  };
  const decreaseQuantity = () => {
    quantity > 1 ? setQuantity(quantity - 1) : null;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Details</Text>
      <Image source={image} style={styles.image} />
      <Text style={styles.productTitle}>{title}</Text>
      <Text style={styles.productDescription}>{description}</Text>
      <Text style={styles.productPrice}>
        ${typeof price === "number" ? price.toFixed(2) : price}
      </Text>
      <View style={styles.quantityContainer}>
        <TouchableOpacity
          style={styles.quantityButton}
          onPress={decreaseQuantity}
        >
          <Text style={styles.quantityButtonText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantityText}>{quantity}</Text>
        <TouchableOpacity
          style={styles.quantityButton}
          onPress={increaseQuantity}
        >
          <Text style={styles.quantityButtonText}>+</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          alert(
            `You bought ${quantity} skateboard(s) for $ ${(price * quantity).toFixed(2)}`,
          )
        }
      >
        <Text style={styles.buttonText}>Buy Now</Text>
        <Text style={styles.buttonText}>
          Total price: $ {(price * quantity).toFixed(2)}
        </Text>
      </TouchableOpacity>
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
  },
  productTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 16,
    textAlign: "center",
  },
  productDescription: {
    fontSize: 16,
    color: "#d0d0d0",
    marginTop: 8,
    textAlign: "center",
  },
  productPrice: {
    fontSize: 20,
    color: "#fff",
    marginTop: 12,
    fontWeight: "700",
    textAlign: "center",
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