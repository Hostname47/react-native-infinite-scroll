import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import SearchIcon from "./icons/SearchIcon";

const Search = () => {
  return (
    <View style={styles.container}>
      <SearchIcon style={styles.searchIcon} />
      <TextInput style={styles.input} placeholder="Search for anything.." />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  searchIcon: {
    position: "absolute",
    zIndex: 2,
    left: 12,
    width: 18,
    height: 18,
    fill: "#9aa2a8",
  },
  input: {
    fontSize: 13,
    flex: 1,
    padding: 8,
    paddingLeft: 38,
    backgroundColor: "white",
    borderRadius: 3,
    borderWidth: 1,
    borderColor: "#cad3d8",
  },
});
