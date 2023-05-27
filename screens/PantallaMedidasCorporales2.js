import * as React from "react";
import { View, StyleSheet, Text, TextInput, Pressable } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const PantallaMedidasCorporales2 = ({ onClose }) => {
  const handleCerrarPantallaSuperpuesta = () => {
    onClose();
  };
  return (
    <View style={styles.pantallaMedidasCorporales2}>
      <View style={styles.lightHamburger}>
        <View style={styles.light}>
          <View style={[styles.bgLight, styles.dark3Position]} />
        </View>
        <View style={styles.spTitleMedium}>
          <Text style={styles.title}>{`Medidas Corporales
`}</Text>
        </View>
        <Pressable onPress={handleCerrarPantallaSuperpuesta}>
        <Image
          style={styles.closeIcon}
          contentFit="cover"
          source={require("../assets/close.png")}
        />
        </Pressable>
      </View>
      <View style={[styles.cover, styles.coverPosition]}>
        <View style={[styles.default, styles.defaultPosition]}>
          <View style={[styles.stroke, styles.dark3Position]}>
            <View style={[styles.bgPrimary, styles.dark3Position]} />
          </View>
          <TextInput
            style={[styles.spSubheadingRegular, styles.coverPosition]}
            placeholder="70 kg"
            keyboardType="default"
            placeholderTextColor="rgba(0, 0, 0, 0.87)"
          />
          <View style={[styles.caption, styles.captionPosition]}>
            <Text style={[styles.caption1, styles.captionPosition]}>Peso</Text>
          </View>
        </View>
        <View style={[styles.default1, styles.defaultPosition]}>
          <View style={[styles.stroke, styles.dark3Position]}>
            <View style={[styles.bgPrimary, styles.dark3Position]} />
          </View>
          <TextInput
            style={[styles.spSubheadingRegular, styles.coverPosition]}
            placeholder="100 cm"
            keyboardType="default"
            placeholderTextColor="rgba(0, 0, 0, 0.87)"
          />
          <View style={[styles.caption, styles.captionPosition]}>
            <Text style={[styles.caption1, styles.captionPosition]}>
              Cintura
            </Text>
          </View>
        </View>
      </View>
      <Pressable style={[styles.dark, styles.darkPosition]} onPress={handleCerrarPantallaSuperpuesta}>
        <View style={styles.light}>
          <LinearGradient
            style={[styles.bgPrimary2, styles.bgOutlinePosition]}
            locations={[0, 1]}
            colors={["#1a73e9", "#6c92f4"]}
          />
        </View>
        <View style={[styles.flatdefault, styles.flatdefaultPosition]}>
          <View style={[styles.spBody2Medium, styles.flatdefaultPosition1]}>
            <Text style={[styles.body2, styles.bodyTypo]}>Guardar</Text>
          </View>
        </View>
      </Pressable>
      <Pressable style={[styles.dark2, styles.darkPosition]} onPress={handleCerrarPantallaSuperpuesta}>
        <View style={[styles.dark3, styles.dark3Position]}>
          <View style={styles.bgOutlinePosition} />
        </View>
        <View style={[styles.flatdefault1, styles.flatdefaultPosition]}>
          <View style={[styles.spBody2Medium, styles.flatdefaultPosition1]}>
            <Text style={[styles.body21, styles.bodyTypo]}>borrar</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  dark3Position: {
    bottom: 0,
    left: 0,
    right: 0,
    position: "absolute",
  },
  coverPosition: {
    left: 0,
    right: 0,
    position: "absolute",
  },
  defaultPosition: {
    top: -3,
    height: 56,
    position: "absolute",
  },
  captionPosition: {
    height: 16,
    left: 0,
    position: "absolute",
  },
  darkPosition: {
    top: 160,
    height: 40,
    position: "absolute",
  },
  bgOutlinePosition: {
    borderRadius: Border.br_7xs,
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
  bgLight: {
    top: 0,
    bottom: 0,
    backgroundColor: Color.lightColor,
  },
  light: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  title: {
    fontSize: FontSize.size_xl,
    lineHeight: 26,
    width: 216,
    height: 24,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    textAlign: "left",
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
    left: 0,
    right: 0,
    top: 0,
    position: "absolute",
  },
  bgPrimary: {
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
    fontFamily: FontFamily.robotoRegular,
  },
  caption1: {
    fontSize: FontSize.size_xs,
    lineHeight: 15,
    width: 109,
    fontFamily: FontFamily.robotoRegular,
    textAlign: "left",
    height: 16,
    color: Color.textColor,
    top: 0,
  },
  caption: {
    bottom: 32,
    height: 16,
    right: 0,
  },
  default: {
    right: 222,
    left: 29,
  },
  default1: {
    right: 65,
    left: 186,
  },
  cover: {
    top: 67,
    height: 84,
  },
  bgPrimary2: {
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
  body2: {
    color: Color.lightColor,
    width: 112,
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
    right: 204,
    left: 28,
  },
  dark3: {
    opacity: 0.32,
    top: 0,
    bottom: 0,
  },
  body21: {
    width: 56,
    color: Color.textColor,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    textTransform: "uppercase",
    fontSize: FontSize.size_sm,
  },
  flatdefault1: {
    bottom: 8,
    top: 8,
    right: 8,
  },
  dark2: {
    left: 192,
    width: 72,
  },
  pantallaMedidasCorporales2: {
    flex: 0.37,
    height: 220,
    width: "100%",
    backgroundColor: Color.lightColor,
    position: "absolute",
    bottom: 0,
  },
});

export default PantallaMedidasCorporales2;
