import * as React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const PantallaEditarIngredientes = ({onClose,onAbrirEditarAlimento, alimentoEditar}) => {
  const handleCerrarPantallaSuperpuesta = () => {
    onClose();
  };
  const handleEditarAlimento= () =>{
    onAbrirEditarAlimento(true);
  }
  const handleBorrar = () => {
    onClose(true, alimentoEditar);
  }
  return (
    <View style={styles.pantallaEditarIngredientes}>
      <View style={[styles.lightHamburger, styles.spBody2MediumPosition]}>
        <View style={styles.spTitleMedium}>
          <Text style={styles.title}>{alimentoEditar.nombre}</Text>
        </View>
        <Pressable onPress={handleCerrarPantallaSuperpuesta}>
          <Image
            style={styles.closeIcon}
            contentFit="cover"
            source={require("../assets/close.png")}
          />
        </Pressable>
      </View>
      <Pressable style={[styles.dark, styles.darkPosition]} onPress={handleBorrar}>
        <Image
          style={[styles.darkIcon, styles.darkIconPosition]}
          contentFit="cover"
          source={require("../assets/-dark.png")}
        />
        <View style={[styles.flatdefault, styles.flatdefaultPosition]}>
          <View style={[styles.spBody2Medium, styles.flatdefault1Position]}>
            <Text style={[styles.body2, styles.bodyTypo]}>borrar</Text>
          </View>
        </View>
      </Pressable>
      <Pressable style={[styles.dark1, styles.darkPosition]}onPress={handleEditarAlimento}>
        <View style={styles.dark2}>
          <LinearGradient
            style={[styles.bgPrimary, styles.darkIconPosition]}
            locations={[0, 1]}
            colors={["#1a73e9", "#6c92f4"]}
          />
        </View>
        <View style={[styles.flatdefault1, styles.flatdefault1Position]}>
          <View style={[styles.spBody2Medium, styles.flatdefault1Position]}>
            <Text style={[styles.body21, styles.bodyTypo]}>Editar</Text>
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
  darkPosition: {
    top: 76,
    height: 40,
    position: "absolute",
  },
  darkIconPosition: {
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
    position: "absolute",
  },
  flatdefaultPosition: {
    right: 8,
    left: 8,
  },
  flatdefault1Position: {
    top: "50%",
    marginTop: -12,
    height: 24,
    position: "absolute",
  },
  bodyTypo: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    textTransform: "uppercase",
    fontSize: FontSize.size_sm,
    height: 24,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    left: 0,
    top: 0,
    position: "absolute",
  },
  title: {
    fontSize: FontSize.size_xl,
    lineHeight: 26,
    textAlign: "left",
    width: 216,
    height: 24,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    color: Color.textColor,
    left: 0,
    top: 0,
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
    width: 40,
    height: 40,
    left: 8,
    top: 8,
    position: "absolute",
  },
  lightHamburger: {
    height: 56,
    top: 0,
    right: 0,
    position: "absolute",
  },
  darkIcon: {
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    opacity: 0.32,
  },
  body2: {
    width: 56,
    color: Color.textColor,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    textTransform: "uppercase",
    fontSize: FontSize.size_sm,
  },
  spBody2Medium: {
    left: 0,
    right: 0,
  },
  flatdefault: {
    bottom: 8,
    top: 8,
    right: 8,
    position: "absolute",
  },
  dark: {
    left: 194,
    width: 72,
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
  body21: {
    color: Color.lightColor,
    width: 112,
  },
  flatdefault1: {
    right: 8,
    left: 8,
  },
  dark1: {
    right: 202,
    left: 30,
  },
  pantallaEditarIngredientes: {
    flex: 0.35,
    height: 204,
    width: "100%",
    backgroundColor: Color.lightColor,
    position: "absolute",
    bottom: 0,
  },
});

export default PantallaEditarIngredientes;
