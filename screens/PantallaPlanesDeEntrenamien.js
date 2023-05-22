import * as React from "react";
import { Pressable, StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const PantallaPlanesDeEntrenamien = () => {
  return (
    <View style={styles.pantallaPlanesDeEntrenamien}>
      <Image
        style={styles.pantallaPlanesDeEntrenamienChild}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <View style={[styles.rectangleParent, styles.frameChildShadowBox]}>
        <View style={[styles.frameChild, styles.body21Position]} />
        <View style={[styles.frameItem, styles.frameLayout]} />
        <View style={[styles.frameInner, styles.frameLayout]} />
        <View style={[styles.lineView, styles.frameLayout]} />
        <View style={[styles.frameChild1, styles.frameLayout]} />
        <View style={styles.frameChild2} />
        <View style={[styles.spSubheadingRegular, styles.subheadingPosition4]}>
          <Text style={[styles.subheading, styles.subheadingLayout]}> 5</Text>
        </View>
        <View style={[styles.spSubheadingRegular1, styles.subheadingPosition2]}>
          <Text style={[styles.subheading1, styles.subheadingLayout]}> 3</Text>
        </View>
        <View style={[styles.spSubheadingRegular2, styles.subheadingPosition1]}>
          <Text style={[styles.subheading, styles.subheadingLayout]}> 4</Text>
        </View>
        <View style={[styles.spSubheadingRegular3, styles.subheadingPosition5]}>
          <Text style={[styles.subheading3, styles.subheadingPosition3]}>
            {" "}
            Plan 3
          </Text>
        </View>
        <View style={[styles.spSubheadingRegular4, styles.subheadingPosition2]}>
          <Text style={[styles.subheading3, styles.subheadingPosition3]}>
            {" "}
            Plan 2
          </Text>
        </View>
        <View style={[styles.spSubheadingRegular5, styles.subheadingPosition1]}>
          <Text style={[styles.subheading3, styles.subheadingPosition3]}>
            {" "}
            Plan 1
          </Text>
        </View>
        <View style={styles.spSubheadingRegularParent}>
          <View
            style={[styles.spSubheadingRegular6, styles.subheadingPosition]}
          >
            <Text style={[styles.subheading6, styles.subheadingPosition3]}>
              Nº de dias
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
      <Pressable style={styles.accent}>
        <View style={styles.accent1}>
          <LinearGradient
            style={[styles.bgAccent, styles.body21Position]}
            locations={[0, 1]}
            colors={["#1dde7d", "#72dfc5"]}
          />
        </View>
        <View style={[styles.flatdefault, styles.flatdefaultPosition]}>
          <View style={[styles.spBody2Medium, styles.flatdefaultPosition]}>
            <Text style={[styles.body2, styles.bodyTypo]}>crear plan</Text>
          </View>
        </View>
      </Pressable>
      <Pressable style={styles.dark}>
        <View style={styles.accent1}>
          <LinearGradient
            style={[styles.bgAccent, styles.body21Position]}
            locations={[0, 1]}
            colors={["#1a73e9", "#6c92f4"]}
          />
        </View>
        <View style={[styles.flatdefault, styles.flatdefaultPosition]}>
          <View style={[styles.spBody2Medium, styles.flatdefaultPosition]}>
            <Text style={[styles.body21, styles.bodyTypo]}>volver</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  frameChildShadowBox: {
    height: 276,
    width: 299,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    position: "absolute",
  },
  body21Position: {
    top: 0,
    left: 0,
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
    left: 154,
    right: 0,
  },
  subheadingLayout: {
    width: 150,
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
  subheadingPosition5: {
    top: "50%",
    marginTop: -70,
    height: 24,
    position: "absolute",
  },
  subheadingPosition3: {
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.spCaptionRegular,
    color: Color.textColor,
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
  flatdefaultPosition: {
    marginTop: -12,
    height: 24,
    top: "50%",
    position: "absolute",
  },
  bodyTypo: {
    justifyContent: "center",
    textAlign: "center",
    fontFamily: FontFamily.spBUTTON,
    fontWeight: "500",
    textTransform: "uppercase",
    alignItems: "center",
    display: "flex",
    position: "absolute",
  },
  pantallaPlanesDeEntrenamienChild: {
    top: 18,
    left: 13,
    width: 32,
    height: 31,
    position: "absolute",
  },
  frameChild: {
    backgroundColor: Color.whitesmoke_100,
    shadowColor: "rgba(0, 0, 0, 0.17)",
    left: 0,
    height: 276,
    width: 299,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    position: "absolute",
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
    height: 24,
    top: "50%",
    marginTop: -70,
    position: "absolute",
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
    width: 149,
    lineHeight: 18,
    fontSize: FontSize.spBUTTON_size,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.spCaptionRegular,
  },
  spSubheadingRegular3: {
    right: 150,
    height: 24,
    left: 0,
  },
  spSubheadingRegular4: {
    right: 150,
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
    top: 71,
    shadowColor: "rgba(0, 0, 0, 0.13)",
    left: 29,
    overflow: "hidden",
  },
  bgAccent: {
    bottom: 0,
    borderRadius: Border.br_80xl,
    backgroundColor: Color.accentColor,
    right: 0,
    left: 0,
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
    top: 1,
    left: 3,
    fontSize: FontSize.size_3xs,
    width: 74,
    height: 22,
    color: Color.textColor,
    justifyContent: "center",
    textAlign: "center",
    fontFamily: FontFamily.spBUTTON,
    fontWeight: "500",
    textTransform: "uppercase",
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
    top: 360,
    width: 97,
    height: 40,
    left: 29,
    position: "absolute",
  },
  body21: {
    fontSize: FontSize.size_2xs,
    color: Color.lightColor,
    width: 57,
    height: 24,
    left: 0,
    top: 0,
  },
  dark: {
    top: 364,
    left: 240,
    width: 73,
    height: 32,
    position: "absolute",
  },
  pantallaPlanesDeEntrenamien: {
    backgroundColor: Color.lightColor,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default PantallaPlanesDeEntrenamien;
