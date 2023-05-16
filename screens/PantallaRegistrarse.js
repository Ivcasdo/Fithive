import * as React from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  Pressable,
  ImageBackground,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const PantallaRegistrarse = () => {
  return (
    <View style={styles.pantallaRegistrarse}>
      <View style={[styles.register2, styles.accentPosition]}>
        <View style={styles.focused}>
          <LinearGradient
            style={[styles.dark, styles.darkPosition]}
            locations={[0, 1]}
            colors={["#1a73e9", "#6c92f4"]}
          />
          <TextInput
            style={[styles.spSubheadingRegular, styles.subheadingPosition]}
            placeholder="ejemplo1233@gmail.com"
            keyboardType="default"
            placeholderTextColor="rgba(0, 0, 0, 0.87)"
          />
          <Image
            style={[styles.emailIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/email.png")}
          />
          <View style={[styles.caption, styles.body2FlexBox]}>
            <Text style={styles.caption1}>E-mail address</Text>
          </View>
        </View>
        <View style={styles.focused}>
          <View style={[styles.stroke, styles.strokePosition]} />
          <TextInput
            style={[styles.spSubheadingRegular1, styles.subheadingPosition]}
            placeholder="Nombre de usuario"
            keyboardType="default"
            placeholderTextColor="rgba(0, 0, 0, 0.87)"
          />
          <Image
            style={[styles.permIdentityIcon, styles.strokePosition]}
            contentFit="cover"
            source={require("../assets/perm-identity.png")}
          />
        </View>
        <View style={styles.focused}>
          <View style={[styles.stroke, styles.strokePosition]} />
          <TextInput
            style={[styles.spSubheadingRegular1, styles.subheadingPosition]}
            placeholder="Password"
            keyboardType="default"
            placeholderTextColor="rgba(0, 0, 0, 0.87)"
          />
          <Image
            style={[styles.permIdentityIcon, styles.strokePosition]}
            contentFit="cover"
            source={require("../assets/lock.png")}
          />
        </View>
        <View style={styles.focused}>
          <View style={[styles.stroke, styles.strokePosition]} />
          <TextInput
            style={[styles.spSubheadingRegular1, styles.subheadingPosition]}
            placeholder="Confirm password"
            keyboardType="default"
            placeholderTextColor="rgba(0, 0, 0, 0.87)"
          />
          <Image
            style={[styles.permIdentityIcon, styles.strokePosition]}
            contentFit="cover"
            source={require("../assets/lockopen.png")}
          />
        </View>
      </View>
      <Pressable style={[styles.accent, styles.accentPosition]}>
        <LinearGradient
          style={[styles.accent1, styles.darkPosition]}
          locations={[0, 1]}
          colors={["#1dde7d", "#72dfc5"]}
        />
        <View style={[styles.flatdefault, styles.flatdefaultPosition]}>
          <View style={[styles.spBody2Medium, styles.flatdefaultPosition]}>
            <Text style={[styles.body2, styles.body2Typo]}>Registrarse</Text>
          </View>
        </View>
      </Pressable>
      <Pressable style={styles.lineDottedParent}>
        <Image
          style={[styles.lineDottedIcon, styles.lineIconLayout]}
          contentFit="cover"
          source={require("../assets/line-dotted2.png")}
        />
        <View style={[styles.outlined, styles.outlinedLayout]}>
          <View style={[styles.colorsStrokeprimary, styles.outlinedLayout]} />
          <View style={[styles.spCapsXsMedium, styles.minicapsFlexBox]}>
            <Text style={[styles.minicaps, styles.minicapsFlexBox]}>
              ¿Ya tienes cuenta?
            </Text>
          </View>
        </View>
        <Image
          style={[styles.lineDottedIcon1, styles.lineIconLayout]}
          contentFit="cover"
          source={require("../assets/line-dotted3.png")}
        />
      </Pressable>
      <ImageBackground
        style={styles.lgo21Icon}
        resizeMode="cover"
        source={require("../assets/lgo21.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  accentPosition: {
    left: 16,
    top: "50%",
    position: "absolute",
  },
  darkPosition: {
    backgroundColor: Color.accentColor,
    left: 0,
    bottom: 0,
    right: 0,
    position: "absolute",
  },
  subheadingPosition: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.spCaptionRegular,
    bottom: 6,
    justifyContent: "center",
    left: 0,
    right: 0,
    alignItems: "center",
    position: "absolute",
  },
  iconLayout: {
    height: 32,
    width: 32,
  },
  body2FlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  strokePosition: {
    opacity: 0.4,
    right: 0,
    position: "absolute",
  },
  flatdefaultPosition: {
    height: 24,
    marginTop: -12,
    top: "50%",
    position: "absolute",
  },
  body2Typo: {
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.spBUTTON,
    fontWeight: "500",
    textTransform: "uppercase",
    color: Color.textColor,
  },
  lineIconLayout: {
    opacity: 0.24,
    height: 2,
  },
  outlinedLayout: {
    width: 109,
    height: 16,
  },
  minicapsFlexBox: {
    width: 93,
    justifyContent: "center",
    alignItems: "center",
  },
  dark: {
    top: 54,
  },
  spSubheadingRegular: {
    opacity: 0.87,
  },
  emailIcon: {
    bottom: 2,
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
  focused: {
    height: 56,
    width: 328,
  },
  stroke: {
    top: 55,
    backgroundColor: Color.textColor,
    left: 0,
    bottom: 0,
    opacity: 0.4,
  },
  spSubheadingRegular1: {
    opacity: 0.54,
  },
  permIdentityIcon: {
    bottom: 1,
    height: 32,
    width: 32,
  },
  register2: {
    marginTop: -208,
    right: 16,
    height: 312,
    paddingBottom: 82,
    alignItems: "center",
    overflow: "hidden",
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
    width: 306,
    justifyContent: "center",
    alignItems: "center",
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
    marginTop: 53,
    right: 22,
    height: 40,
  },
  lineDottedIcon: {
    width: 49,
  },
  colorsStrokeprimary: {
    borderRadius: Border.br_80xl,
    borderStyle: "solid",
    borderColor: "#304ffe",
    borderWidth: 1,
    opacity: 0.48,
  },
  minicaps: {
    fontSize: FontSize.size_5xs,
    lineHeight: 10,
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.spBUTTON,
    fontWeight: "500",
    textTransform: "uppercase",
    color: Color.textColor,
    height: 16,
  },
  spCapsXsMedium: {
    marginTop: -16,
  },
  outlined: {
    justifyContent: "flex-end",
    alignItems: "center",
  },
  lineDottedIcon1: {
    width: 50,
  },
  lineDottedParent: {
    top: 502,
    left: 76,
    flexDirection: "row",
    height: 16,
    alignItems: "center",
    position: "absolute",
  },
  lgo21Icon: {
    top: 45,
    width: 356,
    height: 101,
    left: 0,
    position: "absolute",
  },
  pantallaRegistrarse: {
    backgroundColor: Color.lightColor,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default PantallaRegistrarse;
