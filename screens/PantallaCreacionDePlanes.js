import * as React from "react";
import { Pressable, StyleSheet, View, TextInput, Text } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const PantallaCreacionDePlanes = () => {
  return (
    <View style={styles.pantallaCreacionDePlanes}>
      <Image
        style={styles.pantallaCreacionDePlanesChild}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <View style={[styles.default, styles.defaultLayout]}>
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
          <Text style={[styles.caption1, styles.captionTypo]}>Nombre</Text>
        </View>
      </View>
      <View style={[styles.default1, styles.defaultLayout]}>
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
          <Text style={[styles.caption1, styles.captionTypo]}>
            Tipo de plan
          </Text>
        </View>
      </View>
      <View style={[styles.default2, styles.defaultLayout]}>
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
          <Text style={[styles.caption5, styles.captionTypo]}>
            Nº de semanas
          </Text>
        </View>
      </View>
      <Pressable style={styles.default3}>
        <View style={styles.light}>
          <View style={styles.bgLight} />
        </View>
        <View style={[styles.flatdefault, styles.flatdefaultPosition]}>
          <View style={[styles.spBody2Medium, styles.flatdefaultPosition]}>
            <Text style={styles.body2}>{`Añadir 
entrenamiento`}</Text>
          </View>
        </View>
      </Pressable>
      <View style={[styles.rectangleParent, styles.frameChildShadowBox]}>
        <View style={[styles.frameChild, styles.frameChildShadowBox]} />
        <View style={[styles.frameItem, styles.frameLayout]} />
        <View style={[styles.frameInner, styles.frameLayout]} />
        <View style={[styles.lineView, styles.frameLayout]} />
        <View style={[styles.spSubheadingRegular3, styles.subheadingPosition1]}>
          <Text style={[styles.subheading, styles.subheadingTypo]}>
            {" "}
            Entrenamiento piernas
          </Text>
          <View
            style={[styles.spSubheadingRegular4, styles.subheadingPosition]}
          >
            <Text style={[styles.subheading1, styles.subheadingPosition]}>
              {" "}
              Entrenamiento espalda
            </Text>
            <View style={[styles.frameItem, styles.frameLayout]} />
          </View>
        </View>
      </View>
      <Pressable style={[styles.accent, styles.darkPosition]}>
        <View style={styles.light}>
          <LinearGradient
            style={styles.bgAccent}
            locations={[0, 1]}
            colors={["#1dde7d", "#72dfc5"]}
          />
        </View>
        <View style={[styles.flatdefault, styles.flatdefaultPosition]}>
          <View style={[styles.spBody2Medium, styles.flatdefaultPosition]}>
            <Text style={[styles.body21, styles.bodyTypo]}>Guardar</Text>
          </View>
        </View>
      </Pressable>
      <Pressable style={[styles.dark, styles.darkPosition]}>
        <View style={styles.light}>
          <LinearGradient
            style={styles.bgAccent}
            locations={[0, 1]}
            colors={["#1a73e9", "#6c92f4"]}
          />
        </View>
        <View style={[styles.flatdefault, styles.flatdefaultPosition]}>
          <View style={[styles.spBody2Medium, styles.flatdefaultPosition]}>
            <Text style={[styles.body22, styles.bodyTypo]}>volver</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  defaultLayout: {
    height: 56,
    position: "absolute",
  },
  body22Position: {
    top: 0,
    left: 0,
  },
  captionTypo: {
    textAlign: "left",
    lineHeight: 15,
    fontSize: FontSize.spCaptionRegular_size,
    color: Color.textColor,
    height: 16,
    fontFamily: FontFamily.spBody1Regular,
    top: 0,
    left: 0,
    position: "absolute",
  },
  flatdefaultPosition: {
    marginTop: -12,
    height: 24,
    top: "50%",
    position: "absolute",
  },
  frameChildShadowBox: {
    height: 189,
    width: 301,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
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
  subheadingTypo: {
    alignItems: "center",
    display: "flex",
    lineHeight: 21,
    textAlign: "left",
    color: Color.textColor,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.spBody1Regular,
    top: 0,
  },
  subheadingPosition: {
    height: 27,
    left: 0,
    position: "absolute",
  },
  darkPosition: {
    height: 32,
    top: 491,
    position: "absolute",
  },
  bodyTypo: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.spBody2Medium,
    fontWeight: "500",
    textTransform: "uppercase",
    position: "absolute",
  },
  pantallaCreacionDePlanesChild: {
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
    fontFamily: FontFamily.spBody1Regular,
    left: 0,
    right: 0,
    position: "absolute",
  },
  caption1: {
    width: 180,
  },
  caption: {
    bottom: 32,
    height: 16,
    left: 0,
    right: 0,
    position: "absolute",
  },
  default: {
    left: 22,
    right: 158,
    height: 56,
    top: 74,
  },
  default1: {
    top: 130,
    left: 22,
    right: 158,
    height: 56,
  },
  caption5: {
    width: 108,
  },
  default2: {
    right: 37,
    left: 215,
    top: 74,
  },
  bgLight: {
    shadowColor: "rgba(38, 50, 56, 0.08)",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    borderRadius: Border.br_80xl,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    position: "absolute",
    backgroundColor: Color.lightColor,
  },
  light: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  body2: {
    top: 3,
    left: 7,
    fontSize: FontSize.size_5xs,
    textAlign: "center",
    fontFamily: FontFamily.spBody2Medium,
    fontWeight: "500",
    textTransform: "uppercase",
    color: Color.textColor,
    position: "absolute",
  },
  spBody2Medium: {
    height: 24,
    top: "50%",
    left: 0,
    marginTop: -12,
    right: 0,
  },
  flatdefault: {
    right: 8,
    left: 8,
    height: 24,
    top: "50%",
  },
  default3: {
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
    height: 28,
    left: 0,
    position: "absolute",
  },
  subheading1: {
    alignItems: "center",
    display: "flex",
    lineHeight: 21,
    textAlign: "left",
    color: Color.textColor,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.spBody1Regular,
    top: 0,
    width: 301,
    height: 27,
  },
  spSubheadingRegular4: {
    marginTop: 12,
    right: -26,
    backgroundColor: Color.gainsboro_200,
    top: "50%",
  },
  spSubheadingRegular3: {
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
    backgroundColor: Color.primaryColor,
    borderRadius: Border.br_80xl,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    position: "absolute",
  },
  body21: {
    top: 1,
    left: 3,
    fontSize: FontSize.size_3xs,
    width: 58,
    height: 22,
    color: Color.textColor,
    justifyContent: "center",
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
    top: 0,
    left: 0,
  },
  dark: {
    left: 241,
    width: 73,
  },
  pantallaCreacionDePlanes: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.lightColor,
  },
});

export default PantallaCreacionDePlanes;
