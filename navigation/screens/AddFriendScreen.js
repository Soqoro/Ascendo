import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";

const AddFriendScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const results = [
    {
      id: 1,
      name: "John Doe",
      imageSource: require("../../assets/player1.png"),
    },
    {
      id: 2,
      name: "Jane Smith",
      imageSource: require("../../assets/player2.png"),
    },
    {
      id: 3,
      name: "Alex Johnson",
      imageSource: require("../../assets/player2.png"),
    },
  ];
  const handleSearch = () => {
    // Perform search logic here
    // Replace the following with your own search implementation
    const results = [
      {
        id: 1,
        name: "John Doe",
        imageSource: require("../../assets/player1.png"),
      },
      {
        id: 2,
        name: "Jane Smith",
        imageSource: require("../../assets/player2.png"),
      },
      {
        id: 3,
        name: "Alex Johnson",
        imageSource: require("../../assets/player2.png"),
      },
    ];
    setSearchResults(results);
  };

  const handleAddFriend = (friend) => {
    // Perform add friend logic here
    console.log("Added friend:", friend);
    // Add your own implementation to add the friend to your list
    navigation.navigate("Games", { friend });
  };

  const renderFriendItem = ({ item }) => (
    <TouchableOpacity
      style={styles.friendCard}
      onPress={() => handleAddFriend(item)}
    >
      <Image source={item.imageSource} style={styles.friendImage} />
      <View style={styles.friendInfo}>
        <Text style={styles.friendName}>{item.name}</Text>
        <Text style={styles.addButtonLabel}>Add Friend</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchBarContainer}>
        <TextInput
          style={styles.searchInput}
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholder="Search friends..."
        />
        <Button title="Search" onPress={handleSearch} />
      </View>
      <FlatList
        data={results}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderFriendItem}
        contentContainerStyle={styles.friendList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  searchBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginRight: 8,
    paddingHorizontal: 10,
  },
  friendList: {
    flexGrow: 1,
  },
  friendCard: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
  },
  friendImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  friendInfo: {
    flex: 1,
    justifyContent: "center",
  },
  friendName: {
    fontSize: 16,
  },
  addButtonLabel: {
    color: "blue",
    fontSize: 16,
  },
});

export default AddFriendScreen;
