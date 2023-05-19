import * as React from "react";
import { Pressable, StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const PantallaMedidasCorporales = () => {
  return (
    <View style={styles.pantallaMedidasCorporales}>
      <Image
        style={styles.pantallaMedidasCorporalesChild}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <View style={[styles.frameParent, styles.parentLayout]}>
        <View style={[styles.rectangleParent, styles.frameChildShadowBox]}>
          <View style={[styles.frameChild, styles.frameChildShadowBox]} />
          <View style={[styles.frameItem, styles.frameLayout]} />
          <View style={styles.frameInner} />
          <View style={[styles.lineView, styles.frameLayout]} />
          <View style={[styles.frameChild1, styles.frameLayout]} />
          <View style={[styles.frameChild2, styles.frameChildLayout]} />
          <View style={[styles.frameChild3, styles.frameChildLayout]} />
          <View style={[styles.frameChild4, styles.frameChildLayout]} />
          <View
            style={[styles.spSubheadingRegularParent, styles.subheadingLayout6]}
          >
            <View
              style={[styles.spSubheadingRegular, styles.subheadingPosition1]}
            >
              <Text style={[styles.subheading, styles.subheadingTypo2]}>
                Cintura
              </Text>
            </View>
            <View
              style={[styles.spSubheadingRegular1, styles.subheadingPosition1]}
            >
              <Text style={[styles.subheading1, styles.subheadingTypo1]}>
                Indice de grasa
              </Text>
            </View>
            <View
              style={[styles.spSubheadingRegular2, styles.subheadingPosition1]}
            >
              <Text style={[styles.subheading2, styles.subheadingTypo1]}>
                Fecha
              </Text>
            </View>
            <View
              style={[styles.spSubheadingRegular3, styles.subheadingPosition1]}
            >
              <Text style={[styles.subheading3, styles.subheadingTypo2]}>
                Peso
              </Text>
            </View>
          </View>
          <View
            style={[
              styles.spSubheadingRegularWrapper,
              styles.subheadingLayout5,
            ]}
          >
            <View
              style={[styles.spSubheadingRegular4, styles.subheadingPosition]}
            >
              <Text style={[styles.subheading4, styles.subheadingFlexBox]}>
                20%
              </Text>
            </View>
          </View>
          <View
            style={[
              styles.spSubheadingRegularContainer,
              styles.subheadingLayout4,
            ]}
          >
            <View
              style={[styles.spSubheadingRegular4, styles.subheadingPosition]}
            >
              <Text style={[styles.subheading5, styles.subheadingTypo]}>
                03/01/23
              </Text>
            </View>
          </View>
          <View
            style={[styles.spSubheadingRegularFrame, styles.subheadingLayout3]}
          >
            <View
              style={[styles.spSubheadingRegular6, styles.subheadingPosition]}
            >
              <Text style={[styles.subheading6, styles.subheadingLayout3]}>
                70kg
              </Text>
            </View>
          </View>
          <View style={[styles.frameView, styles.subheadingWrapperLayout]}>
            <View
              style={[
                styles.spSubheadingRegular7,
                styles.subheadingWrapperLayout,
              ]}
            >
              <Text
                style={[styles.subheading7, styles.subheadingWrapperLayout]}
              >
                100cm
              </Text>
            </View>
          </View>
          <View
            style={[
              styles.spSubheadingRegularWrapper1,
              styles.subheadingLayout1,
            ]}
          >
            <View
              style={[
                styles.spSubheadingRegular7,
                styles.subheadingWrapperLayout,
              ]}
            >
              <Text style={[styles.subheading8, styles.subheadingLayout1]}>
                20%
              </Text>
            </View>
          </View>
          <View
            style={[
              styles.spSubheadingRegularWrapper2,
              styles.subheadingLayout,
            ]}
          >
            <View
              style={[
                styles.spSubheadingRegular7,
                styles.subheadingWrapperLayout,
              ]}
            >
              <Text style={[styles.subheading9, styles.subheadingLayout]}>
                03/01/23
              </Text>
            </View>
          </View>
          <View
            style={[
              styles.spSubheadingRegularWrapper3,
              styles.subheadingWrapperBg,
            ]}
          >
            <View
              style={[
                styles.spSubheadingRegular7,
                styles.subheadingWrapperLayout,
              ]}
            >
              <Text
                style={[styles.subheading10, styles.subheadingWrapperLayout]}
              >
                70kg
              </Text>
            </View>
          </View>
          <View
            style={[
              styles.spSubheadingRegularWrapper4,
              styles.subheadingWrapperBg,
            ]}
          >
            <View
              style={[
                styles.spSubheadingRegular7,
                styles.subheadingWrapperLayout,
              ]}
            >
              <Text
                style={[styles.subheading7, styles.subheadingWrapperLayout]}
              >
                100cm
              </Text>
            </View>
          </View>
        </View>
        <Pressable style={[styles.accent, styles.body2Position]}>
          <View style={styles.accent1}>
            <LinearGradient
              style={[styles.bgAccent, styles.subheadingPosition]}
              locations={[0, 1]}
              colors={["#1dde7d", "#72dfc5"]}
            />
          </View>
          <View style={[styles.flatdefault, styles.subheadingPosition1]}>
            <View style={[styles.spBody2Medium, styles.subheadingPosition]} />
          </View>
          <Text style={[styles.body2, styles.body2Position]}>
            Añadir medidas
          </Text>
        </Pressable>
      </View>
      <Text style={styles.medidasCorporales}>Medidas corporales</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  parentLayout: {
    height: 256,
    overflow: "hidden",
  },
  frameChildShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    top: 0,
    position: "absolute",
  },
  frameLayout: {
    height: 1,
    borderTopWidth: 1,
    borderColor: "rgba(95, 95, 95, 0.19)",
    borderStyle: "solid",
    width: 300,
    left: 0,
    position: "absolute",
  },
  frameChildLayout: {
    height: 277,
    width: 1,
    borderRightWidth: 1,
    borderColor: "rgba(95, 95, 95, 0.19)",
    borderStyle: "solid",
    top: 0,
    position: "absolute",
  },
  subheadingLayout6: {
    height: 23,
    overflow: "hidden",
  },
  subheadingPosition1: {
    marginTop: -11.5,
    height: 24,
    top: "50%",
    position: "absolute",
  },
  subheadingTypo2: {
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.textColor,
    fontFamily: FontFamily.spCaptionRegular,
    lineHeight: 15,
    fontSize: FontSize.spCaptionRegular_size,
    height: 24,
    left: 0,
    top: 0,
    position: "absolute",
  },
  subheadingTypo1: {
    lineHeight: 14,
    fontSize: FontSize.size_2xs,
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
  subheadingLayout5: {
    width: 81,
    position: "absolute",
  },
  subheadingPosition: {
    right: 0,
    left: 0,
  },
  subheadingFlexBox: {
    justifyContent: "center",
    lineHeight: 18,
    fontSize: FontSize.spBUTTON_size,
    textAlign: "center",
    alignItems: "center",
    display: "flex",
    color: Color.textColor,
    fontFamily: FontFamily.spCaptionRegular,
    top: 0,
  },
  subheadingLayout4: {
    width: 38,
    position: "absolute",
  },
  subheadingTypo: {
    lineHeight: 10,
    fontSize: FontSize.size_5xs,
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    display: "flex",
    color: Color.textColor,
    fontFamily: FontFamily.spCaptionRegular,
    left: 0,
    top: 0,
  },
  subheadingLayout3: {
    width: 40,
    left: 0,
  },
  subheadingWrapperLayout: {
    height: 21,
    position: "absolute",
  },
  subheadingLayout1: {
    width: 80,
    height: 21,
    position: "absolute",
  },
  subheadingLayout: {
    width: 37,
    height: 21,
    position: "absolute",
  },
  subheadingWrapperBg: {
    backgroundColor: Color.silver,
    top: 46,
    overflow: "hidden",
  },
  body2Position: {
    top: 4,
    position: "absolute",
  },
  pantallaMedidasCorporalesChild: {
    top: 18,
    left: 13,
    width: 32,
    height: 31,
    position: "absolute",
  },
  frameChild: {
    backgroundColor: Color.whitesmoke_100,
    shadowColor: "rgba(0, 0, 0, 0.17)",
    width: 299,
    height: 276,
    left: 0,
  },
  frameItem: {
    top: 23,
  },
  frameInner: {
    top: 46,
    height: 1,
    width: 300,
    borderTopWidth: 1,
    borderColor: "rgba(95, 95, 95, 0.19)",
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  lineView: {
    top: 68,
  },
  frameChild1: {
    top: 90,
  },
  frameChild2: {
    left: 175,
  },
  frameChild3: {
    left: 94,
  },
  frameChild4: {
    left: 41,
  },
  subheading: {
    width: 68,
  },
  spSubheadingRegular: {
    right: 206,
    left: 43,
    height: 24,
    top: "50%",
  },
  subheading1: {
    width: 101,
  },
  spSubheadingRegular1: {
    right: 128,
    left: 96,
    height: 24,
    top: "50%",
  },
  subheading2: {
    width: 30,
  },
  spSubheadingRegular2: {
    right: 94,
    left: 176,
    height: 24,
    top: "50%",
  },
  subheading3: {
    width: 36,
  },
  spSubheadingRegular3: {
    right: 259,
    left: 5,
    height: 24,
    top: "50%",
  },
  spSubheadingRegularParent: {
    left: -1,
    backgroundColor: Color.gainsboro_100,
    width: 300,
    height: 23,
    top: 0,
    position: "absolute",
  },
  subheading4: {
    width: 81,
    position: "absolute",
    height: 24,
    left: 0,
  },
  spSubheadingRegular4: {
    height: 24,
    top: "50%",
    marginTop: -11.5,
    position: "absolute",
  },
  spSubheadingRegularWrapper: {
    top: 22,
    height: 23,
    overflow: "hidden",
    left: 94,
  },
  subheading5: {
    width: 38,
    position: "absolute",
    height: 24,
  },
  spSubheadingRegularContainer: {
    height: 23,
    overflow: "hidden",
    left: 175,
    top: 23,
  },
  subheading6: {
    justifyContent: "center",
    lineHeight: 18,
    fontSize: FontSize.spBUTTON_size,
    textAlign: "center",
    alignItems: "center",
    display: "flex",
    color: Color.textColor,
    fontFamily: FontFamily.spCaptionRegular,
    top: 0,
    height: 24,
    position: "absolute",
  },
  spSubheadingRegular6: {
    marginTop: -11,
    height: 24,
    top: "50%",
    position: "absolute",
  },
  spSubheadingRegularFrame: {
    height: 22,
    top: 23,
    position: "absolute",
    overflow: "hidden",
  },
  subheading7: {
    width: 52,
    height: 21,
    justifyContent: "center",
    lineHeight: 18,
    fontSize: FontSize.spBUTTON_size,
    textAlign: "center",
    alignItems: "center",
    display: "flex",
    color: Color.textColor,
    fontFamily: FontFamily.spCaptionRegular,
    top: 0,
    left: 0,
  },
  spSubheadingRegular7: {
    marginTop: -10.5,
    right: 0,
    left: 0,
    top: "50%",
  },
  frameView: {
    top: 24,
    width: 52,
    height: 21,
    left: 41,
    overflow: "hidden",
  },
  subheading8: {
    justifyContent: "center",
    lineHeight: 18,
    fontSize: FontSize.spBUTTON_size,
    textAlign: "center",
    alignItems: "center",
    display: "flex",
    color: Color.textColor,
    fontFamily: FontFamily.spCaptionRegular,
    top: 0,
    left: 0,
  },
  spSubheadingRegularWrapper1: {
    backgroundColor: Color.silver,
    top: 46,
    overflow: "hidden",
    left: 94,
  },
  subheading9: {
    lineHeight: 10,
    fontSize: FontSize.size_5xs,
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    display: "flex",
    color: Color.textColor,
    fontFamily: FontFamily.spCaptionRegular,
    left: 0,
    top: 0,
  },
  spSubheadingRegularWrapper2: {
    backgroundColor: Color.silver,
    top: 46,
    overflow: "hidden",
    left: 175,
  },
  subheading10: {
    width: 40,
    left: 0,
    justifyContent: "center",
    lineHeight: 18,
    fontSize: FontSize.spBUTTON_size,
    textAlign: "center",
    alignItems: "center",
    display: "flex",
    color: Color.textColor,
    fontFamily: FontFamily.spCaptionRegular,
    top: 0,
  },
  spSubheadingRegularWrapper3: {
    height: 21,
    position: "absolute",
    width: 40,
    left: 0,
  },
  spSubheadingRegularWrapper4: {
    height: 21,
    position: "absolute",
    width: 52,
    left: 41,
  },
  rectangleParent: {
    left: 1,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    width: 212,
    height: 256,
    overflow: "hidden",
  },
  bgAccent: {
    bottom: 0,
    borderRadius: Border.br_80xl,
    backgroundColor: Color.primaryColor,
    top: 0,
    right: 0,
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
  spBody2Medium: {
    marginTop: -12,
    height: 24,
    top: "50%",
    position: "absolute",
  },
  flatdefault: {
    right: 8,
    left: 8,
    height: 24,
    top: "50%",
  },
  body2: {
    left: -4,
    textTransform: "uppercase",
    fontWeight: "500",
    fontFamily: FontFamily.spBUTTON,
    width: 84,
    height: 27,
    fontSize: FontSize.size_5xs,
    top: 4,
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    display: "flex",
    color: Color.textColor,
  },
  accent: {
    left: 231,
    width: 75,
    height: 35,
  },
  frameParent: {
    top: 129,
    width: 312,
    left: 22,
    height: 256,
    position: "absolute",
  },
  medidasCorporales: {
    top: 80,
    fontSize: FontSize.spTitleMedium_size,
    color: Color.black,
    textAlign: "center",
    fontFamily: FontFamily.spCaptionRegular,
    left: 22,
    position: "absolute",
  },
  pantallaMedidasCorporales: {
    backgroundColor: Color.lightColor,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default PantallaMedidasCorporales;
