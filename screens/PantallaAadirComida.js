import * as React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const PantallaAadirComida = () => {
  return (
    <View style={styles.pantallaAadirComida}>
      <View style={[styles.firstLevel, styles.coverPosition]}>
        <View style={styles.dialog}>
          <View style={styles.colorsbgCardPosition}>
            <View style={[styles.bgLight, styles.lightPosition]} />
          </View>
        </View>
        <View style={[styles.lightHamburger, styles.lightPosition]}>
          <View style={styles.colorsbgCardPosition}>
            <View style={[styles.bgLight, styles.lightPosition]} />
          </View>
          <View style={styles.spTitleMedium}>
            <Text style={styles.title}>Añadir Comida</Text>
          </View>
          <Image
            style={[styles.closeIcon, styles.searchLayout]}
            contentFit="cover"
            source={require("../assets/close.png")}
          />
          <View style={[styles.search, styles.searchLayout]}>
            <View style={styles.colorsbgCardPosition}>
              <View style={[styles.iconsButton, styles.lightPosition]} />
            </View>
            <View style={styles.colorsbgCardPosition}>
              <View
                style={[styles.iconsColorizer1, styles.colorsbgCardPosition]}
              />
            </View>
          </View>
          <View style={[styles.bookmarkPlusOutline, styles.searchLayout]}>
            <View style={styles.colorsbgCardPosition}>
              <View style={[styles.iconsButton, styles.lightPosition]} />
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
        <View style={[styles.cover, styles.coverPosition]}>
          <View style={[styles.bgLight, styles.lightPosition]} />
          <Pressable style={[styles.dark, styles.darkPosition1]}>
            <View style={styles.colorsbgCardPosition}>
              <LinearGradient
                style={styles.primaryShadowBox}
                locations={[0, 1]}
                colors={["#1a73e9", "#6c92f4"]}
              />
            </View>
            <View style={[styles.flatdefault, styles.flatdefaultPosition]}>
              <View style={[styles.spBody2Medium, styles.flatdefaultPosition]}>
                <Text style={[styles.body2, styles.bodyTypo]}>empezar</Text>
              </View>
            </View>
          </Pressable>
          <Pressable style={[styles.dark2, styles.darkLayout]}>
            <Image
              style={[styles.darkIcon, styles.lightPosition]}
              contentFit="cover"
              source={require("../assets/-dark1.png")}
            />
            <View style={[styles.flatdefault1, styles.darkPosition1]}>
              <View style={[styles.spBody2Medium, styles.flatdefaultPosition]}>
                <Text style={[styles.body21, styles.bodyTypo]}>borrar</Text>
              </View>
            </View>
          </Pressable>
          <Pressable style={[styles.dark3, styles.darkLayout]}>
            <Image
              style={[styles.darkIcon, styles.lightPosition]}
              contentFit="cover"
              source={require("../assets/-dark1.png")}
            />
            <View style={[styles.flatdefault1, styles.darkPosition1]}>
              <View style={[styles.spBody2Medium, styles.flatdefaultPosition]}>
                <Text style={[styles.body21, styles.bodyTypo]}>editar</Text>
              </View>
            </View>
          </Pressable>
        </View>
        <Pressable style={[styles.dark4, styles.darkPosition]}>
          <View style={styles.colorsbgCardPosition}>
            <LinearGradient
              style={styles.primaryShadowBox}
              locations={[0, 1]}
              colors={["#1a73e9", "#6c92f4"]}
            />
          </View>
          <View style={[styles.flatdefault, styles.flatdefaultPosition]}>
            <View style={[styles.spBody2Medium, styles.flatdefaultPosition]}>
              <Text style={[styles.body23, styles.bodyTypo]}>nueva</Text>
            </View>
          </View>
        </Pressable>
        <Pressable style={[styles.dark6, styles.darkPosition]}>
          <View style={styles.colorsbgCardPosition}>
            <LinearGradient
              style={styles.primaryShadowBox}
              locations={[0, 1]}
              colors={["#1a73e9", "#6c92f4"]}
            />
          </View>
          <View style={[styles.flatdefault, styles.flatdefaultPosition]}>
            <View style={[styles.spBody2Medium, styles.flatdefaultPosition]}>
              <Text style={[styles.body23, styles.bodyTypo]}>
                de biblioteca
              </Text>
            </View>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  coverPosition: {
    left: 0,
    right: 0,
  },
  lightPosition: {
    top: 0,
    left: 0,
    right: 0,
    position: "absolute",
  },
  searchLayout: {
    width: 40,
    height: 40,
    top: 8,
    position: "absolute",
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
  darkPosition1: {
    bottom: 8,
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
  darkLayout: {
    width: 72,
    bottom: 8,
    height: 40,
    display: "none",
    position: "absolute",
  },
  darkPosition: {
    bottom: 331,
    height: 40,
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
    height: 40,
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
  },
  primaryShadowBox: {
    backgroundColor: Color.accentColor,
    elevation: 4,
    shadowRadius: 4,
    borderRadius: Border.br_7xs,
    top: 0,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 16,
    },
    shadowColor: "rgba(38, 50, 56, 0.08)",
    left: 0,
    bottom: 0,
    right: 0,
    position: "absolute",
  },
  body2: {
    width: 132,
    color: Color.lightColor,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    textTransform: "uppercase",
    fontSize: FontSize.spBUTTON_size,
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
    right: 200,
    left: 12,
    height: 40,
    display: "none",
  },
  darkIcon: {
    maxWidth: "100%",
    maxHeight: "100%",
    opacity: 0.32,
    bottom: 0,
    overflow: "hidden",
  },
  body21: {
    width: 56,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    textTransform: "uppercase",
    fontSize: FontSize.spBUTTON_size,
    color: Color.textColor,
  },
  flatdefault1: {
    right: 8,
    left: 8,
    top: 8,
    bottom: 8,
  },
  dark2: {
    left: 254,
  },
  dark3: {
    left: 171,
  },
  cover: {
    bottom: 314,
    height: 72,
    position: "absolute",
  },
  body23: {
    width: 112,
    color: Color.lightColor,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    textTransform: "uppercase",
    fontSize: FontSize.spBUTTON_size,
  },
  dark4: {
    right: 205,
    left: 27,
  },
  dark6: {
    right: 50,
    left: 182,
  },
  firstLevel: {
    height: 465,
    bottom: 0,
    position: "absolute",
    backgroundColor: Color.lightColor,
  },
  pantallaAadirComida: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.lightColor,
  },
});

export default PantallaAadirComida;
