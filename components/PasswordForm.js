import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { TextInput as RNPTextInput } from "react-native-paper";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const PasswordForm = () => {
  return (
    <View style={[styles.default, styles.defaultPosition]}>
      <View style={[styles.stroke, styles.strokePosition]} />
      <RNPTextInput
        style={[styles.spSubheadingRegular, styles.defaultPosition]}
        placeholder="Password"
        label="Label"
        mode="flat"
        placeholderTextColor="rgba(0, 0, 0, 0.87)"
        theme={{ colors: { text: "rgba(0, 0, 0, 0.87)" } }}
      />
      <View style={[styles.caption, styles.captionPosition]}>
        <Text style={[styles.caption1, styles.captionPosition]}>
          Default name
        </Text>
      </View>
      <Image
        style={[styles.lockIcon, styles.strokePosition]}
        contentFit="cover"
        source={require("../assets/lock.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  defaultPosition: {
    position: "absolute",
    left: 0,
    right: 0,
  },
  strokePosition: {
    opacity: 0.4,
    right: 0,
    position: "absolute",
  },
  captionPosition: {
    height: 16,
    left: 0,
    position: "absolute",
  },
  stroke: {
    top: 55,
    bottom: 0,
    backgroundColor: Color.textColor,
    left: 0,
  },
  spSubheadingRegular: {
    bottom: 6,
    height: 20,
    opacity: 0.54,
    backgroundColor: Color.lightColor,
    left: 0,
    right: 0,
  },
  caption1: {
    top: 0,
    fontSize: FontSize.spCaptionRegular_size,
    lineHeight: 15,
    fontFamily: FontFamily.spCaptionRegular,
    color: Color.textColor,
    textAlign: "left",
    width: 328,
  },
  caption: {
    bottom: 32,
    display: "none",
    right: 0,
  },
  lockIcon: {
    bottom: 1,
    width: 32,
    height: 32,
  },
  default: {
    top: 54,
    height: 56,
    left: 0,
    right: 0,
  },
});

export default PasswordForm;
