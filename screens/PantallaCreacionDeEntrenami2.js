import React, { useState } from "react";
import { View, StyleSheet, Text, Pressable, TextInput } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Switch as RNPSwitch } from "react-native-paper";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const PantallaCreacionDeEntrenami2 = () => {
  const [switchOnValue, setSwitchOnValue] = useState(false);

  return (
    <View style={styles.pantallaCreacionDeEntrenami}>
      <View style={[styles.firstLevel, styles.coverPosition]}>
        <View style={[styles.dialog, styles.dialogShadowBox]}>
          <View style={styles.dialogPosition}>
            <View style={[styles.bgLight, styles.lightPosition]} />
          </View>
        </View>
        <View style={[styles.lightHamburger, styles.defaultLayout]}>
          <View style={styles.dialogPosition}>
            <View style={[styles.bgLight, styles.lightPosition]} />
          </View>
          <View style={[styles.spTitleMedium, styles.firstLevelPosition]}>
            <Text style={[styles.title, styles.titleTypo]}>
              Press de hombro
            </Text>
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
            style={[styles.logoSampleIcon, styles.switchonPosition]}
            contentFit="cover"
            source={require("../assets/logo-sample.png")}
          />
        </View>
        <View style={[styles.cover, styles.coverPosition]}>
          <View style={[styles.bgLight, styles.lightPosition]} />
          <Pressable style={styles.dark}>
            <View style={styles.dialogPosition}>
              <LinearGradient
                style={[styles.bgPrimary, styles.lightPosition]}
                locations={[0, 1]}
                colors={["#1a73e9", "#6c92f4"]}
              />
            </View>
            <View style={[styles.flatdefault, styles.switchonPosition]}>
              <View style={[styles.spBody2Medium, styles.switchonPosition]}>
                <Text style={[styles.body2, styles.body2Position]}>
                  guardar
                </Text>
              </View>
            </View>
          </Pressable>
          <View style={styles.secLevelSwitch}>
            <View style={[styles.light1, styles.dialogPosition]}>
              <View style={[styles.bgLight3, styles.lightPosition]} />
            </View>
            <View style={styles.spSubheadingRegular}>
              <Text style={[styles.subheading, styles.caption1Typo]}>
                Añadir a biblioteca
              </Text>
              <RNPSwitch
                style={[styles.switchon, styles.switchonPosition]}
                value={switchOnValue}
                onValueChange={setSwitchOnValue}
                color="#fff"
              />
            </View>
          </View>
        </View>
        <View style={[styles.default, styles.defaultPosition2]}>
          <View style={[styles.stroke, styles.lightPosition]}>
            <View style={[styles.bgPrimary1, styles.lightPosition]} />
          </View>
          <TextInput
            style={[styles.spSubheadingRegular1, styles.coverPosition]}
            placeholder="Ejercicio 2"
            keyboardType="default"
            placeholderTextColor="rgba(0, 0, 0, 0.87)"
          />
          <View style={[styles.caption, styles.captionPosition]}>
            <Text style={[styles.caption1, styles.captionPosition]}>
              Nombre
            </Text>
          </View>
        </View>
        <View style={[styles.default1, styles.defaultPosition1]}>
          <View style={[styles.stroke, styles.lightPosition]}>
            <View style={[styles.bgPrimary1, styles.lightPosition]} />
          </View>
          <TextInput
            style={[styles.spSubheadingRegular1, styles.coverPosition]}
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
          <View style={[styles.stroke, styles.lightPosition]}>
            <View style={[styles.bgPrimary1, styles.lightPosition]} />
          </View>
          <TextInput
            style={[styles.spSubheadingRegular1, styles.coverPosition]}
            placeholder="Entrenamiento "
            keyboardType="default"
            placeholderTextColor="rgba(0, 0, 0, 0.87)"
          />
          <View style={[styles.caption, styles.captionPosition]}>
            <Text style={[styles.caption1, styles.captionPosition]}>
              Tipo de ejercicio
            </Text>
          </View>
        </View>
        <View style={[styles.default3, styles.defaultPosition]}>
          <View style={[styles.stroke, styles.lightPosition]}>
            <View style={[styles.bgPrimary1, styles.lightPosition]} />
          </View>
          <TextInput
            style={[styles.spSubheadingRegular1, styles.coverPosition]}
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
  lightPosition: {
    bottom: 0,
    left: 0,
    right: 0,
    position: "absolute",
  },
  defaultLayout: {
    height: 56,
    position: "absolute",
  },
  firstLevelPosition: {
    bottom: 16,
    position: "absolute",
  },
  titleTypo: {
    width: 216,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    top: 0,
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
  switchonPosition: {
    top: "50%",
    position: "absolute",
  },
  body2Position: {
    alignItems: "center",
    display: "flex",
    height: 24,
    left: 0,
    position: "absolute",
  },
  caption1Typo: {
    lineHeight: 15,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.robotoRegular,
    textAlign: "left",
    color: Color.textColor,
    top: 0,
  },
  defaultPosition2: {
    right: 223,
    left: 28,
  },
  captionPosition: {
    height: 16,
    left: 0,
    position: "absolute",
  },
  defaultPosition1: {
    left: 180,
    right: 71,
  },
  defaultPosition: {
    top: 116,
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
    fontSize: FontSize.size_xl,
    lineHeight: 26,
    height: 24,
    textAlign: "left",
    color: Color.textColor,
    width: 216,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    left: 0,
    position: "absolute",
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
    top: 0,
    display: "none",
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
    marginTop: -12,
    top: "50%",
    display: "none",
  },
  lightHamburger: {
    top: 0,
    left: 0,
    right: 0,
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
    fontSize: FontSize.size_sm,
    textTransform: "uppercase",
    color: Color.lightColor,
    textAlign: "center",
    justifyContent: "center",
    width: 216,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    top: 0,
    alignItems: "center",
    display: "flex",
  },
  spBody2Medium: {
    marginTop: -12,
    top: "50%",
    height: 24,
    left: 0,
    right: 0,
  },
  flatdefault: {
    marginTop: -12,
    top: "50%",
    right: 8,
    left: 8,
    height: 24,
  },
  dark: {
    right: 100,
    bottom: 8,
    left: 28,
    height: 40,
    position: "absolute",
  },
  bgLight3: {
    borderRadius: Border.br_10xs,
    top: 0,
    backgroundColor: Color.lightColor,
  },
  light1: {
    display: "none",
  },
  subheading: {
    width: 116,
    fontFamily: FontFamily.robotoRegular,
    alignItems: "center",
    display: "flex",
    height: 24,
    left: 0,
    position: "absolute",
  },
  switchon: {
    marginTop: -11,
    right: -33,
    width: 37,
    height: 22,
  },
  spSubheadingRegular: {
    height: "50%",
    top: "25%",
    right: 207,
    bottom: "25%",
    left: 16,
    position: "absolute",
  },
  secLevelSwitch: {
    top: -19,
    left: 13,
    height: 48,
    right: 8,
    position: "absolute",
  },
  cover: {
    bottom: 176,
    height: 72,
    position: "absolute",
  },
  bgPrimary1: {
    backgroundColor: Color.textColor,
    top: 0,
  },
  stroke: {
    height: 1,
    opacity: 0.4,
  },
  spSubheadingRegular1: {
    bottom: 6,
    height: 20,
    opacity: 0.54,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.robotoRegular,
    position: "absolute",
  },
  caption1: {
    width: 109,
    fontFamily: FontFamily.robotoRegular,
    lineHeight: 15,
    fontSize: FontSize.size_xs,
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
    height: 56,
    position: "absolute",
  },
  default1: {
    top: 50,
    height: 56,
    position: "absolute",
  },
  default2: {
    right: 223,
    left: 28,
  },
  default3: {
    left: 180,
    right: 71,
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

export default PantallaCreacionDeEntrenami2;
