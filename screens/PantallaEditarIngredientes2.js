import * as React from "react";
import { View, StyleSheet, Text, TextInput, Pressable } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const PantallaEditarIngredientes2 = () => {
  return (
    <View style={styles.pantallaEditarIngredientes2}>
      <View style={[styles.firstLevel, styles.primaryPosition]}>
        <View style={[styles.dialog, styles.dialogShadowBox]}>
          <View style={[styles.colorsbgCard, styles.dialogPosition]}>
            <View style={[styles.bgLight, styles.primaryPosition]} />
          </View>
        </View>
        <View style={styles.lightHamburger}>
          <View style={[styles.colorsbgCard, styles.dialogPosition]}>
            <View style={[styles.bgLight, styles.primaryPosition]} />
          </View>
          <View style={[styles.spTitleMedium, styles.defaultPosition1]}>
            <Text style={[styles.title, styles.titleFlexBox]}>
              Añadir alimento
            </Text>
          </View>
          <Image
            style={[styles.closeIcon, styles.searchLayout]}
            contentFit="cover"
            source={require("../assets/close.png")}
          />
          <View style={[styles.search, styles.searchLayout]}>
            <View style={[styles.colorsbgCard, styles.dialogPosition]}>
              <View style={[styles.iconsButton, styles.primaryPosition]} />
            </View>
            <View style={[styles.colorsbgCard, styles.dialogPosition]}>
              <View style={[styles.iconsColorizer1, styles.dialogPosition]} />
            </View>
          </View>
          <View style={[styles.bookmarkPlusOutline, styles.searchLayout]}>
            <View style={[styles.colorsbgCard, styles.dialogPosition]}>
              <View style={[styles.iconsButton, styles.primaryPosition]} />
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
        <View style={[styles.default, styles.defaultPosition]}>
          <View style={[styles.stroke, styles.primaryPosition]}>
            <View style={[styles.bgPrimary, styles.primaryPosition]} />
          </View>
          <TextInput
            style={[styles.spSubheadingRegular, styles.primaryPosition]}
            placeholder="152 kcal"
            keyboardType="default"
            placeholderTextColor="rgba(0, 0, 0, 0.87)"
          />
          <View style={[styles.caption, styles.captionPosition]}>
            <Text style={[styles.caption1, styles.captionPosition]}>
              Calorias
            </Text>
          </View>
        </View>
        <View style={[styles.default1, styles.darkPosition]}>
          <View style={[styles.stroke, styles.primaryPosition]}>
            <View style={[styles.bgPrimary, styles.primaryPosition]} />
          </View>
          <TextInput
            style={[styles.spSubheadingRegular, styles.primaryPosition]}
            placeholder="Ejemplo"
            keyboardType="default"
            placeholderTextColor="rgba(0, 0, 0, 0.87)"
          />
          <View style={[styles.caption, styles.captionPosition]}>
            <Text style={[styles.caption1, styles.captionPosition]}>
              Nombre
            </Text>
          </View>
        </View>
        <Pressable style={[styles.dark, styles.darkPosition]}>
          <View style={[styles.colorsbgCard, styles.dialogPosition]}>
            <LinearGradient
              style={[styles.bgPrimary2, styles.dialogShadowBox]}
              locations={[0, 1]}
              colors={["#1a73e9", "#6c92f4"]}
            />
          </View>
          <View style={[styles.flatdefault, styles.flatdefaultPosition]}>
            <View style={[styles.spBody2Medium, styles.flatdefaultPosition]}>
              <Text style={[styles.body2, styles.titleTypo]}>guardar</Text>
            </View>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  primaryPosition: {
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
  defaultPosition1: {
    right: 72,
    position: "absolute",
  },
  titleFlexBox: {
    textAlign: "left",
    color: Color.textColor,
    top: 0,
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
  defaultPosition: {
    top: 66,
    height: 56,
  },
  captionPosition: {
    height: 16,
    left: 0,
    position: "absolute",
  },
  darkPosition: {
    left: 21,
    position: "absolute",
  },
  titleTypo: {
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    height: 24,
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
    fontSize: FontSize.size_xl,
    lineHeight: 26,
    width: 216,
    height: 24,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    left: 0,
    position: "absolute",
  },
  spTitleMedium: {
    top: 16,
    bottom: 16,
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
    left: 0,
    right: 0,
    position: "absolute",
  },
  bgPrimary: {
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
    fontFamily: FontFamily.robotoRegular,
    position: "absolute",
  },
  caption1: {
    fontSize: FontSize.size_xs,
    lineHeight: 15,
    width: 109,
    fontFamily: FontFamily.robotoRegular,
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
    left: 179,
    right: 72,
    position: "absolute",
  },
  default1: {
    right: 230,
    top: 66,
    height: 56,
  },
  bgPrimary2: {
    borderRadius: Border.br_7xs,
    shadowRadius: 4,
    elevation: 4,
    backgroundColor: Color.accentColor,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  body2: {
    fontSize: FontSize.size_sm,
    textTransform: "uppercase",
    color: Color.lightColor,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 112,
    height: 24,
    top: 0,
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
    right: 211,
    bottom: 284,
    height: 40,
  },
  firstLevel: {
    height: 465,
    bottom: 0,
    left: 0,
    position: "absolute",
    backgroundColor: Color.lightColor,
  },
  pantallaEditarIngredientes2: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.lightColor,
  },
});

export default PantallaEditarIngredientes2;
