import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Shimmer = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={[styles.glimmer, styles.avatar]} />
        <View>
          <View style={[styles.glimmer, styles.name]} />
          <View style={[styles.glimmer, styles.desc]} />
        </View>
        <View style={[styles.glimmer, styles.menuButton]} />
      </View>

      <View style={[styles.glimmer, styles.title]} />
      <View style={[styles.glimmer, styles.body]} />
    </View>
  );
};

export default Shimmer;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    paddingTop: 14,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: "#d0d8dc",
    gap: 6,
  },
  header: {
    flexDirection: "row",
    gap: 8,
  },
  glimmer: {
    backgroundColor: "#cfd6da",
    borderRadius: 3,
  },
  avatar: {
    borderRadius: 100,
    width: 34,
    height: 34,
  },
  name: {
    width: 80,
    height: 16,
  },
  desc: {
    width: 120,
    height: 12,
    marginTop: 4,
  },
  menuButton: {
    width: 20,
    height: 20,
    margin: 6,
    marginLeft: "auto",
  },
  date: {
    width: 226,
    height: 16,
  },
  title: {
    width: "100%",
    height: 18,
  },
  body: {
    width: "100%",
    height: 38,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
});
