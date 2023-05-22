import * as React from "react";
import { Pressable, StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const PantallaBibliotecaDeEntrena1 = () => {
  return (
    <View style={styles.pantallaBibliotecaDeEntrena}>
      <Image
        style={styles.pantallaBibliotecaDeEntrenaChild}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <View style={[styles.rectangleParent, styles.frameChildShadowBox]}>
        <View style={[styles.frameChild, styles.frameChildShadowBox]} />
        <View style={[styles.frameItem, styles.frameLayout]} />
        <View style={[styles.frameInner, styles.frameLayout]} />
        <View style={[styles.lineView, styles.frameLayout]} />
        <View style={[styles.frameChild1, styles.frameLayout]} />
        <View style={[styles.spSubheadingRegular, styles.subheadingPosition1]}>
          <Text style={[styles.subheading, styles.subheadingPosition]}>
            {" "}
            Entrenamiento 3
          </Text>
        </View>
        <View style={[styles.spSubheadingRegular1, styles.bgAccentPosition]}>
          <Text style={[styles.subheading1, styles.subheadingPosition]}>
            {" "}
            Entrenamiento 2
          </Text>
        </View>
        <View style={[styles.spSubheadingRegular2, styles.subheadingPosition1]}>
          <Text style={[styles.subheading, styles.subheadingPosition]}>
            {" "}
            Entrenamiento 1
          </Text>
        </View>
        <View style={styles.spSubheadingRegularWrapper}>
          <View
            style={[styles.spSubheadingRegular3, styles.subheadingPosition1]}
          >
            <Text style={[styles.subheading3, styles.subheadingPosition]}>
              Nombre
            </Text>
          </View>
        </View>
      </View>
      <Pressable style={styles.accent}>
        <View style={styles.accent1}>
          <LinearGradient
            style={[styles.bgAccent, styles.bgAccentPosition]}
            locations={[0, 1]}
            colors={["#1dde7d", "#72dfc5"]}
          />
        </View>
        <View style={[styles.flatdefault, styles.flatdefaultPosition]}>
          <View style={[styles.spBody2Medium, styles.flatdefaultPosition]}>
            <Text style={[styles.body2, styles.bodyTypo]}>
              crear entrenamiento
            </Text>
          </View>
        </View>
      </Pressable>
      <Pressable style={styles.dark}>
        <View style={styles.accent1}>
          <LinearGradient
            style={[styles.bgAccent, styles.bgAccentPosition]}
            locations={[0, 1]}
            colors={["#1a73e9", "#6c92f4"]}
          />
        </View>
        <View style={[styles.flatdefault, styles.flatdefaultPosition]}>
          <View style={[styles.spBody2Medium, styles.flatdefaultPosition]}>
            <Text style={[styles.body21, styles.bodyTypo]}>volver</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  frameChildShadowBox: {
    height: 276,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    width: 299,
    position: "absolute",
  },
  frameLayout: {
    height: 1,
    borderTopWidth: 1,
    borderColor: "rgba(95, 95, 95, 0.19)",
    borderStyle: "solid",
    width: 300,
    left: 0,
    position: "absolute",
  },
  subheadingPosition1: {
    right: 150,
    height: 24,
    top: "50%",
    position: "absolute",
  },
  subheadingPosition: {
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.spCaptionRegular,
    color: Color.textColor,
    height: 24,
    left: 0,
    top: 0,
    position: "absolute",
  },
  bgAccentPosition: {
    right: 0,
    left: 0,
  },
  flatdefaultPosition: {
    marginTop: -12,
    height: 24,
    top: "50%",
    position: "absolute",
  },
  bodyTypo: {
    justifyContent: "center",
    textAlign: "center",
    fontFamily: FontFamily.spBUTTON,
    fontWeight: "500",
    textTransform: "uppercase",
    alignItems: "center",
    display: "flex",
    position: "absolute",
  },
  pantallaBibliotecaDeEntrenaChild: {
    top: 18,
    left: 13,
    width: 32,
    height: 31,
    position: "absolute",
  },
  frameChild: {
    backgroundColor: Color.whitesmoke_100,
    shadowColor: "rgba(0, 0, 0, 0.17)",
    left: 0,
    top: 0,
  },
  frameItem: {
    top: 23,
  },
  frameInner: {
    top: 46,
  },
  lineView: {
    top: 68,
  },
  frameChild1: {
    top: 90,
  },
  subheading: {
    width: 149,
    lineHeight: 18,
    fontSize: FontSize.spBUTTON_size,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.spCaptionRegular,
  },
  spSubheadingRegular: {
    marginTop: -70,
    height: 24,
    left: 0,
  },
  subheading1: {
    lineHeight: 18,
    fontSize: FontSize.spBUTTON_size,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.spCaptionRegular,
    width: 299,
  },
  spSubheadingRegular1: {
    marginTop: -94,
    backgroundColor: Color.lightgray,
    height: 24,
    top: "50%",
    right: 0,
    position: "absolute",
  },
  spSubheadingRegular2: {
    marginTop: -114,
    height: 24,
    left: 0,
  },
  subheading3: {
    fontSize: FontSize.size_base,
    lineHeight: 21,
    width: 145,
  },
  spSubheadingRegular3: {
    marginTop: -11.5,
    left: 5,
    height: 24,
  },
  spSubheadingRegularWrapper: {
    left: -1,
    backgroundColor: Color.gainsboro_100,
    height: 23,
    width: 300,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  rectangleParent: {
    top: 71,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: 29,
    overflow: "hidden",
  },
  bgAccent: {
    bottom: 0,
    borderRadius: Border.br_80xl,
    backgroundColor: Color.accentColor,
    top: 0,
    position: "absolute",
  },
  accent1: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  body2: {
    top: 1,
    left: 3,
    fontSize: FontSize.size_4xs,
    width: 74,
    height: 22,
    color: Color.textColor,
    justifyContent: "center",
    textAlign: "center",
    fontFamily: FontFamily.spBUTTON,
    fontWeight: "500",
    textTransform: "uppercase",
  },
  spBody2Medium: {
    right: 0,
    left: 0,
  },
  flatdefault: {
    right: 8,
    left: 8,
  },
  accent: {
    top: 360,
    width: 97,
    height: 40,
    left: 29,
    position: "absolute",
  },
  body21: {
    fontSize: FontSize.size_2xs,
    color: Color.lightColor,
    width: 57,
    height: 24,
    left: 0,
    top: 0,
  },
  dark: {
    top: 364,
    left: 240,
    width: 73,
    height: 32,
    position: "absolute",
  },
  pantallaBibliotecaDeEntrena: {
    backgroundColor: Color.lightColor,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default PantallaBibliotecaDeEntrena1;
