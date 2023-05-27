import React, { useState } from "react";
import { Pressable, StyleSheet, View, Text, TouchableWithoutFeedback } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import Submenu from "./PantallaMenu";
const PantallaBibliotecaDeAliment = () => {
  const navigation = useNavigation();
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  const handleOpenSubmenu = () => {
    setIsSubmenuOpen(true);
  };
  const handleCloseSubmenu = () => {
    setIsSubmenuOpen(false);
  };
  const handleScreenPress = () => {
    if (isSubmenuOpen) {
      handleCloseSubmenu();
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handleScreenPress}>
    <View style={styles.pantallaBibliotecaDeAliment}>
      <Pressable onPress={handleOpenSubmenu}>
      <Image
        style={styles.pantallaBibliotecaDeAlimentChild}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      </Pressable>
      <View style={[styles.rectangleParent, styles.frameChildShadowBox]}>
        <View style={[styles.frameChild, styles.bgAccentPosition]} />
        <View style={[styles.frameItem, styles.frameLayout]} />
        <View style={[styles.frameInner, styles.frameLayout]} />
        <View style={[styles.lineView, styles.frameLayout]} />
        <View style={[styles.frameChild1, styles.frameLayout]} />
        <View style={styles.frameChild2} />
        <View style={[styles.spSubheadingRegular, styles.subheadingPosition4]}>
          <Text style={[styles.subheading, styles.subheadingLayout]}> 521</Text>
        </View>
        <View style={[styles.spSubheadingRegular1, styles.subheadingPosition2]}>
          <Text style={[styles.subheading1, styles.subheadingLayout]}>
            {" "}
            600
          </Text>
        </View>
        <View style={[styles.spSubheadingRegular2, styles.subheadingPosition1]}>
          <Text style={[styles.subheading, styles.subheadingLayout]}> 400</Text>
        </View>
        <View style={[styles.spSubheadingRegular3, styles.subheadingPosition4]}>
          <Text style={[styles.subheading3, styles.subheadingPosition3]}>
            {" "}
            Comida 3
          </Text>
        </View>
        <View style={[styles.spSubheadingRegular4, styles.subheadingPosition2]}>
          <Text style={[styles.subheading4, styles.subheadingPosition3]}>
            {" "}
            Comida 2
          </Text>
        </View>
        <View style={[styles.spSubheadingRegular5, styles.subheadingPosition1]}>
          <Text style={[styles.subheading3, styles.subheadingPosition3]}>
            {" "}
            Comida 1
          </Text>
        </View>
        <View style={styles.spSubheadingRegularParent}>
          <View
            style={[styles.spSubheadingRegular6, styles.subheadingPosition]}
          >
            <Text style={[styles.subheading6, styles.subheadingPosition3]}>
              Calorias
            </Text>
          </View>
          <View
            style={[styles.spSubheadingRegular7, styles.subheadingPosition]}
          >
            <Text style={[styles.subheading6, styles.subheadingPosition3]}>
              Nombre
            </Text>
          </View>
        </View>
      </View>
      <Pressable style={[styles.accent, styles.accentPosition]} onPress={() => navigation.navigate("PantallaCrearComida")} >
        <View style={styles.accent1}>
          <LinearGradient
            style={[styles.bgAccent, styles.bgAccentPosition]}
            locations={[0, 1]}
            colors={["#1dde7d", "#72dfc5"]}
          />
        </View>
        <View style={[styles.flatdefault, styles.flatdefaultPosition]}>
          <View style={[styles.spBody2Medium, styles.flatdefault1Position]}>
            <Text style={[styles.body2, styles.bodyTypo]}>Añadir comida</Text>
          </View>
        </View>
      </Pressable>
      <Pressable style={styles.accent2} onPress={() => navigation.goBack()}>
        <View style={styles.accent1}>
          <LinearGradient
            style={[styles.bgAccent, styles.bgAccentPosition]}
            locations={[0, 1]}
            colors={["#1dde7d", "#72dfc5"]}
          />
        </View>
        <View style={[styles.flatdefault1, styles.flatdefault1Position2]}>
          <View style={[styles.spBody2Medium, styles.flatdefault1Position2]}>
            <Text style={[styles.body21, styles.bodyTypo]}>Añadir al dia</Text>
          </View>
        </View>
      </Pressable>
      {isSubmenuOpen && <Submenu onClose={handleCloseSubmenu} />}
    </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  frameChildShadowBox: {
    height: 276,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  bgAccentPosition: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  frameLayout: {
    height: 1,
    borderTopWidth: 1,
    width: 300,
    borderColor: "rgba(95, 95, 95, 0.19)",
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  subheadingPosition4: {
    height: 24,
    top: "50%",
    marginTop: -70,
    position: "absolute",
  },
  subheadingLayout: {
    width: 89,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.textColor,
    fontFamily: FontFamily.spCaptionRegular,
    lineHeight: 18,
    fontSize: FontSize.spBUTTON_size,
    height: 24,
    top: 0,
    position: "absolute",
  },
  subheadingPosition2: {
    backgroundColor: Color.lightgray,
    marginTop: -94,
    height: 24,
    top: "50%",
    position: "absolute",
  },
  subheadingPosition1: {
    marginTop: -114,
    height: 24,
    top: "50%",
    position: "absolute",
  },
  subheadingPosition3: {
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.textColor,
    fontFamily: FontFamily.spCaptionRegular,
    height: 24,
    left: 0,
    top: 0,
    position: "absolute",
  },
  subheadingPosition: {
    marginTop: -11.5,
    height: 24,
    top: "50%",
    position: "absolute",
  },
  accentPosition: {
    top: 74,
    position: "absolute",
  },
  flatdefaultPosition: {
    left: 8,
    right: 8,
  },
  flatdefault1Position: {
    marginTop: -12,
    height: 24,
    top: "50%",
    position: "absolute",
  },
  flatdefault1Position2: {
    marginTop: -12,
    height: 24,
    top: "55%",
    position: "absolute",
  },
  bodyTypo: {
    height: 22,
    justifyContent: "center",
    textAlign: "center",
    fontFamily: FontFamily.spBUTTON,
    fontWeight: "500",
    textTransform: "uppercase",
    fontSize: FontSize.size_4xs,
    left: 3,
    top: 1,
    alignItems: "center",
    display: "flex",
    color: Color.textColor,
    position: "absolute",
  },
  pantallaBibliotecaDeAlimentChild: {
    top: 18,
    width: 32,
    height: 31,
    left: 13,
    position: "absolute",
  },
  frameChild: {
    backgroundColor: Color.whitesmoke_100,
    shadowColor: "rgba(0, 0, 0, 0.17)",
    width: 299,
    left: 0,
    height: 276,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  frameItem: {
    top: 23,
  },
  frameInner: {
    top: 46,
  },
  lineView: {
    top: 68,
  },
  frameChild1: {
    top: 90,
  },
  frameChild2: {
    borderRightWidth: 1,
    width: 1,
    height: 277,
    left: 149,
    borderColor: "rgba(95, 95, 95, 0.19)",
    borderStyle: "solid",
    top: 0,
    position: "absolute",
  },
  subheading: {
    left: -5,
  },
  spSubheadingRegular: {
    left: 154,
    right: 0,
  },
  subheading1: {
    left: 0,
  },
  spSubheadingRegular1: {
    right: 0,
    left: 149,
  },
  spSubheadingRegular2: {
    left: 154,
    right: 0,
  },
  subheading3: {
    width: 88,
    lineHeight: 18,
    fontSize: FontSize.spBUTTON_size,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.textColor,
    fontFamily: FontFamily.spCaptionRegular,
  },
  spSubheadingRegular3: {
    right: 150,
    left: 0,
  },
  subheading4: {
    width: 149,
    lineHeight: 18,
    fontSize: FontSize.spBUTTON_size,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.textColor,
    fontFamily: FontFamily.spCaptionRegular,
  },
  spSubheadingRegular4: {
    right: 89,
    left: 0,
  },
  spSubheadingRegular5: {
    right: 150,
    left: 0,
  },
  subheading6: {
    fontSize: FontSize.size_base,
    lineHeight: 21,
    width: 145,
  },
  spSubheadingRegular6: {
    left: 155,
    right: 0,
  },
  spSubheadingRegular7: {
    left: 5,
    right: 150,
  },
  spSubheadingRegularParent: {
    left: -1,
    backgroundColor: Color.gainsboro_100,
    height: 23,
    width: 300,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  rectangleParent: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    width: 238,
    top: 74,
    position: "absolute",
    left: 13,
    overflow: "hidden",
  },
  bgAccent: {
    bottom: 0,
    borderRadius: Border.br_80xl,
    backgroundColor: Color.accentColor,
    right: 0,
    left: 0,
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
    width: 59,
  },
  spBody2Medium: {
    right: 0,
    left: 0,
  },
  flatdefault: {
    marginTop: -11.5,
    height: 24,
    top: "50%",
    position: "absolute",
  },
  accent: {
    left: 266,
    width: 82,
    height: 31,
  },
  body21: {
    width: 74,
  },
  flatdefault1: {
    left: 8,
    right: 8,
  },
  accent2: {
    top: 373,
    width: 97,
    height: 40,
    left: 13,
    position: "absolute",
  },
  pantallaBibliotecaDeAliment: {
    backgroundColor: Color.lightColor,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default PantallaBibliotecaDeAliment;
