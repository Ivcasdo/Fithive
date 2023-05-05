import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Pressable,
  ImageBackground,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { TextInput as RNPTextInput } from "react-native-paper";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const PantallaIniciarSesion = () => {
  return (
    <View style={styles.pantallaIniciarSesion}>
      <View
        style={[styles.pantallaIniciarSesionChild, styles.lgo21IconPosition]}
      />
      <View
        style={[styles.pantallaIniciarSesionChild, styles.lgo21IconPosition]}
      />
      <View style={styles.register2}>
        <View style={[styles.focused, styles.focusedPosition]}>
          <LinearGradient
            style={styles.dark}
            locations={[0, 1]}
            colors={["#1a73e9", "#6c92f4"]}
          />
          <RNPTextInput
            style={styles.spSubheadingRegular}
            placeholder="ejemplo1234@gmail.com"
            label="Label"
            mode="outlined"
            placeholderTextColor="rgba(0, 0, 0, 0.87)"
            theme={{ colors: { text: "rgba(0, 0, 0, 0.87)" } }}
          />
          <View style={styles.email}>
            <View style={styles.iconsPosition}>
              <View style={[styles.iconsButton, styles.strokePosition]} />
            </View>
            <View style={[styles.iconsColorizer, styles.iconsPosition]} />
          </View>
          <View style={[styles.caption, styles.captionPosition]}>
            <Text style={[styles.caption1, styles.caption1Position]}>
              E-mail address
            </Text>
          </View>
        </View>
        <View style={styles.default}>
          <View style={[styles.stroke, styles.strokePosition]} />
          <RNPTextInput
            style={[styles.spSubheadingRegular1, styles.subheadingPosition]}
            placeholder="Password"
            label="Label"
            mode="flat"
            placeholderTextColor="rgba(0, 0, 0, 0.87)"
            theme={{ colors: { text: "rgba(0, 0, 0, 0.87)" } }}
          />
          <View style={[styles.caption2, styles.captionPosition]}>
            <Text style={[styles.caption1, styles.caption1Position]}>
              Default name
            </Text>
          </View>
          <Image
            style={[styles.lockIcon, styles.searchPosition]}
            resizeMode="cover"
            source={require("../assets/lock.png")}
          />
        </View>
        <View style={[styles.default1, styles.focusedPosition]}>
          <View style={[styles.stroke, styles.strokePosition]} />
          <View style={styles.subheadingPosition}>
            <Text style={[styles.subheading, styles.caption1Position]}>
              Six inputs is too much, trust me...
            </Text>
          </View>
          <View style={[styles.caption2, styles.captionPosition]}>
            <Text style={[styles.caption1, styles.caption1Position]}>
              Default name
            </Text>
          </View>
          <View style={[styles.search, styles.searchPosition]}>
            <View style={styles.iconsPosition}>
              <View style={[styles.iconsButton, styles.strokePosition]} />
            </View>
            <View style={[styles.iconsColorizer1, styles.iconsPosition]} />
          </View>
        </View>
      </View>
      <Pressable style={[styles.accent, styles.accentPosition]}>
        <LinearGradient
          style={styles.accentShadowBox}
          locations={[0, 1]}
          colors={["#1dde7d", "#72dfc5"]}
        />
        <View style={[styles.flatdefault, styles.flatdefaultPosition]}>
          <View style={[styles.spBody2Medium, styles.flatdefaultPosition]}>
            <Text style={[styles.body2, styles.body2Typo]}>Registrarse</Text>
          </View>
        </View>
      </Pressable>
      <Pressable style={[styles.accent2, styles.accentPosition]}>
        <LinearGradient
          style={styles.accentShadowBox}
          locations={[0, 1]}
          colors={["#1dde7d", "#72dfc5"]}
        />
        <View style={[styles.flatdefault, styles.flatdefaultPosition]}>
          <View style={[styles.spBody2Medium, styles.flatdefaultPosition]}>
            <Text style={[styles.body2, styles.body2Typo]}>iniciar sesión</Text>
          </View>
        </View>
      </Pressable>
      <ImageBackground
        style={[styles.lgo21Icon, styles.lgo21IconPosition]}
        resizeMode="cover"
        source={require("../assets/lgo21.png")}
      />
      <Image
        style={[styles.lineDottedIcon, styles.lineIconPosition]}
        resizeMode="cover"
        source={require("../assets/line-dotted.png")}
      />
      <Image
        style={[styles.lineDottedIcon1, styles.lineIconPosition]}
        resizeMode="cover"
        source={require("../assets/line-dotted1.png")}
      />
      <Pressable style={styles.outlined}>
        <View style={[styles.colorsStrokeprimary, styles.strokePosition]} />
        <View style={[styles.spCapsXsMedium, styles.flatdefaultPosition1]}>
          <Text style={[styles.minicaps, styles.body2Typo]}>
            Olvidé la contraseña
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  lgo21IconPosition: {
    left: 0,
    position: "absolute",
  },
  focusedPosition: {
    height: 56,
    right: 0,
    left: 0,
    position: "absolute",
  },
  strokePosition: {
    bottom: 0,
    position: "absolute",
  },
  iconsPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  captionPosition: {
    bottom: 32,
    height: 16,
    right: 0,
    left: 0,
    position: "absolute",
  },
  caption1Position: {
    width: 328,
    textAlign: "left",
    color: Color.textColor,
    fontFamily: FontFamily.spCaptionRegular,
    left: 0,
    top: 0,
    position: "absolute",
  },
  subheadingPosition: {
    opacity: 0.54,
    height: 20,
    bottom: 6,
    right: 0,
    left: 0,
    position: "absolute",
  },
  searchPosition: {
    bottom: 1,
    height: 32,
    width: 32,
    right: 0,
    position: "absolute",
  },
  accentPosition: {
    height: 40,
    marginTop: -58,
    top: "50%",
    position: "absolute",
  },
  flatdefaultPosition: {
    height: 24,
    marginTop: -12,
    top: "50%",
    position: "absolute",
  },
  body2Typo: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.spBUTTON,
    fontWeight: "500",
    textTransform: "uppercase",
    color: Color.textColor,
    left: 0,
    position: "absolute",
  },
  lineIconPosition: {
    opacity: 0.24,
    height: 1,
    bottom: 474,
    left: "50%",
    position: "absolute",
  },
  flatdefaultPosition1: {
    left: 8,
    right: 8,
  },
  pantallaIniciarSesionChild: {
    backgroundColor: Color.gainsboro,
    width: 360,
    height: 13,
    top: 0,
  },
  dark: {
    backgroundColor: "transparent",
    bottom: 0,
    top: 54,
    right: 0,
    left: 0,
    position: "absolute",
  },
  spSubheadingRegular: {
    opacity: 0.87,
    height: 20,
    bottom: 6,
    right: 0,
    left: 0,
    position: "absolute",
  },
  iconsButton: {
    borderRadius: Border.br_11xs,
    display: "none",
    right: 0,
    left: 0,
    top: 0,
    backgroundColor: Color.white,
  },
  iconsColorizer: {
    backgroundColor: "#828282",
  },
  email: {
    bottom: 2,
    height: 32,
    width: 32,
    right: 0,
    position: "absolute",
    overflow: "hidden",
  },
  caption1: {
    fontSize: FontSize.spCaptionRegular_size,
    lineHeight: 15,
    height: 16,
  },
  caption: {
    height: 16,
  },
  focused: {
    top: 0,
  },
  stroke: {
    top: 55,
    backgroundColor: Color.textColor,
    opacity: 0.4,
    right: 0,
    left: 0,
  },
  spSubheadingRegular1: {
    backgroundColor: Color.white,
  },
  caption2: {
    height: 16,
    display: "none",
  },
  lockIcon: {
    opacity: 0.4,
  },
  default: {
    top: 54,
    height: 56,
    right: 0,
    left: 0,
    position: "absolute",
  },
  subheading: {
    fontSize: FontSize.spSubheadingRegular_size,
    lineHeight: 21,
    height: 20,
  },
  iconsColorizer1: {
    backgroundColor: "#5f5f5f",
  },
  search: {
    display: "none",
  },
  default1: {
    top: 319,
  },
  register2: {
    marginTop: -208,
    right: 16,
    left: 16,
    height: 134,
    top: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  accentShadowBox: {
    shadowOpacity: 1,
    elevation: 8,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(27, 225, 175, 0.16)",
    borderRadius: Border.br_7xs,
    backgroundColor: "transparent",
    bottom: 0,
    right: 0,
    left: 0,
    top: 0,
    position: "absolute",
  },
  body2: {
    top: 4,
    fontSize: FontSize.spBUTTON_size,
    width: 119,
  },
  spBody2Medium: {
    right: 0,
    left: 0,
  },
  flatdefault: {
    left: 8,
    right: 8,
  },
  accent: {
    right: 21,
    left: 204,
  },
  accent2: {
    right: 206,
    left: 19,
  },
  lgo21Icon: {
    top: 45,
    width: 356,
    height: 101,
  },
  lineDottedIcon: {
    marginLeft: 54,
    width: 50,
  },
  lineDottedIcon1: {
    marginLeft: -104,
    width: 49,
  },
  colorsStrokeprimary: {
    borderRadius: 99,
    borderStyle: "solid",
    borderColor: "#304ffe",
    borderWidth: 1,
    opacity: 0.48,
    right: 0,
    left: 0,
    top: 0,
  },
  minicaps: {
    fontSize: 8,
    lineHeight: 10,
    width: 93,
    height: 16,
    top: 0,
  },
  spCapsXsMedium: {
    bottom: 0,
    position: "absolute",
    top: 0,
  },
  outlined: {
    marginLeft: -55,
    bottom: 466,
    width: 109,
    left: "50%",
    height: 16,
    position: "absolute",
  },
  pantallaIniciarSesion: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default PantallaIniciarSesion;
