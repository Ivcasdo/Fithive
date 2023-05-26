import * as React from "react";
import { Pressable, StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { FontFamily, Color, FontSize } from "../GlobalStyles";

const PantallaEstadisticas = () => {
  return (
    <View style={styles.pantallaEstadisticas}>
      <Image
        style={styles.pantallaEstadisticasChild}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <View style={styles.nbchartsLinechatsWrapper}>
        <View style={[styles.nbchartsLinechats, styles.textPosition]}>
          <Image
            style={styles.horizontalLinesIcon}
            contentFit="cover"
            source={require("../assets/horizontal-lines.png")}
          />
          <Image
            style={styles.horizontalLinesIcon}
            contentFit="cover"
            source={require("../assets/vertical-lines.png")}
          />
          <View style={[styles.leftText, styles.textPosition]}>
            <Text style={[styles.text, styles.textTypo2]}>0</Text>
            <Text style={[styles.text1, styles.textTypo1]}>25</Text>
            <Text style={[styles.text2, styles.textTypo1]}>50</Text>
            <Text style={[styles.text3, styles.textTypo1]}>75</Text>
            <Text style={[styles.text4, styles.textTypo2]}>100</Text>
          </View>
          <View style={styles.bottomText}>
            <Text style={[styles.text5, styles.textTypo]}>01/01</Text>
            <Text style={[styles.text6, styles.textTypo]}> 04/01</Text>
            <Text style={[styles.text7, styles.textTypo]}> 06/01</Text>
            <Text style={[styles.text8, styles.textTypo]}>10/01</Text>
            <Text style={[styles.text9, styles.textTypo]}>13/01</Text>
            <Text style={[styles.text10, styles.textTypo]}> 15/01</Text>
            <Text style={[styles.text11, styles.textTypo]}>20/01</Text>
          </View>
          <Image
            style={styles.lineArea}
            contentFit="cover"
            source={require("../assets/line--area.png")}
          />
          <Image
            style={styles.pointsIcon}
            contentFit="cover"
            source={require("../assets/points.png")}
          />
        </View>
      </View>
      <View style={[styles.dropdown, styles.dropdownLayout]}>
        <View style={[styles.stroke, styles.strokePosition]}>
          <View style={[styles.bgPrimary, styles.strokePosition]} />
        </View>
        <Pressable
          style={[styles.spSubheadingRegular, styles.subheadingPosition]}
        >
          <Text style={[styles.subheading, styles.caption1Typo]}>
            Ejercicios
          </Text>
        </Pressable>
        <Image
          style={[styles.dropdownIcon, styles.strokePosition]}
          contentFit="cover"
          source={require("../assets/dropdown1.png")}
        />
        <View style={[styles.caption, styles.captionPosition]}>
          <Text style={[styles.caption1, styles.captionPosition]}>
            Tipo de datos
          </Text>
        </View>
      </View>
      <View style={[styles.dropdown1, styles.dropdownLayout]}>
        <View style={[styles.stroke, styles.strokePosition]}>
          <View style={[styles.bgPrimary, styles.strokePosition]} />
        </View>
        <Pressable
          style={[styles.spSubheadingRegular, styles.subheadingPosition]}
        >
          <Text style={[styles.subheading, styles.caption1Typo]}>
            Press banca
          </Text>
        </Pressable>
        <Image
          style={[styles.dropdownIcon, styles.strokePosition]}
          contentFit="cover"
          source={require("../assets/dropdown1.png")}
        />
        <View style={[styles.caption, styles.captionPosition]}>
          <Text style={[styles.caption1, styles.captionPosition]}>
            Selecciona ejercicio/medidad
          </Text>
        </View>
      </View>
      <Text style={[styles.estadisticas, styles.textTypo]}>Estadisticas</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textPosition: {
    top: 0,
    left: 0,
  },
  textTypo2: {
    textAlign: "right",
    fontFamily: FontFamily.robotoRegular,
    color: Color.darkslategray,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  textTypo1: {
    left: 7,
    textAlign: "right",
    color: Color.darkslategray,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  textTypo: {
    textAlign: "center",
    fontFamily: FontFamily.robotoRegular,
    position: "absolute",
  },
  dropdownLayout: {
    height: 48,
    width: 199,
    left: 22,
    position: "absolute",
  },
  strokePosition: {
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
    width: 199,
    fontFamily: FontFamily.robotoRegular,
    top: 0,
  },
  captionPosition: {
    height: 16,
    left: 0,
    position: "absolute",
  },
  pantallaEstadisticasChild: {
    top: 18,
    left: 13,
    height: 31,
    width: 32,
    position: "absolute",
  },
  horizontalLinesIcon: {
    top: 7,
    left: 31,
    width: 277,
    height: 235,
    position: "absolute",
  },
  text: {
    top: 234,
    left: 14,
  },
  text1: {
    top: 176,
  },
  text2: {
    top: 117,
  },
  text3: {
    top: 59,
  },
  text4: {
    left: 0,
    top: 0,
  },
  leftText: {
    width: 21,
    height: 248,
    left: 0,
    position: "absolute",
  },
  text5: {
    color: Color.darkslategray,
    textAlign: "center",
    fontSize: FontSize.size_xs,
    top: 0,
    left: 0,
  },
  text6: {
    left: 46,
    color: Color.darkslategray,
    textAlign: "center",
    fontSize: FontSize.size_xs,
    top: 0,
  },
  text7: {
    left: 92,
    color: Color.darkslategray,
    textAlign: "center",
    fontSize: FontSize.size_xs,
    top: 0,
  },
  text8: {
    left: 139,
    color: Color.darkslategray,
    textAlign: "center",
    fontSize: FontSize.size_xs,
    top: 0,
  },
  text9: {
    left: 185,
    color: Color.darkslategray,
    textAlign: "center",
    fontSize: FontSize.size_xs,
    top: 0,
  },
  text10: {
    left: 230,
    color: Color.darkslategray,
    textAlign: "center",
    fontSize: FontSize.size_xs,
    top: 0,
  },
  text11: {
    left: 277,
    color: Color.darkslategray,
    textAlign: "center",
    fontSize: FontSize.size_xs,
    top: 0,
  },
  bottomText: {
    top: 248,
    left: 15,
    width: 309,
    height: 14,
    position: "absolute",
  },
  lineArea: {
    top: 53,
    left: 30,
    width: 278,
    height: 189,
    position: "absolute",
  },
  pointsIcon: {
    top: 50,
    left: 27,
    width: 286,
    height: 174,
    position: "absolute",
  },
  nbchartsLinechats: {
    width: 324,
    height: 262,
    left: 0,
    position: "absolute",
  },
  nbchartsLinechatsWrapper: {
    top: 122,
    width: 317,
    height: 280,
    left: 22,
    position: "absolute",
    overflow: "hidden",
  },
  bgPrimary: {
    backgroundColor: Color.grayColor,
    left: 0,
    top: 0,
  },
  stroke: {
    height: 1,
    opacity: 0.4,
    left: 0,
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
    width: 32,
  },
  caption1: {
    lineHeight: 15,
    textAlign: "left",
    color: Color.textColor,
    width: 199,
    fontFamily: FontFamily.robotoRegular,
    top: 0,
    fontSize: FontSize.size_xs,
    height: 16,
  },
  caption: {
    bottom: 32,
    right: 0,
  },
  dropdown: {
    top: 423,
  },
  dropdown1: {
    top: 486,
  },
  estadisticas: {
    top: 80,
    left: 20,
    fontSize: FontSize.size_xl,
    color: Color.black,
  },
  pantallaEstadisticas: {
    backgroundColor: Color.lightColor,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default PantallaEstadisticas;
