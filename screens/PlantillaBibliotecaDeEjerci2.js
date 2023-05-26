import * as React from "react";
import { Pressable, StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const PlantillaBibliotecaDeEjerci2 = () => {
  return (
    <View style={styles.plantillaBibliotecaDeEjerci}>
      <Image
        style={styles.plantillaBibliotecaDeEjerciChild}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <View style={[styles.rectangleParent, styles.frameChildShadowBox]}>
        <View style={[styles.frameChild, styles.body21Position]} />
        <View style={[styles.frameItem, styles.frameLayout]} />
        <View style={[styles.frameInner, styles.frameLayout]} />
        <View style={[styles.lineView, styles.frameLayout]} />
        <View style={[styles.frameChild1, styles.frameLayout]} />
        <View style={[styles.spSubheadingRegular, styles.subheadingPosition1]}>
          <Text style={[styles.subheading, styles.subheadingPosition]}>
            {" "}
            Ejercicio 3
          </Text>
        </View>
        <View style={[styles.spSubheadingRegular1, styles.subheadingPosition1]}>
          <Text style={[styles.subheading, styles.subheadingPosition]}>
            {" "}
            Ejercicio 2
          </Text>
        </View>
        <View style={[styles.spSubheadingRegular2, styles.subheadingPosition1]}>
          <Text style={[styles.subheading, styles.subheadingPosition]}>
            {" "}
            Ejercicio 1
          </Text>
        </View>
        <View style={styles.spSubheadingRegularWrapper}>
          <View
            style={[styles.spSubheadingRegular3, styles.subheadingPosition2]}
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
            style={[styles.bgAccent, styles.subheadingPosition1]}
            locations={[0, 1]}
            colors={["#1dde7d", "#72dfc5"]}
          />
        </View>
        <View style={[styles.flatdefault, styles.flatdefaultPosition]}>
          <View style={[styles.spBody2Medium, styles.flatdefaultPosition]}>
            <Text style={[styles.body2, styles.bodyTypo]}>crear ejercicio</Text>
          </View>
        </View>
      </Pressable>
      <Pressable style={styles.dark}>
        <View style={styles.accent1}>
          <LinearGradient
            style={[styles.bgAccent, styles.subheadingPosition1]}
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
  body21Position: {
    left: 0,
    top: 0,
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
    right: 0,
    left: 0,
  },
  subheadingPosition: {
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    color: Color.textColor,
    height: 24,
    left: 0,
    top: 0,
    position: "absolute",
  },
  subheadingPosition2: {
    top: "50%",
    height: 24,
    position: "absolute",
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
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    textTransform: "uppercase",
    alignItems: "center",
    display: "flex",
    position: "absolute",
  },
  plantillaBibliotecaDeEjerciChild: {
    top: 18,
    left: 13,
    width: 32,
    height: 31,
    position: "absolute",
  },
  frameChild: {
    backgroundColor: Color.whitesmoke_100,
    shadowColor: "rgba(0, 0, 0, 0.17)",
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
    fontSize: FontSize.size_sm,
    lineHeight: 18,
    width: 299,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
  },
  spSubheadingRegular: {
    marginTop: -70,
    height: 24,
    top: "50%",
    position: "absolute",
  },
  spSubheadingRegular1: {
    marginTop: -94,
    backgroundColor: Color.lightgray,
    height: 24,
    top: "50%",
    position: "absolute",
  },
  spSubheadingRegular2: {
    marginTop: -114,
    height: 24,
    top: "50%",
    position: "absolute",
  },
  subheading3: {
    fontSize: FontSize.size_base,
    lineHeight: 21,
    width: 145,
  },
  spSubheadingRegular3: {
    marginTop: -11.5,
    right: 150,
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
    left: 29,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    overflow: "hidden",
  },
  bgAccent: {
    bottom: 0,
    borderRadius: Border.br_80xl,
    backgroundColor: Color.accentColor,
    top: 0,
    right: 0,
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
    fontFamily: FontFamily.robotoMedium,
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
    top: 365,
    left: 36,
    width: 97,
    height: 40,
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
    top: 369,
    left: 247,
    width: 73,
    height: 32,
    position: "absolute",
  },
  plantillaBibliotecaDeEjerci: {
    backgroundColor: Color.lightColor,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default PlantillaBibliotecaDeEjerci2;
