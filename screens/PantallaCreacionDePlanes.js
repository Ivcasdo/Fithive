import * as React from "react";
import { Pressable, StyleSheet, View, TextInput, Text, TouchableWithoutFeedback,FlatList,Modal } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";
import { useNavigation, useRoute } from "@react-navigation/native";
import Submenu from "./PantallaMenu";
import { useState, useEffect } from "react";
import { isEqual } from "lodash";
import auth, { firebase } from '@react-native-firebase/auth';
import PantallaAnadirEntrenamientos from "./PantallaCreacionDePlanes3";
import PantallaEditarEntrenamiento from "./PantallaCreacionDePlanes2"
const PantallaCreacionDePlanes = ({}) => {
  const navigation = useNavigation();
  const user = auth().currentUser;
  const [datosCargados, setDatosCargados] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [editarEntrene, setEditarEntrene] = useState(false);
  const [entrenamiento, setEntrenamiento] = useState('');
  const [EditEntrene, setEditEntrene] = useState('');
  const [listaEntrenamientos, setListaEntrenamientos] = useState('');
  const [nombre, setNombre] = useState('');
  const [tipo,setTipo] = useState('');
  const [numSemana, setNumSemana] = useState('');
  const [plan, setPlan] = useState('');
  const route = useRoute();

  const handleOpenSubmenu = () => {
    setIsSubmenuOpen(true);
  };
  const handleCloseSubmenu = () => {
    setIsSubmenuOpen(false);
  };
  const handleScreenPress = () => {
    if (isSubmenuOpen) {
      handleCloseSubmenu();
    }if(isanadirentrenamientoVisible){
      handleCerraranadirentrenamiento();
    }if(isEditarEntrenamientoVisible){
      handleCerrarEditarEntrenamiento();
    }
  };
  const handleNombreChange = (text) =>{
    setNombre(text);
  }
  const handleTipoChange = (text) =>{
    setTipo(text);
  }
  const handleNumSemanaChange = (text) =>{
    const filteredText = text.replace(/[.,]/g, '');
    setNumSemana(filteredText);
  }


  const [isEditarEntrenamientoVisible, setIsEditarEntrenamientoVisible] = useState(false);
  const [isanadirentrenamientoVisible, setIsanadirentrenamientoVisible] = useState(false);

  const handleAbrirEditarEntrenamiento = (editar, entrenamiento) => {
    setEditarEntrene(editar);
    setEditEntrene(entrenamiento);
    setIsEditarEntrenamientoVisible(true);
  };
  const handleCerrarEditarEntrenamiento = (borrar, item) => {
    if(borrar){
      const nuevaListaEntrenamiento = listaEntrenamientos.filter(
        entrenamiento => !isEqual(entrenamiento,item)
        // Reemplaza 'nombre' y 'otraPropiedad' con las propiedades correspondientes en tu objeto ejercicio
      );
      console.log(nuevaListaEntrenamiento);
      setListaEntrenamientos(nuevaListaEntrenamiento);
    }
    setIsEditarEntrenamientoVisible(false);
  };

  const handleAbriranadirentrenamiento = (editar) => {
    setEditarEntrene(editar);
    setIsanadirentrenamientoVisible(true);
  };

  const handleCerraranadirentrenamiento = (entrenamiento) => {
    if(entrenamiento){
      setEntrenamiento(entrenamiento);
    }
    setIsanadirentrenamientoVisible(false);
  };

  const handleGuardarPlan = () => {
    const newPlan = {
      nombre: nombre,
      tipo: tipo,
      semanas: numSemana,
      entrenamientos: listaEntrenamientos,
    }
    if (nombre === '' || tipo === '' || numSemana === '' || listaEntrenamientos === '') {
      alert('Por favor, completa todos los campos');
      return;
    }
    if(route.params.editarPlanes){
      if(isEqual(newPlan, route.params.planEditar)){
        console.log('sin cambios')
        navigation.goBack();
      }else{
        const planesRef = firebase.app().database('https://tfgivan-b5e4b-default-rtdb.europe-west1.firebasedatabase.app').ref(`users/${user.uid}/planesentrenamiento`);
        planesRef.once('value', (snapshot) => {
          snapshot.forEach((childSnapshot) => {
            const plan = childSnapshot.val();
            if(isEqual(plan, route.params.planEditar)){
              if(nombre != ''){
                planesRef.child(childSnapshot.key).update({ nombre: nombre });
              }
              if(tipo != ''){
                planesRef.child(childSnapshot.key).update({ tipo: tipo });
              }
              if(numSemana != ''){
                planesRef.child(childSnapshot.key).update({ semanas: numSemana });
              }
              if(listaEntrenamientos !=''){
                planesRef.child(childSnapshot.key).update({ entrenamientos: listaEntrenamientos });
              }
              console.log('actualizado');
            }
          })
        });
      }
    }else{
      const planesRef = firebase.app().database('https://tfgivan-b5e4b-default-rtdb.europe-west1.firebasedatabase.app').ref(`users/${user.uid}/planesentrenamiento`);
      planesRef.once('value', (snapshot) => {
        if(snapshot.exists()){
          const planes = snapshot.val();
          const nuevoPlanRef = planesRef.push();
          nuevoPlanRef.set(newPlan);
          console.log('Lista de planes actualizada:', planes);
        }else{
          const nuevoPlanRef = planesRef.push();
          nuevoPlanRef.set(newPlan);

        }
      });
    }
    navigation.navigate("PantallaPlanesDeEntrenamiento");
  }
  const FlatListItemseparator = () => {
    return (
      <View style={[styles.frameItem, styles.frameLayout]} />
    );
  };
  useEffect(() => {
    if(route.params?.editarPlanes && !datosCargados){
      setNombre(route.params.planEditar.nombre)
      setTipo(route.params.planEditar.tipo);
      setNumSemana(route.params.planEditar.semanas);
      setListaEntrenamientos(route.params.planEditar.entrenamientos);
      setDatosCargados(true);
      setPlan(route.params.planEditar);
    }
    if(route.params?.entrenamiento){
      setEntrenamiento(route.params.entrenamiento);
    }
    if(entrenamiento!= ''){
      if (listaEntrenamientos !== '') {

        const entrenamientoExistente = listaEntrenamientos.some(entrenamientolista => {
          return isEqual(entrenamientolista,entrenamiento);
        });
        if(!entrenamientoExistente){
          if(route.params?.acambiar){
            const entrenamientoIgual = listaEntrenamientos.find(entrenamiento => isEqual(entrenamiento, route.params.acambiar));
            const listaActualizada = listaEntrenamientos.map((entrenamiento1) => {
              if(isEqual(entrenamiento1, entrenamientoIgual)){
                return entrenamiento;
              }
              return entrenamiento1;
            });
            setListaEntrenamientos(listaActualizada);
          }else{
            listaEntrenamientos.push(entrenamiento);
          }
          
          setEntrenamiento([]);
          
        }
      }else{
        setListaEntrenamientos([entrenamiento])
        setEntrenamiento([]);
      }
    }
  }, [route.params, entrenamiento]);

  return (
    <TouchableWithoutFeedback onPress={handleScreenPress}>
    <View style={styles.pantallaCreacionDePlanes}>
      <Pressable onPress={handleOpenSubmenu}> 
      <Image
        style={styles.pantallaCreacionDePlanesChild}
        contentFit="cover"
        source={require("../assets/IconoApp.png")}
      />
      </Pressable>
      <View style={[styles.default, styles.defaultLayout]}>
        <View style={styles.stroke}>
          <View style={[styles.bgPrimary, styles.body22Position]} />
        </View>
        <TextInput
          style={styles.spSubheadingRegular}
          placeholder="Input caption"
          keyboardType="default"
          maxLength={20}
          placeholderTextColor="rgba(0, 0, 0, 0.87)"
          value={nombre}
          onChangeText={handleNombreChange}
        />
        <View style={styles.caption}>
          <Text style={[styles.caption1, styles.captionTypo]}>Nombre</Text>
        </View>
      </View>
      <View style={[styles.default1, styles.defaultLayout]}>
        <View style={styles.stroke}>
          <View style={[styles.bgPrimary, styles.body22Position]} />
        </View>
        <TextInput
          style={styles.spSubheadingRegular}
          placeholder="Input caption"
          keyboardType="default"
          maxLength={20}
          placeholderTextColor="rgba(0, 0, 0, 0.87)"
          value={tipo}
          onChangeText={handleTipoChange}
        />
        <View style={styles.caption}>
          <Text style={[styles.caption1, styles.captionTypo]}>
            Tipo de plan
          </Text>
        </View>
      </View>
      <View style={[styles.default2, styles.defaultLayout]}>
        <View style={styles.stroke}>
          <View style={[styles.bgPrimary, styles.body22Position]} />
        </View>
        <TextInput
          style={styles.spSubheadingRegular}
          placeholder="Input caption"
          keyboardType="numeric"
          maxLength={1}
          placeholderTextColor="rgba(0, 0, 0, 0.87)"
          value={numSemana}
          onChangeText={handleNumSemanaChange}
        />
        <View style={styles.caption}>
          <Text style={[styles.caption5, styles.captionTypo]}>
            Nº de semanas
          </Text>
        </View>
      </View>
      <Pressable style={styles.default3} onPress={() => handleAbriranadirentrenamiento(false)}>
        <View style={styles.light}>
          <View style={styles.bgLight} />
        </View>
        <View style={[styles.flatdefault, styles.flatdefaultPosition]}>
          <View style={[styles.spBody2Medium, styles.flatdefaultPosition]}>
            <Text style={styles.body2}>{`Añadir 
entrenamiento`}</Text>
          </View>
        </View>
      </Pressable>
      <View style={[styles.rectangleParent, styles.frameChildShadowBox]}>
        <View style={[styles.frameChild, styles.frameChildShadowBox]} />
        <FlatList
          data={listaEntrenamientos}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index}) => (
            <View style= {{marginBottom: 5,top:0}}>
              <Pressable onPress= { () => handleAbrirEditarEntrenamiento(true, item)}>
              <Text style={[styles.subheading1, {top:3,left:5}]}>{item.nombre}</Text>
                {index !== listaEntrenamientos.length && <FlatListItemseparator />}
              </Pressable>
            </View>
          )}
          contentContainerStyle={{ position: 'absolute', zIndex: 30, bottom:0, top:1}}
        />
      </View>
      <Pressable style={[styles.accent, styles.darkPosition]} onPress={handleGuardarPlan}>
        <View style={styles.light}>
          <LinearGradient
            style={styles.bgAccent}
            locations={[0, 1]}
            colors={["#1dde7d", "#72dfc5"]}
          />
        </View>
        <View style={[styles.flatdefault, styles.flatdefaultPosition]}>
          <View style={[styles.spBody2Medium, styles.flatdefaultPosition]}>
            <Text style={[styles.body21, styles.bodyTypo]}>Guardar</Text>
          </View>
        </View>
      </Pressable>
      <Pressable style={[styles.dark, styles.darkPosition]} onPress={() => navigation.navigate("PantallaPlanesDeEntrenamiento")}>
        <View style={styles.light}>
          <LinearGradient
            style={styles.bgAccent}
            locations={[0, 1]}
            colors={["#1a73e9", "#6c92f4"]}
          />
        </View>
        <View style={[styles.flatdefault, styles.flatdefaultPosition]}>
          <View style={[styles.spBody2Medium, styles.flatdefaultPosition]}>
            <Text style={[styles.body22, styles.bodyTypo]}>volver</Text>
          </View>
        </View>
      </Pressable>
      {isanadirentrenamientoVisible && (
        <PantallaAnadirEntrenamientos onClose={handleCerraranadirentrenamiento} editar={editarEntrene} />
      )}
      {isEditarEntrenamientoVisible && <PantallaEditarEntrenamiento onClose={handleCerrarEditarEntrenamiento} editar={editarEntrene} entrenamiento={EditEntrene} plan={plan}/>}
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
  
  defaultLayout: {
    height: 56,
    position: "absolute",
  },
  body22Position: {
    top: 0,
    left: 0,
  },
  captionTypo: {
    textAlign: "left",
    lineHeight: 15,
    fontSize: FontSize.spCaptionRegular_size,
    color: Color.textColor,
    height: 16,
    fontFamily: FontFamily.spCaptionRegular,
    top: 0,
    left: 0,
    position: "absolute",
  },
  flatdefaultPosition: {
    marginTop: -12,
    height: 24,
    top: "55%",
    position: "absolute",
  },
  frameChildShadowBox: {
    height: 189,
    width: 301,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    position: "absolute",
  },
  frameLayout: {
    width: 302,
    borderTopWidth: 1,
    borderColor: "rgba(95, 95, 95, 0.19)",
    borderStyle: "solid",
    height: 1,
    left: 0,
    position: "absolute",
  },
  subheadingPosition1: {
    height: 28,
    left: 0,
    position: "absolute",
  },
  subheadingTypo: {
    alignItems: "center",
    display: "flex",
    lineHeight: 21,
    textAlign: "left",
    color: Color.textColor,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.spCaptionRegular,
    top: 0,
  },
  subheadingPosition: {
    height: 27,
    left: 0,
    position: "absolute",
  },
  darkPosition: {
    height: 32,
    top: 491,
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
    position: "absolute",
  },
  pantallaCreacionDePlanesChild: {
    top: 18,
    left: 13,
    width: 32,
    height: 31,
    position: "absolute",
  },
  bgPrimary: {
    backgroundColor: Color.textColor,
    bottom: 0,
    right: 0,
    top: 0,
    position: "absolute",
  },
  stroke: {
    opacity: 0.4,
    height: 1,
    left: 0,
    bottom: 0,
    right: 0,
    position: "absolute",
  },
  spSubheadingRegular: {
    bottom: 6,
    height: 20,
    opacity: 0.54,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.spCaptionRegular,
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
    left: 22,
    right: 158,
    height: 56,
    top: 74,
  },
  default1: {
    top: 130,
    left: 22,
    right: 158,
    height: 56,
  },
  caption5: {
    width: 108,
  },
  default2: {
    right: 37,
    left: 215,
    top: 74,
  },
  bgLight: {
    shadowColor: "rgba(38, 50, 56, 0.08)",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    borderRadius: Border.br_80xl,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    position: "absolute",
    backgroundColor: Color.lightColor,
  },
  light: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  body2: {
    top: 3,
    left: 7,
    fontSize: FontSize.size_5xs,
    textAlign: "center",
    fontFamily: FontFamily.spBUTTON,
    fontWeight: "500",
    textTransform: "uppercase",
    color: Color.textColor,
    position: "absolute",
  },
  spBody2Medium: {
    height: 24,
    top: "50%",
    left: 0,
    marginTop: -12,
    right: 0,
  },
  flatdefault: {
    right: 8,
    left: 8,
    height: 24,
    top: "50%",
  },
  default3: {
    top: 211,
    width: 97,
    height: 40,
    left: 22,
    position: "absolute",
  },
  frameChild: {
    backgroundColor: Color.whitesmoke_100,
    shadowColor: "rgba(0, 0, 0, 0.17)",
    top: 0,
    left: 0,
  },
  frameItem: {
    top: 27,
  },
  frameInner: {
    top: 79,
  },
  lineView: {
    top: 105,
  },
  subheading: {
    width: 275,
    height: 28,
    left: 0,
    position: "absolute",
  },
  subheading1: {
    alignItems: "center",
    display: "flex",
    lineHeight: 21,
    textAlign: "left",
    color: Color.textColor,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.spCaptionRegular,
    top: 0,
    width: 301,
    height: 27,
  },
  spSubheadingRegular4: {
    marginTop: 12,
    right: -26,
    backgroundColor: Color.gainsboro_200,
    top: "50%",
  },
  spSubheadingRegular3: {
    marginTop: -94.5,
    right: 26,
    top: "50%",
  },
  rectangleParent: {
    top: 280,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: 22,
    overflow: "hidden",
  },
  bgAccent: {
    backgroundColor: Color.accentColor,
    borderRadius: Border.br_80xl,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    position: "absolute",
  },
  body21: {
    top: 1,
    left: 3,
    fontSize: FontSize.size_3xs,
    width: 58,
    height: 22,
    color: Color.textColor,
    justifyContent: "center",
  },
  accent: {
    left: 30,
    width: 81,
  },
  body22: {
    fontSize: FontSize.size_2xs,
    color: Color.lightColor,
    width: 57,
    height: 24,
    top: 0,
    left: 0,
  },
  dark: {
    left: 241,
    width: 73,
  },
  pantallaCreacionDePlanes: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.lightColor,
  },
});

export default PantallaCreacionDePlanes;
