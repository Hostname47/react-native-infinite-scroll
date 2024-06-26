import {
  ActivityIndicator,
  Button,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import EmptyIcon from "../components/icons/EmptyIcon";
import MenuIcon from "../components/icons/MenuIcon";
import CalendarIcon from "../components/icons/CalendarIcon";
import Glimmer from "../components/Glimmer";

const PAGE_SIZE = 8;

const Home = () => {
  const [bootstrapped, setBootstrapped] = useState(true);
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState([]);

  const setup = async () => {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${PAGE_SIZE}`
      )
      .then((response) => {
        setPosts(response.data);
        // if (posts.length === 0) {
        //   setBootstrapped(true);
        //   setPosts(response.data);
        // } else {
        //   setPosts((v) => [...v, ...response.data]);
        // }
      });
  };

  useEffect(() => {
    setup();
  }, [page]);

  return (
    <View style={{ flex: 1 }}>
      {!bootstrapped ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="black" />
        </View>
      ) : posts.length === 0 ? (
        <View style={styles.centeredSection}>
          <EmptyIcon width={36} height={36} />
          <Text style={styles.sectionTitle}>Empty posts list</Text>
          <Text style={styles.sectionSubtitle}>
            Either change you search query or refresh the page
          </Text>
        </View>
      ) : (
        <FlatList
          contentContainerStyle={styles.postsContainer}
          data={posts}
          keyExtractor={(post) => post.id}
          renderItem={({ item: post }) => {
            return (
              <View style={styles.postContainer}>
                <View style={styles.postOwnerData}>
                  <Image
                    style={styles.postOwnerAvatar}
                    source={require("../assets/images/avatar.png")}
                  />
                  <View style={styles.postOwnerMetadata}>
                    <Text style={styles.postOwnerName}>Mouad Nassri</Text>
                    <Text style={styles.postOwnerRole}>
                      Web / mobile developer
                    </Text>
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
          }}
          ListFooterComponent={<Glimmer />}
        />
      )}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 18,
  },
  centeredSection: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    padding: 46,
    gap: 6,
  },
  sectionTitle: {
    fontWeight: "600",
    letterSpacing: 0.4,
    fontSize: 16,
  },
  sectionSubtitle: {
    color: "#5a5a5a",
    letterSpacing: 1,
    textAlign: "center",
    lineHeight: 20,
  },
  postsContainer: {
    padding: 16,
    paddingBottom: 0,
  },
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
