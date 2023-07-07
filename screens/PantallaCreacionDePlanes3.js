import * as React from "react";
import { View, StyleSheet, Text, Pressable, TextInput } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";
const PantallaCreacionDePlanes3 = ({ onClose, editar }) => {
  //pantalla añadir buscar entrenamientos
  const navigation = useNavigation();
  
  const handleCerrarPantallaSuperpuesta = () => {
    onClose();
  };
  const handleboton = () => {
    onClose();
    navigation.navigate("PantallaCreacionDeEntrenamientos", {editar: editar, planes: true });
  };
  return (
    <View style={styles.pantallaCreacionDePlanes3}>
      <View style={[styles.lightHamburger, styles.spBody2MediumPosition]}>
        <View style={styles.lightPosition}>
          <View style={[styles.bgLight, styles.primaryPosition]} />
        </View>
        <View style={styles.spTitleMedium}>
          <Text style={[styles.title, styles.titlePosition]}>
            Añadir entrenamiento
          </Text>
        </View>
        <Pressable onPress={handleCerrarPantallaSuperpuesta}>
        <Image
          style={[styles.closeIcon, styles.searchLayout]}
          contentFit="cover"
          source={require("../assets/close.png")}
        />
        </Pressable>
        <View style={[styles.search, styles.searchLayout]}>
          <View style={styles.lightPosition}>
            <View style={[styles.iconsButton, styles.primaryPosition]} />
          </View>
          <View style={styles.lightPosition}>
            <View style={[styles.iconsColorizer1, styles.lightPosition]} />
          </View>
        </View>
        <View style={[styles.bookmarkPlusOutline, styles.searchLayout]}>
          <View style={styles.lightPosition}>
            <View style={[styles.iconsButton, styles.primaryPosition]} />
          </View>
          <View style={styles.lightPosition}>
            <View style={[styles.iconsColorizer1, styles.lightPosition]} />
          </View>
        </View>
        <Image
          style={[styles.logoSampleIcon, styles.flatdefaultPosition]}
          contentFit="cover"
          source={require("../assets/logo-sample.png")}
        />
      </View>
      <Pressable style={[styles.dark, styles.darkPosition]} onPress={handleboton}>
        <View style={styles.lightPosition}>
          <LinearGradient
            style={[styles.bgPrimary, styles.primaryPosition]}
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
        <View style={[styles.stroke, styles.primaryPosition]}>
          <View style={[styles.bgPrimary1, styles.primaryPosition]} />
        </View>
        <TextInput
          style={[styles.spSubheadingRegular, styles.spBody2MediumPosition]}
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
  );
};

const styles = StyleSheet.create({
  spBody2MediumPosition: {
    left: 0,
    right: 0,
  },
  primaryPosition: {
    bottom: 0,
    left: 0,
    right: 0,
    position: "absolute",
  },
  titlePosition: {
    width: 216,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    height: 24,
    left: 0,
    top: 0,
    position: "absolute",
  },
  searchLayout: {
    width: 40,
    top: 8,
    height: 40,
    position: "absolute",
  },
  lightPosition: {
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
  bgLight: {
    top: 0,
    backgroundColor: Color.lightColor,
    bottom: 0,
  },
  title: {
    fontSize: FontSize.size_xl,
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
    display: "none",
    top: 0,
    backgroundColor: Color.lightColor,
    bottom: 0,
  },
  iconsColorizer1: {
    backgroundColor: Color.grayColor,
  },
  search: {
    right: 56,
    display: "none",
    height: 40,
  },
  bookmarkPlusOutline: {
    right: 8,
    display: "none",
    height: 40,
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
  bgPrimary: {
    borderRadius: Border.br_7xs,
    shadowColor: "rgba(38, 50, 56, 0.08)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    backgroundColor: Color.accentColor,
    top: 0,
  },
  body2: {
    fontSize: FontSize.size_sm,
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
    top: 131,
    right: 100,
    height: 40,
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
    fontFamily: FontFamily.robotoRegular,
    position: "absolute",
  },
  caption1: {
    fontSize: FontSize.size_xs,
    lineHeight: 15,
    width: 180,
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
    top: 56,
    right: 152,
    height: 56,
  },
  pantallaCreacionDePlanes3: {
    flex: 0.4,
    height: 203,
    width: "100%",
    backgroundColor: Color.lightColor,
    position: "absolute",
    bottom: 0,
  },
});

export default PantallaCreacionDePlanes3;
