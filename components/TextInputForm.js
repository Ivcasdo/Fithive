import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { TextInput as RNPTextInput } from "react-native-paper";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const TextInputForm = () => {
  return (
    <View style={[styles.focused, styles.focusedPosition]}>
      <LinearGradient
        style={[styles.dark, styles.darkPosition]}
        locations={[0, 1]}
        colors={["#1a73e9", "#6c92f4"]}
      />
      <RNPTextInput
        style={[styles.spSubheadingRegular, styles.focusedPosition]}
        placeholder="ejemplo1234@gmail.com"
        label="Label"
        mode="outlined"
        placeholderTextColor="rgba(0, 0, 0, 0.87)"
        theme={{ colors: { text: "rgba(0, 0, 0, 0.87)" } }}
      />
      <View style={styles.email}>
        <View style={styles.iconsPosition}>
          <View style={[styles.iconsButton, styles.darkPosition]} />
        </View>
        <View style={[styles.iconsColorizer, styles.iconsPosition]} />
      </View>
      <View style={[styles.caption, styles.captionPosition]}>
        <Text style={[styles.caption1, styles.captionPosition]}>
          E-mail address
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  focusedPosition: {
    left: 0,
    right: 0,
    position: "absolute",
  },
  darkPosition: {
    bottom: 0,
    left: 0,
    right: 0,
    position: "absolute",
  },
  iconsPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  captionPosition: {
    height: 16,
    left: 0,
    position: "absolute",
  },
  dark: {
    top: 54,
    backgroundColor: "transparent",
  },
  spSubheadingRegular: {
    bottom: 6,
    height: 20,
    opacity: 0.87,
  },
  iconsButton: {
    borderRadius: Border.br_11xs,
    backgroundColor: Color.lightColor,
    display: "none",
    top: 0,
  },
  iconsColorizer: {
    backgroundColor: Color.color,
  },
  email: {
    bottom: 2,
    width: 32,
    height: 32,
    overflow: "hidden",
    right: 0,
    position: "absolute",
  },
  caption1: {
    fontSize: FontSize.spCaptionRegular_size,
    lineHeight: 15,
    fontFamily: FontFamily.spCaptionRegular,
    color: Color.textColor,
    textAlign: "left",
    width: 328,
    top: 0,
  },
  caption: {
    bottom: 32,
    right: 0,
  },
  focused: {
    height: 56,
    top: 0,
  },
});

export default TextInputForm;
