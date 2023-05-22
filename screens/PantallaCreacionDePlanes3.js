import * as React from "react";
import { View, StyleSheet, Text, Pressable, TextInput } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const PantallaCreacionDePlanes3 = () => {
  return (
    <View style={styles.pantallaCreacionDePlanes3}>
      <View style={[styles.firstLevel, styles.lightPosition]}>
        <View style={[styles.dialog, styles.dialogShadowBox]}>
          <View style={[styles.colorsbgCard, styles.dialogPosition]}>
            <View style={[styles.bgLight, styles.lightPosition]} />
          </View>
        </View>
        <View style={[styles.lightHamburger, styles.lightPosition]}>
          <View style={[styles.colorsbgCard, styles.dialogPosition]}>
            <View style={[styles.bgLight, styles.lightPosition]} />
          </View>
          <View style={styles.spTitleMedium}>
            <Text style={[styles.title, styles.titlePosition]}>
              Añadir entrenamiento
            </Text>
          </View>
          <Image
            style={[styles.closeIcon, styles.searchLayout]}
            contentFit="cover"
            source={require("../assets/close.png")}
          />
          <View style={[styles.search, styles.searchLayout]}>
            <View style={[styles.colorsbgCard, styles.dialogPosition]}>
              <View style={[styles.iconsButton, styles.lightPosition]} />
            </View>
            <View style={[styles.colorsbgCard, styles.dialogPosition]}>
              <View style={[styles.iconsColorizer1, styles.dialogPosition]} />
            </View>
          </View>
          <View style={[styles.bookmarkPlusOutline, styles.searchLayout]}>
            <View style={[styles.colorsbgCard, styles.dialogPosition]}>
              <View style={[styles.iconsButton, styles.lightPosition]} />
            </View>
            <View style={[styles.colorsbgCard, styles.dialogPosition]}>
              <View style={[styles.iconsColorizer1, styles.dialogPosition]} />
            </View>
          </View>
          <Image
            style={[styles.logoSampleIcon, styles.flatdefaultPosition]}
            contentFit="cover"
            source={require("../assets/logo-sample.png")}
          />
        </View>
        <View style={[styles.cover, styles.lightPosition]}>
          <View style={[styles.bgLight, styles.lightPosition]} />
        </View>
        <Pressable style={[styles.dark, styles.darkPosition]}>
          <View style={[styles.colorsbgCard, styles.dialogPosition]}>
            <LinearGradient
              style={[styles.bgPrimary, styles.dialogShadowBox]}
              locations={[0, 1]}
              colors={["#1a73e9", "#6c92f4"]}
            />
          </View>
          <View style={[styles.flatdefault, styles.flatdefaultPosition]}>
            <View style={[styles.spBody2Medium, styles.flatdefaultPosition]}>
              <Text style={[styles.body2, styles.titlePosition]}>
                crear entrenamiento
              </Text>
            </View>
          </View>
        </Pressable>
        <View style={[styles.default, styles.darkPosition]}>
          <View style={[styles.stroke, styles.lightPosition]}>
            <View style={[styles.bgPrimary1, styles.lightPosition]} />
          </View>
          <TextInput
            style={[styles.spSubheadingRegular, styles.lightPosition]}
            placeholder="Input caption"
            keyboardType="default"
            placeholderTextColor="rgba(0, 0, 0, 0.87)"
          />
          <View style={[styles.caption, styles.captionPosition]}>
            <Text style={[styles.caption1, styles.captionPosition]}>
              Buscar en biblioteca
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  lightPosition: {
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
    position: "absolute",
  },
  dialogPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
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
    width: 40,
    top: 8,
    height: 40,
    position: "absolute",
  },
  flatdefaultPosition: {
    top: "50%",
    marginTop: -12,
    position: "absolute",
  },
  darkPosition: {
    left: 28,
    position: "absolute",
  },
  captionPosition: {
    height: 16,
    left: 0,
    position: "absolute",
  },
  bgLight: {
    top: 0,
    bottom: 0,
    left: 0,
    position: "absolute",
    backgroundColor: Color.lightColor,
  },
  colorsbgCard: {
    position: "absolute",
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
    width: "100%",
  },
  title: {
    fontSize: FontSize.spTitleMedium_size,
    lineHeight: 26,
    height: 24,
    textAlign: "left",
    color: Color.textColor,
  },
  spTitleMedium: {
    top: 16,
    right: 72,
    bottom: 16,
    left: 72,
    position: "absolute",
  },
  closeIcon: {
    height: 40,
    left: 8,
  },
  iconsButton: {
    borderRadius: Border.br_11xs,
    top: 0,
    display: "none",
    bottom: 0,
    left: 0,
    position: "absolute",
    backgroundColor: Color.lightColor,
  },
  iconsColorizer1: {
    backgroundColor: Color.grayColor,
    position: "absolute",
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
    position: "absolute",
  },
  cover: {
    bottom: 314,
    height: 72,
    position: "absolute",
  },
  bgPrimary: {
    borderRadius: Border.br_7xs,
    shadowRadius: 4,
    elevation: 4,
    backgroundColor: Color.primaryColor,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
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
    right: 100,
    bottom: 294,
    height: 40,
  },
  bgPrimary1: {
    backgroundColor: Color.textColor,
    top: 0,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  stroke: {
    height: 1,
    opacity: 0.4,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  spSubheadingRegular: {
    bottom: 6,
    height: 20,
    opacity: 0.54,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.spBody1Regular,
    position: "absolute",
  },
  caption1: {
    fontSize: FontSize.spCaptionRegular_size,
    lineHeight: 15,
    width: 180,
    fontFamily: FontFamily.spBody1Regular,
    textAlign: "left",
    color: Color.textColor,
    top: 0,
  },
  caption: {
    bottom: 32,
    right: 0,
    height: 16,
  },
  default: {
    top: 56,
    right: 152,
    height: 56,
  },
  firstLevel: {
    height: 465,
    bottom: 0,
    left: 0,
    position: "absolute",
    backgroundColor: Color.lightColor,
  },
  pantallaCreacionDePlanes3: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.lightColor,
  },
});

export default PantallaCreacionDePlanes3;
