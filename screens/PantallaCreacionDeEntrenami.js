import * as React from "react";
import { View, StyleSheet, Text, Pressable, TextInput } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const PantallaCreacionDeEntrenami = () => {
  return (
    <View style={styles.pantallaCreacionDeEntrenami}>
      <View style={[styles.firstLevel, styles.coverPosition]}>
        <View style={[styles.dialog, styles.dialogShadowBox]}>
          <View style={styles.dialogPosition}>
            <View style={[styles.bgLight, styles.primaryPosition]} />
          </View>
        </View>
        <View style={[styles.lightHamburger, styles.coverPosition]}>
          <View style={styles.dialogPosition}>
            <View style={[styles.bgLight, styles.primaryPosition]} />
          </View>
          <View style={[styles.spTitleMedium, styles.firstLevelPosition]}>
            <Text style={[styles.title, styles.titlePosition]}>
              Añadir de biblioteca
            </Text>
          </View>
          <Image
            style={[styles.closeIcon, styles.searchLayout]}
            contentFit="cover"
            source={require("../assets/close.png")}
          />
          <View style={[styles.search, styles.searchLayout]}>
            <View style={styles.dialogPosition}>
              <View style={[styles.iconsButton, styles.primaryPosition]} />
            </View>
            <View style={styles.dialogPosition}>
              <View style={[styles.iconsColorizer1, styles.dialogPosition]} />
            </View>
          </View>
          <View style={[styles.bookmarkPlusOutline, styles.searchLayout]}>
            <View style={styles.dialogPosition}>
              <View style={[styles.iconsButton, styles.primaryPosition]} />
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
          <Pressable style={[styles.dark, styles.darkPosition]}>
            <View style={styles.dialogPosition}>
              <LinearGradient
                style={[styles.bgPrimary, styles.primaryPosition]}
                locations={[0, 1]}
                colors={["#1a73e9", "#6c92f4"]}
              />
            </View>
            <View style={[styles.flatdefault, styles.flatdefaultPosition]}>
              <View style={[styles.spBody2Medium, styles.flatdefaultPosition]}>
                <Text style={[styles.body2, styles.titlePosition]}>
                  guardar
                </Text>
              </View>
            </View>
          </Pressable>
        </View>
        <View style={[styles.default, styles.darkPosition]}>
          <View style={[styles.stroke, styles.primaryPosition]}>
            <View style={[styles.bgPrimary1, styles.primaryPosition]} />
          </View>
          <TextInput
            style={[styles.spSubheadingRegular, styles.coverPosition]}
            placeholder="Ejercicio 2"
            keyboardType="default"
            placeholderTextColor="rgba(0, 0, 0, 0.87)"
          />
          <View style={[styles.caption, styles.captionPosition]}>
            <Text
              style={[styles.caption1, styles.captionPosition]}
            >{`Buscar `}</Text>
          </View>
        </View>
        <View style={[styles.default1, styles.defaultPosition]}>
          <View style={[styles.stroke, styles.primaryPosition]}>
            <View style={[styles.bgPrimary1, styles.primaryPosition]} />
          </View>
          <TextInput
            style={[styles.spSubheadingRegular, styles.coverPosition]}
            placeholder="3 "
            keyboardType="default"
            placeholderTextColor="rgba(0, 0, 0, 0.87)"
          />
          <View style={[styles.caption, styles.captionPosition]}>
            <Text style={[styles.caption1, styles.captionPosition]}>
              Nº de series
            </Text>
          </View>
        </View>
        <View style={[styles.default2, styles.defaultPosition]}>
          <View style={[styles.stroke, styles.primaryPosition]}>
            <View style={[styles.bgPrimary1, styles.primaryPosition]} />
          </View>
          <TextInput
            style={[styles.spSubheadingRegular, styles.coverPosition]}
            placeholder=" 2"
            keyboardType="default"
            placeholderTextColor="rgba(0, 0, 0, 0.87)"
          />
          <View style={[styles.caption, styles.captionPosition]}>
            <Text style={[styles.caption1, styles.captionPosition]}>
              Nº de repeticiones
            </Text>
          </View>
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
  primaryPosition: {
    bottom: 0,
    left: 0,
    right: 0,
    position: "absolute",
  },
  firstLevelPosition: {
    bottom: 16,
    position: "absolute",
  },
  titlePosition: {
    width: 216,
    fontFamily: FontFamily.spBUTTON,
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
    left: 28,
    position: "absolute",
  },
  captionPosition: {
    height: 16,
    left: 0,
    position: "absolute",
  },
  defaultPosition: {
    left: 180,
    right: 71,
    height: 56,
    position: "absolute",
  },
  bgLight: {
    top: 0,
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
    height: 24,
    textAlign: "left",
    color: Color.textColor,
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
    top: 0,
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
    position: "absolute",
    left: 0,
  },
  bgPrimary: {
    borderRadius: Border.br_7xs,
    shadowRadius: 4,
    elevation: 4,
    backgroundColor: Color.accentColor,
    top: 0,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 16,
    },
    shadowColor: "rgba(38, 50, 56, 0.08)",
  },
  body2: {
    fontSize: FontSize.spBUTTON_size,
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
    bottom: 8,
    height: 40,
  },
  cover: {
    bottom: 176,
    height: 72,
    position: "absolute",
    left: 0,
  },
  bgPrimary1: {
    backgroundColor: Color.textColor,
    top: 0,
  },
  stroke: {
    height: 1,
    opacity: 0.4,
  },
  spSubheadingRegular: {
    bottom: 6,
    height: 20,
    opacity: 0.54,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.spCaptionRegular,
    position: "absolute",
    left: 0,
  },
  caption1: {
    fontSize: FontSize.spCaptionRegular_size,
    lineHeight: 15,
    width: 109,
    fontFamily: FontFamily.spCaptionRegular,
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
    top: 48,
    right: 223,
    height: 56,
  },
  default1: {
    top: 50,
  },
  default2: {
    top: 116,
  },
  firstLevel: {
    height: 449,
    bottom: 16,
    position: "absolute",
    backgroundColor: Color.lightColor,
  },
  pantallaCreacionDeEntrenami: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.lightColor,
  },
});

export default PantallaCreacionDeEntrenami;
