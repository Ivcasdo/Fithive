import * as React from "react";
import { View, StyleSheet, Text, TextInput, Pressable } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const PantallaAjusteObjetivos = () => {
  return (
    <View style={styles.pantallaAjusteObjetivos}>
      <View style={[styles.firstLevel, styles.strokePosition]}>
        <View style={[styles.dialog, styles.dialogShadowBox]}>
          <View style={[styles.colorsbgCard, styles.dialogPosition]}>
            <View style={[styles.bgLight, styles.lightPosition]} />
          </View>
        </View>
        <View style={[styles.lightHamburger, styles.lightPosition]}>
          <View style={[styles.colorsbgCard, styles.dialogPosition]}>
            <View style={[styles.bgLight, styles.lightPosition]} />
          </View>
          <View style={styles.spTitleMedium}>
            <Text style={styles.title}>Cambiar Objetivo</Text>
          </View>
          <Image
            style={[styles.closeIcon, styles.searchLayout]}
            contentFit="cover"
            source={require("../assets/close.png")}
          />
          <View style={[styles.search, styles.searchLayout]}>
            <View style={[styles.colorsbgCard, styles.dialogPosition]}>
              <View style={[styles.iconsButton, styles.lightPosition]} />
            </View>
            <View style={[styles.colorsbgCard, styles.dialogPosition]}>
              <View style={[styles.iconsColorizer1, styles.bgPrimary4Bg]} />
            </View>
          </View>
          <View style={[styles.bookmarkPlusOutline, styles.searchLayout]}>
            <View style={[styles.colorsbgCard, styles.dialogPosition]}>
              <View style={[styles.iconsButton, styles.lightPosition]} />
            </View>
            <View style={[styles.colorsbgCard, styles.dialogPosition]}>
              <View style={[styles.iconsColorizer1, styles.bgPrimary4Bg]} />
            </View>
          </View>
          <Image
            style={[styles.logoSampleIcon, styles.flatdefaultPosition]}
            contentFit="cover"
            source={require("../assets/logo-sample.png")}
          />
        </View>
        <View style={[styles.default, styles.defaultPosition]}>
          <View style={[styles.stroke, styles.strokePosition]}>
            <View style={[styles.bgPrimary, styles.lightPosition]} />
          </View>
          <TextInput
            style={styles.spSubheadingRegular}
            placeholder=" 77 kg"
            keyboardType="default"
            placeholderTextColor="rgba(0, 0, 0, 0.87)"
          />
          <View style={styles.caption}>
            <Text style={[styles.caption1, styles.captionTypo]}>{`Peso `}</Text>
          </View>
        </View>
        <View style={[styles.default1, styles.defaultPosition]}>
          <View style={[styles.stroke, styles.strokePosition]}>
            <View style={[styles.bgPrimary, styles.lightPosition]} />
          </View>
          <TextInput
            style={styles.spSubheadingRegular}
            placeholder="22"
            keyboardType="default"
            placeholderTextColor="rgba(0, 0, 0, 0.87)"
          />
          <View style={styles.caption}>
            <Text style={[styles.caption1, styles.captionTypo]}>Edad</Text>
          </View>
        </View>
        <View style={[styles.default2, styles.darkPosition]}>
          <View style={[styles.stroke, styles.strokePosition]}>
            <View style={[styles.bgPrimary, styles.lightPosition]} />
          </View>
          <TextInput
            style={styles.spSubheadingRegular}
            placeholder=" 180 cm"
            keyboardType="default"
            placeholderTextColor="rgba(0, 0, 0, 0.87)"
          />
          <View style={styles.caption}>
            <Text style={[styles.caption1, styles.captionTypo]}>Altura</Text>
          </View>
        </View>
        <Pressable style={[styles.dark, styles.darkPosition]}>
          <View style={[styles.colorsbgCard, styles.dialogPosition]}>
            <LinearGradient
              style={[styles.bgPrimary3, styles.lightPosition]}
              locations={[0, 1]}
              colors={["#1a73e9", "#6c92f4"]}
            />
          </View>
          <View style={[styles.flatdefault, styles.flatdefaultPosition]}>
            <View style={[styles.spBody2Medium, styles.flatdefaultPosition]}>
              <Text style={styles.body2}>guardar</Text>
            </View>
          </View>
        </Pressable>
        <Pressable style={[styles.dropdown, styles.dropdownLayout]}>
          <View style={[styles.stroke, styles.strokePosition]}>
            <View style={[styles.bgPrimary4, styles.bgPrimary4Bg]} />
          </View>
          <View style={styles.spSubheadingRegular3}>
            <Text style={[styles.subheading, styles.subheadingTypo]}>
              Bajar de peso
            </Text>
          </View>
          <Image
            style={styles.dropdownIcon}
            contentFit="cover"
            source={require("../assets/dropdown1.png")}
          />
          <View style={styles.caption}>
            <Text style={[styles.caption7, styles.dropdownLayout]}>
              Objetivo
            </Text>
          </View>
        </Pressable>
        <Pressable style={[styles.dropdown1, styles.caption9Layout]}>
          <View style={[styles.stroke, styles.strokePosition]}>
            <View style={[styles.bgPrimary4, styles.bgPrimary4Bg]} />
          </View>
          <View style={styles.spSubheadingRegular3}>
            <Text style={[styles.subheading1, styles.caption9Layout]}>
              Muy activo
            </Text>
          </View>
          <Image
            style={styles.dropdownIcon}
            contentFit="cover"
            source={require("../assets/dropdown1.png")}
          />
          <View style={styles.caption}>
            <Text style={[styles.caption9, styles.caption9Layout]}>
              Nivel de actividad
            </Text>
          </View>
        </Pressable>
        <Pressable style={[styles.dropdown2, styles.dropdown2Layout]}>
          <View style={[styles.stroke, styles.strokePosition]}>
            <View style={[styles.bgPrimary4, styles.bgPrimary4Bg]} />
          </View>
          <View style={styles.spSubheadingRegular3}>
            <Text style={[styles.subheading2, styles.dropdown2Layout]}>
              Masculino
            </Text>
          </View>
          <Image
            style={styles.dropdownIcon}
            contentFit="cover"
            source={require("../assets/dropdown1.png")}
          />
          <View style={styles.caption}>
            <Text style={[styles.caption11, styles.dropdown2Layout]}>
              Genero
            </Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  strokePosition: {
    left: 0,
    right: 0,
  },
  dialogShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 16,
    },
    shadowColor: "rgba(38, 50, 56, 0.08)",
    position: "absolute",
  },
  dialogPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  lightPosition: {
    top: 0,
    left: 0,
    right: 0,
  },
  searchLayout: {
    width: 40,
    top: 8,
    height: 40,
    position: "absolute",
  },
  bgPrimary4Bg: {
    backgroundColor: Color.grayColor,
    position: "absolute",
  },
  flatdefaultPosition: {
    top: "50%",
    marginTop: -12,
    position: "absolute",
  },
  defaultPosition: {
    top: 70,
    height: 56,
    position: "absolute",
  },
  captionTypo: {
    lineHeight: 15,
    fontSize: FontSize.spCaptionRegular_size,
    height: 16,
    fontFamily: FontFamily.spCaptionRegular,
    textAlign: "left",
    color: Color.textColor,
    top: 0,
    left: 0,
  },
  darkPosition: {
    left: 27,
    position: "absolute",
  },
  dropdownLayout: {
    width: 135,
    position: "absolute",
  },
  subheadingTypo: {
    lineHeight: 21,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.spCaptionRegular,
    height: 20,
    textAlign: "left",
    color: Color.textColor,
    top: 0,
    left: 0,
  },
  caption9Layout: {
    width: 132,
    position: "absolute",
  },
  dropdown2Layout: {
    width: 137,
    position: "absolute",
  },
  bgLight: {
    bottom: 0,
    position: "absolute",
    backgroundColor: Color.lightColor,
  },
  colorsbgCard: {
    position: "absolute",
  },
  dialog: {
    shadowRadius: 16,
    elevation: 16,
    display: "none",
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  title: {
    fontSize: FontSize.spTitleMedium_size,
    lineHeight: 26,
    width: 216,
    height: 24,
    textAlign: "left",
    color: Color.textColor,
    fontFamily: FontFamily.spBUTTON,
    fontWeight: "500",
    top: 0,
    left: 0,
    position: "absolute",
  },
  spTitleMedium: {
    top: 16,
    bottom: 16,
    left: 72,
    right: 72,
    position: "absolute",
  },
  closeIcon: {
    height: 40,
    left: 8,
  },
  iconsButton: {
    borderRadius: Border.br_11xs,
    display: "none",
    bottom: 0,
    position: "absolute",
    backgroundColor: Color.lightColor,
  },
  iconsColorizer1: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  search: {
    right: 56,
    height: 40,
    display: "none",
  },
  bookmarkPlusOutline: {
    right: 8,
    height: 40,
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
    position: "absolute",
  },
  bgPrimary: {
    backgroundColor: Color.textColor,
    bottom: 0,
    position: "absolute",
  },
  stroke: {
    height: 1,
    opacity: 0.4,
    bottom: 0,
    position: "absolute",
  },
  spSubheadingRegular: {
    opacity: 0.54,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.spCaptionRegular,
    height: 20,
    bottom: 6,
    left: 0,
    right: 0,
    position: "absolute",
  },
  caption1: {
    width: 109,
    position: "absolute",
  },
  caption: {
    bottom: 32,
    height: 16,
    left: 0,
    right: 0,
    position: "absolute",
  },
  default: {
    left: 179,
    right: 72,
  },
  default1: {
    right: 223,
    left: 28,
  },
  default2: {
    top: 142,
    right: 224,
    height: 56,
  },
  bgPrimary3: {
    borderRadius: Border.br_7xs,
    shadowRadius: 4,
    elevation: 4,
    backgroundColor: Color.primaryColor,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 16,
    },
    shadowColor: "rgba(38, 50, 56, 0.08)",
    position: "absolute",
    bottom: 0,
  },
  body2: {
    fontSize: FontSize.spBUTTON_size,
    textTransform: "uppercase",
    color: Color.lightColor,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 112,
    height: 24,
    fontFamily: FontFamily.spBUTTON,
    fontWeight: "500",
    top: 0,
    left: 0,
    position: "absolute",
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
    bottom: 137,
    height: 40,
  },
  bgPrimary4: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  subheading: {
    width: 135,
    position: "absolute",
  },
  spSubheadingRegular3: {
    opacity: 0.87,
    height: 20,
    bottom: 6,
    left: 0,
    right: 0,
    position: "absolute",
  },
  dropdownIcon: {
    width: 32,
    height: 32,
    bottom: 0,
    right: 0,
    position: "absolute",
  },
  caption7: {
    lineHeight: 15,
    fontSize: FontSize.spCaptionRegular_size,
    height: 16,
    fontFamily: FontFamily.spCaptionRegular,
    textAlign: "left",
    color: Color.textColor,
    top: 0,
    left: 0,
  },
  dropdown: {
    height: 48,
    top: 218,
    left: 179,
  },
  subheading1: {
    lineHeight: 21,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.spCaptionRegular,
    height: 20,
    textAlign: "left",
    color: Color.textColor,
    top: 0,
    left: 0,
  },
  caption9: {
    lineHeight: 15,
    fontSize: FontSize.spCaptionRegular_size,
    height: 16,
    fontFamily: FontFamily.spCaptionRegular,
    textAlign: "left",
    color: Color.textColor,
    top: 0,
    left: 0,
  },
  dropdown1: {
    height: 48,
    top: 218,
    left: 28,
  },
  subheading2: {
    lineHeight: 21,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.spCaptionRegular,
    height: 20,
    textAlign: "left",
    color: Color.textColor,
    top: 0,
    left: 0,
  },
  caption11: {
    lineHeight: 15,
    fontSize: FontSize.spCaptionRegular_size,
    height: 16,
    fontFamily: FontFamily.spCaptionRegular,
    textAlign: "left",
    color: Color.textColor,
    top: 0,
    left: 0,
  },
  dropdown2: {
    top: 150,
    left: 178,
    height: 48,
  },
  firstLevel: {
    height: 465,
    bottom: 0,
    position: "absolute",
    backgroundColor: Color.lightColor,
  },
  pantallaAjusteObjetivos: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.lightColor,
  },
});

export default PantallaAjusteObjetivos;
