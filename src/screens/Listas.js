import React, { useState, useEffect } from "react";

// Core
import { ScrollView, StyleSheet, Text, View } from "react-native";

// Utils
import customStyles from "../utils/styles";
import colors from "../utils/colors";

// Services
import { getTitles } from "../services/api";

function Listas() {
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
      <ScrollView>
        {titles && titles.length > 0
          ? titles.map((title, index) => (
              <View key={index} style={[styles.centerContents, styles.item]}>
                <Text style={styles.text}>{title}</Text>
              </View>
            ))
          : null}
      </ScrollView>
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

export default Listas;
