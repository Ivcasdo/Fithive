import * as React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const PantallaCreacionDeEntrenami1 = () => {
  return (
    <View style={styles.pantallaCreacionDeEntrenami}>
      <View style={[styles.firstLevel, styles.firstLevelPosition]}>
        <View style={styles.dialog}>
          <View style={styles.colorsbgCardPosition}>
            <View style={styles.bgLightPosition} />
          </View>
        </View>
        <View style={styles.lightHamburger}>
          <View style={styles.colorsbgCardPosition}>
            <View style={styles.bgLightPosition} />
          </View>
          <View style={[styles.spTitleMedium, styles.firstLevelPosition1]}>
            <Text style={[styles.title, styles.titlePosition]}>
              Añadir ejercicio
            </Text>
          </View>
          <Image
            style={[styles.closeIcon, styles.searchLayout]}
            contentFit="cover"
            source={require("../assets/close.png")}
          />
          <View style={[styles.search, styles.searchLayout]}>
            <View style={styles.colorsbgCardPosition}>
              <View style={[styles.iconsButton, styles.bgLightPosition]} />
            </View>
            <View style={styles.colorsbgCardPosition}>
              <View
                style={[styles.iconsColorizer1, styles.colorsbgCardPosition]}
              />
            </View>
          </View>
          <View style={[styles.bookmarkPlusOutline, styles.searchLayout]}>
            <View style={styles.colorsbgCardPosition}>
              <View style={[styles.iconsButton, styles.bgLightPosition]} />
            </View>
            <View style={styles.colorsbgCardPosition}>
              <View
                style={[styles.iconsColorizer1, styles.colorsbgCardPosition]}
              />
            </View>
          </View>
          <Image
            style={[styles.logoSampleIcon, styles.flatdefaultPosition]}
            contentFit="cover"
            source={require("../assets/logo-sample.png")}
          />
        </View>
        <Pressable style={[styles.dark, styles.darkPosition]}>
          <View style={styles.colorsbgCardPosition}>
            <LinearGradient
              style={styles.primaryShadowBox}
              locations={[0, 1]}
              colors={["#1a73e9", "#6c92f4"]}
            />
          </View>
          <View style={[styles.flatdefault, styles.flatdefaultPosition]}>
            <View style={[styles.spBody2Medium, styles.flatdefaultPosition]}>
              <Text style={[styles.body2, styles.titlePosition]}>
                De biblioteca
              </Text>
            </View>
          </View>
        </Pressable>
        <Pressable style={[styles.dark2, styles.darkPosition]}>
          <View style={styles.colorsbgCardPosition}>
            <LinearGradient
              style={styles.primaryShadowBox}
              locations={[0, 1]}
              colors={["#1a73e9", "#6c92f4"]}
            />
          </View>
          <View style={[styles.flatdefault, styles.flatdefaultPosition]}>
            <View style={[styles.spBody2Medium, styles.flatdefaultPosition]}>
              <Text style={[styles.body2, styles.titlePosition]}>
                crear ejercicio
              </Text>
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
  firstLevelPosition1: {
    bottom: 16,
    position: "absolute",
  },
  titlePosition: {
    width: 216,
    fontFamily: FontFamily.spBody2Medium,
    fontWeight: "500",
    height: 24,
    top: 0,
    left: 0,
    position: "absolute",
  },
  searchLayout: {
    height: 40,
    width: 40,
    top: 8,
    position: "absolute",
  },
  bgLightPosition: {
    bottom: 0,
    top: 0,
    left: 0,
    right: 0,
    position: "absolute",
    backgroundColor: Color.lightColor,
  },
  colorsbgCardPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  flatdefaultPosition: {
    top: "50%",
    marginTop: -12,
    position: "absolute",
  },
  darkPosition: {
    left: 12,
    right: 116,
    height: 40,
    position: "absolute",
  },
  dialog: {
    shadowRadius: 16,
    elevation: 16,
    display: "none",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 16,
    },
    shadowColor: "rgba(38, 50, 56, 0.08)",
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
    color: Color.textColor,
    textAlign: "left",
    height: 24,
  },
  spTitleMedium: {
    top: 16,
    right: 72,
    left: 72,
  },
  closeIcon: {
    left: 8,
  },
  iconsButton: {
    borderRadius: Border.br_11xs,
    display: "none",
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
    top: 0,
    left: 0,
    right: 0,
    position: "absolute",
  },
  primaryShadowBox: {
    backgroundColor: Color.primaryColor,
    elevation: 4,
    shadowRadius: 4,
    borderRadius: Border.br_7xs,
    bottom: 0,
    top: 0,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 16,
    },
    shadowColor: "rgba(38, 50, 56, 0.08)",
    left: 0,
    right: 0,
    position: "absolute",
  },
  body2: {
    fontSize: FontSize.spBody2Medium_size,
    textTransform: "uppercase",
    color: Color.lightColor,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 24,
  },
  spBody2Medium: {
    height: 24,
    left: 0,
    right: 0,
  },
  flatdefault: {
    right: 8,
    left: 8,
    height: 24,
  },
  dark: {
    bottom: 322,
  },
  dark2: {
    bottom: 262,
  },
  firstLevel: {
    height: 449,
    bottom: 16,
    position: "absolute",
    backgroundColor: Color.lightColor,
    left: 0,
    right: 0,
  },
  pantallaCreacionDeEntrenami: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.lightColor,
  },
});

export default PantallaCreacionDeEntrenami1;
