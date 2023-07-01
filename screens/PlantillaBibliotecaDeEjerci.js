import * as React from "react";
import { View, StyleSheet, Text, TextInput, Pressable } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";
import { useState } from "react";
import auth, { firebase } from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

const PlantillaBibliotecaDeEjerci = ({ onClose }) => {
  const [nombreEjercicio, setNombreEjercicio] = useState('');
  const [tipoEjercicio, setTipoEjercicio] = useState('');
  const user = auth().currentUser;

  

  const handleNombreChange = (text) => {
    setNombreEjercicio(text);
  };
  const handleTipoChange = (text) => {
    setTipoEjercicio(text);
  };
  const handleCerrarPantallaSuperpuesta = () => {
    onClose();
  };
  const handleCrearEjercicio = () => {
    const ejerciciosRef = firebase.app().database('https://tfgivan-b5e4b-default-rtdb.europe-west1.firebasedatabase.app').ref(`users/${user.uid}/ejercicios`);
    ejerciciosRef.once('value', (snapshot) => {
      if (snapshot.exists()) {
        // El usuario ya tiene una lista de ejercicios
        const ejercicios = snapshot.val();
  
        // Agregar el nuevo ejercicio a la lista existente
        const nuevoEjercicio = {
          nombre: nombreEjercicio,
          tipo: tipoEjercicio,
        };
        const nuevoEjercicioRef = ejerciciosRef.push();
        nuevoEjercicioRef.set(nuevoEjercicio);
  
        // Mostrar por consola la lista de ejercicios actualizada
        console.log('Lista de ejercicios actualizada:', ejercicios);
      } else {
        // El usuario no tiene una lista de ejercicios
        // Crear la lista de ejercicios y agregar el nuevo ejercicio
        const nuevoEjercicio = {
          nombre: nombreEjercicio,
          tipo: tipoEjercicio,
        };
        const nuevoEjercicioRef = ejerciciosRef.push();
        nuevoEjercicioRef.set(nuevoEjercicio ); // Usamos 0 como clave inicial para crear una lista indexada
  
        // Mostrar por consola la nueva lista de ejercicios
        console.log('Nueva lista de ejercicios creada:', [nuevoEjercicio]);
      }
    });
    onClose();
  };

  return (
    <View style={styles.plantillaBibliotecaDeEjerci}>
      <View style={[styles.lightHamburger, styles.defaultLayout]}>
        <View style={styles.lightPosition}>
          <View style={[styles.bgLight, styles.primaryPosition]} />
        </View>
        <View style={styles.spTitleMedium}>
          <Text style={styles.title}>Nuevo ejercicio</Text>
        </View>
        <Pressable onPress={handleCerrarPantallaSuperpuesta}>
        <Image
          style={[styles.closeIcon, styles.darkLayout]}
          contentFit="cover"
          source={require("../assets/close.png")}
        />
        </Pressable>
        <View style={[styles.search, styles.darkLayout]}>
          <View style={styles.lightPosition}>
            <View style={[styles.iconsButton, styles.primaryPosition]} />
          </View>
          <View style={styles.lightPosition}>
            <View style={[styles.iconsColorizer1, styles.lightPosition]} />
          </View>
        </View>
        <View style={[styles.bookmarkPlusOutline, styles.darkLayout]}>
          <View style={styles.lightPosition}>
            <View style={[styles.iconsButton, styles.primaryPosition]} />
          </View>
          <View style={styles.lightPosition}>
            <View style={[styles.iconsColorizer1, styles.lightPosition]} />
          </View>
        </View>
        <Image
          style={[styles.logoSampleIcon, styles.flatdefaultPosition]}
          contentFit="cover"
          source={require("../assets/logo-sample.png")}
        />
      </View>
      <View style={[styles.default, styles.defaultLayout]}>
        <View style={[styles.stroke, styles.primaryPosition]}>
          <View style={[styles.bgPrimary, styles.primaryPosition]} />
        </View>
        <TextInput
          style={styles.spSubheadingRegular}
          placeholder="Ejercicio de fuerza "
          keyboardType="default"
          placeholderTextColor="rgba(0, 0, 0, 0.87)"
          value={tipoEjercicio}
          onChangeText={handleTipoChange}
        />
        <View style={styles.caption}>
          <Text
            style={[styles.caption1, styles.captionTypo]}
          >{`Tipo de ejercicio `}</Text>
        </View>
      </View>
      <Pressable style={[styles.dark, styles.darkLayout]} onPress={handleCrearEjercicio}>
        <View style={styles.lightPosition}>
          <LinearGradient
            style={[styles.bgPrimary1, styles.primaryPosition]}
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
      <View style={[styles.default1, styles.defaultLayout]}>
        <View style={[styles.stroke, styles.primaryPosition]}>
          <View style={[styles.bgPrimary, styles.primaryPosition]} />
        </View>
        <TextInput
          style={styles.spSubheadingRegular}
          placeholder="Ejercicio 2"
          keyboardType="default"
          placeholderTextColor="rgba(0, 0, 0, 0.87)"
          value={nombreEjercicio}
          onChangeText={handleNombreChange}
        />
        <View style={styles.caption}>
          <Text style={[styles.caption3, styles.captionTypo]}>Nombre</Text>
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
  primaryPosition: {
    bottom: 0,
    left: 0,
    right: 0,
    position: "absolute",
  },
  darkLayout: {
    height: 40,
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
  flatdefaultPosition: {
    top: "50%",
    marginTop: -12,
    position: "absolute",
  },
  captionTypo: {
    lineHeight: 15,
    fontSize: FontSize.size_xs,
    height: 16,
    fontFamily: FontFamily.robotoRegular,
    textAlign: "left",
    color: Color.textColor,
    left: 0,
    top: 0,
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
    width: 216,
    height: 24,
    textAlign: "left",
    color: Color.textColor,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    left: 0,
    top: 0,
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
    width: 40,
    top: 8,
    height: 40,
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
    width: 40,
    top: 8,
    height: 40,
  },
  bookmarkPlusOutline: {
    right: 8,
    display: "none",
    width: 40,
    top: 8,
    height: 40,
  },
  logoSampleIcon: {
    marginLeft: -59,
    left: "50%",
    width: 117,
    height: 29,
    display: "none",
  },
  lightHamburger: {
    left: 0,
    right: 0,
    top: 0,
  },
  bgPrimary: {
    backgroundColor: Color.textColor,
    top: 0,
  },
  stroke: {
    height: 1,
    opacity: 0.4,
  },
  spSubheadingRegular: {
    bottom: 6,
    height: 20,
    opacity: 0.54,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.robotoRegular,
    left: 0,
    right: 0,
    position: "absolute",
  },
  caption1: {
    width: 180,
  },
  caption: {
    bottom: 32,
    height: 16,
    left: 0,
    right: 0,
    position: "absolute",
  },
  default: {
    top: 69,
    right: 15,
    left: 165,
  },
  bgPrimary1: {
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
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 112,
    height: 24,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    left: 0,
    top: 0,
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
    top: 144,
    right: 203,
    left: 29,
  },
  caption3: {
    width: 109,
  },
  default1: {
    top: 70,
    right: 223,
    left: 28,
  },
  plantillaBibliotecaDeEjerci: {
    flex: 0.35,
    height: 209,
    width: "100%",
    backgroundColor: Color.lightColor,
    position: "absolute",
    bottom: 0,
  },
});

export default PlantillaBibliotecaDeEjerci;
