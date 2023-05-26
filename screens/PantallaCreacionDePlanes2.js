import * as React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const PantallaCreacionDePlanes2 = () => {
  return (
    <View style={styles.pantallaCreacionDePlanes2}>
      <View style={[styles.firstLevel, styles.coverPosition]}>
        <View style={[styles.dialog, styles.dialogShadowBox]}>
          <View style={styles.dialogPosition}>
            <View style={[styles.bgLight, styles.bgLightPosition]} />
          </View>
        </View>
        <View style={styles.lightHamburger}>
          <View style={styles.dialogPosition}>
            <View style={[styles.bgLight, styles.bgLightPosition]} />
          </View>
          <View style={[styles.spTitleMedium, styles.firstLevelPosition]}>
            <Text style={styles.title}>Entrenamiento espalda</Text>
          </View>
          <Image
            style={[styles.closeIcon, styles.searchLayout]}
            contentFit="cover"
            source={require("../assets/close.png")}
          />
          <View style={[styles.search, styles.searchLayout]}>
            <View style={styles.dialogPosition}>
              <View style={[styles.iconsButton, styles.bgLightPosition]} />
            </View>
            <View style={styles.dialogPosition}>
              <View style={[styles.iconsColorizer1, styles.dialogPosition]} />
            </View>
          </View>
          <View style={[styles.bookmarkPlusOutline, styles.searchLayout]}>
            <View style={styles.dialogPosition}>
              <View style={[styles.iconsButton, styles.bgLightPosition]} />
            </View>
            <View style={styles.dialogPosition}>
              <View style={[styles.iconsColorizer1, styles.dialogPosition]} />
            </View>
          </View>
          <Image
            style={[styles.logoSampleIcon, styles.flatdefaultPosition]}
            contentFit="cover"
            source={require("../assets/logo-sample.png")}
          />
        </View>
        <View style={[styles.cover, styles.coverPosition]}>
          <View style={[styles.bgLight, styles.bgLightPosition]} />
          <Pressable style={[styles.dark, styles.darkPosition]}>
            <View style={styles.dialogPosition}>
              <LinearGradient
                style={[styles.bgPrimary, styles.bgLightPosition]}
                locations={[0, 1]}
                colors={["#1a73e9", "#6c92f4"]}
              />
            </View>
            <View style={[styles.flatdefault, styles.flatdefaultPosition]}>
              <View style={[styles.spBody2Medium, styles.flatdefaultPosition]}>
                <Text style={[styles.body2, styles.bodyTypo]}>editar</Text>
              </View>
            </View>
          </Pressable>
          <Pressable style={[styles.dark2, styles.darkPosition]}>
            <Image
              style={[styles.darkIcon, styles.bgLightPosition]}
              contentFit="cover"
              source={require("../assets/-dark11.png")}
            />
            <View style={[styles.flatdefault1, styles.darkPosition]}>
              <View style={[styles.spBody2Medium, styles.flatdefaultPosition]}>
                <Text style={[styles.body21, styles.bodyTypo]}>borrar</Text>
              </View>
            </View>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  coverPosition: {
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
  bgLightPosition: {
    bottom: 0,
    top: 0,
    left: 0,
    right: 0,
    position: "absolute",
  },
  firstLevelPosition: {
    bottom: 16,
    position: "absolute",
  },
  searchLayout: {
    width: 40,
    height: 40,
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
  flatdefaultPosition: {
    top: "50%",
    marginTop: -12,
    position: "absolute",
  },
  darkPosition: {
    bottom: 8,
    position: "absolute",
  },
  bodyTypo: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    textTransform: "uppercase",
    fontSize: FontSize.size_sm,
    height: 24,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    top: 0,
    left: 0,
    position: "absolute",
  },
  bgLight: {
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
    fontSize: FontSize.size_xl,
    lineHeight: 26,
    textAlign: "left",
    height: 24,
    width: 216,
    color: Color.textColor,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    top: 0,
    left: 0,
    position: "absolute",
  },
  spTitleMedium: {
    top: 16,
    right: 72,
    left: 72,
  },
  closeIcon: {
    height: 40,
    left: 8,
  },
  iconsButton: {
    borderRadius: Border.br_11xs,
    display: "none",
    backgroundColor: Color.lightColor,
  },
  iconsColorizer1: {
    backgroundColor: Color.grayColor,
  },
  search: {
    right: 56,
    height: 40,
    display: "none",
  },
  bookmarkPlusOutline: {
    right: 8,
    height: 40,
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
  bgPrimary: {
    borderRadius: Border.br_7xs,
    shadowRadius: 4,
    elevation: 4,
    backgroundColor: Color.accentColor,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 16,
    },
    shadowColor: "rgba(38, 50, 56, 0.08)",
  },
  body2: {
    color: Color.lightColor,
    width: 216,
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
    right: 116,
    left: 12,
    height: 40,
  },
  darkIcon: {
    maxWidth: "100%",
    maxHeight: "100%",
    opacity: 0.5,
    overflow: "hidden",
  },
  body21: {
    width: 64,
    color: Color.textColor,
  },
  flatdefault1: {
    right: 8,
    left: 8,
    top: 8,
    bottom: 8,
  },
  dark2: {
    left: 253,
    width: 80,
    height: 40,
  },
  cover: {
    bottom: 314,
    height: 72,
    position: "absolute",
    right: 0,
  },
  firstLevel: {
    height: 449,
    bottom: 16,
    position: "absolute",
    backgroundColor: Color.lightColor,
  },
  pantallaCreacionDePlanes2: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.lightColor,
  },
});

export default PantallaCreacionDePlanes2;
