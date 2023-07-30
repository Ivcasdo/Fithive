import * as React from "react";
import { Pressable, StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";

const PantallaPersonalizacion = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.pantallaPersonalizacion}>
      <Image
        style={styles.pantallaPersonalizacionChild}
        contentFit="cover"
        source={require("../assets/IconoApp.png")}
      />
      <Pressable style={[styles.dropdown, styles.dropdownLayout]}>
        <View style={[styles.stroke, styles.strokePosition]}>
          <View style={[styles.bgPrimary, styles.primaryPosition]} />
        </View>
        <View style={[styles.spSubheadingRegular, styles.subheadingPosition1]}>
          <Text style={[styles.subheading, styles.subheadingTypo]}>
            Activado
          </Text>
        </View>
        <Image
          style={[styles.dropdownIcon, styles.dropdownIconLayout]}
          contentFit="cover"
          source={require("../assets/dropdown1.png")}
        />
        <View style={styles.caption}>
          <Text style={[styles.caption1, styles.captionTypo]}>Modo oscuro</Text>
        </View>
      </Pressable>
      <Pressable style={[styles.dropdown1, styles.caption3Layout]} >
        <View style={[styles.stroke1, styles.strokePosition]}>
          <View style={[styles.bgPrimary, styles.primaryPosition]} />
        </View>
        <View style={[styles.spSubheadingRegular1, styles.subheadingPosition]}>
          <Text style={[styles.subheading1, styles.subheadingPosition]}>
            Usar configuracion del dispositivo
          </Text>
        </View>
        <Image
          style={[styles.dropdownIcon1, styles.dropdownIconLayout]}
          contentFit="cover"
          source={require("../assets/dropdown1.png")}
        />
        <View style={styles.caption}>
          <Text style={[styles.caption3, styles.caption3Layout]}>
            Tamaño de letra
          </Text>
        </View>
      </Pressable>
      <Pressable style={[styles.dark, styles.darkPosition]} onPress={() => navigation.navigate("PantallaPerfilDeUsuario")}>
        <Image
          style={[styles.darkIcon, styles.primaryPosition]}
          contentFit="cover"
          source={require("../assets/-dark2.png")}
        />
      </Pressable>
      <Pressable style={[styles.dark1, styles.darkPosition]} onPress={() => navigation.navigate("PantallaPerfilDeUsuario")}>
        <View style={styles.dark2}>
          <LinearGradient
            style={[styles.bgPrimary2, styles.primaryPosition]}
            locations={[0, 1]}
            colors={["#1a73e9", "#6c92f4"]}
          />
        </View>
        <View style={[styles.flatdefault, styles.body2Layout]}>
          <View style={[styles.spBody2Medium, styles.body2Layout]}>
            <Text style={[styles.body2, styles.body2Layout]}>Guardar</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  dropdownLayout: {
    height: 48,
    left: 29,
  },
  strokePosition: {
    opacity: 0.4,
    height: 1,
    left: 0,
    right: 0,
    position: "absolute",
  },
  primaryPosition: {
    top: 0,
    left: 0,
  },
  subheadingPosition1: {
    height: 20,
    left: 0,
    position: "absolute",
  },
  subheadingTypo: {
    textAlign: "left",
    color: Color.textColor,
    fontFamily: FontFamily.spCaptionRegular,
    lineHeight: 21,
    fontSize: FontSize.size_base,
    top: 0,
  },
  dropdownIconLayout: {
    height: 32,
    bottom: 0,
    width: 32,
    position: "absolute",
  },
  captionTypo: {
    lineHeight: 15,
    fontSize: FontSize.spCaptionRegular_size,
    height: 16,
    textAlign: "left",
    color: Color.textColor,
    fontFamily: FontFamily.spCaptionRegular,
    top: 0,
    left: 0,
  },
  caption3Layout: {
    width: 263,
    position: "absolute",
  },
  subheadingPosition: {
    height: 39,
    left: 0,
    position: "absolute",
  },
  darkPosition: {
    height: 40,
    top: 218,
    position: "absolute",
  },
  body2Layout: {
    height: 24,
    position: "absolute",
  },
  pantallaPersonalizacionChild: {
    top: 18,
    left: 13,
    height: 31,
    width: 32,
    position: "absolute",
  },
  bgPrimary: {
    backgroundColor: Color.grayColor,
    bottom: 0,
    right: 0,
    position: "absolute",
  },
  stroke: {
    bottom: 0,
  },
  subheading: {
    height: 20,
    left: 0,
    position: "absolute",
    width: 200,
  },
  spSubheadingRegular: {
    bottom: 6,
    opacity: 0.87,
    right: 0,
  },
  dropdownIcon: {
    right: 0,
  },
  caption1: {
    width: 200,
    position: "absolute",
  },
  caption: {
    bottom: 32,
    height: 16,
    left: 0,
    right: 0,
    position: "absolute",
  },
  dropdown: {
    top: 83,
    width: 200,
    position: "absolute",
  },
  stroke1: {
    bottom: -3,
  },
  subheading1: {
    width: 281,
    textAlign: "left",
    color: Color.textColor,
    fontFamily: FontFamily.spCaptionRegular,
    lineHeight: 21,
    fontSize: FontSize.size_base,
    top: 0,
  },
  spSubheadingRegular1: {
    right: -18,
    bottom: -13,
    opacity: 0.87,
  },
  dropdownIcon1: {
    right: -9,
  },
  caption3: {
    lineHeight: 15,
    fontSize: FontSize.spCaptionRegular_size,
    height: 16,
    textAlign: "left",
    color: Color.textColor,
    fontFamily: FontFamily.spCaptionRegular,
    top: 0,
    left: 0,
  },
  dropdown1: {
    top: 136,
    height: 48,
    left: 29,
  },
  darkIcon: {
    maxWidth: "100%",
    maxHeight: "100%",
    bottom: 0,
    right: 0,
    position: "absolute",
    overflow: "hidden",
  },
  dark: {
    right: 95,
    width: 72,
  },
  bgPrimary2: {
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
    bottom: 0,
    right: 0,
    position: "absolute",
  },
  dark2: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  body2: {
    fontSize: FontSize.spBUTTON_size,
    textTransform: "uppercase",
    fontWeight: "500",
    fontFamily: FontFamily.spBUTTON,
    color: Color.lightColor,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 112,
    top: 0,
    left: 0,
  },
  spBody2Medium: {
    top: "50%",
    marginTop: -12,
    height: 24,
    left: 0,
    right: 0,
  },
  flatdefault: {
    right: 8,
    left: 8,
    top: "50%",
    marginTop: -12,
    height: 24,
  },
  dark1: {
    width: 128,
    left: 29,
    height: 40,
    top: 218,
  },
  pantallaPersonalizacion: {
    backgroundColor: Color.lightColor,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default PantallaPersonalizacion;
