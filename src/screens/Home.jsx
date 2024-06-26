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
import Glimmer from "../components/Glimmer";
import Post from "../components/Post";

const PAGE_SIZE = 8;

const Home = () => {
  const [bootstrapped, setBootstrapped] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);
  const [posts, setPosts] = useState([]);

  const fetch = async () => {
    console.log("fetchinf");
    axios
      .get(
        `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${
          PAGE_SIZE + 1
        }`
      )
      .then((response) => {
        console.log(response.data);
        const data = response.data;
        const items = response.data.slice(0, 8);

        setHasMore(data.length > PAGE_SIZE);
        if (posts.length === 0) {
          setBootstrapped(true);
          setPosts(items);
        } else {
          setPosts((v) => [...v, ...items]);
        }
      });
  };

  const fetchMore = () => {
    setPage((value) => value + 1);
  };

  useEffect(() => {
    fetch();
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
            return <Post post={post} />;
          }}
          ListFooterComponent={hasMore && <Glimmer />}
          onEndReached={fetchMore}
          onEndReachedThreshold={0.2}
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
});
