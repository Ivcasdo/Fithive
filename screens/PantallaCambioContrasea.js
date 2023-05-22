import * as React from "react";
import { Pressable, StyleSheet, View, TextInput, Text } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const PantallaCambioContrasea = () => {
  return (
    <View style={styles.pantallaCambioContrasea}>
      <Image
        style={styles.pantallaCambioContraseaChild}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <View style={styles.defaultParent}>
        <View style={[styles.default, styles.defaultPosition]}>
          <View style={[styles.stroke, styles.strokePosition]} />
          <TextInput
            style={[styles.spSubheadingRegular, styles.body2FlexBox]}
            placeholder="Password"
            keyboardType="default"
            placeholderTextColor="rgba(0, 0, 0, 0.87)"
          />
          <View style={[styles.caption, styles.captionPosition]}>
            <Text style={styles.caption1}>Default name</Text>
          </View>
          <Image
            style={[styles.lockIcon, styles.strokePosition]}
            contentFit="cover"
            source={require("../assets/lock.png")}
          />
          <View style={styles.captionPosition}>
            <Text style={styles.caption1}>Nueva contraseña</Text>
          </View>
        </View>
        <View style={[styles.default1, styles.body2Position]}>
          <View style={[styles.stroke, styles.strokePosition]} />
          <TextInput
            style={[styles.spSubheadingRegular, styles.body2FlexBox]}
            placeholder="Password"
            keyboardType="default"
            placeholderTextColor="rgba(0, 0, 0, 0.87)"
          />
          <View style={[styles.caption, styles.captionPosition]}>
            <Text style={styles.caption1}>Default name</Text>
          </View>
          <Image
            style={[styles.lockIcon, styles.strokePosition]}
            contentFit="cover"
            source={require("../assets/lock.png")}
          />
          <View style={styles.captionPosition}>
            <Text style={styles.caption1}>Confirmar antigua contraseña</Text>
          </View>
        </View>
        <View style={[styles.default2, styles.defaultPosition]}>
          <View style={[styles.stroke, styles.strokePosition]} />
          <TextInput
            style={[styles.spSubheadingRegular, styles.body2FlexBox]}
            placeholder="Confirm password"
            keyboardType="default"
            placeholderTextColor="rgba(0, 0, 0, 0.87)"
          />
          <View style={[styles.caption, styles.captionPosition]}>
            <Text style={styles.caption1}>Default name</Text>
          </View>
          <Image
            style={[styles.lockIcon, styles.strokePosition]}
            contentFit="cover"
            source={require("../assets/lockopen.png")}
          />
          <View style={styles.captionPosition}>
            <Text style={styles.caption1}>Confirmar nueva contraseña</Text>
          </View>
        </View>
      </View>
      <Pressable style={[styles.dark, styles.darkPosition1]}>
        <Image
          style={[styles.darkIcon, styles.darkPosition]}
          contentFit="cover"
          source={require("../assets/-dark2.png")}
        />
      </Pressable>
      <Pressable style={[styles.dark1, styles.darkPosition1]}>
        <LinearGradient
          style={[styles.dark2, styles.darkPosition]}
          locations={[0, 1]}
          colors={["#1a73e9", "#6c92f4"]}
        />
        <View style={[styles.flatdefault, styles.body2Layout]}>
          <View style={[styles.spBody2Medium, styles.body2Layout]}>
            <Text style={[styles.body2, styles.body2Layout]}>Guardar</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  defaultPosition: {
    height: 56,
    right: 0,
    position: "absolute",
  },
  strokePosition: {
    opacity: 0.4,
    right: 0,
    position: "absolute",
  },
  body2FlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  captionPosition: {
    bottom: 32,
    justifyContent: "center",
    alignItems: "center",
    left: 0,
    right: 0,
    position: "absolute",
  },
  body2Position: {
    top: 0,
    left: 0,
  },
  darkPosition1: {
    height: 40,
    top: 294,
    position: "absolute",
  },
  darkPosition: {
    borderRadius: Border.br_7xs,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    position: "absolute",
  },
  body2Layout: {
    height: 24,
    position: "absolute",
  },
  pantallaCambioContraseaChild: {
    top: 18,
    left: 13,
    height: 31,
    width: 32,
    position: "absolute",
  },
  stroke: {
    top: 55,
    backgroundColor: Color.textColor,
    bottom: 0,
    opacity: 0.4,
    left: 0,
  },
  spSubheadingRegular: {
    bottom: 6,
    opacity: 0.54,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.spBody1Regular,
    left: 0,
    right: 0,
    position: "absolute",
  },
  caption1: {
    fontSize: FontSize.spCaptionRegular_size,
    lineHeight: 15,
    color: Color.textColor,
    textAlign: "left",
    height: 16,
    fontFamily: FontFamily.spBody1Regular,
    width: 328,
  },
  caption: {
    display: "none",
  },
  lockIcon: {
    bottom: 1,
    height: 32,
    width: 32,
  },
  default: {
    top: 56,
    left: 0,
  },
  default1: {
    height: 56,
    right: 0,
    position: "absolute",
  },
  default2: {
    top: 112,
    left: 0,
  },
  defaultParent: {
    top: 80,
    height: 168,
    width: 328,
    left: 19,
    position: "absolute",
  },
  darkIcon: {
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  dark: {
    right: 105,
    width: 72,
  },
  dark2: {
    shadowColor: "rgba(38, 50, 56, 0.08)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    backgroundColor: Color.primaryColor,
  },
  body2: {
    fontSize: FontSize.spBody2Medium_size,
    textTransform: "uppercase",
    fontWeight: "500",
    fontFamily: FontFamily.spBody2Medium,
    color: Color.lightColor,
    textAlign: "center",
    display: "flex",
    width: 112,
    top: 0,
    left: 0,
    justifyContent: "center",
    alignItems: "center",
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
    left: 19,
  },
  pantallaCambioContrasea: {
    backgroundColor: Color.lightColor,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default PantallaCambioContrasea;
