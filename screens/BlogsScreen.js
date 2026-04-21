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
import BlogCard from "../components/BlogCard.js";
import { useFocusEffect } from "@react-navigation/native";
import { Picker } from "@react-native-picker/picker";

const categoryNames = {
  "": "All",

  "69b0376a7459e9b475760cab": "Recording tips",
  "69b0374e2d9b4bddafa45826": "Gear",
  "69b0374124d44ca78ceb52a1": "Studio setup",
};

const BlogsScreen = ({ navigation }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("name-asc");

  const toggleSwitch = () => setIsEnabled(!isEnabled);

  useFocusEffect(React.useCallback(() => {}, [navigation]));

  useEffect(() => {
    fetch(
      "https://api.webflow.com/v2/sites/699e37e5e46268361233ebf4/collections/699ef9e0d624073dc36552b9/items/",
      {
        headers: {
          Authorization:
            "Bearer fb47e70a80baa68fd5c4c95679f5d451a55a64f65274cfe7192dede29301bfee",
        },
      },
    )
      .then((res) => res.json())
      .then((data) => {
        const fetchedBlogs = (data.items || []).map((item) => {
          const fieldData = item.fieldData || {};
          const rawImage =
            fieldData["main-image"] ||
            fieldData.image ||
            fieldData.thumbnail ||
            fieldData.heroImage;

          return {
            id: item.id,
            title: fieldData.name || fieldData.title || "Blog",
            description:
              fieldData.summary ||
              fieldData.description ||
              fieldData.subtitle ||
              "",
            author: fieldData.author || "Unknown author",
            date: fieldData.date || fieldData["publish-date"] || "",
            body:
              fieldData["post-body"]
                .replace(/<[^>]+>/g, " ")
                .replace(/\u00A0/g, " ") ||
              fieldData.content
                .replace(/<[^>]+>/g, " ")
                .replace(/\u00A0/g, " ") ||
              "",
            image: rawImage?.url ? { uri: rawImage.url } : null,
            category: categoryNames[fieldData.category] || "Uncategorized",
          };
        });

        if (fetchedBlogs.length > 0) {
          setBlogs(fetchedBlogs);
        }
      })
      .catch((error) => console.error("Error fetching blogs:", error));
  }, []);

  const filteredBlogs = blogs.filter(
    (b) =>
      (selectedCategory === "" || b.category === selectedCategory) &&
      b.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const sortedBlogs = [...filteredBlogs].sort((a, b) => {
    if (sortOption === "name-asc") return a.title.localeCompare(b.title);
    if (sortOption === "name-desc") return b.title.localeCompare(a.title);
    return 0;
  });

  return (
 <View style={styles.container}>
      <Text style={styles.heading}>Blogs</Text>
      <TextInput
        placeholder="Search a blog..."
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
        <Picker.Item label="Gear" value="Gear" />
        <Picker.Item label="Recording tips" value="Recording tips" />
        <Picker.Item label="Studio setup" value="Studio setup" />
      </Picker>
      <Picker
        selectedValue={sortOption}
        onValueChange={setSortOption}
        style={styles.picker}
        dropdownIconColor="#fff"
      >
        <Picker.Item label="Name: A to Z" value="name-asc" />
        <Picker.Item label="Name: Z to A" value="name-desc" />
      </Picker>
      <ScrollView style={styles.container} contentContainerStyle={styles.list}>
        {sortedBlogs.map((blog) => (
          <BlogCard
            key={blog.id}
            image={blog.image}
            name={blog.title}
            description={blog.description}
            onPress={() => navigation.navigate("BlogDetail", blog)}
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
    color: "#737373",
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
    picker: {
    color: "#fff",
    padding: 5,
  }
});

export default BlogsScreen;