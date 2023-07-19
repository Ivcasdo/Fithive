import * as React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import auth, { firebase } from '@react-native-firebase/auth';
import { isEqual } from "lodash";
const PantallaEditarAlimentos = ({onClose, comidaEditar}) => {
  const navigation = useNavigation();
  const user = auth().currentUser;
  const handleCerrarPantallaSuperpuesta = () => {
    onClose();
  };
  const handleEditarComida = () =>{
    onClose();
    navigation.navigate('PantallaCrearComida', {comidaEditar:comidaEditar,editar:true})

  }
  const handleBorrarComida = () =>{
    const comidasRef = firebase.app().database('https://tfgivan-b5e4b-default-rtdb.europe-west1.firebasedatabase.app').ref(`users/${user.uid}/comidas`);
    comidasRef.once("value", (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        const comida = childSnapshot.val();
        if(isEqual(comida,comidaEditar)){
          comidasRef.child(childSnapshot.key).remove();
        }
      })
    });
    onClose();
  }
  const handleAnadirAlDia = () => {
    const entradasRef = firebase.app().database('https://tfgivan-b5e4b-default-rtdb.europe-west1.firebasedatabase.app').ref(`users/${user.uid}/entradasCalendario`);
    const today = new Date();
    // Obtener los valores de día, mes y año
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Los meses en JavaScript comienzan desde 0
    const year = String(today.getFullYear()).slice(-2); // Obtener los últimos dos dígitos del año

    const formattedDate = `${day}/${month}/${year}`;
    const entradaCalendar = {
      fecha: formattedDate,
      comidas: [comidaEditar],
    }
    entradasRef.once('value', (snapshot) => {
      if(snapshot.exists()){
        snapshot.forEach((childsnapshot)=>{
          const entrada = childsnapshot.val();
          if(isEqual(entrada.fecha,formattedDate)){
            const alimentos = entrada.comidas;
            if(alimentos.exists()){
              alimentos.push(comidaEditar);
              entradasRef.child(childsnapshot.key).update({comidas: alimentos});
            }else{
              entradasRef.child(childsnapshot.key).update({ comidas: [comidaEditar] });
            }
          }else{
            const nuevaEntradaRef = entradasRef.push();
            nuevaEntradaRef.set(entradaCalendar)
          }
        })
      }else{
        const nuevaEntradaRef = entradasRef.push();
        nuevaEntradaRef.set(entradaCalendar)
      }

    });
    onClose();
  };
  return (
    <View style={styles.pantallaEditarAlimentos}>
      <View style={[styles.lightHamburger, styles.spBody2MediumPosition]}>
        <View style={styles.spTitleMedium}>
          <Text style={styles.title}>{comidaEditar.nombre}</Text>
        </View>
        <Pressable onPress={handleCerrarPantallaSuperpuesta}>
        <Image
          style={[styles.closeIcon, styles.darkLayout]}
          contentFit="cover"
          source={require("../assets/close.png")}
        />
        </Pressable>
      </View>
      <Pressable style={[styles.dark, styles.darkLayout]}onPress={handleBorrarComida}>
        <Image
          style={styles.darkIcon}
          contentFit="cover"
          source={require("../assets/-dark.png")}
        />
        <View style={[styles.flatdefault, styles.flatdefaultPosition]}>
          <View style={[styles.spBody2Medium, styles.flatdefault1Position]}>
            <Text style={[styles.body2, styles.bodyTypo]}>borrar</Text>
          </View>
        </View>
      </Pressable>
      <Pressable style={[styles.dark1, styles.darkPosition]} onPress={handleEditarComida}>
        <View style={styles.dark2}>
          <LinearGradient
            style={styles.primaryShadowBox}
            locations={[0, 1]}
            colors={["#1a73e9", "#6c92f4"]}
          />
        </View>
        <View style={[styles.flatdefault1, styles.flatdefault1Position]}>
          <View style={[styles.spBody2Medium, styles.flatdefault1Position]}>
            <Text style={[styles.body21, styles.bodyTypo]}>Editar</Text>
          </View>
        </View>
      </Pressable>
      <Pressable style={[styles.dark3, styles.darkPosition]} onPress={handleAnadirAlDia}>
        <View style={styles.dark2}>
          <LinearGradient
            style={styles.primaryShadowBox}
            locations={[0, 1]}
            colors={["#1a73e9", "#6c92f4"]}
          />
        </View>
        <View style={[styles.flatdefault1, styles.flatdefault1Position]}>
          <View style={[styles.spBody2Medium, styles.flatdefault1Position]}>
            <Text style={[styles.body21, styles.bodyTypo]}>Añadir al dia</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  spBody2MediumPosition: {
    left: 0,
    right: 0,
  },
  darkLayout: {
    height: 40,
    position: "absolute",
  },
  flatdefaultPosition: {
    right: 8,
    left: 8,
  },
  flatdefault1Position: {
    top: "50%",
    marginTop: -12,
    height: 24,
    position: "absolute",
  },
  bodyTypo: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    textTransform: "uppercase",
    fontSize: FontSize.spBUTTON_size,
    height: 24,
    fontFamily: FontFamily.spBUTTON,
    fontWeight: "500",
    left: 0,
    top: 0,
    position: "absolute",
  },
  darkPosition: {
    left: 28,
    right: 204,
    height: 40,
    position: "absolute",
  },
  title: {
    fontSize: FontSize.size_xl,
    lineHeight: 26,
    textAlign: "left",
    width: 216,
    height: 24,
    fontFamily: FontFamily.spBUTTON,
    fontWeight: "500",
    color: Color.textColor,
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
    left: 8,
    height: 40,
    top: 8,
  },
  lightHamburger: {
    height: 56,
    top: 0,
    right: 0,
    position: "absolute",
  },
  darkIcon: {
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    opacity: 0.32,
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
    position: "absolute",
  },
  body2: {
    width: 56,
    color: Color.textColor,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    textTransform: "uppercase",
    fontSize: FontSize.spBUTTON_size,
  },
  spBody2Medium: {
    left: 0,
    right: 0,
  },
  flatdefault: {
    bottom: 8,
    top: 8,
    right: 8,
    position: "absolute",
  },
  dark: {
    left: 192,
    width: 72,
    top: 75,
  },
  primaryShadowBox: {
    backgroundColor: Color.primaryColor,
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
  dark2: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  body21: {
    color: Color.lightColor,
    width: 112,
  },
  flatdefault1: {
    right: 8,
    left: 8,
  },
  dark1: {
    top: 75,
  },
  dark3: {
    top: 133,
  },
  pantallaEditarAlimentos: {
    flex: 0.35,
    height: 204,
    width: "100%",
    backgroundColor: Color.lightColor,
    position: "absolute",
    bottom: 0,
  },
});

export default PantallaEditarAlimentos;
