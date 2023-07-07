import * as React from "react";
import { Pressable, StyleSheet, View, Text,TouchableWithoutFeedback,FlatList } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";
import { useNavigation} from "@react-navigation/native";
import Submenu from "./PantallaMenu";
import { useState,useEffect } from "react";
import auth, { firebase } from '@react-native-firebase/auth';
import PantallaEditarEntrenamientos from "./PantallaBibliotecaDeEntrena";
const PantallaBibliotecaDeEntrena1 = () => {
  const navigation = useNavigation();
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [listaEntrenamientos, setListaEntrenamientos] = useState([]);
  const user = auth().currentUser;
  const [editar, setEditar] = useState(false);
  const [editarEntrenamiento,setEditarEntrenamiento] = useState([]);
//biblioteca entrenamientos
  const handleOpenSubmenu = () => {
    setIsSubmenuOpen(true);
  };
  const handleCloseSubmenu = () => {
    setIsSubmenuOpen(false);
  };
  const handleScreenPress = () => {
    if (isSubmenuOpen) {
      handleCloseSubmenu();
    }if(isPantallaEditarEntrenamientoVisible){
      handleCerrarPantallaEditarEntrenamiento();
    }
  }
  const FlatListItemseparator = () => {
    return (
      <View style={[styles.frameItem, styles.frameLayout]} />
    );
  };
  const [isPantallaEditarEntrenamientoVisible, setPantallaEditarEntrenamientoVisible] = useState(false);
  const handleAbrirPantallaEditarEntrenamiento= (item, editar) =>{
    setEditar(editar);
    setEditarEntrenamiento(item);
    setPantallaEditarEntrenamientoVisible(true);
  };
  const handleCerrarPantallaEditarEntrenamiento= () =>{
    setPantallaEditarEntrenamientoVisible(false);
  }
  const handleAbrirPantallaCrearEntrenamiento= (editar) =>{
    navigation.navigate("PantallaCreacionDeEntrenamientos", {editar: editar ,planes: false});
  };

  useEffect(() => {
    const entrenamientosRef = firebase.app().database('https://tfgivan-b5e4b-default-rtdb.europe-west1.firebasedatabase.app').ref(`users/${user.uid}/entrenamientos`);
    const handleSnapshot = (snapshot) => {
      const entrenamientosData = snapshot.val();
      if (entrenamientosData) {
        const entrenamientosArray = [];
        // Convertir los ejercicios en un array y actualizar el estado
        Object.keys(entrenamientosData).forEach((key) => {
          entrenamientosArray.push(entrenamientosData[key]);
        });
        setListaEntrenamientos(entrenamientosArray);
      }
    };
    entrenamientosRef.on('value', handleSnapshot);
  
    // Limpiar la suscripción al desmontar el componente
    return () => {
      entrenamientosRef.off('value', handleSnapshot);
    };
  }, []);
  return (
    <TouchableWithoutFeedback onPress={handleScreenPress}>
    <View style={styles.pantallaBibliotecaDeEntrena}>
    <Pressable onPress={handleOpenSubmenu}> 
      <Image
        style={styles.pantallaBibliotecaDeEntrenaChild}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      </Pressable>
      <View style={[styles.rectangleParent, styles.frameChildShadowBox]}>
        <View style={[styles.frameChild, styles.frameChildShadowBox]} />
        <FlatList
          data={listaEntrenamientos}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index}) => (
            <View style= {{marginBottom: 10,top:7}}>
              <Pressable onPress={() => handleAbrirPantallaEditarEntrenamiento(item, true)}>
              <Text style={[styles.subheading1, {top:3,left:5}]}>{item.nombre}</Text>
                {index !== listaEntrenamientos.length && <FlatListItemseparator />}
              </Pressable>
            </View>
          )}
          contentContainerStyle={{ position: 'absolute', zIndex: 1,paddingBottom:20, bottom:0, top:15}}
        />
        
  
 
        
      
       
        <View style={styles.spSubheadingRegularWrapper}>
          <View
            style={[styles.spSubheadingRegular3, styles.subheadingPosition1]}
          >
            <Text style={[styles.subheading3, styles.subheadingPosition]}>
              Nombre
            </Text>
          </View>
        </View>
      </View>
      <Pressable style={styles.accent}onPress={() => handleAbrirPantallaCrearEntrenamiento(false)}>
        <View style={styles.accent1}>
          <LinearGradient
            style={[styles.bgAccent, styles.bgAccentPosition]}
            locations={[0, 1]}
            colors={["#1dde7d", "#72dfc5"]}
          />
        </View>
        <View style={[styles.flatdefault, styles.flatdefaultPosition]}>
          <View style={[styles.spBody2Medium, styles.flatdefaultPosition]}>
            <Text style={[styles.body2, styles.bodyTypo]}>
              crear entrenamiento
            </Text>
          </View>
        </View>
      </Pressable>
      <Pressable style={styles.dark} onPress={() => navigation.navigate("PantallaInicioEntrenamiento")}>
        <View style={styles.accent1}>
          <LinearGradient
            style={[styles.bgAccent, styles.bgAccentPosition]}
            locations={[0, 1]}
            colors={["#1a73e9", "#6c92f4"]}
          />
        </View>
        <View style={[styles.flatdefault, styles.flatdefaultPosition2]}>
          <View style={[styles.spBody2Medium, styles.flatdefaultPosition2]}>
            <Text style={[styles.body21, styles.bodyTypo]}>volver</Text>
          </View>
        </View>
      </Pressable>
      {isSubmenuOpen && <Submenu onClose={handleCloseSubmenu} />}
      {isPantallaEditarEntrenamientoVisible && <PantallaEditarEntrenamientos onClose={handleCerrarPantallaEditarEntrenamiento} item={editarEntrenamiento} editar={editar}/>}
    </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  frameChildShadowBox: {
    height: 276,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    width: 299,
    position: "absolute",
  },
  frameLayout: {
    height: 1,
    borderTopWidth: 1,
    borderColor: "rgba(95, 95, 95, 0.19)",
    borderStyle: "solid",
    width: 299,
    left: 0,
    position: "absolute",
  },
  subheadingPosition1: {
    right: 150,
    height: 24,
    top: "50%",
    position: "absolute",
  },
  subheadingPosition: {
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
  flatdefaultPosition2: {
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
  pantallaBibliotecaDeEntrenaChild: {
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
    top: 0,
  },
  frameItem: {
    top: 23,
  },
  frameInner: {
    top: 46,
  },
  lineView: {
    top: 68,
  },
  frameChild1: {
    top: 25,
  },
  subheading: {
    width: 149,
    lineHeight: 18,
    fontSize: FontSize.spBUTTON_size,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.spCaptionRegular,
  },
  spSubheadingRegular: {
    marginTop: -70,
    height: 24,
    left: 0,
  },
  subheading1: {
    lineHeight: 18,
    fontSize: FontSize.spBUTTON_size,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.spCaptionRegular,
    width: 299,
  },
  spSubheadingRegular1: {
    marginTop: -94,
    backgroundColor: Color.lightgray,
    height: 24,
    top: "50%",
    right: 0,
    position: "absolute",
  },
  spSubheadingRegular2: {
    marginTop: -114,
    height: 24,
    left: 0,
  },
  subheading3: {
    fontSize: FontSize.size_base,
    lineHeight: 21,
    width: 145,
  },
  spSubheadingRegular3: {
    marginTop: -11.5,
    left: 5,
    height: 24,
  },
  spSubheadingRegularWrapper: {
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
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: 29,
    overflow: "hidden",
  },
  bgAccent: {
    bottom: 0,
    borderRadius: Border.br_80xl,
    backgroundColor: Color.accentColor,
    top: 0,
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
    fontSize: FontSize.size_4xs,
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
  pantallaBibliotecaDeEntrena: {
    backgroundColor: Color.lightColor,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default PantallaBibliotecaDeEntrena1;
