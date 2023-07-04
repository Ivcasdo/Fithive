import React, { useState } from "react";
import { View, StyleSheet, Text, Pressable, TextInput, Alert } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Switch as RNPSwitch } from "react-native-paper";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const PantallaCreacionDeEntrenami = ({ onClose, ejercicio }) => {
  const [switchOnValue, setSwitchOnValue] = useState(false);
  const [nombreEjercicio, setNombreEjercicio] = useState('');
  const [tipoEjercicio, setTipoEjercicio] = useState('');
  const [numSeries, setNumSeries] = useState('');
  const [numReps, setNumReps] = useState('');

  const handleNombreChange = (text) => {
    setNombreEjercicio(text);
  };
  const handleTipoChange = (text) => {
    setTipoEjercicio(text);
  };
  const handleNumSeriesChange = (text) => {
    setNumSeries(text);
  };
  const handleNumRepsChange = (text) => {
    setNumReps(text);
  };
  const handleCerrarPantallaSuperpuesta = () => {
    onClose();
  };
  const handleGuardarEjercicio = () => {
    // Verificar si todas las variables han cambiado
    if (nombreEjercicio !== '' && tipoEjercicio !== '' && numSeries !== '' && numReps !== '') {
      // Verificar si numSeries y numReps son números enteros sin decimales
      if (Number.isInteger(Number(numSeries)) && Number.isInteger(Number(numReps))) {
        const nuevoEjercicio = {
          nombre: nombreEjercicio,
          tipo: tipoEjercicio,
          repeticiones: numReps,
          series: numSeries,
        };
        ejercicio = nuevoEjercicio;
        onClose(ejercicio);
      } else {
        alert('el numero de series y el numero de repeticiones deben ser números enteros sin decimales');
      }
    } else {
      alert('Por favor, completa todos los campos');
    }
  };
  //pantalla crear ejercicio
  return (
    <View style={styles.pantallaCreacionDeEntrenami}>
      <View style={[styles.lightHamburger, styles.defaultLayout]}>
        <View style={styles.lightPosition1}>
          <View style={[styles.bgLight, styles.lightPosition]} />
        </View>
        <View style={styles.spTitleMedium}>
          <Text style={[styles.title, styles.titleTypo]}>Crear Ejercicio</Text>
        </View>
        <Pressable onPress={handleCerrarPantallaSuperpuesta}>
        <Image
          style={[styles.closeIcon, styles.searchLayout]}
          contentFit="cover"
          source={require("../assets/close.png")}
        />
        </Pressable>
        <View style={[styles.search, styles.searchLayout]}>
          <View style={styles.lightPosition1}>
            <View style={[styles.iconsButton, styles.lightPosition]} />
          </View>
          <View style={styles.lightPosition1}>
            <View style={[styles.iconsColorizer1, styles.lightPosition1]} />
          </View>
        </View>
        <View style={[styles.bookmarkPlusOutline, styles.searchLayout]}>
          <View style={styles.lightPosition1}>
            <View style={[styles.iconsButton, styles.lightPosition]} />
          </View>
          <View style={styles.lightPosition1}>
            <View style={[styles.iconsColorizer1, styles.lightPosition1]} />
          </View>
        </View>
        <Image
          style={[styles.logoSampleIcon, styles.switchonPosition]}
          contentFit="cover"
          source={require("../assets/logo-sample.png")}
        />
      </View>
      <View style={[styles.cover, styles.coverPosition]}>
        <Pressable style={styles.dark} onPress={handleGuardarEjercicio}>
          <View style={styles.lightPosition1}>
            <LinearGradient
              style={[styles.bgPrimary, styles.lightPosition]}
              locations={[0, 1]}
              colors={["#1a73e9", "#6c92f4"]}
            />
          </View>
          <View style={[styles.flatdefault, styles.switchonPosition]}>
            <View style={[styles.spBody2Medium, styles.switchonPosition]}>
              <Text style={[styles.body2, styles.body2Position]}>guardar</Text>
            </View>
          </View>
        </Pressable>
        <View style={styles.secLevelSwitch}>
          <View style={[styles.light1, styles.lightPosition1]}>
            <View style={[styles.bgLight1, styles.lightPosition]} />
          </View>
          <View style={styles.spSubheadingRegular}>
            <Text style={[styles.subheading, styles.caption1Typo]}>
              Añadir a biblioteca
            </Text>
            <RNPSwitch
              style={[styles.switchon, styles.switchonPosition]}
              value={switchOnValue}
              onValueChange={setSwitchOnValue}
              color="#fff"
            />
          </View>
        </View>
      </View>
      <View style={[styles.default, styles.defaultPosition2]}>
        <View style={[styles.stroke, styles.lightPosition]}>
          <View style={[styles.bgPrimary1, styles.lightPosition]} />
        </View>
        <TextInput
          style={[styles.spSubheadingRegular1, styles.coverPosition]}
          placeholder="Ejercicio 2"
          keyboardType="default"
          placeholderTextColor="rgba(0, 0, 0, 0.87)"
          value={nombreEjercicio}
          onChangeText={handleNombreChange}
        />
        <View style={[styles.caption, styles.captionPosition]}>
          <Text style={[styles.caption1, styles.captionPosition]}>Nombre</Text>
        </View>
      </View>
      <View style={[styles.default1, styles.defaultPosition1]}>
        <View style={[styles.stroke, styles.lightPosition]}>
          <View style={[styles.bgPrimary1, styles.lightPosition]} />
        </View>
        <TextInput
          style={[styles.spSubheadingRegular1, styles.coverPosition]}
          placeholder="3 "
          keyboardType="default"
          placeholderTextColor="rgba(0, 0, 0, 0.87)"
          value={numSeries}
          onChangeText={handleNumSeriesChange}
        />
        <View style={[styles.caption, styles.captionPosition]}>
          <Text style={[styles.caption1, styles.captionPosition]}>
            Nº de series
          </Text>
        </View>
      </View>
      <View style={[styles.default2, styles.defaultPosition]}>
        <View style={[styles.stroke, styles.lightPosition]}>
          <View style={[styles.bgPrimary1, styles.lightPosition]} />
        </View>
        <TextInput
          style={[styles.spSubheadingRegular1, styles.coverPosition]}
          placeholder="Entrenamiento "
          keyboardType="default"
          placeholderTextColor="rgba(0, 0, 0, 0.87)"
          value={tipoEjercicio}
          onChangeText={handleTipoChange}
        />
        <View style={[styles.caption, styles.captionPosition]}>
          <Text style={[styles.caption1, styles.captionPosition]}>
            Tipo de ejercicio
          </Text>
        </View>
      </View>
      <View style={[styles.default3, styles.defaultPosition]}>
        <View style={[styles.stroke, styles.lightPosition]}>
          <View style={[styles.bgPrimary1, styles.lightPosition]} />
        </View>
        <TextInput
          style={[styles.spSubheadingRegular1, styles.coverPosition]}
          placeholder=" 2"
          keyboardType="default"
          placeholderTextColor="rgba(0, 0, 0, 0.87)"
          value={numReps}
          onChangeText={handleNumRepsChange}
        />
        <View style={[styles.caption, styles.captionPosition]}>
          <Text style={[styles.caption1, styles.captionPosition]}>
            Nº de repeticiones
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  defaultLayout: {
    height: 56,
    position: "absolute",
  },
  lightPosition: {
    bottom: 0,
    left: 0,
    right: 0,
    position: "absolute",
  },
  titleTypo: {
    width: 216,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    top: 0,
  },
  searchLayout: {
    height: 40,
    width: 40,
    top: 8,
    position: "absolute",
  },
  lightPosition1: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  switchonPosition: {
    top: "50%",
    position: "absolute",
  },
  coverPosition: {
    left: 0,
    right: 0,
  },
  body2Position: {
    alignItems: "center",
    display: "flex",
    height: 24,
    left: 0,
    position: "absolute",
  },
  caption1Typo: {
    lineHeight: 15,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.robotoRegular,
    textAlign: "left",
    color: Color.textColor,
    top: 0,
  },
  defaultPosition2: {
    right: 223,
    left: 28,
  },
  captionPosition: {
    height: 16,
    left: 0,
    position: "absolute",
  },
  defaultPosition1: {
    left: 180,
    right: 71,
  },
  defaultPosition: {
    top: 116,
    height: 56,
    position: "absolute",
  },
  bgLight: {
    top: 0,
    backgroundColor: Color.lightColor,
    bottom: 0,
  },
  title: {
    fontSize: FontSize.size_xl,
    lineHeight: 26,
    height: 24,
    textAlign: "left",
    color: Color.textColor,
    width: 216,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    left: 0,
    position: "absolute",
  },
  spTitleMedium: {
    top: 16,
    right: 72,
    bottom: 16,
    left: 72,
    position: "absolute",
  },
  closeIcon: {
    left: 8,
  },
  iconsButton: {
    borderRadius: Border.br_11xs,
    display: "none",
    top: 0,
    backgroundColor: Color.lightColor,
    bottom: 0,
  },
  iconsColorizer1: {
    backgroundColor: Color.grayColor,
  },
  search: {
    right: 56,
    display: "none",
  },
  bookmarkPlusOutline: {
    right: 8,
    display: "none",
  },
  logoSampleIcon: {
    marginLeft: -59,
    left: "50%",
    width: 117,
    height: 29,
    marginTop: -12,
    top: "50%",
    display: "none",
  },
  lightHamburger: {
    left: 0,
    right: 0,
    top: 0,
  },
  bgPrimary: {
    borderRadius: Border.br_7xs,
    shadowColor: "rgba(38, 50, 56, 0.08)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    backgroundColor: Color.accentColor,
    top: 0,
  },
  body2: {
    fontSize: FontSize.size_sm,
    textTransform: "uppercase",
    color: Color.lightColor,
    textAlign: "center",
    justifyContent: "center",
    width: 216,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    top: 0,
    alignItems: "center",
    display: "flex",
  },
  spBody2Medium: {
    marginTop: -12,
    top: "50%",
    height: 24,
    left: 0,
    right: 0,
  },
  flatdefault: {
    marginTop: -12,
    top: "50%",
    right: 8,
    left: 8,
    height: 24,
  },
  dark: {
    right: 100,
    bottom: 8,
    left: 28,
    height: 40,
    position: "absolute",
  },
  bgLight1: {
    borderRadius: Border.br_10xs,
    top: 0,
    backgroundColor: Color.lightColor,
    bottom: 0,
  },
  light1: {
    display: "none",
  },
  subheading: {
    width: 116,
    fontFamily: FontFamily.robotoRegular,
    alignItems: "center",
    display: "flex",
    height: 24,
    left: 0,
    position: "absolute",
  },
  switchon: {
    marginTop: -11,
    right: -33,
    width: 37,
    height: 22,
  },
  spSubheadingRegular: {
    height: "50%",
    top: "25%",
    right: 207,
    bottom: "25%",
    left: 16,
    position: "absolute",
  },
  secLevelSwitch: {
    top: -19,
    left: 13,
    height: 48,
    right: 8,
    position: "absolute",
  },
  cover: {
    top: 201,
    height: 72,
    position: "absolute",
  },
  bgPrimary1: {
    backgroundColor: Color.textColor,
    top: 0,
  },
  stroke: {
    height: 1,
    opacity: 0.4,
  },
  spSubheadingRegular1: {
    bottom: 6,
    height: 20,
    opacity: 0.54,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.robotoRegular,
    position: "absolute",
  },
  caption1: {
    width: 109,
    fontFamily: FontFamily.robotoRegular,
    lineHeight: 15,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.textColor,
    top: 0,
  },
  caption: {
    bottom: 32,
    right: 0,
    height: 16,
  },
  default: {
    top: 48,
    height: 56,
    position: "absolute",
  },
  default1: {
    top: 50,
    height: 56,
    position: "absolute",
  },
  default2: {
    right: 223,
    left: 28,
  },
  default3: {
    left: 180,
    right: 71,
  },
  pantallaCreacionDeEntrenami: {
    flex: 0.4,
    height: 296,
    width: "100%",
    backgroundColor: Color.lightColor,
    position: "absolute",
    bottom: 0,
  },
});

export default PantallaCreacionDeEntrenami;
