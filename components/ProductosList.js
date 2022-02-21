import React from "react";
import { StyleSheet, Text, FlatList } from "react-native";

export default function ProductosList(props) {
  const { productos } = props;

  return (
    <FlatList
      data={productos}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(productos) => String(productos.id)}
      renderItem={({ item }) => <Text>{item.nombre}</Text>}
      contentContainerStyle={styles.flatListContentContainer}
    />
  );
}

const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 5,
  },
});