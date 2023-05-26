import * as React from "react";
import { Pressable, StyleSheet, View, TextInput, Text } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const PantallaCambioCorreoElectro = () => {
  return (
    <View style={styles.pantallaCambioCorreoElectro}>
      <Image
        style={[
          styles.pantallaCambioCorreoElectroChild,
          styles.emailIconLayout,
        ]}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <View style={[styles.default, styles.defaultPosition]}>
        <View style={[styles.stroke, styles.primaryPosition]}>
          <View style={[styles.bgPrimary, styles.primaryPosition]} />
        </View>
        <TextInput
          style={styles.spSubheadingRegular}
          placeholder="Email"
          keyboardType="default"
          placeholderTextColor="rgba(0, 0, 0, 0.87)"
        />
        <View style={[styles.caption, styles.captionPosition]}>
          <Text style={[styles.caption1, styles.captionPosition]}>
            Confirmar correo electronico
          </Text>
        </View>
        <Image
          style={[styles.emailIcon, styles.emailIconLayout]}
          contentFit="cover"
          source={require("../assets/email1.png")}
        />
      </View>
      <View style={[styles.default1, styles.defaultPosition]}>
        <View style={[styles.stroke, styles.primaryPosition]}>
          <View style={[styles.bgPrimary, styles.primaryPosition]} />
        </View>
        <TextInput
          style={styles.spSubheadingRegular}
          placeholder="Email"
          keyboardType="default"
          placeholderTextColor="rgba(0, 0, 0, 0.87)"
        />
        <View style={[styles.caption, styles.captionPosition]}>
          <Text style={[styles.caption1, styles.captionPosition]}>
            Correo electronico
          </Text>
        </View>
        <Image
          style={[styles.emailIcon, styles.emailIconLayout]}
          contentFit="cover"
          source={require("../assets/email1.png")}
        />
      </View>
      <Pressable style={[styles.dark, styles.darkPosition]}>
        <Image
          style={[styles.darkIcon, styles.primaryPosition]}
          contentFit="cover"
          source={require("../assets/-dark2.png")}
        />
      </Pressable>
      <Pressable style={[styles.dark1, styles.darkPosition]}>
        <View style={styles.dark2}>
          <LinearGradient
            style={[styles.bgPrimary2, styles.primaryPosition]}
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
    </View>
  );
};

const styles = StyleSheet.create({
  emailIconLayout: {
    width: 32,
    position: "absolute",
  },
  defaultPosition: {
    height: 56,
    right: 13,
    left: 19,
    position: "absolute",
  },
  primaryPosition: {
    bottom: 0,
    left: 0,
    right: 0,
    position: "absolute",
  },
  captionPosition: {
    height: 16,
    left: 0,
    position: "absolute",
  },
  darkPosition: {
    height: 40,
    top: 225,
    position: "absolute",
  },
  body2Layout: {
    height: 24,
    position: "absolute",
  },
  pantallaCambioCorreoElectroChild: {
    top: 18,
    left: 13,
    height: 31,
  },
  bgPrimary: {
    backgroundColor: Color.textColor,
    top: 0,
    left: 0,
  },
  stroke: {
    height: 1,
    opacity: 0.4,
    left: 0,
  },
  spSubheadingRegular: {
    right: 44,
    bottom: 6,
    height: 20,
    opacity: 0.54,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.robotoRegular,
    left: 0,
    position: "absolute",
  },
  caption1: {
    fontSize: FontSize.size_xs,
    lineHeight: 15,
    color: Color.textColor,
    textAlign: "left",
    width: 328,
    fontFamily: FontFamily.robotoRegular,
    top: 0,
  },
  caption: {
    bottom: 32,
    right: 0,
  },
  emailIcon: {
    bottom: 2,
    height: 32,
    right: 0,
    overflow: "hidden",
  },
  default: {
    top: 136,
  },
  default1: {
    top: 76,
  },
  darkIcon: {
    maxWidth: "100%",
    maxHeight: "100%",
    top: 0,
    left: 0,
    overflow: "hidden",
  },
  dark: {
    right: 105,
    width: 72,
  },
  bgPrimary2: {
    borderRadius: Border.br_7xs,
    shadowColor: "rgba(38, 50, 56, 0.08)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    backgroundColor: Color.accentColor,
    top: 0,
    left: 0,
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
    fontSize: FontSize.size_sm,
    textTransform: "uppercase",
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
    color: Color.lightColor,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 112,
    top: 0,
    left: 0,
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
    height: 40,
    top: 225,
  },
  pantallaCambioCorreoElectro: {
    backgroundColor: Color.lightColor,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default PantallaCambioCorreoElectro;
