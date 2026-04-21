import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Switch,
  TextInput,
} from "react-native";
import ProductCard from "../components/ProductCard";
import { Picker } from "@react-native-picker/picker";

const categoryNames = {
  "": "All",
  "69b043ea1ff3e4b18572106c": "Accessories",
  "69b043e169f48b9a121bd9c8": "Headphones",
  "69b043d7696f877f841f9863": "Studio monitors",
  "69b043cdc573fc0c09fc7c0c": "Audio interfaces",
  "69b043c27c2fea5fdb68868c": "Microphones",
};

const HomeScreen = ({ navigation }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("price-asc");

  const toggleSwitch = () => setIsEnabled(!isEnabled);

  useEffect(() => {
    fetch(
      "https://api.webflow.com/v2/sites/699e37e5e46268361233ebf4/products",
      {
        headers: {
          Authorization:
            "Bearer fb47e70a80baa68fd5c4c95679f5d451a55a64f65274cfe7192dede29301bfee",
        },
      },
    )
      .then((res) => res.json())
      .then((data) => {
        const fetchedProducts = (data.items || []).map((item) => {
          const product = item?.product || {};
          const productFieldData = product?.fieldData || {};
          const firstCategoryId = Array.isArray(productFieldData.category)
            ? productFieldData.category[0]
            : undefined;
          const imageUrl = item?.skus?.[0]?.fieldData?.["main-image"]?.url;

          return {
            id: product?.id || item?.id,
            title: productFieldData.name || "Unknown Product",
            description: productFieldData.subtitle || "",
            price: (
              (item?.skus?.[0]?.fieldData?.price?.value || 0) / 100
            ).toFixed(2),
            image: imageUrl ? { uri: imageUrl } : null,
            category: categoryNames[firstCategoryId] || "Unknown Category",
          };
        });

        setProducts(fetchedProducts);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const filteredProducts = products.filter(
    (p) =>
      (selectedCategory === "" || p.category === selectedCategory) &&
      p.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === "price-asc")
      return parseFloat(a.price) - parseFloat(b.price);
    if (sortOption === "price-desc")
      return parseFloat(b.price) - parseFloat(a.price);
    if (sortOption === "name-asc") return a.title.localeCompare(b.title);
    if (sortOption === "name-desc") return b.title.localeCompare(a.title);
    return 0;
  });



  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Our offer</Text>
      <TextInput 
        placeholder="Search a product..." 
        style={styles.input} 
        value={searchQuery}
        onChangeText={setSearchQuery}
        placeholderTextColor="#a0a0a0"
        />

      <Picker
        selectedValue={selectedCategory}
        onValueChange={setSelectedCategory}
        style={styles.picker}
        dropdownIconColor="#fff" 
      >
        <Picker.Item label="All" value="" />
        <Picker.Item label="Accesories" value="Accessories" />
        <Picker.Item label="Headphones" value="Headphones" />
        <Picker.Item label="Studio monitors" value="Studio monitors" />
        <Picker.Item label="Audio interfaces" value="Audio interfaces" />
        <Picker.Item label="Microphones" value="Microphones" />
      </Picker>

      <Picker
        selectedValue={sortOption}
        onValueChange={setSortOption}
        style={styles.picker}
        dropdownIconColor="#fff" 
      >
        <Picker.Item label="Price: Low to High" value="price-asc" />
        <Picker.Item label="Price: High to Low" value="price-desc" />
        <Picker.Item label="Name: A to Z" value="name-asc" />
        <Picker.Item label="Name: Z to A" value="name-desc" />
      </Picker>

      <View
        style={styles.promotionsContainer}>
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
        {sortedProducts.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            name={product.title}
            description={product.description}
            price={product.price}
            onPress={() => navigation.navigate("ProductDetail", product)}
          />
        ))}
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
    color: "#000000",
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  picker: {
    color: "#fff",
    padding: 5,
  }
});

export default HomeScreen;