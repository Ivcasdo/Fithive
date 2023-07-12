import * as React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import { isEqual } from "lodash";
import auth, { firebase } from '@react-native-firebase/auth';
const PantallaCreacionDePlanes4 = ({onClose, planEditar}) => {
  const navigation = useNavigation();
  const user = auth().currentUser;
  const handleCerrarPantallaSuperpuesta = () => {
    onClose();
  };
  const handleEditarPlan = () =>{
    onClose();
    navigation.navigate("PantallaCreacionDePlanes", {editarPlanes: true, planEditar :planEditar})
  }
  const handleBorrarPlan = () =>{
    const planesRef = firebase.app().database('https://tfgivan-b5e4b-default-rtdb.europe-west1.firebasedatabase.app').ref(`users/${user.uid}/planesentrenamiento`);
    planesRef.once('value', (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        const plan = childSnapshot.val();
        
        if(isEqual(plan, planEditar)){
          planesRef.child(childSnapshot.key).remove();
        }
      })
    });
    onClose();
  }
  const handleIniciarPlan = () =>{
    const planActivadoRef = firebase.app().database('https://tfgivan-b5e4b-default-rtdb.europe-west1.firebasedatabase.app').ref(`users/${user.uid}/planActivado`);
    const planesRef = firebase.app().database('https://tfgivan-b5e4b-default-rtdb.europe-west1.firebasedatabase.app').ref(`users/${user.uid}/planesentrenamiento`);
    planesRef.once('value', (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        const plan = childSnapshot.val();
        if(isEqual(plan, planEditar) && !plan.activado){
          planesRef.child(childSnapshot.key).update({
            activado: true
          });
          const arraySemanas = [];
          for(let i = 0; i< plan.semanas; i++ ){
            arraySemanas.push(plan.entrenamientos);
          }
          
          const planActivado = {
            nombre: planEditar.nombre,
            tipo: planEditar.tipo,
            semanas: arraySemanas,
            semanaActual: 1,
          };
          planActivadoRef.once('value',(snapshot)=>{
            if(snapshot.exists()){
              snapshot.forEach((childSnapshot)=>{
                childSnapshot.ref.remove();
              })
            }
            const nuevoPlanRef = planActivadoRef.push();
            nuevoPlanRef.set(planActivado);
          });
        }else{
          if(plan.activado){
            
          }else{
            planesRef.child(childSnapshot.key).update({
              activado: false
            });
          }
        }
      })
    });
    onClose();
    navigation.navigate("PantallaInicioEntrenamiento");
  }
  return (
    <View style={styles.pantallaCreacionDePlanes4}>
      <View style={[styles.lightHamburger, styles.coverPosition]}>
        <View style={styles.spTitleMedium}>
          <Text style={styles.title}>{planEditar.nombre}</Text>
        </View>
        <Pressable onPress={handleCerrarPantallaSuperpuesta}>
          <Image
            style={[styles.closeIcon, styles.dark2Layout]}
            contentFit="cover"
            source={require("../assets/close.png")}
          />
        </Pressable>
      </View>
      <View style={[styles.cover, styles.coverPosition]}>
        <Pressable style={[styles.dark, styles.darkPosition]} onPress={handleEditarPlan}>
          <View style={styles.dark1}>
            <LinearGradient
              style={[styles.bgPrimary, styles.darkIconPosition]}
              locations={[0, 1]}
              colors={["#1a73e9", "#6c92f4"]}
            />
          </View>
          <View style={[styles.flatdefault, styles.flatdefaultPosition]}>
            <View style={[styles.spBody2Medium, styles.flatdefaultPosition1]}>
              <Text style={[styles.body2, styles.bodyTypo]}>editar</Text>
            </View>
          </View>
        </Pressable>
        <Pressable style={[styles.dark2, styles.dark2Layout]} onPress={handleBorrarPlan}>
          <Image
            style={[styles.darkIcon, styles.darkIconPosition]}
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
      <Pressable style={[styles.dark3, styles.darkPosition]} onPress={handleIniciarPlan}>
        <Image
          style={[styles.darkIcon, styles.darkIconPosition]}
          contentFit="cover"
          source={require("../assets/-dark1.png")}
        />
        <View style={[styles.flatdefault1, styles.flatdefaultPosition]}>
          <View style={[styles.spBody2Medium, styles.flatdefaultPosition1]}>
            <Text style={[styles.body22, styles.bodyTypo]}>Activar Plan</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  coverPosition: {
    left: 0,
    right: 0,
    position: "absolute",
  },
  dark2Layout: {
    height: 40,
    position: "absolute",
  },
  darkPosition: {
    left: 12,
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
    height: 24,
    fontFamily: FontFamily.spBUTTON,
    fontWeight: "500",
    width: 216,
    color: Color.textColor,
    left: 0,
    top: 0,
    position: "absolute",
  },
  spTitleMedium: {
    right: 72,
    bottom: 16,
    left: 72,
    top: 16,
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
    color: Color.lightColor,
    width: 216,
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
    position: "absolute",
  },
  flatdefault: {
    top: "50%",
    marginTop: -12,
    height: 24,
  },
  dark: {
    right: 116,
    top: 16,
  },
  darkIcon: {
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    opacity: 0.5,
  },
  body21: {
    width: 64,
    color: Color.textColor,
  },
  flatdefault1: {
    bottom: 8,
    top: 8,
    right: 8,
  },
  dark2: {
    left: 253,
    width: 80,
    top: 16,
  },
  cover: {
    top: 104,
    height: 99,
  },
  body22: {
    width: 216,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    textTransform: "uppercase",
    fontSize: FontSize.spBUTTON_size,
    color: Color.textColor,
  },
  dark3: {
    top: 64,
    width: 232,
  },
  pantallaCreacionDePlanes4: {
    flex: 0.4,
    height: 203,
    width: "100%",
    backgroundColor: Color.lightColor,
    position: "absolute",
    bottom: 0,
  },
});

export default PantallaCreacionDePlanes4;
