import * as React from "react";
import { Pressable, StyleSheet, View, Text, TextInput } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const PantallaCambioNombreUsuairo = () => {
  return (
    <View style={styles.pantallaCambioNombreUsuairo}>
      <Image
        style={styles.pantallaCambioNombreUsuairoChild}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Pressable style={[styles.dark, styles.darkLayout]}>
        <Image
          style={[styles.darkIcon, styles.primaryPosition]}
          contentFit="cover"
          source={require("../assets/-dark.png")}
        />
      </Pressable>
      <Pressable style={[styles.dark1, styles.dark1Position]}>
        <View style={styles.dark2}>
          <LinearGradient
            style={[styles.bgPrimary, styles.primaryPosition]}
            locations={[0, 1]}
            colors={["#1a73e9", "#6c92f4"]}
          />
        </View>
        <View style={[styles.flatdefault, styles.body2Layout]}>
          <View style={[styles.spBody2Medium, styles.body2Layout]}>
            <Text style={[styles.body2, styles.body2Layout]}>Guardar</Text>
          </View>
        </View>
      </Pressable>
      <View style={[styles.default, styles.dark1Position]}>
        <View style={[styles.stroke, styles.strokePosition]}>
          <View style={[styles.bgPrimary1, styles.primaryPosition]} />
        </View>
        <TextInput
          style={styles.spSubheadingRegular}
          placeholder="First name"
          keyboardType="default"
          placeholderTextColor="rgba(0, 0, 0, 0.87)"
        />
        <Image
          style={[styles.permIdentityIcon, styles.strokePosition]}
          contentFit="cover"
          source={require("../assets/perm-identity.png")}
        />
        <View style={[styles.caption, styles.captionPosition]}>
          <Text style={[styles.caption1, styles.captionPosition]}>
            Nuevo nombre de usuario
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  darkLayout: {
    height: 40,
    top: 203,
  },
  primaryPosition: {
    bottom: 0,
    left: 0,
  },
  dark1Position: {
    left: 19,
    position: "absolute",
  },
  body2Layout: {
    height: 24,
    position: "absolute",
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
  pantallaCambioNombreUsuairoChild: {
    top: 18,
    left: 13,
    height: 31,
    width: 32,
    position: "absolute",
  },
  darkIcon: {
    maxWidth: "100%",
    maxHeight: "100%",
    left: 0,
    right: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  dark: {
    right: 105,
    width: 72,
    position: "absolute",
  },
  bgPrimary: {
    borderRadius: Border.br_7xs,
    shadowColor: "rgba(38, 50, 56, 0.08)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    backgroundColor: Color.primaryColor,
    left: 0,
    right: 0,
    top: 0,
    position: "absolute",
  },
  dark2: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  body2: {
    fontSize: FontSize.spBody2Medium_size,
    textTransform: "uppercase",
    fontWeight: "500",
    fontFamily: FontFamily.spBody2Medium,
    color: Color.lightColor,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 112,
    left: 0,
    top: 0,
  },
  spBody2Medium: {
    top: "50%",
    marginTop: -12,
    height: 24,
    left: 0,
    right: 0,
  },
  flatdefault: {
    right: 8,
    left: 8,
    top: "50%",
    marginTop: -12,
    height: 24,
  },
  dark1: {
    width: 128,
    height: 40,
    top: 203,
  },
  bgPrimary1: {
    backgroundColor: Color.textColor,
    left: 0,
    right: 0,
    top: 0,
    position: "absolute",
  },
  stroke: {
    height: 1,
    left: 0,
    bottom: 0,
  },
  spSubheadingRegular: {
    bottom: 6,
    height: 20,
    opacity: 0.54,
    fontSize: FontSize.spSubheadingRegular_size,
    fontFamily: FontFamily.spSubheadingRegular,
    left: 0,
    right: 0,
    position: "absolute",
  },
  permIdentityIcon: {
    bottom: 1,
    height: 32,
    width: 32,
  },
  caption1: {
    fontSize: FontSize.spCaptionRegular_size,
    lineHeight: 15,
    color: Color.textColor,
    textAlign: "left",
    width: 328,
    fontFamily: FontFamily.spSubheadingRegular,
    top: 0,
  },
  caption: {
    bottom: 32,
    right: 0,
  },
  default: {
    top: 80,
    right: 13,
    height: 56,
  },
  pantallaCambioNombreUsuairo: {
    backgroundColor: Color.lightColor,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default PantallaCambioNombreUsuairo;
