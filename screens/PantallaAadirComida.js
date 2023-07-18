import * as React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";

const PantallaAadirComida = ({ onClose }) => {
  const navigation = useNavigation();
  const handleCerrarPantallaSuperpuesta = () => {
    onClose();
  };
  const handleBoton1 = () => {
    navigation.navigate("PantallaCrearComida", {editar: false});
    onClose();
  }
  const handleBoton2 = () => {
    navigation.navigate("PantallaBibliotecaDeAlimentos");
    onClose();
  }
  return (
    <View style={styles.pantallaAadirComida}>
      <View style={[styles.lightHamburger, styles.spBody2MediumPosition]}>
        <View style={styles.lightPosition}>
          <View style={styles.bgLightPosition} />
        </View>
        <View style={styles.spTitleMedium}>
          <Text style={[styles.title, styles.titlePosition]}>
            Añadir Comida
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
            <View style={[styles.iconsButton, styles.bgLightPosition]} />
          </View>
          <View style={styles.lightPosition}>
            <View style={[styles.iconsColorizer1, styles.lightPosition]} />
          </View>
        </View>
        <View style={[styles.bookmarkPlusOutline, styles.searchLayout]}>
          <View style={styles.lightPosition}>
            <View style={[styles.iconsButton, styles.bgLightPosition]} />
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
      <Pressable style={[styles.dark, styles.darkPosition]} onPress={handleBoton1}>
        <View style={styles.lightPosition}>
          <LinearGradient
            style={styles.primaryShadowBox}
            locations={[0, 1]}
            colors={["#1a73e9", "#6c92f4"]}
          />
        </View>
        <View style={[styles.flatdefault, styles.flatdefaultPosition]}>
          <View style={[styles.spBody2Medium, styles.flatdefaultPosition]}>
            <Text style={[styles.body2, styles.titlePosition]}>nueva</Text>
          </View>
        </View>
      </Pressable>
      <Pressable style={[styles.dark2, styles.darkPosition]} onPress={handleBoton2}>
        <View style={styles.lightPosition}>
          <LinearGradient
            style={styles.primaryShadowBox}
            locations={[0, 1]}
            colors={["#1a73e9", "#6c92f4"]}
          />
        </View>
        <View style={[styles.flatdefault, styles.flatdefaultPosition]}>
          <View style={[styles.spBody2Medium, styles.flatdefaultPosition]}>
            <Text style={[styles.body2, styles.titlePosition]}>
              de biblioteca
            </Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  spBody2MediumPosition: {
    left: 0,
    right: 0,
  },
  titlePosition: {
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    height: 24,
    left: 0,
    top: 0,
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
    left: 0,
    right: 0,
    top: 0,
    position: "absolute",
    backgroundColor: Color.lightColor,
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
    top: 94,
    height: 40,
    position: "absolute",
  },
  title: {
    fontSize: FontSize.size_xl,
    lineHeight: 26,
    color: Color.textColor,
    textAlign: "left",
    width: 216,
    height: 24,
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
    right: 0,
    position: "absolute",
  },
  primaryShadowBox: {
    backgroundColor: Color.accentColor,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(38, 50, 56, 0.08)",
    borderRadius: Border.br_7xs,
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
    position: "absolute",
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
    right: 205,
    left: 27,
  },
  dark2: {
    right: 50,
    left: 182,
  },
  pantallaAadirComida: {
    flex: 0.3,
    height: 182,
    width: "100%",
    backgroundColor: Color.lightColor,
    position: "absolute",
    bottom: 0,
  },
});

export default PantallaAadirComida;
