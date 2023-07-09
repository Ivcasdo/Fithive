import * as React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";
const PantallaCreacionDePlanes2 = ({onClose, editar,entrenamiento}) => {
  //pantalla editr entrenamientos desde planes
  const navigation = useNavigation();
  const handleCerrarPantallaSuperpuesta = () => {
    onClose();
  };
  const handleEditar = () => {
    onClose();
    navigation.navigate("PantallaCreacionDeEntrenamientos", {editar: editar, planes: true, item: entrenamiento });
  };
  return (
    <View style={styles.pantallaCreacionDePlanes2}>
      <View style={[styles.lightHamburger, styles.coverPosition]}>
        <View style={styles.spTitleMedium}>
          <Text style={styles.title}>{entrenamiento.nombre}</Text>
        </View>
        <Pressable onPress={handleCerrarPantallaSuperpuesta}>
          <Image
            style={[styles.closeIcon, styles.darkLayout]}
            contentFit="cover"
            source={require("../assets/close.png")}
          />
        </Pressable>
      </View>
      <View style={[styles.cover, styles.coverPosition]}>
        <Pressable style={[styles.dark, styles.darkLayout]}  onPress={handleEditar}>
          <View style={styles.dark1}>
            <LinearGradient
              style={[styles.bgPrimary, styles.darkIconPosition]}
              locations={[0, 1]}
              colors={["#1a73e9", "#6c92f4"]}
            />
          </View>
          <View style={[styles.flatdefault, styles.flatdefaultPosition]}>
            <View style={[styles.spBody2Medium, styles.flatdefaultPosition1]}>
              <Text style={[styles.body2, styles.bodyTypo]}>editar</Text>
            </View>
          </View>
        </Pressable>
        <Pressable style={[styles.dark2, styles.darkLayout]}>
          <Image
            style={[styles.darkIcon, styles.darkIconPosition]}
            contentFit="cover"
            source={require("../assets/-dark.png")}
          />
          <View style={[styles.flatdefault1, styles.flatdefaultPosition]}>
            <View style={[styles.spBody2Medium, styles.flatdefaultPosition1]}>
              <Text style={[styles.body21, styles.bodyTypo]}>borrar</Text>
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
    position: "absolute",
  },
  darkLayout: {
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
    position: "absolute",
  },
  flatdefaultPosition1: {
    top: "50%",
    marginTop: -12,
    height: 24,
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
    height: 24,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    width: 216,
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
    left: 8,
    height: 40,
    top: 8,
  },
  lightHamburger: {
    height: 56,
    top: 0,
    right: 0,
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
  dark1: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  body2: {
    color: Color.lightColor,
    width: 216,
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
    position: "absolute",
  },
  flatdefault: {
    top: "50%",
    marginTop: -12,
    height: 24,
  },
  dark: {
    right: 116,
    left: 12,
    bottom: 8,
  },
  darkIcon: {
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    opacity: 0.5,
  },
  body21: {
    width: 64,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    textTransform: "uppercase",
    fontSize: FontSize.size_sm,
    color: Color.textColor,
  },
  flatdefault1: {
    bottom: 8,
    top: 8,
    right: 8,
  },
  dark2: {
    left: 253,
    width: 80,
    bottom: 8,
  },
  cover: {
    top: 63,
    height: 72,
  },
  pantallaCreacionDePlanes2: {
    flex: 0.4,
    height: 203,
    width: "100%",
    backgroundColor: Color.lightColor,
    position: "absolute",
    bottom: 0,
  },
});

export default PantallaCreacionDePlanes2;
