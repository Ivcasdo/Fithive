import * as React from "react";
import { View, Text, StyleSheet, Pressable, TextInput } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";
import auth, { firebase } from '@react-native-firebase/auth';
import { useState } from "react";
const PlantillaBibliotecaDeEjerci = ({ onClose, item }) => {
  const [nombreEjercicio, setNombreEjercicio] = useState('');
  const [tipoEjercicio, setTipoEjercicio] = useState('');
  const user = auth().currentUser;

  const handleNombreChange = (text) => {
    setNombreEjercicio(text);
  };
  const handleTipoChange = (text) => {
    setTipoEjercicio(text);
  };
  const handleEditarEjercicio = () =>{
    const ejerciciosRef = firebase.app().database('https://tfgivan-b5e4b-default-rtdb.europe-west1.firebasedatabase.app').ref(`users/${user.uid}/ejercicios`);
    ejerciciosRef.once("value", (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        const ejercicio = childSnapshot.val();
  
        if (
          ejercicio.nombre === item.nombre &&
          ejercicio.tipo === item.tipo
        ) {
          // Comparar y actualizar los campos modificados
          if (nombreEjercicio !== "") {
            ejerciciosRef
              .child(childSnapshot.key)
              .update({ nombre: nombreEjercicio });
          }
  
          if (tipoEjercicio !== "") {
            ejerciciosRef
              .child(childSnapshot.key)
              .update({ tipo: tipoEjercicio });
          }
        }
      });
    });
    onClose();
  };
  const handleBorrarEjercicio = () =>{
    const ejerciciosRef = firebase.app().database('https://tfgivan-b5e4b-default-rtdb.europe-west1.firebasedatabase.app').ref(`users/${user.uid}/ejercicios`);
    ejerciciosRef.once("value", (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        const ejercicio = childSnapshot.val();
        if (
          ejercicio.nombre === item.nombre &&
          ejercicio.tipo === item.tipo
        ) {
          ejerciciosRef.child(childSnapshot.key).remove(); // Eliminar el ejercicio de la base de datos
        }
      });
    });
    onClose();
  };
  const handleCerrarPantallaSuperpuesta = () => {
    onClose();
  };
  return (
    <View style={styles.plantillaBibliotecaDeEjerci}>
      <View style={styles.lightHamburger}>
        <View style={styles.spTitleMedium}>
          <Text style={styles.title}>{item.nombre}</Text>
        </View>
        <Pressable onPress={handleCerrarPantallaSuperpuesta}>
          <Image
            style={styles.closeIcon}
            contentFit="cover"
            source={require("../assets/close.png")}
          />
        </Pressable>
      </View>
      <View style={[styles.cover, styles.coverPosition]}>
        <View style={[styles.bgLight, styles.strokePosition]} />
        <Pressable style={[styles.dark2, styles.darkPosition1]}>
          <Image
            style={[styles.darkIcon, styles.strokePosition]}
            contentFit="cover"
            source={require("../assets/-dark.png")}
          />
          <View style={[styles.flatdefault1, styles.flatdefaultPosition]}>
            <View style={[styles.spBody2Medium, styles.flatdefaultPosition1]}>
              <Text style={[styles.body21, styles.bodyTypo]}>borrar</Text>
            </View>
          </View>
        </Pressable>
      </View>
      <Pressable style={[styles.dark4, styles.darkPosition]} onPress={handleEditarEjercicio}>
        <View style={styles.dark1}>
          <LinearGradient
            style={styles.primaryShadowBox}
            locations={[0, 1]}
            colors={["#1a73e9", "#6c92f4"]}
          />
        </View>
        <View style={[styles.flatdefault, styles.flatdefaultPosition]}>
          <View style={[styles.spBody2Medium, styles.flatdefaultPosition1]}>
            <Text style={[styles.body23, styles.bodyTypo]}>guardar</Text>
          </View>
        </View>
      </Pressable>
      <Pressable style={[styles.dark6, styles.darkPosition]} onPress={handleBorrarEjercicio}>
        <Image
          style={[styles.darkIcon, styles.strokePosition]}
          contentFit="cover"
          source={require("../assets/-dark.png")}
        />
        <View style={[styles.flatdefault1, styles.flatdefaultPosition]}>
          <View style={[styles.spBody2Medium, styles.flatdefaultPosition1]}>
            <Text style={[styles.body21, styles.bodyTypo]}>borrar</Text>
          </View>
        </View>
      </Pressable>
      <View style={[styles.default, styles.defaultPosition]}>
        <View style={[styles.stroke, styles.strokePosition]}>
          <View style={[styles.bgPrimary2, styles.strokePosition]} />
        </View>
        <TextInput
          style={styles.spSubheadingRegular}
          placeholder={item.nombre}
          keyboardType="default"
          placeholderTextColor="rgba(0, 0, 0, 0.87)"
          value={nombreEjercicio}
          onChangeText={handleNombreChange}
        />
        <View style={styles.caption}>
          <Text style={[styles.caption1, styles.captionTypo]}>Nombre</Text>
        </View>
      </View>
      <View style={[styles.default1, styles.defaultPosition]}>
        <View style={[styles.stroke, styles.strokePosition]}>
          <View style={[styles.bgPrimary2, styles.strokePosition]} />
        </View>
        <TextInput
          style={styles.spSubheadingRegular}
          placeholder={item.tipo}
          keyboardType="default"
          placeholderTextColor="rgba(0, 0, 0, 0.87)"
          value={tipoEjercicio}
          onChangeText={handleTipoChange}
        />
        <View style={styles.caption}>
          <Text
            style={[styles.caption3, styles.captionTypo]}
          >{`Tipo de ejercicio `}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  coverPosition: {
    left: 0,
    right: 0,
    position: "absolute",
  },
  strokePosition: {
    bottom: 0,
    left: 0,
    right: 0,
    position: "absolute",
  },
  darkPosition1: {
    display: "none",
    bottom: 8,
    height: 40,
    position: "absolute",
  },
  flatdefaultPosition: {
    right: 8,
    left: 8,
    position: "absolute",
  },
  flatdefaultPosition1: {
    top: "50%",
    marginTop: -12,
    height: 24,
  },
  bodyTypo: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    textTransform: "uppercase",
    fontSize: FontSize.size_sm,
    height: 24,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    left: 0,
    top: 0,
    position: "absolute",
  },
  darkPosition: {
    top: 144,
    height: 40,
    position: "absolute",
  },
  defaultPosition: {
    top: 70,
    height: 56,
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
    height: 40,
    left: 8,
    top: 8,
    position: "absolute",
  },
  lightHamburger: {
    height: 56,
    left: 0,
    right: 0,
    top: 0,
    position: "absolute",
  },
  bgLight: {
    top: 0,
    bottom: 0,
    backgroundColor: Color.lightColor,
  },
  primaryShadowBox: {
    backgroundColor: Color.accentColor,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(38, 50, 56, 0.08)",
    borderRadius: Border.br_7xs,
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
    position: "absolute",
  },
  dark1: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  body2: {
    width: 132,
    color: Color.lightColor,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    textTransform: "uppercase",
    fontSize: FontSize.size_sm,
  },
  spBody2Medium: {
    left: 0,
    right: 0,
    position: "absolute",
  },
  flatdefault: {
    top: "50%",
    marginTop: -12,
    height: 24,
  },
  dark: {
    right: 200,
    left: 12,
  },
  darkIcon: {
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    opacity: 0.32,
    top: 0,
    bottom: 0,
  },
  body21: {
    width: 56,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    textTransform: "uppercase",
    fontSize: FontSize.size_sm,
    color: Color.textColor,
  },
  flatdefault1: {
    bottom: 8,
    right: 8,
    top: 8,
  },
  dark2: {
    left: 254,
    width: 72,
  },
  dark3: {
    left: 171,
    width: 72,
  },
  cover: {
    top: 63,
    height: 72,
  },
  body23: {
    width: 112,
    color: Color.lightColor,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    textTransform: "uppercase",
    fontSize: FontSize.size_sm,
  },
  dark4: {
    right: 203,
    left: 29,
  },
  dark6: {
    left: 183,
    width: 72,
  },
  bgPrimary2: {
    backgroundColor: Color.textColor,
    top: 0,
    bottom: 0,
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
    width: 109,
  },
  caption: {
    bottom: 32,
    height: 16,
    left: 0,
    right: 0,
    position: "absolute",
  },
  default: {
    right: 223,
    left: 28,
  },
  caption3: {
    width: 180,
  },
  default1: {
    right: 31,
    left: 149,
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
