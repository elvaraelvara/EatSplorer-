import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from '@expo/vector-icons';
import Background from "../components/Background";
import { handleSearch } from "../../functions/functions.js";

export default function Search({ navigation }) {
  const [query, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const onSearch = () => {
    handleSearch(query, setSearchResults);
  };

  return (
    <Background>
      <View className="flex flex-row m-1 w-full">
        <TouchableOpacity className="content-start mt-1" onPress={() => navigation.navigate("main")}>
          <Ionicons name="arrow-back" size={25} color="black" />
        </TouchableOpacity>
        <Text className="text-black text-center font-inter text-lg font-semibold mx-4 ">Search</Text>
      </View>
      <TouchableOpacity className = "flex-row items-center justify-center p-3 rounded-lg  m-6 bg-white border border-[#8b91a3]">
        <Ionicons name="search-outline" size={22} color="black" />
        <TextInput
          style={{ flex: 1, marginLeft: 8, color: "#8b91a3", fontSize: 14, fontWeight: "light" }}
          placeholder="Cari restoran atau menu makanan"
          placeholderTextColor="#8b91a3"
          value={query}
          onChangeText={(text) => setSearchQuery(text)}
          editable={true}
          onSubmitEditing={onSearch}
        />
     </TouchableOpacity>
     <View>
        {searchResults.map((result, index) => (
          <Text key={index}>{result.title}</Text>
        ))}
      </View>
      <StatusBar style="auto" />
    </Background>
  );
}
