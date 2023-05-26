import * as React from "react";
import { Pressable, StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import Submenu from "./PantallaMenu";
import { useState } from "react";

const PantallaInicio1 = ({ visible, onClose}) => {
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
    <View style={styles.pantallaInicio1}>
      <Pressable onPress={handleOpenSubmenu}> 
      <Image
        style={[styles.pantallaInicio1Child, styles.calendarPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      </Pressable>
      <Text style={styles.calendario}>Calendario</Text>
      <View style={[styles.calendar, styles.calendarPosition]}>
        <View style={[styles.month, styles.rowFlexBox]}>
          <View style={[styles.arrow, styles.arrowFlexBox]}>
            <Image
              style={styles.vectorIcon}
              contentFit="cover"
              source={require("../assets/vector1.png")}
            />
          </View>
          <Text style={[styles.february2021, styles.february2021FlexBox]}>
            February 2021
          </Text>
          <View style={[styles.arrow1, styles.arrowFlexBox]}>
            <Image
              style={styles.vectorIcon}
              contentFit="cover"
              source={require("../assets/vector11.png")}
            />
          </View>
        </View>
        <View style={[styles.dates, styles.rowFlexBox]}>
          <View style={[styles.row, styles.rowFlexBox]}>
            <Text style={[styles.mon, styles.monTypo]}>MON</Text>
            <Text style={styles.text}>1</Text>
            <Text style={styles.text}>8</Text>
            <Text style={styles.text}>15</Text>
            <Text style={styles.text}>22</Text>
            <Text style={styles.text}>29</Text>
          </View>
          <View style={[styles.row, styles.rowFlexBox]}>
            <Text style={[styles.mon, styles.monTypo]}>TUE</Text>
            <Text style={styles.text}>2</Text>
            <Text style={styles.text}>9</Text>
            <Text style={styles.text}>16</Text>
            <Text style={styles.text}>23</Text>
            <Text style={styles.text}>30</Text>
          </View>
          <View style={[styles.row, styles.rowFlexBox]}>
            <Text style={[styles.mon, styles.monTypo]}>WED</Text>
            <Text style={styles.text}>3</Text>
            <Text style={styles.text}>10</Text>
            <Text style={styles.text}>17</Text>
            <View style={[styles.wrapper, styles.arrowFlexBox]}>
              <Text style={styles.text}>24</Text>
            </View>
            <Text style={styles.text}>31</Text>
          </View>
          <View style={[styles.row, styles.rowFlexBox]}>
            <Text style={[styles.mon, styles.monTypo]}>THU</Text>
            <Text style={styles.text}>4</Text>
            <Text style={styles.text}>11</Text>
            <Text style={styles.text}>18</Text>
            <Text style={styles.text}>25</Text>
            <Text style={[styles.text19, styles.monTypo]}>1</Text>
          </View>
          <View style={[styles.row, styles.rowFlexBox]}>
            <Text style={[styles.mon, styles.monTypo]}>FRI</Text>
            <Text style={styles.text}>5</Text>
            <Text style={styles.text}>12</Text>
            <Text style={styles.text}>19</Text>
            <Text style={styles.text}>26</Text>
            <Text style={[styles.text19, styles.monTypo]}>2</Text>
          </View>
          <View style={[styles.row, styles.rowFlexBox]}>
            <Text style={[styles.mon, styles.monTypo]}>SAT</Text>
            <Text style={styles.text}>6</Text>
            <Text style={styles.text}>13</Text>
            <Text style={styles.text}>20</Text>
            <Text style={styles.text}>27</Text>
            <Text style={[styles.text19, styles.monTypo]}>3</Text>
          </View>
          <View style={[styles.row, styles.rowFlexBox]}>
            <Text style={[styles.mon, styles.monTypo]}>SUN</Text>
            <Text style={styles.text}>7</Text>
            <Text style={styles.text}>14</Text>
            <Text style={styles.text}>21</Text>
            <Text style={styles.text}>28</Text>
            <Text style={[styles.text19, styles.monTypo]}>4</Text>
          </View>
        </View>
      </View>
      <View style={styles.entrenamiento}>
        <Text style={[styles.entrenamiento1, styles.february2021FlexBox]}>
          Entrenamiento
        </Text>
        <View style={styles.entrenamiento1Parent}>
          <View style={[styles.entrenamiento11, styles.entrenamientoPosition]}>
            <Image
              style={styles.lineIcon}
              contentFit="cover"
              source={require("../assets/line.png")}
            />
            <View style={[styles.light, styles.lightPosition]}>
              <View style={styles.lightShadowBox} />
            </View>
            <View style={styles.spSubheadingRegular}>
              <Text
                style={styles.subheading}
              >{`Piernas                       `}</Text>
            </View>
          </View>
          <View style={[styles.entrenamiento12, styles.entrenamientoPosition]}>
            <Image
              style={styles.lineIcon}
              contentFit="cover"
              source={require("../assets/line.png")}
            />
            <View style={[styles.light, styles.lightPosition]}>
              <View style={styles.lightShadowBox} />
            </View>
            <View style={styles.spSubheadingRegular}>
              <Text style={styles.subheading}>Estiramientos 1</Text>
            </View>
          </View>
        </View>
      </View>
      <Pressable style={[styles.accent, styles.accentLayout]}>
        <View style={styles.lightPosition}>
          <LinearGradient
            style={[styles.bgAccent, styles.bgAccentPosition]}
            locations={[0, 1]}
            colors={["#1dde7d", "#72dfc5"]}
          />
        </View>
        <View style={[styles.flatdefault, styles.flatdefaultPositionvista]}>
          <View style={[styles.spBody2Medium, styles.flatdefaultPositionvista]}>
            <Text style={[styles.body2, styles.bodyTypo]}>Cambiar vista</Text>
          </View>
        </View>
      </Pressable>
      <Pressable style={[styles.accent2, styles.accentLayout]} onPress={() => navigation.navigate("PantallaInicioEntrenamiento")}>
        <View style={styles.lightPosition}>
          <LinearGradient
            style={[styles.bgAccent, styles.bgAccentPosition]}
            locations={[0, 1]}
            colors={["#1dde7d", "#72dfc5"]}
          />
        </View>
        <View style={[styles.flatdefault, styles.flatdefaultPosition]}>
          <View style={[styles.spBody2Medium, styles.flatdefaultPosition]}>
            <Text style={[styles.body21, styles.bodyTypo]}>
              Ir a entrenamientos
            </Text>
          </View>
        </View>
      </Pressable>
      {isSubmenuOpen && <Submenu onClose={handleCloseSubmenu} />}
    </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  calendarPosition: {
    left: 13,
    position: "absolute",
  },
  rowFlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "stretch",
    overflow: "hidden",
  },
  arrowFlexBox: {
    justifyContent: "center",
    alignItems: "center",
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
  entrenamientoPosition: {
    height: 17,
    left: -15,
    right: 71,
    position: "absolute",
  },
  lightPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  accentLayout: {
    height: 40,
    width: 97,
    left: 21,
    position: "absolute",
  },
  bgAccentPosition: {
    left: 0,
    right: 0,
  },
  flatdefaultPosition: {
    marginTop: -12,
    top: "50%",
    height: 24,
    position: "absolute",
  },
  flatdefaultPositionvista: {
    marginTop: -12,
    top: "55%",
    height: 24,
    position: "absolute",
  },
  bodyTypo: {
    height: 22,
    width: 74,
    display: "flex",
    fontFamily: FontFamily.spBUTTON,
    fontWeight: "500",
    textTransform: "uppercase",
    left: 3,
    top: 1,
    color: Color.textColor,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
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
  vectorIcon: {
    width: 8,
    height: 10,
  },
  arrow: {
    height: 24,
    width: 24,
    backgroundColor: Color.whitesmoke,
    borderRadius: Border.br_81xl,
    justifyContent: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  february2021: {
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    fontSize: FontSize.spBUTTON_size,
  },
  arrow1: {
    transform: [
      {
        rotate: "-180deg",
      },
    ],
    height: 24,
    width: 24,
    backgroundColor: Color.whitesmoke,
    borderRadius: Border.br_81xl,
    justifyContent: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  month: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
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
  row: {
    alignItems: "center",
    alignSelf: "stretch",
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
    alignItems: "center",
    alignSelf: "stretch",
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
    left: 13,
  },
  entrenamiento1: {
    left: 5,
    width: 141,
    height: 26,
    top: 0,
    fontFamily: FontFamily.spCaptionRegular,
    fontSize: FontSize.spTitleMedium_size,
    textAlign: "left",
    position: "absolute",
  },
  lineIcon: {
    right: -37,
    maxWidth: "100%",
    height: 1,
    opacity: 0.24,
    left: 16,
    bottom: 0,
    position: "absolute",
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
    display: "none",
    justifyContent: "center",
    alignItems: "center",
  },
  subheading: {
    fontSize: FontSize.size_smi,
    lineHeight: 17,
    color: Color.textColor,
    textAlign: "left",
    alignSelf: "stretch",
    fontFamily: FontFamily.spCaptionRegular,
  },
  spSubheadingRegular: {
    marginTop: -8,
    right: 0,
    top: "50%",
    left: 16,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
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
  bgAccent: {
    borderRadius: Border.br_80xl,
    backgroundColor: Color.accentColor,
    bottom: 0,
    left: 0,
    top: 0,
    position: "absolute",
  },
  body2: {
    fontSize: FontSize.size_4xs,
  },
  spBody2Medium: {
    left: 0,
    right: 0,
  },
  flatdefault: {
    right: 8,
    left: 8,
  },
  accent: {
    top: 293,
  },
  body21: {
    fontSize: FontSize.size_5xs,
  },
  accent2: {
    top: 529,
  },
  pantallaInicio1: {
    height: 800,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.lightColor,
  },
});

export default PantallaInicio1;
