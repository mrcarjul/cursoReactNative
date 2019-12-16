import React, { useState, useEffect } from "react";

// Core
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";

// Utils
import customStyles from "../utils/styles";
import colors from "../utils/colors";

// Services
import { getTitles } from "../services/api";

function Item({ title, index }) {
  return (
    <View key={index} style={[styles.centerContents, styles.item]}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

function ListaFlatList() {
  const [titles, setTitles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (titles.length === 0) {
      getTitles()
        .then(Titles => {
          setTitles(Titles);
        })
        .catch(err => {
          setError(err);
        });
    }
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={titles} // Debe de ser un arreglo
        renderItem={({ item, index }) => <Item title={item} index={index} />}
        // ListEmptyComponent Lo renderiza cuando nuestro data esta vacio
        // ListFooterComponent Renderiza al final de todos nuestros items
        // ListHeaderComponent Lo Renderiza como elemento al principio de nuestros items
        // getItemLayout Una optimización opcional que le permite al FlatList evitar los calculos de tamaños de cada item(Si ya sabemos el tamaño { lengt: ITEM_HEIGTH, offset: ITEM_HEIGTH * n })

        // onEndReached ejecuta una funcion al llegar al final de la lista

      />
    </View>
  );
}

const styles = StyleSheet.create({
  ...customStyles,
  item: {
    borderBottomWidth: 2,
    borderBottomColor: colors.blue,
    height: 60,
    paddingVertical: 10
  },
  text: {
    fontSize: 21,
    fontStyle: "italic"
  }
});

export default ListaFlatList;
