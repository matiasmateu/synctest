import React from "react";
import { useQuery } from "@tanstack/react-query";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import { fetchUsers } from "../api/fetchUsers";

const HomeScreen = () => {
  const { data, error, isLoading, isError } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{item.name || "No Name Provided"}</Text>
    </View>
  );

  if (isLoading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (isError) {
    return (
      <View style={styles.centered}>
        <Text style={styles.errorText}>Error: {error.message}</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={data?.users || []}
      renderItem={renderItem}
      keyExtractor={(item) => item._id}
      ListEmptyComponent={
        <View style={styles.centered}>
          <Text>No users found.</Text>
        </View>
      }
      contentContainerStyle={data?.users?.length > 0 ? {} : styles.centered}
    />
  );
};

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  itemContainer: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  itemText: {
    fontSize: 18,
  },
  errorText: {
    color: "red",
    fontSize: 18,
  },
});

export default HomeScreen;
