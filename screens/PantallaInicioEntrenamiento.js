import * as React from "react";
import { Pressable, StyleSheet, Text, View, TouchableWithoutFeedback,FlatList } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import Submenu from "./PantallaMenu";
import { useState, useEffect } from "react";
import auth, { firebase } from '@react-native-firebase/auth';

const PantallaInicioEntrenamiento = () => {
  const navigation = useNavigation();
  const user = auth().currentUser;
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [nombrePlan, setNombrePlan] = useState('');
  const [entrenamientosSemana, setEntrenamientosSemana] = useState('');
  const [numSemana, setNumSemana]= useState('');
  const [planActivado, setPlanActivado] = useState('');
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
  const FlatListItemseparator = () => {
    return (
      <View style={[styles.frameItem, styles.frameLayout]} />
    );
  };
  useEffect(() => {
    setNombrePlan('Elige un plan');
    const planActivadoRef = firebase.app().database('https://tfgivan-b5e4b-default-rtdb.europe-west1.firebasedatabase.app').ref(`users/${user.uid}/planActivado`);
    console.log(planActivadoRef);
    const handleSnapshot = (snapshot) => {
      if(snapshot.exists()){
        snapshot.forEach((childSnapshot)=>{
          const plan = childSnapshot.val();
          setPlanActivado(plan);
          setNombrePlan(plan.nombre);
          setNumSemana(plan.semanaActual);
          const entrena = plan.semanas[plan.semanaActual-1];
          setEntrenamientosSemana(entrena);
        })
      }else{
        setNombrePlan('Elige un plan')
      }
    }
    planActivadoRef.on('value', handleSnapshot);
  
    // Limpiar la suscripción al desmontar el componente
    return () => {
      planActivadoRef.off('value', handleSnapshot);
    };
  },[]);

  return (
    <TouchableWithoutFeedback onPress={handleScreenPress}>
    <View style={styles.pantallaInicioEntrenamiento}>
      <Pressable onPress={handleOpenSubmenu}> 
      <Image
        style={styles.pantallaInicioEntrenamientoChild}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      </Pressable>
      <Text style={styles.planDeEntrenamiento}>{nombrePlan}</Text>
      <Text style={styles.semanaX}>Semana {numSemana}</Text>
      <View style={[styles.rectangleParent, styles.frameChildLayout]}>
        <View style={[styles.frameChild, styles.body23Position]} />
        <FlatList
          data={entrenamientosSemana}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index}) => (
            <View style= {{marginBottom: 5,top:0}}>
              <Pressable onPress={() => navigation.navigate("PantallaRealizarEntrenamiento", {entrenamiento: item, planes:true, planActivado: planActivado })}>
              <Text style={styles.subheading}>{item.nombre}</Text>
                {index !== entrenamientosSemana.length && <FlatListItemseparator />}
              </Pressable>
            </View>
          )}
          contentContainerStyle={{ position: 'absolute', zIndex: 30, bottom:0, top:1}}
        />
      </View>
      <Pressable style={[styles.accent, styles.accentLayout]} onPress={() => navigation.navigate("PantallaBibliotecaDeEntrenamientos")}>
        <View style={styles.accent1}>
          <LinearGradient
            style={[styles.bgAccent, styles.bgAccentPosition]}
            locations={[0, 1]}
            colors={["#1dde7d", "#72dfc5"]}
          />
        </View>
        <View style={[styles.flatdefault, styles.flatdefaultPosition]}>
          <View style={[styles.spBody2Medium, styles.flatdefaultPosition]}>
            <Text style={[styles.body2, styles.bodyTypo1]}>Entrenamientos</Text>
          </View>
        </View>
      </Pressable>
      <Pressable style={[styles.accent2, styles.darkPosition]} onPress={() => navigation.navigate("PantallaPlanesDeEntrenamiento")}>
        <View style={styles.accent1}>
          <LinearGradient
            style={[styles.bgAccent, styles.bgAccentPosition]}
            locations={[0, 1]}
            colors={["#1dde7d", "#72dfc5"]}
          />
        </View>
        <View style={[styles.flatdefault, styles.flatdefaultPosition]}>
          <View style={[styles.spBody2Medium, styles.flatdefaultPosition]}>
            <Text style={[styles.body21, styles.bodyTypo]}>{`Planes de 
entrenamiento`}</Text>
          </View>
        </View>
      </Pressable>
      <Pressable style={[styles.accent4, styles.accentLayout]} onPress={() => navigation.navigate("PlantillaBibliotecaDeEjercicios")}>
        <View style={styles.accent1}>
          <LinearGradient
            style={[styles.bgAccent, styles.bgAccentPosition]}
            locations={[0, 1]}
            colors={["#1dde7d", "#72dfc5"]}
          />
        </View>
        <View style={[styles.flatdefault, styles.flatdefaultPosition]}>
          <View style={[styles.spBody2Medium, styles.flatdefaultPosition]}>
            <Text style={[styles.body22, styles.bodyTypo1]}>ejercicios</Text>
          </View>
        </View>
      </Pressable>
      
      {isSubmenuOpen && <Submenu onClose={handleCloseSubmenu} />}
    </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  frameChildLayout: {
    height: 162,
    width: 276,
    position: "absolute",
  },
  body23Position: {
    left: 0,
    top: 0,
  },
  frameLayout: {
    height: 1,
    width: 277,
    borderTopWidth: 1,
    borderColor: "rgba(95, 95, 95, 0.19)",
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  subheadingPosition: {
    left: 4,
    right: 24,
    top: "50%",
    height: 24,
    position: "absolute",
  },
  accentLayout: {
    height: 40,
    width: 97,
    top: 341,
    position: "absolute",
  },
  bgAccentPosition: {
    right: 0,
    left: 0,
  },
  flatdefaultPosition: {
    marginTop: -12,
    height: 24,
    top: "50%",
    position: "absolute",
  },
  bodyTypo1: {
    fontFamily: FontFamily.spBUTTON,
    fontWeight: "500",
    textTransform: "uppercase",
    color: Color.textColor,
    textAlign: "center",
    position: "absolute",
  },
  darkPosition: {
    left: 21,
    height: 40,
    width: 97,
    position: "absolute",
  },
  bodyTypo: {
    justifyContent: "center",
    fontFamily: FontFamily.spBUTTON,
    fontWeight: "500",
    textTransform: "uppercase",
    fontSize: FontSize.size_4xs,
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    position: "absolute",
  },
  pantallaInicioEntrenamientoChild: {
    top: 18,
    width: 32,
    height: 31,
    left: 13,
    position: "absolute",
  },
  planDeEntrenamiento: {
    top: 72,
    left: 29,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.spCaptionRegular,
    fontSize: FontSize.spTitleMedium_size,
    position: "absolute",
  },
  semanaX: {
    top: 72,
    left: 221,
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.spCaptionRegular,
    fontSize: FontSize.spTitleMedium_size,
    position: "absolute",
  },
  frameChild: {
    backgroundColor: Color.whitesmoke_100,
    shadowColor: "rgba(0, 0, 0, 0.17)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    height: 162,
    width: 276,
    position: "absolute",
  },
  frameItem: {
    top: 25,
  },
  frameInner: {
    top: 45,
  },
  lineView: {
    top: 67,
  },
  frameChild1: {
    top: 90,
  },
  subheading: {
    fontSize: FontSize.size_base,
    lineHeight: 21,
    width: 300,
    alignItems: "center",
    display: "flex",
    color: Color.textColor,
    height: 24,
    left: 5,
    top: 0,
    textAlign: "left",
    fontFamily: FontFamily.spCaptionRegular,

  },
  spSubheadingRegular: {
    marginTop: -81,
    height: 24,
  },
  spSubheadingRegular1: {
    marginTop: -57,
    height: 24,
  },
  rectangleParent: {
    top: 158,
    left: 33,
  },
  bgAccent: {
    bottom: 0,
    borderRadius: Border.br_80xl,
    backgroundColor: Color.accentColor,
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
  body2: {
    top: 7,
    left: 1,
    fontSize: FontSize.size_4xs,
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
    left: 128,
  },
  body21: {
    top: 1,
    left: 3,
    width: 74,
    height: 22,
    color: Color.textColor,
    justifyContent: "center",
  },
  accent2: {
    top: 341,
    left: 21,
  },
  body22: {
    top: 6,
    fontSize: FontSize.size_3xs,
    left: 13,
  },
  accent4: {
    left: 235,
  },
  body23: {
    color: Color.lightColor,
    width: 81,
    height: 24,
    left: 0,
    top: 0,
  },
  dark: {
    top: 421,
  },
  pantallaInicioEntrenamiento: {
    backgroundColor: Color.lightColor,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default PantallaInicioEntrenamiento;
