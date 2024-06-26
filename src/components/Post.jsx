import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CalendarIcon from "../components/icons/CalendarIcon";
import MenuIcon from "../components/icons/MenuIcon";
import React from "react";

const Post = ({ post }) => {
  return (
    <View style={styles.postContainer}>
      <View style={styles.postOwnerData}>
        <Image
          style={styles.postOwnerAvatar}
          source={require("../assets/images/avatar.png")}
        />
        <View style={styles.postOwnerMetadata}>
          <Text style={styles.postOwnerName}>Mouad Nassri</Text>
          <Text style={styles.postOwnerRole}>Web / mobile developer</Text>
        </View>
        <TouchableOpacity style={styles.menuButton}>
          <MenuIcon width={20} height={20} />
        </TouchableOpacity>
      </View>
      <View style={styles.postDateContainer}>
        <CalendarIcon width={16} height={16} fill="#7a7a7a" />
        <Text style={styles.postDate}>Jun 2, 2024 | at 04:00 PM</Text>
      </View>
      <Text style={styles.postTitle}>{post.title}</Text>
      <Text numberOfLines={3} style={styles.postBody}>
        {post.body}
      </Text>
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  postContainer: {
    paddingVertical: 14,
    paddingHorizontal: 16,
    backgroundColor: "white",
    marginBottom: 12,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: "#d0d8dc",
    gap: 6,
  },
  postTitle: {
    fontWeight: "700",
    letterSpacing: 0.4,
    lineHeight: 20,
    color: "#0088ff",
  },
  postBody: {
    lineHeight: 20,
  },
  postOwnerData: {
    flexDirection: "row",
    gap: 8,
  },
  postOwnerMetadata: {
    flex: 1,
  },
  postOwnerAvatar: {
    width: 34,
    height: 34,
  },
  postOwnerName: {
    marginTop: -2,
    fontWeight: "700",
  },
  postOwnerRole: {
    fontSize: 12,
    lineHeight: 18,
  },
  postDateContainer: {
    flexDirection: "row",
    gap: 4,
    marginTop: 4,
  },
  postDate: {
    fontSize: 12,
    color: "#666666",
  },
  menuButton: {
    padding: 6,
  },
});
