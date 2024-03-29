import * as React from "react";
import { Pressable, StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";

const PantallaNotificaciones = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.pantallaNotificaciones}>
      <Image
        style={styles.pantallaNotificacionesChild}
        contentFit="cover"
        source={require("../assets/IconoApp.png")}
      />
      <Pressable style={styles.dropdown}>
        <View style={styles.stroke}>
          <View style={[styles.bgPrimary, styles.darkIconPosition]} />
        </View>
        <View style={[styles.spSubheadingRegular, styles.subheadingPosition]}>
          <Text style={[styles.subheading, styles.caption1Typo]}>Activado</Text>
        </View>
        <Image
          style={styles.dropdownIcon}
          contentFit="cover"
          source={require("../assets/dropdown1.png")}
        />
        <View style={[styles.caption, styles.captionPosition]}>
          <Text style={[styles.caption1, styles.captionPosition]}>
            Notificaciones
          </Text>
        </View>
      </Pressable>
      <Pressable style={styles.dark} onPress={() => navigation.navigate("PantallaPerfilDeUsuario")}>
        <Image
          style={[styles.darkIcon, styles.darkIconPosition]}
          contentFit="cover"
          source={require("../assets/-dark2.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  darkIconPosition: {
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    position: "absolute",
  },
  subheadingPosition: {
    height: 20,
    left: 0,
    position: "absolute",
  },
  caption1Typo: {
    textAlign: "left",
    color: Color.textColor,
    fontFamily: FontFamily.spCaptionRegular,
    top: 0,
    width: 200,
  },
  captionPosition: {
    height: 16,
    left: 0,
    position: "absolute",
  },
  pantallaNotificacionesChild: {
    top: 18,
    left: 13,
    height: 31,
    width: 32,
    position: "absolute",
  },
  bgPrimary: {
    backgroundColor: Color.grayColor,
  },
  stroke: {
    height: 1,
    opacity: 0.4,
    left: 0,
    bottom: 0,
    right: 0,
    position: "absolute",
  },
  subheading: {
    fontSize: FontSize.size_base,
    lineHeight: 21,
    height: 20,
    left: 0,
    position: "absolute",
  },
  spSubheadingRegular: {
    bottom: 6,
    opacity: 0.87,
    right: 0,
  },
  dropdownIcon: {
    height: 32,
    bottom: 0,
    right: 0,
    width: 32,
    position: "absolute",
  },
  caption1: {
    fontSize: FontSize.spCaptionRegular_size,
    lineHeight: 15,
    textAlign: "left",
    color: Color.textColor,
    fontFamily: FontFamily.spCaptionRegular,
    top: 0,
    width: 200,
  },
  caption: {
    bottom: 32,
    right: 0,
  },
  dropdown: {
    top: 83,
    left: 29,
    height: 48,
    width: 200,
    position: "absolute",
  },
  darkIcon: {
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  dark: {
    top: 175,
    right: 259,
    width: 72,
    height: 40,
    position: "absolute",
  },
  pantallaNotificaciones: {
    backgroundColor: Color.lightColor,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default PantallaNotificaciones;
