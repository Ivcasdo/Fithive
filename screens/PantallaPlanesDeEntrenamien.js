import * as React from "react";
import { Pressable, StyleSheet, View, Text, TouchableWithoutFeedback,FlatList } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import Submenu from "./PantallaMenu";
import { useState,useEffect } from "react";
import auth, { firebase } from '@react-native-firebase/auth';
import PantallaEditarPlanes from './PantallaEditarPlanes'
const PantallaPlanesDeEntrenamien = ({ visible, onClose}) => {
  const navigation = useNavigation();
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [listaPlanes, setListaPlanes] = useState('');
  const [planEditar, setPlanEditar] = useState('');
  const user = auth().currentUser;
  const handleOpenSubmenu = () => {
    setIsSubmenuOpen(true);
  };
  const handleCloseSubmenu = () => {
    setIsSubmenuOpen(false);
  };
  const handleScreenPress = () => {
    if (isSubmenuOpen) {
      handleCloseSubmenu();
    }if(isEditarPlanesVisible){
      handleCerrarEditarPlanes();
    }
  };
  const [isEditarPlanesVisible, setIsEditarPlanesVisible] = useState(false);
  const handleAbrirEditarPlanes = (plan) =>{
    setPlanEditar(plan);
    setIsEditarPlanesVisible(true);
  };
  const handleCerrarEditarPlanes = () =>{

    setIsEditarPlanesVisible(false);
  };
  const FlatListItemseparator = () => {
    return (
      <View style={[styles.lineView, styles.frameLayout]} />
    );
  };
  useEffect(() => {
    const planesRef = firebase.app().database('https://tfgivan-b5e4b-default-rtdb.europe-west1.firebasedatabase.app').ref(`users/${user.uid}/planesentrenamiento`);
    const handleSnapshot = (snapshot) => {
      const planesData = snapshot.val();
      if (planesData) {
        const planesArray = [];
        // Convertir los ejercicios en un array y actualizar el estado
        Object.keys(planesData).forEach((key) => {
          planesArray.push(planesData[key]);
        });
        
        setListaPlanes(planesArray);
      }
    };
    planesRef.on('value', handleSnapshot);
  
    // Limpiar la suscripción al desmontar el componente
    return () => {
      planesRef.off('value', handleSnapshot);
    };
  }, []);
  return (
    <TouchableWithoutFeedback onPress={handleScreenPress}>
    <View style={styles.pantallaPlanesDeEntrenamien}>
    <Pressable onPress={handleOpenSubmenu}> 
      <Image
        style={styles.pantallaPlanesDeEntrenamienChild}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      </Pressable>
      <View style={[styles.rectangleParent, styles.frameChildShadowBox]}>
        <View style={[styles.frameChild, styles.body21Position]} />
        <View style={styles.frameChild2} />
        <FlatList
          data={listaPlanes}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index}) => (
            <Pressable onPress={() => handleAbrirEditarPlanes(item)}>
              <View style= {{marginBottom: 10,top:10,flexDirection: 'row'}}>
                <Text style={[styles.subheading3, {left:5,}]}>{item.nombre}</Text>
                <Text style={[styles.subheading3, {left:5,}]}>{item.semanas}</Text>
                  {index !== listaPlanes.length && <FlatListItemseparator />}
              </View>
            </Pressable>
          )}
          contentContainerStyle={{ position: 'absolute', zIndex: 1,paddingBottom:20, bottom:0, top:15,}}
        />

        <View style={styles.spSubheadingRegularParent}>
          <View
            style={[styles.spSubheadingRegular6, styles.subheadingPosition]}
          >
            <Text style={[styles.subheading6, styles.subheadingPosition3]}>
              Nº de dias
            </Text>
          </View>
          <View
            style={[styles.spSubheadingRegular7, styles.subheadingPosition]}
          >
            <Text style={[styles.subheading6, styles.subheadingPosition3]}>
              Nombre
            </Text>
          </View>
        </View>
      </View>
      <Pressable style={styles.accent} onPress={() => navigation.navigate("PantallaCreacionDePlanes", {editarPlanes:false})}>
        <View style={styles.accent1}>
          <LinearGradient
            style={[styles.bgAccent, styles.body21Position]}
            locations={[0, 1]}
            colors={["#1dde7d", "#72dfc5"]}
          />
        </View>
        <View style={[styles.flatdefault, styles.flatdefaultPosition]}>
          <View style={[styles.spBody2Medium, styles.flatdefaultPosition]}>
            <Text style={[styles.body2, styles.bodyTypo]}>crear plan</Text>
          </View>
        </View>
      </Pressable>
      <Pressable style={styles.dark} onPress={() => navigation.navigate("PantallaInicioEntrenamiento")}>
        <View style={styles.accent1}>
          <LinearGradient
            style={[styles.bgAccent, styles.body21Position]}
            locations={[0, 1]}
            colors={["#1a73e9", "#6c92f4"]}
          />
        </View>
        <View style={[styles.flatdefault, styles.flatdefaultPosition]}>
          <View style={[styles.spBody2Medium, styles.flatdefaultPosition]}>
            <Text style={[styles.body21, styles.bodyTypo]}>volver</Text>
          </View>
        </View>
      </Pressable>
      {isSubmenuOpen && <Submenu onClose={handleCloseSubmenu} />}
      {isEditarPlanesVisible && <PantallaEditarPlanes onClose={handleCerrarEditarPlanes} planEditar={planEditar}/>}
    </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  frameChildShadowBox: {
    height: 276,
    width: 299,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    position: "absolute",
  },
  body21Position: {
    top: 0,
    left: 0,
  },
  frameLayout: {
    height: 1,
    borderTopWidth: 1,
    width: 300,
    borderColor: "rgba(95, 95, 95, 0.19)",
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  subheadingPosition4: {
    left: 154,
    right: 0,
  },
  subheadingLayout: {
    width: 150,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.textColor,
    fontFamily: FontFamily.spCaptionRegular,
    lineHeight: 18,
    fontSize: FontSize.spBUTTON_size,
    height: 24,
    top: 0,
    position: "absolute",
  },
  subheadingPosition2: {
    backgroundColor: Color.lightgray,
    marginTop: -94,
    height: 24,
    top: "50%",
    position: "absolute",
  },
  subheadingPosition1: {
    marginTop: -114,
    height: 24,
    top: "50%",
    position: "absolute",
  },
  subheadingPosition5: {
    top: "50%",
    marginTop: -70,
    height: 24,
    position: "absolute",
  },
  subheadingPosition3: {
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.spCaptionRegular,
    color: Color.textColor,
    height: 24,
    left: 0,
    top: 0,
    position: "absolute",
  },
  subheadingPosition: {
    marginTop: -11.5,
    height: 24,
    top: "50%",
    position: "absolute",
  },
  flatdefaultPosition: {
    marginTop: -12,
    height: 24,
    top: "55%",
    position: "absolute",
  },
  bodyTypo: {
    justifyContent: "center",
    textAlign: "center",
    fontFamily: FontFamily.spBUTTON,
    fontWeight: "500",
    textTransform: "uppercase",
    alignItems: "center",
    display: "flex",
    position: "absolute",
  },
  pantallaPlanesDeEntrenamienChild: {
    top: 18,
    left: 13,
    width: 32,
    height: 31,
    position: "absolute",
  },
  frameChild: {
    backgroundColor: Color.whitesmoke_100,
    shadowColor: "rgba(0, 0, 0, 0.17)",
    left: 0,
    height: 276,
    width: 299,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    position: "absolute",
  },
  frameItem: {
    top: 23,
  },
  frameInner: {
    top: 46,
  },
  lineView: {
    top: 25,
  },
  frameChild1: {
    top: 90,
  },
  frameChild2: {
    borderRightWidth: 1,
    width: 1,
    height: 277,
    left: 149,
    borderColor: "rgba(95, 95, 95, 0.19)",
    borderStyle: "solid",
    top: 0,
    position: "absolute",
  },
  subheading: {
    left: -5,
  },
  spSubheadingRegular: {
    height: 24,
    top: "50%",
    marginTop: -70,
    position: "absolute",
  },
  subheading1: {
    left: 0,
  },
  spSubheadingRegular1: {
    right: 0,
    left: 149,
  },
  spSubheadingRegular2: {
    left: 154,
    right: 0,
  },
  subheading3: {
    width: 149,
    lineHeight: 18,
    fontSize: FontSize.spBUTTON_size,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.spCaptionRegular,
  },
  spSubheadingRegular3: {
    right: 150,
    height: 24,
    left: 0,
  },
  spSubheadingRegular4: {
    right: 150,
    left: 0,
  },
  spSubheadingRegular5: {
    right: 150,
    left: 0,
  },
  subheading6: {
    fontSize: FontSize.size_base,
    lineHeight: 21,
    width: 145,
  },
  spSubheadingRegular6: {
    left: 155,
    right: 0,
  },
  spSubheadingRegular7: {
    left: 5,
    right: 150,
  },
  spSubheadingRegularParent: {
    left: -1,
    backgroundColor: Color.gainsboro_100,
    height: 23,
    width: 300,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  rectangleParent: {
    top: 71,
    shadowColor: "rgba(0, 0, 0, 0.13)",
    left: 29,
    overflow: "hidden",
  },
  bgAccent: {
    bottom: 0,
    borderRadius: Border.br_80xl,
    backgroundColor: Color.accentColor,
    right: 0,
    left: 0,
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
    top: 1,
    left: 3,
    fontSize: FontSize.size_3xs,
    width: 74,
    height: 22,
    color: Color.textColor,
    justifyContent: "center",
    textAlign: "center",
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
    top: 360,
    width: 97,
    height: 40,
    left: 29,
    position: "absolute",
  },
  body21: {
    fontSize: FontSize.size_2xs,
    color: Color.lightColor,
    width: 57,
    height: 24,
    left: 0,
    top: 0,
  },
  dark: {
    top: 364,
    left: 240,
    width: 73,
    height: 32,
    position: "absolute",
  },
  pantallaPlanesDeEntrenamien: {
    backgroundColor: Color.lightColor,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default PantallaPlanesDeEntrenamien;
