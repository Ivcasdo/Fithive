import * as React from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const TextInputForm = () => {
  return (
    <View style={styles.focused}>
      <LinearGradient
        style={styles.dark}
        locations={[0, 1]}
        colors={["#1a73e9", "#6c92f4"]}
      />
      <TextInput
        style={[styles.spSubheadingRegular, styles.captionPosition]}
        placeholder="ejemplo1234@gmail.com"
        keyboardType="default"
        placeholderTextColor="rgba(0, 0, 0, 0.87)"
      />
      <Image
        style={styles.emailIcon}
        contentFit="cover"
        source={require("../assets/email.png")}
      />
      <View style={[styles.caption, styles.captionPosition]}>
        <Text style={styles.caption1}>E-mail address</Text>
      </View>
      <View style={styles.focusedChild} />
    </View>
  );
};

const styles = StyleSheet.create({
  captionPosition: {
    justifyContent: "center",
    alignItems: "center",
    left: 0,
    right: 0,
    position: "absolute",
  },
  dark: {
    top: 54,
    bottom: 0,
    backgroundColor: Color.accentColor,
    left: 0,
    right: 0,
    position: "absolute",
  },
  spSubheadingRegular: {
    bottom: 6,
    opacity: 0.87,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.robotoRegular,
  },
  emailIcon: {
    bottom: 2,
    width: 32,
    height: 32,
    overflow: "hidden",
    right: 0,
    position: "absolute",
  },
  caption1: {
    fontSize: FontSize.size_xs,
    lineHeight: 15,
    color: Color.textColor,
    textAlign: "left",
    height: 16,
    fontFamily: FontFamily.robotoRegular,
    width: 328,
  },
  caption: {
    bottom: 32,
  },
  focusedChild: {
    top: -192,
    left: -16,
    backgroundColor: Color.gainsboro,
    width: 360,
    height: 13,
    position: "absolute",
  },
  focused: {
    height: 56,
    width: 328,
  },
});

export default TextInputForm;
