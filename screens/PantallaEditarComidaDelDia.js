import * as React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";
import auth, { firebase } from '@react-native-firebase/auth';
import { useNavigation } from "@react-navigation/native";
import { isEqual } from "lodash";
import moment from 'moment';
const PantallaEditarComidaDelDia = ({onClose, comidaDelDia,fechaSeleccionada}) => {
  const user = auth().currentUser;
  const navigation = useNavigation();
  const handleCerrarPantallaSuperpuesta = () => {
      onClose();
  };
  const handleEditarComida= () =>{
    onClose();
    navigation.navigate('PantallaCrearComida', {comidaEditar: comidaDelDia, editar:true,delDia: true, fecha:fechaSeleccionada})
  };
  const handleBorrarComida= ()=>{
    const fecha = fechaSeleccionada; 
    const fechaMoment = moment(fecha, 'DD MMMM YYYY'); 
    const fechaFormateada = fechaMoment.format('DD/MM/YY');
    const entradasRef = firebase.app().database('https://tfgivan-b5e4b-default-rtdb.europe-west1.firebasedatabase.app').ref(`users/${user.uid}/entradasCalendario`);
    entradasRef.once('value', (snapshot)=>{
      snapshot.forEach((childsnapshot)=>{
        const entrada = childsnapshot.val();
        if(isEqual(entrada.fecha, fechaFormateada)){
          const comidas = entrada.comidas || [];
          const index = comidas.findIndex(comida => isEqual(comida, comidaDelDia)); 
          if(index !== -1) {
            comidas.splice(index, 1);

            // Actualiza la entrada en Firebase
            childsnapshot.ref.update({ comidas });
          }
        }
      })
    })
    onClose();
  }
  return (
    <View style={styles.pantallaEditarComidaDelDia}>
      <View style={[styles.lightHamburger, styles.spBody2MediumPosition]}>
        <View style={styles.spTitleMedium}>
          <Text style={styles.title}>{comidaDelDia.nombre}</Text>
        </View>
        <Pressable onPress={handleCerrarPantallaSuperpuesta}>
            <Image
            style={styles.closeIcon}
            contentFit="cover"
            source={require("../assets/close.png")}
            />
        </Pressable>
      </View>
      <Pressable style={[styles.dark, styles.darkPosition]} onPress={handleBorrarComida}>
        <Image
          style={[styles.darkIcon, styles.darkIconPosition]}
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
            style={[styles.bgPrimary, styles.darkIconPosition]}
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
    </View>
  );
};

const styles = StyleSheet.create({
  spBody2MediumPosition: {
    left: 0,
    right: 0,
  },
  darkPosition: {
    top: 76,
    height: 40,
    position: "absolute",
  },
  darkIconPosition: {
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
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
  title: {
    fontSize: FontSize.spTitleMedium_size,
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
    height: 40,
    left: 8,
    top: 8,
    position: "absolute",
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
    left: 194,
    width: 72,
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
    backgroundColor: Color.primaryColor,
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
    right: 202,
    left: 30,
  },
  pantallaEditarComidaDelDia: {
    flex: 0.58,
    height: 170,
    width: "100%",
    backgroundColor: Color.lightColor,
    position: "absolute",
    bottom: 0,
  },
});

export default PantallaEditarComidaDelDia;
