import * as React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const PantallaInicio1 = () => {
  return (
    <View style={[styles.pantallaInicio1, styles.calendarBg]}>
      <Image
        style={[styles.pantallaInicio1Child, styles.calendarPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Text style={styles.calendario}>Calendario</Text>
      <Pressable style={[styles.accent, styles.accentLayout]}>
        <LinearGradient
          style={[styles.accent1, styles.accent1Position]}
          locations={[0, 1]}
          colors={["#1dde7d", "#72dfc5"]}
        />
        <Text style={[styles.body2, styles.bodyTypo]}>Cambiar vista</Text>
      </Pressable>
      <View style={[styles.calendar, styles.calendarPosition]}>
        <View style={[styles.month, styles.rowFlexBox]}>
          <View style={[styles.arrow, styles.arrowLayout]}>
            <Image
              style={styles.vectorIcon}
              contentFit="cover"
              source={require("../assets/vector1.png")}
            />
          </View>
          <Text style={[styles.february2021, styles.february2021FlexBox]}>
            February 2021
          </Text>
          <View style={[styles.arrow1, styles.arrowLayout]}>
            <Image
              style={styles.vectorIcon}
              contentFit="cover"
              source={require("../assets/vector11.png")}
            />
          </View>
        </View>
        <View style={[styles.dates, styles.rowFlexBox]}>
          <View style={styles.rowFlexBox}>
            <Text style={[styles.mon, styles.monTypo]}>MON</Text>
            <Text style={styles.text}>1</Text>
            <Text style={styles.text}>8</Text>
            <Text style={styles.text}>15</Text>
            <Text style={styles.text}>22</Text>
            <Text style={styles.text}>29</Text>
          </View>
          <View style={styles.rowFlexBox}>
            <Text style={[styles.mon, styles.monTypo]}>TUE</Text>
            <Text style={styles.text}>2</Text>
            <Text style={styles.text}>9</Text>
            <Text style={styles.text}>16</Text>
            <Text style={styles.text}>23</Text>
            <Text style={styles.text}>30</Text>
          </View>
          <View style={styles.rowFlexBox}>
            <Text style={[styles.mon, styles.monTypo]}>WED</Text>
            <Text style={styles.text}>3</Text>
            <Text style={styles.text}>10</Text>
            <Text style={styles.text}>17</Text>
            <View style={[styles.wrapper, styles.lightFlexBox]}>
              <Text style={styles.text}>24</Text>
            </View>
            <Text style={styles.text}>31</Text>
          </View>
          <View style={styles.rowFlexBox}>
            <Text style={[styles.mon, styles.monTypo]}>THU</Text>
            <Text style={styles.text}>4</Text>
            <Text style={styles.text}>11</Text>
            <Text style={styles.text}>18</Text>
            <Text style={styles.text}>25</Text>
            <Text style={[styles.text19, styles.monTypo]}>1</Text>
          </View>
          <View style={styles.rowFlexBox}>
            <Text style={[styles.mon, styles.monTypo]}>FRI</Text>
            <Text style={styles.text}>5</Text>
            <Text style={styles.text}>12</Text>
            <Text style={styles.text}>19</Text>
            <Text style={styles.text}>26</Text>
            <Text style={[styles.text19, styles.monTypo]}>2</Text>
          </View>
          <View style={styles.rowFlexBox}>
            <Text style={[styles.mon, styles.monTypo]}>SAT</Text>
            <Text style={styles.text}>6</Text>
            <Text style={styles.text}>13</Text>
            <Text style={styles.text}>20</Text>
            <Text style={styles.text}>27</Text>
            <Text style={[styles.text19, styles.monTypo]}>3</Text>
          </View>
          <View style={styles.rowFlexBox}>
            <Text style={[styles.mon, styles.monTypo]}>SUN</Text>
            <Text style={styles.text}>7</Text>
            <Text style={styles.text}>14</Text>
            <Text style={styles.text}>21</Text>
            <Text style={styles.text}>28</Text>
            <Text style={[styles.text19, styles.monTypo]}>4</Text>
          </View>
        </View>
      </View>
      <Pressable style={[styles.accent2, styles.accentLayout]}>
        <LinearGradient
          style={[styles.accent1, styles.accent1Position]}
          locations={[0, 1]}
          colors={["#1dde7d", "#72dfc5"]}
        />
        <View style={styles.flatdefault}>
          <View style={[styles.spBody2Medium, styles.accent1Position]} />
        </View>
        <Text style={[styles.body21, styles.bodyTypo]}>
          IR A Entrenamientos
        </Text>
      </Pressable>
      <View style={styles.entrenamiento}>
        <Text style={[styles.entrenamiento1, styles.february2021FlexBox]}>
          Entrenamiento
        </Text>
        <View style={styles.entrenamiento1Parent}>
          <View style={[styles.entrenamiento11, styles.entrenamientoPosition]}>
            <Image
              style={[styles.lineIcon, styles.lineIconPosition]}
              contentFit="cover"
              source={require("../assets/line.png")}
            />
            <View style={[styles.light, styles.lightFlexBox]}>
              <View style={styles.lightShadowBox} />
            </View>
            <View style={[styles.spSubheadingRegular, styles.lineIconPosition]}>
              <Text
                style={styles.subheading}
              >{`Piernas                       `}</Text>
            </View>
          </View>
          <View style={[styles.entrenamiento12, styles.entrenamientoPosition]}>
            <Image
              style={[styles.lineIcon, styles.lineIconPosition]}
              contentFit="cover"
              source={require("../assets/line.png")}
            />
            <View style={[styles.light, styles.lightFlexBox]}>
              <View style={styles.lightShadowBox} />
            </View>
            <View style={[styles.spSubheadingRegular, styles.lineIconPosition]}>
              <Text style={styles.subheading}>Estiramientos 1</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  calendarBg: {
    backgroundColor: Color.lightColor,
    overflow: "hidden",
  },
  calendarPosition: {
    left: 13,
    position: "absolute",
  },
  accentLayout: {
    height: 35,
    width: 94,
    position: "absolute",
  },
  accent1Position: {
    left: 0,
    right: 0,
    position: "absolute",
  },
  bodyTypo: {
    height: 27,
    width: 103,
    display: "flex",
    color: Color.textColor,
    fontFamily: FontFamily.spBUTTON,
    fontWeight: "500",
    textTransform: "uppercase",
    left: -4,
    top: 4,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    position: "absolute",
  },
  rowFlexBox: {
    justifyContent: "space-between",
    alignSelf: "stretch",
    alignItems: "center",
    overflow: "hidden",
  },
  arrowLayout: {
    width: 24,
    backgroundColor: Color.whitesmoke,
    borderRadius: Border.br_81xl,
    height: 24,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  february2021FlexBox: {
    textAlign: "left",
    color: Color.black,
  },
  monTypo: {
    opacity: 0.5,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    color: Color.black,
  },
  lightFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  entrenamientoPosition: {
    height: 17,
    left: -15,
    right: 71,
    position: "absolute",
  },
  lineIconPosition: {
    left: 16,
    position: "absolute",
  },
  pantallaInicio1Child: {
    top: 18,
    width: 32,
    height: 31,
  },
  calendario: {
    top: 69,
    left: 26,
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.spCaptionRegular,
    fontSize: FontSize.spTitleMedium_size,
    position: "absolute",
  },
  accent1: {
    borderRadius: Border.br_80xl,
    backgroundColor: Color.accentColor,
    bottom: 0,
    top: 0,
  },
  body2: {
    fontSize: FontSize.size_3xs,
  },
  accent: {
    top: 299,
    left: 21,
  },
  vectorIcon: {
    width: 8,
    height: 10,
  },
  arrow: {
    height: 24,
  },
  february2021: {
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    textAlign: "left",
    fontSize: FontSize.spBUTTON_size,
  },
  arrow1: {
    transform: [
      {
        rotate: "-180deg",
      },
    ],
    height: 24,
  },
  month: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  mon: {
    fontSize: FontSize.spCaptionRegular_size,
  },
  text: {
    fontSize: FontSize.size_mini,
    lineHeight: 23,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    color: Color.black,
  },
  wrapper: {
    backgroundColor: "#79fb9d",
    width: 18,
    height: 21,
    overflow: "hidden",
  },
  text19: {
    lineHeight: 21,
    fontSize: FontSize.spBUTTON_size,
  },
  dates: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
  },
  calendar: {
    top: 101,
    borderRadius: 5,
    width: 323,
    height: 195,
    padding: 16,
    overflow: "hidden",
    backgroundColor: Color.lightColor,
  },
  spBody2Medium: {
    marginTop: -12,
    top: "50%",
    height: 24,
  },
  flatdefault: {
    marginTop: -11.5,
    right: 8,
    left: 8,
    top: "50%",
    height: 24,
    position: "absolute",
  },
  body21: {
    fontSize: FontSize.size_5xs,
  },
  accent2: {
    top: 513,
    left: 24,
  },
  entrenamiento1: {
    left: 5,
    width: 141,
    height: 26,
    textAlign: "left",
    top: 0,
    fontFamily: FontFamily.spCaptionRegular,
    fontSize: FontSize.spTitleMedium_size,
    color: Color.black,
    position: "absolute",
  },
  lineIcon: {
    right: -37,
    maxWidth: "100%",
    height: 1,
    opacity: 0.24,
    bottom: 0,
    overflow: "hidden",
  },
  lightShadowBox: {
    shadowOpacity: 1,
    elevation: 8,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(176, 190, 197, 0.24)",
    borderRadius: Border.br_10xs,
    height: 17,
    alignSelf: "stretch",
    backgroundColor: Color.lightColor,
  },
  light: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    display: "none",
    position: "absolute",
    width: "100%",
  },
  subheading: {
    fontSize: FontSize.size_smi,
    lineHeight: 17,
    textAlign: "left",
    alignSelf: "stretch",
    color: Color.textColor,
    fontFamily: FontFamily.spCaptionRegular,
  },
  spSubheadingRegular: {
    marginTop: -8,
    top: "50%",
    justifyContent: "center",
    alignItems: "center",
    right: 0,
    left: 16,
  },
  entrenamiento11: {
    top: 0,
  },
  entrenamiento12: {
    top: 21,
  },
  entrenamiento1Parent: {
    top: 37,
    left: 12,
    width: 258,
    height: 113,
    position: "absolute",
    overflow: "hidden",
  },
  entrenamiento: {
    top: 349,
    width: 299,
    height: 160,
    left: 21,
    position: "absolute",
    overflow: "hidden",
  },
  pantallaInicio1: {
    height: 800,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default PantallaInicio1;
