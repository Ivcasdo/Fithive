import * as React from "react";
import { View, StyleSheet, Text, Pressable, TextInput } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import PantallaCreacionDePlanes3 from "../components/PantallaCreacionDePlanes3";
import { Color } from "../GlobalStyles";

const PantallaCreacionDePlanes31 = () => {
  return (
    <View style={styles.pantallaCreacionDePlanes3}>
      <PantallaCreacionDePlanes3 />
    </View>
  );
};

const styles = StyleSheet.create({
  pantallaCreacionDePlanes3: {
    backgroundColor: Color.lightColor,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default PantallaCreacionDePlanes31;
