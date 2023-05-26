import * as React from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  ImageBackground,
  Pressable,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily, Padding, Border } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";

const PantallaOlvidarContrasea = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.pantallaOlvidarContrasea}>
      <View style={styles.register2}>
        <View style={styles.focused}>
          <LinearGradient
            style={[styles.dark, styles.darkPosition]}
            locations={[0, 1]}
            colors={["#1a73e9", "#6c92f4"]}
          />
          <TextInput
            style={[styles.spSubheadingRegular, styles.body2FlexBox]}
            placeholder="ejemplo1234@gmail.com"
            keyboardType="default"
            placeholderTextColor="rgba(0, 0, 0, 0.87)"
          />
          <Image
            style={styles.emailIcon}
            contentFit="cover"
            source={require("../assets/email.png")}
          />
          <View style={[styles.caption, styles.body2FlexBox]}>
            <Text style={styles.caption1}>E-mail address</Text>
          </View>
          <View style={styles.focusedChild} />
        </View>
      </View>
      <ImageBackground
        style={styles.lgo21Icon}
        resizeMode="cover"
        source={require("../assets/lgo21.png")}
      />
      <Pressable style={styles.accent} onPress={() => navigation.navigate("PantallaIniciarSesion")}>
        <LinearGradient
          style={[styles.accent1, styles.darkPosition]}
          locations={[0, 1]}
          colors={["#1dde7d", "#72dfc5"]}
        />
        <View style={[styles.flatdefault, styles.flatdefaultPosition]}>
          <View style={[styles.spBody2Medium, styles.flatdefaultPosition]}>
            <Text style={[styles.body2, styles.body2FlexBox]}>
              Enviar correo
            </Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  darkPosition: {
    backgroundColor: Color.accentColor,
    bottom: 0,
    left: 0,
    right: 0,
    position: "absolute",
  },
  body2FlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  flatdefaultPosition: {
    height: 24,
    top: "50%",
    marginTop: -12,
    position: "absolute",
  },
  dark: {
    top: 54,
  },
  spSubheadingRegular: {
    bottom: 6,
    opacity: 0.87,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.spCaptionRegular,
    left: 0,
    right: 0,
    position: "absolute",
  },
  emailIcon: {
    bottom: 2,
    width: 32,
    height: 32,
    right: 0,
    position: "absolute",
    overflow: "hidden",
  },
  caption1: {
    fontSize: FontSize.spCaptionRegular_size,
    lineHeight: 15,
    textAlign: "left",
    height: 16,
    color: Color.textColor,
    fontFamily: FontFamily.spCaptionRegular,
    width: 328,
  },
  caption: {
    bottom: 32,
    left: 0,
    right: 0,
    position: "absolute",
  },
  focusedChild: {
    top: -192,
    left: -16,
    backgroundColor: Color.gainsboro,
    width: 360,
    height: 13,
    position: "absolute",
  },
  focused: {
    height: 56,
    width: 328,
  },
  register2: {
    top: 192,
    right: 16,
    height: 96,
    paddingBottom: Padding.p_5xl,
    alignItems: "center",
    left: 16,
    position: "absolute",
    overflow: "hidden",
  },
  lgo21Icon: {
    top: 45,
    width: 356,
    height: 101,
    left: 0,
    position: "absolute",
  },
  accent1: {
    top: 0,
    borderRadius: Border.br_7xs,
    shadowColor: "rgba(27, 225, 175, 0.16)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 8,
    elevation: 8,
    shadowOpacity: 1,
  },
  body2: {
    fontSize: FontSize.spBUTTON_size,
    textTransform: "uppercase",
    fontWeight: "500",
    fontFamily: FontFamily.spBUTTON,
    textAlign: "center",
    display: "flex",
    width: 306,
    color: Color.textColor,
  },
  spBody2Medium: {
    justifyContent: "center",
    alignItems: "center",
    left: 0,
    right: 0,
  },
  flatdefault: {
    right: 8,
    left: 8,
  },
  accent: {
    top: 299,
    right: 185,
    height: 40,
    left: 16,
    position: "absolute",
  },
  pantallaOlvidarContrasea: {
    backgroundColor: Color.lightColor,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default PantallaOlvidarContrasea;
