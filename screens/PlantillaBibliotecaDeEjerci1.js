import * as React from "react";
import { View, StyleSheet, Text, Pressable, TextInput } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const PlantillaBibliotecaDeEjerci1 = () => {
  return (
    <View style={styles.plantillaBibliotecaDeEjerci}>
      <View style={[styles.firstLevel, styles.coverPosition]}>
        <View style={styles.dialog}>
          <View style={styles.colorsbgCardPosition}>
            <View style={[styles.bgLight, styles.strokePosition]} />
          </View>
        </View>
        <View style={styles.lightHamburger}>
          <View style={styles.colorsbgCardPosition}>
            <View style={[styles.bgLight, styles.strokePosition]} />
          </View>
          <View style={[styles.spTitleMedium, styles.firstLevelPosition]}>
            <Text style={styles.title}>Ejercicio 2</Text>
          </View>
          <Image
            style={[styles.closeIcon, styles.searchLayout]}
            contentFit="cover"
            source={require("../assets/close.png")}
          />
          <View style={[styles.search, styles.searchLayout]}>
            <View style={styles.colorsbgCardPosition}>
              <View style={[styles.iconsButton, styles.strokePosition]} />
            </View>
            <View style={styles.colorsbgCardPosition}>
              <View
                style={[styles.iconsColorizer1, styles.colorsbgCardPosition]}
              />
            </View>
          </View>
          <View style={[styles.bookmarkPlusOutline, styles.searchLayout]}>
            <View style={styles.colorsbgCardPosition}>
              <View style={[styles.iconsButton, styles.strokePosition]} />
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
          <View style={[styles.bgLight, styles.strokePosition]} />
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
          <Pressable style={[styles.dark2, styles.darkPosition1]}>
            <Image
              style={[styles.darkIcon, styles.strokePosition]}
              contentFit="cover"
              source={require("../assets/-dark1.png")}
            />
            <View style={[styles.flatdefault1, styles.darkPosition1]}>
              <View style={[styles.spBody2Medium, styles.flatdefaultPosition]}>
                <Text style={[styles.body21, styles.bodyTypo]}>borrar</Text>
              </View>
            </View>
          </Pressable>
          <Pressable style={[styles.dark3, styles.darkPosition1]}>
            <Image
              style={[styles.darkIcon, styles.strokePosition]}
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
              <Text style={[styles.body23, styles.bodyTypo]}>guardar</Text>
            </View>
          </View>
        </Pressable>
        <Pressable style={[styles.dark6, styles.darkPosition]}>
          <Image
            style={[styles.darkIcon, styles.strokePosition]}
            contentFit="cover"
            source={require("../assets/-dark1.png")}
          />
          <View style={[styles.flatdefault1, styles.darkPosition1]}>
            <View style={[styles.spBody2Medium, styles.flatdefaultPosition]}>
              <Text style={[styles.body21, styles.bodyTypo]}>borrar</Text>
            </View>
          </View>
        </Pressable>
        <View style={[styles.default, styles.defaultPosition]}>
          <View style={[styles.stroke, styles.strokePosition]}>
            <View style={[styles.bgPrimary2, styles.strokePosition]} />
          </View>
          <TextInput
            style={styles.spSubheadingRegular}
            placeholder="Ejercicio 2"
            keyboardType="default"
            placeholderTextColor="rgba(0, 0, 0, 0.87)"
          />
          <View style={styles.caption}>
            <Text style={[styles.caption1, styles.captionTypo]}>Nombre</Text>
          </View>
        </View>
        <View style={[styles.default1, styles.defaultPosition]}>
          <View style={[styles.stroke, styles.strokePosition]}>
            <View style={[styles.bgPrimary2, styles.strokePosition]} />
          </View>
          <TextInput
            style={styles.spSubheadingRegular}
            placeholder="Ejercicio de fuerza "
            keyboardType="default"
            placeholderTextColor="rgba(0, 0, 0, 0.87)"
          />
          <View style={styles.caption}>
            <Text
              style={[styles.caption3, styles.captionTypo]}
            >{`Tipo de ejercicio `}</Text>
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
  strokePosition: {
    bottom: 0,
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
    fontSize: FontSize.spBody2Medium_size,
    height: 24,
    fontFamily: FontFamily.spBody2Medium,
    fontWeight: "500",
    top: 0,
    left: 0,
    position: "absolute",
  },
  darkPosition: {
    bottom: 265,
    height: 40,
    position: "absolute",
  },
  defaultPosition: {
    top: 70,
    height: 56,
    position: "absolute",
  },
  captionTypo: {
    lineHeight: 15,
    fontSize: FontSize.spCaptionRegular_size,
    height: 16,
    fontFamily: FontFamily.spBody1Regular,
    textAlign: "left",
    color: Color.textColor,
    top: 0,
    left: 0,
    position: "absolute",
  },
  bgLight: {
    top: 0,
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
    width: 216,
    height: 24,
    textAlign: "left",
    color: Color.textColor,
    fontFamily: FontFamily.spBody2Medium,
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
    top: 0,
    bottom: 0,
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
    width: 132,
    color: Color.lightColor,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    textTransform: "uppercase",
    fontSize: FontSize.spBody2Medium_size,
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
    top: 0,
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
    fontSize: FontSize.spBody2Medium_size,
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
    width: 72,
    height: 40,
    display: "none",
  },
  dark3: {
    left: 171,
    width: 72,
    height: 40,
    display: "none",
  },
  cover: {
    bottom: 314,
    height: 72,
    position: "absolute",
    right: 0,
  },
  body23: {
    width: 112,
    color: Color.lightColor,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    textTransform: "uppercase",
    fontSize: FontSize.spBody2Medium_size,
  },
  dark4: {
    right: 203,
    left: 29,
  },
  dark6: {
    left: 183,
    width: 72,
  },
  bgPrimary2: {
    backgroundColor: Color.textColor,
    top: 0,
    bottom: 0,
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
    fontFamily: FontFamily.spBody1Regular,
    left: 0,
    right: 0,
    position: "absolute",
  },
  caption1: {
    width: 109,
  },
  caption: {
    bottom: 32,
    height: 16,
    left: 0,
    right: 0,
    position: "absolute",
  },
  default: {
    right: 223,
    left: 28,
  },
  caption3: {
    width: 180,
  },
  default1: {
    right: 31,
    left: 149,
  },
  firstLevel: {
    height: 449,
    bottom: 16,
    position: "absolute",
    backgroundColor: Color.lightColor,
  },
  plantillaBibliotecaDeEjerci: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.lightColor,
  },
});

export default PlantillaBibliotecaDeEjerci1;
