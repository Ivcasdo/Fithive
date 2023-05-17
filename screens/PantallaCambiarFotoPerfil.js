import * as React from "react";
import {
  Pressable,
  StyleSheet,
  ImageBackground,
  View,
  Text,
} from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const PantallaCambiarFotoPerfil = () => {
  return (
    <View style={styles.pantallaCambiarFotoPerfil}>
      <Image
        style={styles.pantallaCambiarFotoPerfilChild}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <ImageBackground
        style={styles.pantallaCambiarFotoPerfilItem}
        resizeMode="cover"
        source={require("../assets/ellipse2.png")}
      />
      <Pressable style={styles.default}>
        <View style={[styles.light, styles.lightPosition]}>
          <View style={[styles.bgLight, styles.bgLightPosition]} />
        </View>
        <Image
          style={styles.cameraIcon}
          contentFit="cover"
          source={require("../assets/camera.png")}
        />
        <View style={[styles.spSubheadingRegular, styles.subheadingLayout]}>
          <Text style={[styles.subheading, styles.body2Position]}>
            Seleccionar archivo
          </Text>
        </View>
      </Pressable>
      <Pressable style={[styles.dark, styles.darkPosition]}>
        <Image
          style={[styles.darkIcon, styles.lightPosition]}
          contentFit="cover"
          source={require("../assets/-dark.png")}
        />
      </Pressable>
      <Pressable style={[styles.dark1, styles.darkPosition]}>
        <View style={styles.dark2}>
          <LinearGradient
            style={[styles.bgPrimary, styles.bgLightPosition]}
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
      <View style={[styles.caption, styles.captionLayout]}>
        <Text style={[styles.caption1, styles.captionLayout]}>
          Previsualización
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  lightPosition: {
    left: 0,
    right: 0,
  },
  bgLightPosition: {
    borderRadius: Border.br_7xs,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    position: "absolute",
  },
  subheadingLayout: {
    height: 20,
    position: "absolute",
  },
  body2Position: {
    alignItems: "center",
    display: "flex",
    top: 0,
    left: 0,
  },
  darkPosition: {
    height: 40,
    top: 320,
    position: "absolute",
  },
  body2Layout: {
    height: 24,
    position: "absolute",
  },
  captionLayout: {
    height: 16,
    width: 328,
    position: "absolute",
  },
  pantallaCambiarFotoPerfilChild: {
    top: 18,
    height: 31,
    width: 32,
    left: 13,
    position: "absolute",
  },
  pantallaCambiarFotoPerfilItem: {
    top: 206,
    left: 23,
    width: 89,
    height: 89,
    position: "absolute",
  },
  bgLight: {
    backgroundColor: Color.textColor,
  },
  light: {
    top: 16,
    opacity: 0.06,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  cameraIcon: {
    marginTop: -8,
    height: 32,
    top: "50%",
    right: 0,
    width: 32,
    position: "absolute",
  },
  subheading: {
    fontSize: FontSize.spSubheadingRegular_size,
    lineHeight: 21,
    width: 312,
    textAlign: "left",
    color: Color.textColor,
    fontFamily: FontFamily.spSubheadingRegular,
    height: 20,
    position: "absolute",
  },
  spSubheadingRegular: {
    marginTop: -2,
    opacity: 0.54,
    left: 8,
    right: 8,
    top: "50%",
  },
  default: {
    width: "91.11%",
    top: 92,
    right: "4.44%",
    left: "4.44%",
    height: 56,
    position: "absolute",
  },
  darkIcon: {
    maxWidth: "100%",
    maxHeight: "100%",
    top: 0,
    bottom: 0,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  dark: {
    right: 105,
    width: 72,
  },
  bgPrimary: {
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
    justifyContent: "center",
    width: 112,
    alignItems: "center",
    display: "flex",
    top: 0,
    left: 0,
  },
  spBody2Medium: {
    marginTop: -12,
    height: 24,
    top: "50%",
    left: 0,
    right: 0,
  },
  flatdefault: {
    marginTop: -12,
    height: 24,
    top: "50%",
    left: 8,
    right: 8,
  },
  dark1: {
    left: 19,
    width: 128,
  },
  caption1: {
    left: 6,
    fontSize: FontSize.spCaptionRegular_size,
    lineHeight: 15,
    textAlign: "left",
    color: Color.textColor,
    fontFamily: FontFamily.spSubheadingRegular,
    top: 0,
  },
  caption: {
    top: 185,
    left: 13,
    height: 16,
    width: 328,
  },
  pantallaCambiarFotoPerfil: {
    backgroundColor: Color.lightColor,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default PantallaCambiarFotoPerfil;
