import * as React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const PasswordForm = () => {
  return (
    <View style={styles.default}>
      <View style={[styles.stroke, styles.strokePosition]} />
      <TextInput
        style={styles.spSubheadingRegular}
        placeholder="Password"
        keyboardType="default"
        placeholderTextColor="rgba(0, 0, 0, 0.87)"
      />
      <Image
        style={[styles.lockIcon, styles.strokePosition]}
        contentFit="cover"
        source={require("../assets/lock.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  strokePosition: {
    opacity: 0.4,
    right: 0,
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
    alignItems: "center",
    justifyContent: "center",
    opacity: 0.54,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_base,
    left: 0,
    right: 0,
    position: "absolute",
  },
  lockIcon: {
    bottom: 1,
    width: 32,
    height: 32,
  },
  default: {
    width: 328,
    height: 56,
    marginTop: -2,
  },
});

export default PasswordForm;
