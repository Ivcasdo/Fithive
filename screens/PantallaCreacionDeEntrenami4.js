import React, { useState, useEffect } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, TextInput, Text, Pressable, TouchableWithoutFeedback, FlatList, Modal } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Switch as RNPSwitch } from "react-native-paper";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import { useNavigation, useRoute } from "@react-navigation/native";
import Submenu from "./PantallaMenu";
import PantallaElegirCrearEjercicio from "./PantallaCreacionDeEntrenami1";
import PantallaCrearEjercicio from "./PantallaCreacionDeEntrenami2";
import PantallaCrearEjercicioBiblioteca from "./PantallaCreacionDeEntrenami";
import PantallaEditarEjercicios from "./PantallaCreacionDeEntrenami3";
import auth, { firebase } from '@react-native-firebase/auth';
import { isEqual } from "lodash";
const PantallaCreacionDeEntrenami4 = () => {
  //pantalla menu crear entrenamiento
  const user = auth().currentUser;
  const route = useRoute();
  const [switchOnValue, setSwitchOnValue] = useState(true);
  const navigation = useNavigation();
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [ejercicios, setEjercicios] = useState([]);
  const [ejercicio, setEjercicio] = useState('');
  const [editar, setEditar] = useState(null);
  const [editbool, setEditBool]= useState(false);
  const [nomEntrenamiento, setNomEntrenamiento] = useState('');
  const [tipoEntrenamiento, setTipoEntrenamiento] = useState('');
  const [datosCargados, setDatosCargados] = useState(false);

  const handleOpenSubmenu = () => {
    setIsSubmenuOpen(true);
  };
  const handleCloseSubmenu = () => {
    setIsSubmenuOpen(false);
  };
  const handleNombreChange = (text) => {
    setNomEntrenamiento(text);
  };
  const handleTipoChange = (text) => {
    setTipoEntrenamiento(text);
  };
  const handleScreenPress = () => {
    if (isSubmenuOpen) {
      handleCloseSubmenu();
    }if (isPantallaElegirCrearEjercicioVisible){
      handleCerrarPantallaElegirCrearEjercicio();
    }if (isPantallaCrearEjercicioVisible){
      handleCerrarPantallaCrearEjercicio();
    }if (isPantallaCrearEjercicioBibliotecaVisible){
      handleCerrarPantallaCrearEjercicioBiblioteca();
    }if (isPantallaEditarEjercicioVisible){
      handleCerrarPantallaEditarEjercicio();
    }
  };

  const [isPantallaElegirCrearEjercicioVisible, setIsPantallaElegirCrearEjercicioVisible] = useState(false);
  const [isPantallaCrearEjercicioVisible, setIsPantallaCrearEjercicioVisible] = useState(false);
  const [isPantallaCrearEjercicioBibliotecaVisible, setIsPantallaCrearEjercicioBibliotecaVisible] = useState(false);
  const [isPantallaEditarEjercicioVisible, setIsPantallaEditarEjercicioVisible] = useState(false);
  const handleAbrirPantallaElegirCrearEjercicio = () => {
    if (isPantallaCrearEjercicioVisible){
      setIsPantallaCrearEjercicioVisible(false);
    }if (isPantallaCrearEjercicioBibliotecaVisible){
      setIsPantallaCrearEjercicioBibliotecaVisible(false);
    }if (isPantallaEditarEjercicioVisible){
      setIsPantallaEditarEjercicioVisible(false);
    }
    setIsPantallaElegirCrearEjercicioVisible(true);
  };
  const handleCerrarPantallaElegirCrearEjercicio = () => {
    setIsPantallaElegirCrearEjercicioVisible(false);
  };


  
  const handleAbrirPantallaCrearEjercicio = (editarbool) => {
    if(editarbool){
      setIsPantallaEditarEjercicioVisible(false);
      setEditBool(true);
    }else{
      setEditBool(false);
    }
    console.log(editbool);
    setIsPantallaCrearEjercicioVisible(true);
  };
  const handleCerrarPantallaCrearEjercicio = (ejercicio,editbool) => {
    if (editbool) {
      setEjercicios((ejercicios) =>
        ejercicios.map((ejercicioActual) => {
          if (ejercicioActual === editar) {
            return ejercicio;
          } else {
            return ejercicioActual;
          }
        })
      );
      //console.log('ejercicio actualizado'+ ejercicio);
      console.log(ejercicios);
      
    }else{
      if(ejercicio){
        setEjercicio(ejercicio);
      }
    }; 
    setEditar(null);
    setIsPantallaCrearEjercicioVisible(false);
    setIsPantallaElegirCrearEjercicioVisible(false);
  };


 
  const handleAbrirPantallaCrearEjercicioBiblioteca = () => {
    setIsPantallaCrearEjercicioBibliotecaVisible(true);
  };
  const handleCerrarPantallaCrearEjercicioBiblioteca = (item) => {
    if(item){
      setEjercicio(item);
    }
    setIsPantallaCrearEjercicioBibliotecaVisible(false);
    setIsPantallaElegirCrearEjercicioVisible(false);
  };


 
  const handleAbrirPantallaEditarEjercicio = (item) => {
    setEditar(item);
    setIsPantallaEditarEjercicioVisible(true);
  };
  const handleCerrarPantallaEditarEjercicio = (borrar, item) => {
    console.log(borrar);
    if(borrar){
      const nuevaListaEjercicios = ejercicios.filter(
        ejercicio => ejercicio.nombre !== item.nombre && ejercicio.tipo !== item.tipo
        // Reemplaza 'nombre' y 'otraPropiedad' con las propiedades correspondientes en tu objeto ejercicio
      );
      console.log(nuevaListaEjercicios);
      setEjercicios(nuevaListaEjercicios);
    }
    setIsPantallaEditarEjercicioVisible(false);
    setIsPantallaElegirCrearEjercicioVisible(false);
  };

  const handleGuardarEntrenamiento = () =>{
    const entrenamiento = {
      nombre: nomEntrenamiento,
      tipo: tipoEntrenamiento,
      ejercicios: ejercicios
    };
    if (nomEntrenamiento === '' || tipoEntrenamiento === '' || ejercicios === []) {
      alert('Por favor, completa todos los campos');
      return;
    }
    if(route.params.planes && !switchOnValue){
      if(isEqual(entrenamiento, route.params.item)){
        navigation.navigate("PantallaCreacionDePlanes");
      }else{
        const acambiar = route.params.item;
        if(route.params.editar){
          navigation.navigate("PantallaCreacionDePlanes",{ entrenamiento: entrenamiento, acambiar: acambiar,editarPlanes: true,  planEditar: route.params.plan })
        }else{
          navigation.navigate("PantallaCreacionDePlanes",{ entrenamiento: entrenamiento  })
        }
      }
    }else{
      if(route.params.editar){
        if(entrenamiento.nombre==route.params.item.nombre && entrenamiento.tipo == route.params.item.tipo && entrenamiento.ejercicios == route.params.item.ejercicios){
          console.log('sin cambios')
          navigation.goBack();
        }else{
          console.log('cambia algo');
          const entrenamientosRef = firebase.app().database('https://tfgivan-b5e4b-default-rtdb.europe-west1.firebasedatabase.app').ref(`users/${user.uid}/entrenamientos`);
          entrenamientosRef.once('value', (snapshot) => {
            snapshot.forEach((childSnapshot) => {
              const entrene = childSnapshot.val();
              if(entrene.nombre == route.params.item.nombre && entrene.tipo == route.params.item.tipo){
                if(isEqual(entrene.ejercicios, route.params.item.ejercicios)){
                  if(nomEntrenamiento !== ''){
                    entrenamientosRef.child(childSnapshot.key).update({ nombre: nomEntrenamiento });
                  }
                  if(tipoEntrenamiento !== ''){
                    entrenamientosRef.child(childSnapshot.key).update({tipo: tipoEntrenamiento});
                  }
                  if(ejercicios !== []){
                    entrenamientosRef.child(childSnapshot.key).update({ejercicios: ejercicios});
                  }
                  console.log('actualizado');
                  
                  if(route.params.planes){
                    const acambiar = route.params.item;
                    navigation.navigate("PantallaCreacionDePlanes",{ entrenamiento: entrenamiento, acambiar: acambiar, editarPlanes: true, planEditar: route.params.plan  })
                  }else{
                    navigation.goBack();
                  }
                }
              }
            })
          });
          //aqui
          entrenamientosRef.once('value')
            .then((snapshot) => {
              let entrenamientoEncontrado = null;
              snapshot.forEach((childSnapshot) => {
                const entrene = childSnapshot.val();
                if (isEqual(entrene,route.params.item)) {
                  entrenamientoEncontrado = entrene;
                }
              });
              if (entrenamientoEncontrado) {
                console.log('Entrenamiento encontrado:', entrenamientoEncontrado);
              } else {
                console.log('No se encontró el entrenamiento');
                const nuevoEntrenamientoRef = entrenamientosRef.push();
                nuevoEntrenamientoRef.set(entrenamiento);
                if(route.params.planes){
                  const acambiar = route.params.item;
                  navigation.navigate("PantallaCreacionDePlanes",{ entrenamiento: entrenamiento, acambiar: acambiar })
                }else{
                  navigation.goBack();
                }
              }
            })
            .catch((error) => {
              console.log('Error en la búsqueda:', error);
            });

            
          

        }
      }else{
        console.log('crear entrenamiento')
        const entrenamientosRef = firebase.app().database('https://tfgivan-b5e4b-default-rtdb.europe-west1.firebasedatabase.app').ref(`users/${user.uid}/entrenamientos`);
        entrenamientosRef.once('value', (snapshot) => {
          if (snapshot.exists()) {
            // El usuario ya tiene una lista de ejercicios
            const entrenamientos = snapshot.val();
      
            // Agregar el nuevo ejercicio a la lista existente
            const nuevoEntrenamientoRef = entrenamientosRef.push();
            nuevoEntrenamientoRef.set(entrenamiento);
      
            // Mostrar por consola la lista de ejercicios actualizada
            console.log('Lista de entrenamientos actualizada:', entrenamientos);
            if(route.params.planes){
              navigation.navigate("PantallaCreacionDePlanes",{ entrenamiento: entrenamiento  })
            }else{
              navigation.goBack();
            }
          } else {
            // El usuario no tiene una lista de ejercicios
            // Crear la lista de ejercicios y agregar el nuevo ejercicio
            
            const nuevoEntrenamientoRef = entrenamientosRef.push();
            nuevoEntrenamientoRef.set(entrenamiento); // Usamos 0 como clave inicial para crear una lista indexada
      
            // Mostrar por consola la nueva lista de ejercicios
            console.log('Nueva lista de ejercicios creada:', [entrenamiento]);
            navigation.goBack();
          }
        });
      }
    }
    
  };
  useEffect(() => {
    if (route.params.editar && !datosCargados) {
      setNomEntrenamiento(route.params.item.nombre);
      setTipoEntrenamiento(route.params.item.tipo);
      setEjercicios(route.params.item.ejercicios);
      setDatosCargados(true);
    }
    // Añadir el valor de `ejercicio` a la lista `ejercicios`
    if (ejercicio !== ''){
      setEjercicios([...ejercicios, ejercicio]);
      setEjercicio('')
    }

  }, [ejercicio,ejercicios,route.params]);

  const FlatListItemseparator = () => {
    return (
      <View style={[styles.lineView, styles.frameLayout]} />
    );
  };
  return (
    <TouchableWithoutFeedback onPress={handleScreenPress}>
    <View style={styles.pantallaCreacionDeEntrenami}>
    <Pressable onPress={handleOpenSubmenu}> 
      <Image
        style={styles.pantallaCreacionDeEntrenamiChild}
        contentFit="cover"
        source={require("../assets/IconoApp.png")}
      />
      </Pressable>
      <View style={[styles.default, styles.defaultPosition]}>
        <View style={styles.stroke}>
          <View style={[styles.bgPrimary, styles.body22Position]} />
        </View>
        <TextInput
          style={styles.spSubheadingRegular}
          placeholder="Input caption"
          keyboardType="default"
          maxLength={25}
          placeholderTextColor="rgba(0, 0, 0, 0.87)"
          value={nomEntrenamiento}
          onChangeText={handleNombreChange}
        />
        <View style={styles.caption}>
          <Text style={styles.caption1}>Nombre</Text>
        </View>
      </View>
      <View style={[styles.default1, styles.defaultPosition]}>
        <View style={styles.stroke}>
          <View style={[styles.bgPrimary, styles.body22Position]} />
        </View>
        <TextInput
          style={styles.spSubheadingRegular}
          placeholder="Input caption"
          keyboardType="default"
          maxLength={25}
          placeholderTextColor="rgba(0, 0, 0, 0.87)"
          value={tipoEntrenamiento}
          onChangeText={handleTipoChange}
        />
        <View style={styles.caption}>
          <Text style={styles.caption1}>Tipo de entrenamiento</Text>
        </View>
      </View>
      <Pressable style={styles.default2} onPress={handleAbrirPantallaElegirCrearEjercicio}>
        <Image
          style={styles.lightIcon}
          contentFit="cover"
          source={require("../assets/-light.png")}
        />
        <View style={[styles.flatdefault, styles.body22Layout]}>
          <View style={[styles.spBody2Medium, styles.body22Layout]}>
            <Text style={styles.body2}>{`Añadir 
ejercicio`}</Text>
          </View>
        </View>
      </Pressable>
      <View style={[styles.rectangleParent, styles.frameChildShadowBox]}>
        <View style={[styles.frameChild, styles.frameChildShadowBox]} />
        <FlatList
          data={ejercicios}
          keyExtractor={(item, index) => index.toString()}
          renderItem= {({ item, index }) => 
          <Pressable onPress={() => handleAbrirPantallaEditarEjercicio(item)}>
            <Text style={[styles.subheadingFlexBox]}>{item.nombre}</Text>
            {index !== ejercicios.length && <FlatListItemseparator />}
          </Pressable>
          }
        />
      </View>
      <Pressable style={[styles.accent, styles.darkPosition]} onPress={handleGuardarEntrenamiento}>
        <View style={styles.lightPosition}>
          <LinearGradient
            style={[styles.bgAccent, styles.body22Position]}
            locations={[0, 1]}
            colors={["#1dde7d", "#72dfc5"]}
          />
        </View>
        <View style={[styles.flatdefault, styles.body22Layout]}>
          <View style={[styles.spBody2Medium, styles.body22Layout]}>
            <Text style={[styles.body21, styles.body21Layout]}>Guardar</Text>
          </View>
        </View>
      </Pressable>
      <Pressable style={[styles.dark, styles.darkPosition]} onPress={() => navigation.goBack()}>
        <View style={styles.lightPosition}>
          <LinearGradient
            style={[styles.bgAccent, styles.body22Position]}
            locations={[0, 1]}
            colors={["#1a73e9", "#6c92f4"]}
          />
        </View>
        <View style={[styles.flatdefault, styles.body22Layout]}>
          <View style={[styles.spBody2Medium, styles.body22Layout]}>
            <Text style={[styles.body22, styles.bodyTypo]}>volver</Text>
          </View>
        </View>
      </Pressable>
      <View style={styles.secLevelSwitch}>
        <View style={[styles.light, styles.lightPosition]}>
          <View style={[styles.bgLight, styles.body22Position]} />
        </View>
        <View style={styles.spSubheadingRegular4}>
          <Text style={[styles.subheading2, styles.subheadingFlexBox]}>
            Añadir a biblioteca
          </Text>
          <RNPSwitch
            style={[styles.switchon, styles.body21Layout]}
            value={switchOnValue}
            onValueChange={setSwitchOnValue}
            color="#fff"
          />
        </View>
      </View>
      {isPantallaElegirCrearEjercicioVisible && (
        <PantallaElegirCrearEjercicio onabrirPantallaCrearEjercicio={handleAbrirPantallaCrearEjercicio}  onabrirPantallaCrearEjercicioBiblioteca={handleAbrirPantallaCrearEjercicioBiblioteca} onClose={handleCerrarPantallaElegirCrearEjercicio} />
      )}
      {isPantallaCrearEjercicioVisible && <PantallaCrearEjercicio onClose={handleCerrarPantallaCrearEjercicio} ejercicio={ejercicio} editbool={editbool} editar={editar}/>}
      {isPantallaCrearEjercicioBibliotecaVisible && <PantallaCrearEjercicioBiblioteca onClose={handleCerrarPantallaCrearEjercicioBiblioteca} />}
      {isPantallaEditarEjercicioVisible && <PantallaEditarEjercicios onabrirPantallaCrearEjercicio={handleAbrirPantallaCrearEjercicio} onClose={handleCerrarPantallaEditarEjercicio} item={editar}/>}
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
  
  defaultPosition: {
    height: 56,
    right: 158,
    left: 22,
    position: "absolute",
  },
  body22Position: {
    top: 0,
    left: 0,
  },
  body22Layout: {
    marginTop: -12,
    height: 24,
    top: "55%",
    position: "absolute",
  },
  frameChildShadowBox: {
    height: 189,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    width: 301,
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
  subheadingFlexBox: {
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.textColor,
    fontFamily: FontFamily.spCaptionRegular,
    top: 0,
    left: 5,
  },
  subheadingPosition: {
    height: 27,
    left: 0,
    position: "absolute",
  },
  darkPosition: {
    height: 32,
    top: 537,
    position: "absolute",
  },
  body21Layout: {
    height: 22,
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
  pantallaCreacionDeEntrenamiChild: {
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
    textAlign: "left",
    color: Color.textColor,
    lineHeight: 15,
    fontSize: FontSize.spCaptionRegular_size,
    height: 16,
    fontFamily: FontFamily.spCaptionRegular,
    top: 0,
    left: 0,
    position: "absolute",
  },
  caption: {
    bottom: 32,
    height: 16,
    left: 0,
    right: 0,
    position: "absolute",
  },
  default: {
    top: 74,
  },
  default1: {
    top: 130,
  },
  lightIcon: {
    height: "130%",
    width: "112.37%",
    top: "-5%",
    right: "-6.19%",
    bottom: "-25%",
    left: "-6.19%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  body2: {
    top: 3,
    left: 20,
    fontSize: FontSize.size_5xs,
    textAlign: "center",
    fontFamily: FontFamily.spBUTTON,
    fontWeight: "500",
    textTransform: "uppercase",
    color: Color.textColor,
    position: "absolute",
  },
  spBody2Medium: {
    top: "50%",
    marginTop: -12,
    height: 24,
    left: 0,
    right: 0,
  },
  flatdefault: {
    right: 8,
    left: 8,
    top: "50%",
    marginTop: -12,
    height: 24,
  },
  default2: {
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
    top:20,
  },
  subheading: {
    width: 275,
    lineHeight: 21,
    alignItems: "center",
    display: "flex",
    fontSize: FontSize.size_base,
    height: 28,
    left: 0,
    position: "absolute",
  },
  subheading1: {
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.textColor,
    fontFamily: FontFamily.spCaptionRegular,
    top: 0,
    lineHeight: 21,
    fontSize: FontSize.size_base,
    width: 301,
    height: 27,
  },
  spSubheadingRegular3: {
    marginTop: 12,
    right: -26,
    backgroundColor: Color.gainsboro_200,
    top: "50%",
  },
  spSubheadingRegular2: {
    marginTop: -94.5,
    right: 26,
    top: "50%",
  },
  rectangleParent: {
    top: 286,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: 22,
    overflow: "hidden",
  },
  bgAccent: {
    borderRadius: Border.br_80xl,
    backgroundColor: Color.accentColor,
    bottom: 0,
    right: 0,
    top: 0,
    position: "absolute",
  },
  body21: {
    top: 1,
    left: 3,
    fontSize: FontSize.size_3xs,
    width: 58,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.spBUTTON,
    fontWeight: "500",
    textTransform: "uppercase",
    color: Color.textColor,
    height: 22,
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
    position: "absolute",
    top: 0,
    left: 0,
  },
  dark: {
    left: 241,
    width: 73,
  },
  bgLight: {
    borderRadius: Border.br_10xs,
    bottom: 0,
    right: 0,
    top: 0,
    position: "absolute",
    backgroundColor: Color.lightColor,
  },
  light: {
    display: "none",
  },
  subheading2: {
    width: 116,
    height: 24,
    position: "absolute",
    alignItems: "center",
    display: "flex",
    lineHeight: 15,
    fontSize: FontSize.spCaptionRegular_size,
    left: 0,
  },
  switchon: {
    marginTop: -11,
    right: -33,
    width: 37,
    top: "35%",
  },
  spSubheadingRegular4: {
    height: "50%",
    top: "25%",
    right: 207,
    bottom: "25%",
    left: 16,
    position: "absolute",
  },
  secLevelSwitch: {
    top: 486,
    right: 12,
    left: 9,
    height: 48,
    position: "absolute",
  },
  pantallaCreacionDeEntrenami: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.lightColor,
  },
});

export default PantallaCreacionDeEntrenami4;
