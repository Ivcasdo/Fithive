import * as React from "react";
import { Pressable, StyleSheet, View, Text, TextInput } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const PantallaRealizarEntrenamient = () => {
  return (
    <View style={styles.pantallaRealizarEntrenamient}>
      <Image
        style={styles.pantallaRealizarEntrenamientChild}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <View style={[styles.frameParent, styles.frameParentPosition]}>
        <View style={[styles.captionParent, styles.captionLayout]}>
          <Text style={[styles.caption, styles.captionTypo]}>Ejercicio 3</Text>
          <TextInput
            style={[styles.spSubheadingRegular, styles.subheadingTypo]}
            placeholder="Num reps"
            keyboardType="default"
            placeholderTextColor="rgba(0, 0, 0, 0.87)"
          />
          <TextInput
            style={[styles.spSubheadingRegular1, styles.subheadingTypo]}
            placeholder="Peso"
            keyboardType="default"
            placeholderTextColor="rgba(0, 0, 0, 0.87)"
          />
        </View>
        <View style={[styles.captionGroup, styles.captionLayout]}>
          <Text style={[styles.caption, styles.captionTypo]}>Ejercicio 2</Text>
          <TextInput
            style={[styles.spSubheadingRegular, styles.subheadingTypo]}
            placeholder="Num reps"
            keyboardType="default"
            placeholderTextColor="rgba(0, 0, 0, 0.87)"
          />
          <TextInput
            style={[styles.spSubheadingRegular1, styles.subheadingTypo]}
            placeholder="Peso"
            keyboardType="default"
            placeholderTextColor="rgba(0, 0, 0, 0.87)"
          />
        </View>
        <View style={[styles.captionContainer, styles.captionLayout]}>
          <Text style={[styles.caption2, styles.captionTypo]}>Ejercicio 1</Text>
          <TextInput
            style={[styles.spSubheadingRegular, styles.subheadingTypo]}
            placeholder="Num reps"
            keyboardType="default"
            placeholderTextColor="rgba(0, 0, 0, 0.87)"
          />
          <TextInput
            style={[styles.spSubheadingRegular1, styles.subheadingTypo]}
            placeholder="Peso"
            keyboardType="default"
            placeholderTextColor="rgba(0, 0, 0, 0.87)"
          />
        </View>
      </View>
      <Pressable style={[styles.iconicRightDark, styles.accentPosition]}>
        <View style={styles.dark}>
          <LinearGradient
            style={styles.bgPrimary}
            locations={[0, 1]}
            colors={["#1a73e9", "#6c92f4"]}
          />
        </View>
        <Image
          style={styles.flatdefaultIcon}
          contentFit="cover"
          source={require("../assets/flatdefault.png")}
        />
      </Pressable>
      <View style={[styles.spTitleMediumWrapper, styles.titleLayout]}>
        <View style={[styles.spTitleMedium, styles.titleLayout]}>
          <Text style={[styles.title, styles.titleTypo]}>00:00</Text>
        </View>
      </View>
      <Pressable style={[styles.accent, styles.accentPosition]}>
        <View style={styles.dark}>
          <LinearGradient
            style={styles.bgPrimary}
            locations={[0, 1]}
            colors={["#1dde7d", "#72dfc5"]}
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
  frameParentPosition: {
    left: 29,
    overflow: "hidden",
  },
  captionLayout: {
    height: 42,
    width: 321,
    position: "absolute",
    overflow: "hidden",
  },
  captionTypo: {
    height: 16,
    textAlign: "left",
    color: Color.textColor,
    fontFamily: FontFamily.spBody1Regular,
    lineHeight: 15,
    fontSize: FontSize.spCaptionRegular_size,
    top: 0,
    left: 2,
    position: "absolute",
  },
  subheadingTypo: {
    fontSize: FontSize.size_base,
    opacity: 0.54,
    height: 20,
    bottom: 0,
    fontFamily: FontFamily.spBody1Regular,
    position: "absolute",
  },
  accentPosition: {
    height: 40,
    top: 402,
    position: "absolute",
  },
  titleLayout: {
    height: 44,
    width: 133,
    position: "absolute",
  },
  titleTypo: {
    textAlign: "center",
    fontFamily: FontFamily.spBody2Medium,
    fontWeight: "500",
    left: 0,
    color: Color.textColor,
    top: 0,
  },
  body2Layout: {
    height: 24,
    position: "absolute",
  },
  pantallaRealizarEntrenamientChild: {
    left: 13,
    width: 32,
    height: 31,
    top: 18,
    position: "absolute",
  },
  caption: {
    width: 319,
  },
  spSubheadingRegular: {
    right: 124,
    left: 2,
  },
  spSubheadingRegular1: {
    left: 126,
    right: 0,
  },
  captionParent: {
    top: 106,
    left: 2,
  },
  captionGroup: {
    top: 62,
    left: 1,
  },
  caption2: {
    width: 399,
  },
  captionContainer: {
    left: 0,
    top: 18,
  },
  frameParent: {
    top: 70,
    width: 289,
    height: 316,
    position: "absolute",
  },
  bgPrimary: {
    borderRadius: Border.br_80xl,
    backgroundColor: Color.primaryColor,
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    position: "absolute",
  },
  dark: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  flatdefaultIcon: {
    height: "60%",
    width: "79.22%",
    top: "20%",
    right: "10.39%",
    bottom: "20%",
    left: "10.39%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  iconicRightDark: {
    left: 178,
    width: 40,
  },
  title: {
    fontSize: 39,
    lineHeight: 50,
    height: 44,
    width: 133,
    position: "absolute",
  },
  spTitleMedium: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
    left: 0,
    top: 0,
    width: 133,
  },
  spTitleMediumWrapper: {
    top: 400,
    left: 29,
    overflow: "hidden",
  },
  body2: {
    textTransform: "uppercase",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 59,
    textAlign: "center",
    fontFamily: FontFamily.spBody2Medium,
    fontWeight: "500",
    left: 0,
    color: Color.textColor,
    top: 0,
    height: 24,
    fontSize: FontSize.spCaptionRegular_size,
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
  accent: {
    left: 241,
    width: 77,
  },
  pantallaRealizarEntrenamient: {
    backgroundColor: Color.lightColor,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default PantallaRealizarEntrenamient;
