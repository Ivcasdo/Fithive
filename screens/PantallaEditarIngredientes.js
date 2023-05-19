import * as React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const PantallaEditarIngredientes = () => {
  return (
    <View style={styles.pantallaEditarIngredientes}>
      <View style={[styles.firstLevel, styles.firstLevelPosition]}>
        <View style={[styles.dialog, styles.dialogShadowBox]}>
          <View style={styles.dialogPosition}>
            <View style={[styles.bgLight, styles.lightPosition]} />
          </View>
        </View>
        <View style={[styles.lightHamburger, styles.lightPosition]}>
          <View style={styles.dialogPosition}>
            <View style={[styles.bgLight, styles.lightPosition]} />
          </View>
          <View style={styles.spTitleMedium}>
            <Text style={styles.title}>Ejemplo 2</Text>
          </View>
          <Image
            style={[styles.closeIcon, styles.searchLayout]}
            contentFit="cover"
            source={require("../assets/close.png")}
          />
          <View style={[styles.search, styles.searchLayout]}>
            <View style={styles.dialogPosition}>
              <View style={[styles.iconsButton, styles.lightPosition]} />
            </View>
            <View style={styles.dialogPosition}>
              <View style={[styles.iconsColorizer1, styles.dialogPosition]} />
            </View>
          </View>
          <View style={[styles.bookmarkPlusOutline, styles.searchLayout]}>
            <View style={styles.dialogPosition}>
              <View style={[styles.iconsButton, styles.lightPosition]} />
            </View>
            <View style={styles.dialogPosition}>
              <View style={[styles.iconsColorizer1, styles.dialogPosition]} />
            </View>
          </View>
          <Image
            style={[styles.logoSampleIcon, styles.flatdefault1Position]}
            contentFit="cover"
            source={require("../assets/logo-sample.png")}
          />
        </View>
        <Pressable style={[styles.dark, styles.darkPosition]}>
          <Image
            style={[styles.darkIcon, styles.lightPosition]}
            contentFit="cover"
            source={require("../assets/-dark1.png")}
          />
          <View style={styles.flatdefault}>
            <View style={[styles.spBody2Medium, styles.flatdefault1Position]}>
              <Text style={[styles.body2, styles.bodyTypo]}>borrar</Text>
            </View>
          </View>
        </Pressable>
        <Pressable style={[styles.dark1, styles.darkPosition]}>
          <View style={styles.dialogPosition}>
            <LinearGradient
              style={[styles.bgPrimary, styles.lightPosition]}
              locations={[0, 1]}
              colors={["#1a73e9", "#6c92f4"]}
            />
          </View>
          <View style={[styles.flatdefault1, styles.flatdefault1Position]}>
            <View style={[styles.spBody2Medium, styles.flatdefault1Position]}>
              <Text style={[styles.body21, styles.bodyTypo]}>Editar</Text>
            </View>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  firstLevelPosition: {
    left: 0,
    right: 0,
  },
  dialogShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 16,
    },
    shadowColor: "rgba(38, 50, 56, 0.08)",
  },
  lightPosition: {
    top: 0,
    left: 0,
    right: 0,
    position: "absolute",
  },
  searchLayout: {
    height: 40,
    width: 40,
    top: 8,
    position: "absolute",
  },
  dialogPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  flatdefault1Position: {
    top: "50%",
    marginTop: -12,
    position: "absolute",
  },
  darkPosition: {
    bottom: 349,
    height: 40,
    position: "absolute",
  },
  bodyTypo: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    textTransform: "uppercase",
    fontSize: FontSize.spBUTTON_size,
    height: 24,
    fontFamily: FontFamily.spBUTTON,
    fontWeight: "500",
    top: 0,
    left: 0,
    position: "absolute",
  },
  bgLight: {
    bottom: 0,
    backgroundColor: Color.lightColor,
  },
  dialog: {
    shadowRadius: 16,
    elevation: 16,
    display: "none",
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  title: {
    fontSize: FontSize.spTitleMedium_size,
    lineHeight: 26,
    textAlign: "left",
    width: 216,
    height: 24,
    color: Color.textColor,
    fontFamily: FontFamily.spBUTTON,
    fontWeight: "500",
    top: 0,
    left: 0,
    position: "absolute",
  },
  spTitleMedium: {
    top: 16,
    right: 72,
    bottom: 16,
    left: 72,
    position: "absolute",
  },
  closeIcon: {
    left: 8,
  },
  iconsButton: {
    borderRadius: Border.br_11xs,
    display: "none",
    bottom: 0,
    backgroundColor: Color.lightColor,
  },
  iconsColorizer1: {
    backgroundColor: Color.grayColor,
  },
  search: {
    right: 56,
    display: "none",
  },
  bookmarkPlusOutline: {
    right: 8,
    display: "none",
  },
  logoSampleIcon: {
    marginLeft: -59,
    left: "50%",
    width: 117,
    height: 29,
    display: "none",
  },
  lightHamburger: {
    height: 56,
  },
  darkIcon: {
    maxWidth: "100%",
    maxHeight: "100%",
    opacity: 0.32,
    bottom: 0,
    overflow: "hidden",
  },
  body2: {
    width: 56,
    color: Color.textColor,
  },
  spBody2Medium: {
    height: 24,
    left: 0,
    right: 0,
  },
  flatdefault: {
    bottom: 8,
    right: 8,
    left: 8,
    top: 8,
    position: "absolute",
  },
  dark: {
    left: 194,
    width: 72,
  },
  bgPrimary: {
    borderRadius: Border.br_7xs,
    shadowRadius: 4,
    elevation: 4,
    backgroundColor: Color.primaryColor,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 16,
    },
    shadowColor: "rgba(38, 50, 56, 0.08)",
    bottom: 0,
  },
  body21: {
    color: Color.lightColor,
    width: 112,
  },
  flatdefault1: {
    right: 8,
    left: 8,
    height: 24,
  },
  dark1: {
    right: 202,
    left: 30,
  },
  firstLevel: {
    height: 465,
    bottom: 0,
    position: "absolute",
    backgroundColor: Color.lightColor,
  },
  pantallaEditarIngredientes: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.lightColor,
  },
});

export default PantallaEditarIngredientes;
