import * as React from "react";
import { Pressable, StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const PantallaInicioNutricion = () => {
  return (
    <View style={styles.pantallaInicioNutricion}>
      <Image
        style={styles.pantallaInicioNutricionChild}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <View style={[styles.rectangleParent, styles.frameChildShadowBox]}>
        <View style={[styles.frameChild, styles.frameChildPosition]} />
        <View style={[styles.frameItem, styles.frameLayout]} />
        <View style={[styles.frameInner, styles.frameLayout]} />
        <View style={[styles.lineView, styles.frameLayout]} />
        <View style={[styles.spSubheadingRegular, styles.subheadingPosition1]}>
          <Text style={[styles.subheading, styles.subheadingFlexBox]}>
            {" "}
            Comida ejemplo 1
          </Text>
          <View
            style={[styles.spSubheadingRegular1, styles.subheadingPosition]}
          >
            <Text style={[styles.subheading1, styles.subheadingPosition]}>
              {" "}
              Comida ejemplo 2
            </Text>
            <View style={[styles.frameItem, styles.frameLayout]} />
          </View>
        </View>
        <View style={styles.month}>
          <Image
            style={[styles.arrowIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/arrow.png")}
          />
          <Text style={styles.febrero2021}>3 Febrero 2021</Text>
          <Image
            style={[styles.arrowIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/arrow1.png")}
          />
        </View>
      </View>
      <View style={styles.calorias}>
        <Text style={[styles.calorias1, styles.comidasTypo]}>Calorias</Text>
        <Image
          style={styles.progresoDiarioIcon}
          contentFit="cover"
          source={require("../assets/progreso-diario.png")}
        />
        <View style={styles.caloriasParent}>
          <Text style={[styles.calorias2, styles.objetivoTypo]}>
            1900 calorias
          </Text>
          <Text style={[styles.objetivo, styles.objetivoTypo]}>objetivo:</Text>
          <Image
            style={[styles.mdiflagVariantIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/mdiflagvariant.png")}
          />
        </View>
      </View>
      <Text style={[styles.comidas, styles.comidasTypo]}>Comidas</Text>
      <Pressable style={[styles.accent, styles.accentLayout]}>
        <View style={styles.accent1}>
          <LinearGradient
            style={[styles.bgAccent, styles.bgAccentPosition]}
            locations={[0, 1]}
            colors={["#1dde7d", "#72dfc5"]}
          />
        </View>
        <View style={[styles.flatdefault, styles.flatdefaultPosition]}>
          <View style={[styles.spBody2Medium, styles.flatdefaultPosition]}>
            <Text style={[styles.body2, styles.bodyTypo]}>
              Cambiar objetivo
            </Text>
          </View>
        </View>
      </Pressable>
      <Pressable style={[styles.accent2, styles.accentLayout]}>
        <View style={styles.accent1}>
          <LinearGradient
            style={[styles.bgAccent, styles.bgAccentPosition]}
            locations={[0, 1]}
            colors={["#1dde7d", "#72dfc5"]}
          />
        </View>
        <View style={[styles.flatdefault, styles.flatdefaultPosition]}>
          <View style={[styles.spBody2Medium, styles.flatdefaultPosition]}>
            <Text style={[styles.body21, styles.bodyTypo]}>Añadir comida</Text>
          </View>
        </View>
      </Pressable>
      <Pressable style={[styles.accent4, styles.accentLayout]}>
        <View style={styles.accent1}>
          <LinearGradient
            style={[styles.bgAccent, styles.bgAccentPosition]}
            locations={[0, 1]}
            colors={["#1dde7d", "#72dfc5"]}
          />
        </View>
        <View style={[styles.flatdefault, styles.flatdefaultPosition]}>
          <View style={[styles.spBody2Medium, styles.flatdefaultPosition]}>
            <Text style={[styles.body22, styles.bodyTypo]}>comidas</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  frameChildShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    width: 301,
  },
  frameChildPosition: {
    left: 0,
    position: "absolute",
  },
  frameLayout: {
    height: 1,
    width: 302,
    borderTopWidth: 1,
    borderColor: "rgba(95, 95, 95, 0.19)",
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  subheadingPosition1: {
    height: 28,
    left: 0,
    position: "absolute",
  },
  subheadingFlexBox: {
    display: "flex",
    alignItems: "center",
  },
  subheadingPosition: {
    height: 27,
    left: 0,
    position: "absolute",
  },
  iconLayout: {
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  comidasTypo: {
    height: 26,
    width: 111,
    fontSize: FontSize.spTitleMedium_size,
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.spBody1Regular,
    position: "absolute",
  },
  objetivoTypo: {
    height: 17,
    fontFamily: FontFamily.spBody2Medium,
    fontWeight: "500",
    textTransform: "uppercase",
    top: 19,
    fontSize: FontSize.size_3xs,
    color: Color.black,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    position: "absolute",
  },
  accentLayout: {
    height: 40,
    width: 97,
    top: 521,
    position: "absolute",
  },
  bgAccentPosition: {
    right: 0,
    left: 0,
  },
  flatdefaultPosition: {
    marginTop: -12,
    height: 24,
    top: "50%",
    position: "absolute",
  },
  bodyTypo: {
    textAlign: "center",
    fontFamily: FontFamily.spBody2Medium,
    fontWeight: "500",
    textTransform: "uppercase",
    color: Color.textColor,
    position: "absolute",
  },
  pantallaInicioNutricionChild: {
    top: 18,
    left: 13,
    width: 32,
    height: 31,
    position: "absolute",
  },
  frameChild: {
    backgroundColor: Color.whitesmoke_100,
    shadowColor: "rgba(0, 0, 0, 0.17)",
    height: 246,
    top: 0,
    width: 301,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  frameItem: {
    top: 27,
  },
  frameInner: {
    top: 79,
  },
  lineView: {
    top: 105,
  },
  subheading: {
    width: 275,
    alignItems: "center",
    textAlign: "left",
    color: Color.textColor,
    fontFamily: FontFamily.spBody1Regular,
    lineHeight: 21,
    fontSize: FontSize.size_base,
    display: "flex",
    top: 0,
    height: 28,
    left: 0,
    position: "absolute",
  },
  subheading1: {
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.textColor,
    fontFamily: FontFamily.spBody1Regular,
    lineHeight: 21,
    fontSize: FontSize.size_base,
    top: 0,
    width: 301,
  },
  spSubheadingRegular1: {
    marginTop: 12,
    right: -26,
    backgroundColor: Color.gainsboro_200,
    top: "50%",
  },
  spSubheadingRegular: {
    marginTop: -72.5,
    right: 26,
    top: "50%",
  },
  arrowIcon: {
    borderRadius: Border.br_81xl,
  },
  febrero2021: {
    fontSize: FontSize.spBody2Medium_size,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.black,
    textAlign: "left",
  },
  month: {
    top: 4,
    width: 291,
    flexDirection: "row",
    justifyContent: "space-between",
    left: 5,
    alignItems: "center",
    position: "absolute",
    overflow: "hidden",
  },
  rectangleParent: {
    top: 295,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    height: 193,
    width: 301,
    left: 27,
    position: "absolute",
    overflow: "hidden",
  },
  calorias1: {
    left: 5,
    top: 0,
  },
  progresoDiarioIcon: {
    top: 26,
    left: 109,
    height: 82,
    width: 80,
    position: "absolute",
    overflow: "hidden",
  },
  calorias2: {
    left: 82,
    width: 80,
  },
  objetivo: {
    width: 84,
    left: 27,
  },
  mdiflagVariantIcon: {
    top: 15,
    left: 0,
    position: "absolute",
  },
  caloriasParent: {
    top: 101,
    left: 70,
    width: 159,
    height: 44,
    position: "absolute",
    overflow: "hidden",
  },
  calorias: {
    top: 74,
    width: 299,
    height: 160,
    left: 29,
    position: "absolute",
    overflow: "hidden",
  },
  comidas: {
    top: 234,
    left: 29,
  },
  bgAccent: {
    bottom: 0,
    borderRadius: Border.br_80xl,
    backgroundColor: Color.primaryColor,
    top: 0,
    position: "absolute",
  },
  accent1: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  body2: {
    top: 7,
    left: -2,
    fontSize: FontSize.size_4xs,
    textAlign: "center",
  },
  spBody2Medium: {
    right: 0,
    left: 0,
  },
  flatdefault: {
    right: 8,
    left: 8,
  },
  accent: {
    left: 129,
  },
  body21: {
    top: 1,
    left: 3,
    justifyContent: "center",
    width: 74,
    height: 22,
    fontSize: FontSize.size_4xs,
    textAlign: "center",
    alignItems: "center",
    display: "flex",
  },
  accent2: {
    left: 22,
  },
  body22: {
    top: 6,
    left: 18,
    textAlign: "center",
    fontSize: FontSize.size_3xs,
  },
  accent4: {
    left: 236,
  },
  pantallaInicioNutricion: {
    backgroundColor: Color.lightColor,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default PantallaInicioNutricion;
