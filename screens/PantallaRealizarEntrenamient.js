import * as React from "react";
import { Pressable, StyleSheet, View, Text, TextInput, TouchableWithoutFeedback,FlatList,Modal } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import { useNavigation, useRoute } from "@react-navigation/native";
import Submenu from "./PantallaMenu";
import { useState, useEffect } from "react";
import { isEqual } from "lodash";
import auth, { firebase } from '@react-native-firebase/auth';
const PantallaRealizarEntrenamient = () => {
  const navigation = useNavigation();
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const user = auth().currentUser;
  const route = useRoute();
  const [ejercicios,setEjercicios] = useState([]);


  const handleInputChange = (text, ejercicioIndex, serieIndex, property) => {
    const updatedEjercicios = [...ejercicios];
    updatedEjercicios[ejercicioIndex].series[serieIndex] = {
      ...updatedEjercicios[ejercicioIndex].series[serieIndex],
      [property]: text
    };
    setEjercicios(updatedEjercicios);
  };

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
  const handleGuardarEntrenamiento=() =>{
    const today = new Date();
    // Obtener los valores de día, mes y año
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Los meses en JavaScript comienzan desde 0
    const year = String(today.getFullYear()).slice(-2); // Obtener los últimos dos dígitos del año

    const formattedDate = `${day}/${month}/${year}`;
    const planEntrenamientoDefault = route.params.planes ? route.params.planActivado.nombre : "ningun plan";

    const entrenamientoEntr = {
      ejercicios: ejercicios,
      nombre: route.params.entrenamiento.nombre,
      planEntrenamiento: planEntrenamientoDefault,
      tipo: route.params.entrenamiento.tipo,
    }

    const entradaCalendario = {
      fecha: formattedDate,
      entrenamientos: [entrenamientoEntr],
    }
    
    const planRef = firebase.app().database('https://tfgivan-b5e4b-default-rtdb.europe-west1.firebasedatabase.app').ref(`users/${user.uid}/planActivado`);
    if(route.params.planes){
      planRef.once('value', (snapshot) => {
        snapshot.forEach((childsnapshot) =>{
          const plan = childsnapshot.val();
          if(isEqual(plan,route.params.planActivado)){
            const entrenamientosSemana = plan.semanas[plan.semanaActual-1]
            
            const nuevoArrayEntrenamientos = entrenamientosSemana.filter((item) => !isEqual(item, route.params.entrenamiento));
            
            const semanaActualRef = planRef.child(`${childsnapshot.key}/semanas/${plan.semanaActual - 1}`);
            semanaActualRef.set(nuevoArrayEntrenamientos.length);
            
            if(nuevoArrayEntrenamientos.length === 0){
              planRef.child(childsnapshot.key).update({ semanaActual: plan.semanaActual+1 });
            }
          }
        })
      })
    }
    const entradasCalendarioRef = firebase.app().database('https://tfgivan-b5e4b-default-rtdb.europe-west1.firebasedatabase.app').ref(`users/${user.uid}/entradasCalendario`);
    entradasCalendarioRef.once('value', (snapshot) => {
      if(snapshot.exists()){
        let isDateFound = false;
        snapshot.forEach((childsnapshot)=>{
          const entradaCalendar = childsnapshot.val();
          if(entradaCalendar.fecha===formattedDate){
            isDateFound = true;
            const entrenamientosEntrada = entradaCalendar.entrenamientos;
            console.log(Array.isArray(entrenamientosEntrada)&& entrenamientosEntrada.length >0);
            if(Array.isArray(entrenamientosEntrada)&& entrenamientosEntrada.length >0){
              entrenamientosEntrada.push(entrenamientoEntr);
              entradasCalendarioRef.child(childsnapshot.key).update({entrenamientos: entrenamientosEntrada});
            }else{
              entradasCalendarioRef.child(childsnapshot.key).update({entrenamientos: [entrenamientoEntr]});
            }
          }
        });
        if (!isDateFound) {
          const nuevaEntradaRef = entradasCalendarioRef.push();
          nuevaEntradaRef.set(entradaCalendario);
        }
      }else{
        const nuevaEntradaRef = entradasCalendarioRef.push();
        nuevaEntradaRef.set(entradaCalendario);
      }
    })
    navigation.goBack();
  };
  useEffect(() => {
    if (route.params?.entrenamiento) {
      const ejerciciosEntrenamiento = route.params.entrenamiento.ejercicios.map((ejercicio) => {
        const series = Array.from({ length: ejercicio.series }).map(() => ({
          repeticiones: "",
          peso: "",
        }));
  
        return {
          nombre: ejercicio.nombre,
          tipo: ejercicio.tipo,
          series: series,
        };
      });
      setEjercicios(ejerciciosEntrenamiento);
    }
  }, []);
  return (
    <TouchableWithoutFeedback onPress={handleScreenPress}>
    <View style={styles.pantallaRealizarEntrenamient}>
      <Pressable onPress={handleOpenSubmenu}> 
        <Image
          style={styles.pantallaRealizarEntrenamientChild}
          contentFit="cover"
          source={require("../assets/IconoApp.png")}
        />
      </Pressable>
      <View style={styles.frameParent}>
        <FlatList
          data={ejercicios}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item,index }) => (
            <View style={[styles.captionParent, styles.captionLayout]}>
              <Text style={[styles.caption, styles.captionTypo]}>{item.nombre}</Text>
              {item.series.map((serie, serieIndex) => (
                <View key={serieIndex}style={{ marginTop: 20 }}>
                  <TextInput
                  style={[styles.spSubheadingRegular, styles.subheadingTypo]}
                  placeholder="Num reps"
                  keyboardType="numeric"
                  maxLength={3}
                  placeholderTextColor="rgba(0, 0, 0, 0.87)"
                  value={ejercicios[index].series[serieIndex].repeticiones}
                  onChangeText={(text) => handleInputChange(text, index, serieIndex, 'repeticiones')}
                />
                <TextInput
                  style={[styles.spSubheadingRegular1, styles.subheadingPosition1]}
                  placeholder="Peso"
                  keyboardType="numeric"
                  maxLength={3}
                  placeholderTextColor="rgba(0, 0, 0, 0.87)"
                  value={ejercicios[index].series[serieIndex].peso}
                  onChangeText={(text) => handleInputChange(text, index, serieIndex, 'peso')}
                />
                </View>
              ))}
            </View>
          )}
          contentContainerStyle={{ position: 'absolute', zIndex: 30, bottom: 0, top: 1 }}
        />
      </View>
      <Pressable style={[styles.accent, styles.darkPosition]} onPress={handleGuardarEntrenamiento}>
        <View style={styles.accent1}>
          <LinearGradient
            style={[styles.bgAccent, styles.bgAccentPosition]}
            locations={[0, 1]}
            colors={["#1dde7d", "#72dfc5"]}
          />
        </View>
        <View style={[styles.flatdefault, styles.flatdefaultPosition]}>
          <View style={[styles.spBody2Medium, styles.flatdefaultPosition]}>
            <Text style={[styles.body2, styles.bodyTypo]}>Guardar</Text>
          </View>
        </View>
      </Pressable>
      <Pressable style={[styles.dark, styles.darkPosition]}onPress={() => navigation.goBack()}>
        <View style={styles.accent1}>
          <LinearGradient
            style={[styles.bgAccent, styles.bgAccentPosition]}
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
      <Modal
        visible={isSubmenuOpen}
        transparent={true}
        onRequestClose={handleCloseSubmenu}
      >
        <TouchableWithoutFeedback onPress={handleCloseSubmenu}>
          <View style={styles.modalContainer}>
            <View style={styles.submenuContainer}>
              <Submenu onClose={handleCloseSubmenu} />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparente
  },
  
  captionLayout: {
    height: 85,
    width: 317,
    left: 0,
    overflow: "hidden",
  },
  captionTypo: {
    width: 395,
    textAlign: "left",
    fontFamily: FontFamily.spCaptionRegular,
    lineHeight: 15,
    left: 2,
    color: Color.textColor,
    fontSize: FontSize.spCaptionRegular_size,
    top: 0,
    position: "absolute",
  },
  subheadingTypo: {
    fontSize: FontSize.size_base,
    opacity: 0.54,
    height: 20,
    top: 0,
    fontFamily: FontFamily.spCaptionRegular,
    position: "absolute",
  },
  subheadingPosition1: {
    left: 126,
    right: 139,
  },
  subheadingPosition: {
    top: 44,
    fontSize: FontSize.size_base,
    opacity: 0.54,
    height: 20,
    fontFamily: FontFamily.spCaptionRegular,
    position: "absolute",
  },
  darkPosition: {
    top: 400,
    position: "absolute",
  },
  bgAccentPosition: {
    right: 0,
    left: 0,
  },
  flatdefaultPosition: {
    height: 24,
    top: "50%",
    marginTop: -12,
    position: "absolute",
  },
  bodyTypo: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.spBUTTON,
    fontWeight: "500",
    textTransform: "uppercase",
    height: 24,
    top: 0,
    left: 0,
    position: "absolute",
  },
  pantallaRealizarEntrenamientChild: {
    left: 13,
    width: 32,
    height: 31,
    top: 18,
    position: "absolute",
  },
  caption: {
    height: 16,
  },
  spSubheadingRegular: {
    right: 237,
    left: 2,
  },
  spSubheadingRegular1: {
    fontSize: FontSize.size_base,
    opacity: 0.54,
    height: 20,
    top: 0,
    fontFamily: FontFamily.spCaptionRegular,
    position: "absolute",
  },
  spSubheadingRegular2: {
    right: 237,
    left: 2,
  },
  spSubheadingRegular3: {
    left: 126,
    right: 139,
  },
  captionParent: {
    top: 18,
  },
  caption1: {
    height: 14,
  },
  captionGroup: {
    top: 88,
  },
  frameParent: {
    top: 70,
    left: 29,
    width: 289,
    height: 316,
    position: "absolute",
    overflow: "hidden",
  },
  bgAccent: {
    bottom: 0,
    borderRadius: Border.br_80xl,
    backgroundColor: Color.primaryColor,
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
    width: 59,
    color: Color.textColor,
    fontSize: FontSize.spCaptionRegular_size,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
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
    left: 33,
    width: 77,
    height: 40,
  },
  body21: {
    fontSize: FontSize.size_2xs,
    color: Color.lightColor,
    width: 57,
  },
  dark: {
    left: 245,
    width: 73,
    height: 32,
  },
  pantallaRealizarEntrenamient: {
    backgroundColor: Color.lightColor,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default PantallaRealizarEntrenamient;
