import React, { useState } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, TextInput, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Switch as RNPSwitch } from "react-native-paper";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const PantallaCreacionDeEntrenami4 = () => {
  const [switchOnValue, setSwitchOnValue] = useState(false);

  return (
    <View style={styles.pantallaCreacionDeEntrenami}>
      <Image
        style={styles.pantallaCreacionDeEntrenamiChild}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <View style={[styles.default, styles.defaultPosition]}>
        <View style={styles.stroke}>
          <View style={[styles.bgPrimary, styles.body22Position]} />
        </View>
        <TextInput
          style={styles.spSubheadingRegular}
          placeholder="Input caption"
          keyboardType="default"
          placeholderTextColor="rgba(0, 0, 0, 0.87)"
        />
        <View style={styles.caption}>
          <Text style={styles.caption1}>Nombre</Text>
        </View>
      </View>
      <View style={[styles.default1, styles.defaultPosition]}>
        <View style={styles.stroke}>
          <View style={[styles.bgPrimary, styles.body22Position]} />
        </View>
        <TextInput
          style={styles.spSubheadingRegular}
          placeholder="Input caption"
          keyboardType="default"
          placeholderTextColor="rgba(0, 0, 0, 0.87)"
        />
        <View style={styles.caption}>
          <Text style={styles.caption1}>Tipo de entrenamiento</Text>
        </View>
      </View>
      <Pressable style={styles.default2}>
        <Image
          style={styles.lightIcon}
          contentFit="cover"
          source={require("../assets/-light.png")}
        />
        <View style={[styles.flatdefault, styles.body22Layout]}>
          <View style={[styles.spBody2Medium, styles.body22Layout]}>
            <Text style={styles.body2}>{`Añadir 
ejercicio`}</Text>
          </View>
        </View>
      </Pressable>
      <View style={[styles.rectangleParent, styles.frameChildShadowBox]}>
        <View style={[styles.frameChild, styles.frameChildShadowBox]} />
        <View style={[styles.frameItem, styles.frameLayout]} />
        <View style={[styles.frameInner, styles.frameLayout]} />
        <View style={[styles.lineView, styles.frameLayout]} />
        <View style={[styles.spSubheadingRegular2, styles.subheadingPosition1]}>
          <Text style={[styles.subheading, styles.subheadingFlexBox]}>
            {" "}
            Press de banca
          </Text>
          <View
            style={[styles.spSubheadingRegular3, styles.subheadingPosition]}
          >
            <Text
              style={[styles.subheading1, styles.subheadingPosition]}
            >{` Press de hombro `}</Text>
            <View style={[styles.frameItem, styles.frameLayout]} />
          </View>
        </View>
      </View>
      <Pressable style={[styles.accent, styles.darkPosition]}>
        <View style={styles.lightPosition}>
          <LinearGradient
            style={[styles.bgAccent, styles.body22Position]}
            locations={[0, 1]}
            colors={["#1dde7d", "#72dfc5"]}
          />
        </View>
        <View style={[styles.flatdefault, styles.body22Layout]}>
          <View style={[styles.spBody2Medium, styles.body22Layout]}>
            <Text style={[styles.body21, styles.body21Layout]}>Guardar</Text>
          </View>
        </View>
      </Pressable>
      <Pressable style={[styles.dark, styles.darkPosition]}>
        <View style={styles.lightPosition}>
          <LinearGradient
            style={[styles.bgAccent, styles.body22Position]}
            locations={[0, 1]}
            colors={["#1a73e9", "#6c92f4"]}
          />
        </View>
        <View style={[styles.flatdefault, styles.body22Layout]}>
          <View style={[styles.spBody2Medium, styles.body22Layout]}>
            <Text style={[styles.body22, styles.bodyTypo]}>volver</Text>
          </View>
        </View>
      </Pressable>
      <View style={styles.secLevelSwitch}>
        <View style={[styles.light, styles.lightPosition]}>
          <View style={[styles.bgLight, styles.body22Position]} />
        </View>
        <View style={styles.spSubheadingRegular4}>
          <Text style={[styles.subheading2, styles.subheadingFlexBox]}>
            Añadir a biblioteca
          </Text>
          <RNPSwitch
            style={[styles.switchon, styles.body21Layout]}
            value={switchOnValue}
            onValueChange={setSwitchOnValue}
            color="#fff"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  defaultPosition: {
    height: 56,
    right: 158,
    left: 22,
    position: "absolute",
  },
  body22Position: {
    top: 0,
    left: 0,
  },
  body22Layout: {
    height: 24,
    position: "absolute",
  },
  frameChildShadowBox: {
    height: 189,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    width: 301,
    position: "absolute",
  },
  frameLayout: {
    width: 302,
    borderTopWidth: 1,
    borderColor: "rgba(95, 95, 95, 0.19)",
    borderStyle: "solid",
    height: 1,
    left: 0,
    position: "absolute",
  },
  subheadingPosition1: {
    height: 28,
    left: 0,
    position: "absolute",
  },
  subheadingFlexBox: {
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.textColor,
    fontFamily: FontFamily.robotoRegular,
    top: 0,
  },
  subheadingPosition: {
    height: 27,
    left: 0,
    position: "absolute",
  },
  darkPosition: {
    height: 32,
    top: 537,
    position: "absolute",
  },
  body21Layout: {
    height: 22,
    position: "absolute",
  },
  bodyTypo: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    textTransform: "uppercase",
  },
  lightPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  pantallaCreacionDeEntrenamiChild: {
    top: 18,
    left: 13,
    width: 32,
    height: 31,
    position: "absolute",
  },
  bgPrimary: {
    backgroundColor: Color.textColor,
    bottom: 0,
    right: 0,
    top: 0,
    position: "absolute",
  },
  stroke: {
    opacity: 0.4,
    height: 1,
    left: 0,
    bottom: 0,
    right: 0,
    position: "absolute",
  },
  spSubheadingRegular: {
    bottom: 6,
    height: 20,
    opacity: 0.54,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.robotoRegular,
    left: 0,
    right: 0,
    position: "absolute",
  },
  caption1: {
    width: 180,
    textAlign: "left",
    color: Color.textColor,
    lineHeight: 15,
    fontSize: FontSize.size_xs,
    height: 16,
    fontFamily: FontFamily.robotoRegular,
    top: 0,
    left: 0,
    position: "absolute",
  },
  caption: {
    bottom: 32,
    height: 16,
    left: 0,
    right: 0,
    position: "absolute",
  },
  default: {
    top: 74,
  },
  default1: {
    top: 130,
  },
  lightIcon: {
    height: "130%",
    width: "112.37%",
    top: "-5%",
    right: "-6.19%",
    bottom: "-25%",
    left: "-6.19%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  body2: {
    top: 3,
    left: 20,
    fontSize: FontSize.size_5xs,
    textAlign: "center",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    textTransform: "uppercase",
    color: Color.textColor,
    position: "absolute",
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
  default2: {
    top: 211,
    width: 97,
    height: 40,
    left: 22,
    position: "absolute",
  },
  frameChild: {
    backgroundColor: Color.whitesmoke_100,
    shadowColor: "rgba(0, 0, 0, 0.17)",
    top: 0,
    left: 0,
  },
  frameItem: {
    top: 27,
  },
  frameInner: {
    top: 79,
  },
  lineView: {
    top: 105,
  },
  subheading: {
    width: 275,
    lineHeight: 21,
    alignItems: "center",
    display: "flex",
    fontSize: FontSize.size_base,
    height: 28,
    left: 0,
    position: "absolute",
  },
  subheading1: {
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.textColor,
    fontFamily: FontFamily.robotoRegular,
    top: 0,
    lineHeight: 21,
    fontSize: FontSize.size_base,
    width: 301,
    height: 27,
  },
  spSubheadingRegular3: {
    marginTop: 12,
    right: -26,
    backgroundColor: Color.gainsboro_200,
    top: "50%",
  },
  spSubheadingRegular2: {
    marginTop: -94.5,
    right: 26,
    top: "50%",
  },
  rectangleParent: {
    top: 286,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: 22,
    overflow: "hidden",
  },
  bgAccent: {
    borderRadius: Border.br_80xl,
    backgroundColor: Color.accentColor,
    bottom: 0,
    right: 0,
    top: 0,
    position: "absolute",
  },
  body21: {
    top: 1,
    left: 3,
    fontSize: FontSize.size_3xs,
    width: 58,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    textTransform: "uppercase",
    color: Color.textColor,
    height: 22,
  },
  accent: {
    left: 30,
    width: 81,
  },
  body22: {
    fontSize: FontSize.size_2xs,
    color: Color.lightColor,
    width: 57,
    height: 24,
    position: "absolute",
    top: 0,
    left: 0,
  },
  dark: {
    left: 241,
    width: 73,
  },
  bgLight: {
    borderRadius: Border.br_10xs,
    bottom: 0,
    right: 0,
    top: 0,
    position: "absolute",
    backgroundColor: Color.lightColor,
  },
  light: {
    display: "none",
  },
  subheading2: {
    width: 116,
    height: 24,
    position: "absolute",
    alignItems: "center",
    display: "flex",
    lineHeight: 15,
    fontSize: FontSize.size_xs,
    left: 0,
  },
  switchon: {
    marginTop: -11,
    right: -33,
    width: 37,
    top: "50%",
  },
  spSubheadingRegular4: {
    height: "50%",
    top: "25%",
    right: 207,
    bottom: "25%",
    left: 16,
    position: "absolute",
  },
  secLevelSwitch: {
    top: 486,
    right: 12,
    left: 9,
    height: 48,
    position: "absolute",
  },
  pantallaCreacionDeEntrenami: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.lightColor,
  },
});

export default PantallaCreacionDeEntrenami4;
