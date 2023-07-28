import React, { useState,useEffect } from "react";
import { Pressable, StyleSheet, View, Text, TextInput, TouchableWithoutFeedback,FlatList,TouchableOpacity} from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Switch as RNPSwitch } from "react-native-paper";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import { useNavigation,useRoute } from "@react-navigation/native";
import { isEqual } from 'lodash';
import auth, { firebase } from '@react-native-firebase/auth';
import Submenu from "./PantallaMenu";
import PantallaEditarIngredientes2 from "./PantallaEditarIngredientes2";
import PantallaEditarIngredientes from "./PantallaEditarIngredientes";
import moment from 'moment';
const PantallaCrearComida = ({}) => {
  const [switchOnValue, setSwitchOnValue] = useState(false);
  const navigation = useNavigation();
  const route = useRoute();
  const user = auth().currentUser;
  const [totalKcal, setTotalKcal] = useState('');
  const [nombreComida, setNombreComida] = useState('');
  const [listaIngredientes, setListaIngredientes] = useState([]);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [alimentoEditar, setAlimentoEditar] = useState('');
  const [datosCargados, setDatosCargados] = useState(false);
  const [botonGuardar, setBotonGuardar] = useState('Añadir a la biblioteca')
  const handleOpenSubmenu = () => {
    setIsSubmenuOpen(true);
  };
  const handleCloseSubmenu = () => {
    setIsSubmenuOpen(false);
  };
 
  const handleScreenPress = () => {
    if (isSubmenuOpen) {
      handleCloseSubmenu();
    }if(isPantallaEditarIngredientes2Visible){
      handleCerrarPantallaEditarIngredientes2();
    }if(isPantallaEditarIngredientesVisible){
      handleCerrarPantallaEditarIngredientes();
    }
  };

  const handleChangeNombreComida = (text) => {
    setNombreComida(text);
  };
  const [isPantallaEditarIngredientes2Visible, setIsPantallaEditarIngredientes2Visible] = useState(false);
  const handleAbrirPantallaEditarIngredientes2 = () => {
    setIsPantallaEditarIngredientes2Visible(true);
    if(isPantallaEditarIngredientesVisible){

      setIsPantallaEditarIngredientesVisible(false);
    }
  };
  const handleCerrarPantallaEditarIngredientes2 = (alimento) => {
    if (alimento) {
      // Verificar si el alimento ya existe en la lista
      const existeAlimento = listaIngredientes.some(item => isEqual(item, alimentoEditar));
      console.log(existeAlimento)
      if (existeAlimento) {
        // Si el alimento ya existe, actualizar su valor en la lista
        const nuevaListaIngredientes = listaIngredientes.map(item =>
          isEqual(item, alimentoEditar) ? alimento : item
        );
        console.log(nuevaListaIngredientes);
        setListaIngredientes(nuevaListaIngredientes);
      } else {
        // Si el alimento no existe, agregarlo a la lista
        const nuevaListaIngredientes = [...listaIngredientes, alimento];
        setListaIngredientes(nuevaListaIngredientes);
      }
    }
    setAlimentoEditar('');
    setIsPantallaEditarIngredientes2Visible(false);
  };
const [isPantallaEditarIngredientesVisible, setIsPantallaEditarIngredientesVisible] = useState(false);
  const handleAbrirPantallaEditarIngredientes = (alimento) => {

    setAlimentoEditar(alimento);
    setIsPantallaEditarIngredientesVisible(true);
  };
  const handleCerrarPantallaEditarIngredientes = (borrar, alimento) => {
    if(borrar){
      const nuevaListaIngredientes = listaIngredientes.filter(item => !isEqual(item, alimento));
      setListaIngredientes(nuevaListaIngredientes);
    }
    setIsPantallaEditarIngredientesVisible(false);
  };

  const handleGuardarComida = () =>{
    
    const comida = {
      nombre: nombreComida,
      calorias: totalKcal,
      ingredientes: listaIngredientes,
    }
    if(nombreComida===''||listaIngredientes===[]){
      alert('Porfavor completa todos los campos')
    }
    if(!route.params.editar){
      if(switchOnValue){
        const entradasRef = firebase.app().database('https://tfgivan-b5e4b-default-rtdb.europe-west1.firebasedatabase.app').ref(`users/${user.uid}/entradasCalendario`);
        const today = new Date();
        // Obtener los valores de día, mes y año
        const day = String(today.getDate()).padStart(2, '0');
        const month = String(today.getMonth() + 1).padStart(2, '0'); // Los meses en JavaScript comienzan desde 0
        const year = String(today.getFullYear()).slice(-2); // Obtener los últimos dos dígitos del año

        const formattedDate = `${day}/${month}/${year}`;
        const entradaCalendar = {
          fecha: formattedDate,
          comidas: [comida],
        }
        entradasRef.once('value', (snapshot) => {
          if(snapshot.exists()){
            let isDateFound = false;
            snapshot.forEach((childsnapshot)=>{
              const entrada = childsnapshot.val();
              console.log('fecha igual:', entrada.fecha === formattedDate);
              if(entrada.fecha === formattedDate){
                isDateFound = true;
                const alimentos = entrada.comidas;
                if(Array.isArray(alimentos) && alimentos.length > 0){
                  alimentos.push(comida);
                  entradasRef.child(childsnapshot.key).update({comidas: alimentos});
                }else{
                  entradasRef.child(childsnapshot.key).update({ comidas: [comida] });
                }
              }
            });
            if (!isDateFound) {
              const nuevaEntradaRef = entradasRef.push();
              nuevaEntradaRef.set(entradaCalendar);
            }
          }else{
            console.log('aqui3')
            const nuevaEntradaRef = entradasRef.push();
            nuevaEntradaRef.set(entradaCalendar);

          }

        });

      }
      const comidasRef = firebase.app().database('https://tfgivan-b5e4b-default-rtdb.europe-west1.firebasedatabase.app').ref(`users/${user.uid}/comidas`);
      comidasRef.once('value', (snapshot) => {
        if(snapshot.exists()){
          const nuevacomidaref= comidasRef.push();
          nuevacomidaref.set(comida)

        }else{
          const nuevacomidaref= comidasRef.push();
          nuevacomidaref.set(comida);
        };
      });
      navigation.goBack();
    }else{
      if(isEqual(comida,route.params.comidaEditar)){
        console.log('no cambia nada')
        navigation.goBack();
      }else{
        const comidasRef = firebase.app().database('https://tfgivan-b5e4b-default-rtdb.europe-west1.firebasedatabase.app').ref(`users/${user.uid}/comidas`);
        comidasRef.once('value', (snapshot) => {
          snapshot.forEach((childSnapshot) => {
            const comi = childSnapshot.val();
            if(isEqual(comi,route.params.comidaEditar)){
              if(nombreComida != ''){
                comidasRef.child(childSnapshot.key).update({nombre:nombreComida});
              }
              if(totalKcal != ''){
                comidasRef.child(childSnapshot.key).update({calorias:totalKcal});
              }
              if(listaIngredientes != []){
                comidasRef.child(childSnapshot.key).update({ingredientes:listaIngredientes});
              }
              console.log('actualizado');
              navigation.goBack();
            }

          })})
        if(route.params.delDia){
          const fecha = route.params.fecha; 
          const fechaMoment = moment(fecha, 'DD MMMM YYYY'); 
          const fechaFormateada = fechaMoment.format('DD/MM/YY');
          const entradaRef = firebase.app().database('https://tfgivan-b5e4b-default-rtdb.europe-west1.firebasedatabase.app').ref(`users/${user.uid}/entradasCalendario`);
          entradaRef.once('value', (snapshot)=> {
            snapshot.forEach((childSnapshot)=>{
              const entrada = childSnapshot.val();
              console.log(fechaFormateada);
              if(isEqual(entrada.fecha,fechaFormateada)){
                if(entrada.comidas){
                  const comidas = entrada.comidas || [];
                  const index = comidas.findIndex(comida => isEqual(comida, route.params.comidaEditar));
                  
                    // Si la comida está en la lista, la actualizamos
                    if(index !== -1) {
                         // Actualizando el valor de la comida
                        if(nombreComida != ''){
                          comidas[index].nombre = nombreComida;
                        }
                        if(totalKcal != ''){
                          comidas[index].calorias = totalKcal
                        }
                        if(listaIngredientes != []){
                          comidas[index].ingredientes = listaIngredientes;
                        }
                        // Actualiza la entrada en Firebase
                        childSnapshot.ref.update({ comidas });
                        console.log('actualizado');
                        
                    }
                  
                }
              }
            })
          })
        } 
      }
    }
    
  };
  const FlatListItemseparator = () => {
    return (
      <View style={[styles.frameInner, styles.frameLayout1, ]} />
    );
  };

  useEffect(() => {
    if(route.params.editar && !datosCargados){
      
      setListaIngredientes(route.params.comidaEditar.ingredientes);
      setNombreComida(route.params.comidaEditar.nombre);
      setDatosCargados(true);
    }
    if(route.params.editar){
      setBotonGuardar('Guardar');
    }else{
      setBotonGuardar('Añadir a la biblioteca')
    }
    const totalCal = listaIngredientes.reduce((total, alimento) => {
      return total + parseInt(alimento.calorias);
    }, 0);

    setTotalKcal(totalCal);
    
  }, [listaIngredientes,route.params])
  return (
    <TouchableWithoutFeedback onPress={handleScreenPress}>
    <View style={styles.pantallaCrearComida}>
    <Pressable onPress={handleOpenSubmenu}>
      <Image
        style={styles.pantallaCrearComidaChild}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      </Pressable>
      <View style={[styles.rectangleParent, styles.frameChildShadowBox]}>
        <View style={[styles.frameChild, styles.frameChildShadowBox]} />
        <View style={styles.frameChild2} />
        <FlatList
          data={listaIngredientes}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index}) => (
            <Pressable  onPress={() => handleAbrirPantallaEditarIngredientes(item)}>
              <View style= {{marginBottom: 22,top:22, flexDirection: 'row', position:'relative'}}>
                <View style={[styles.spSubheadingRegular2, styles.subheadingPosition1]}>
                  <Text style={[styles.subheading, styles.subheadingLayout]}>{item.nombre}</Text>
                </View>
                <View style={[styles.subheadingPosition1]}>
                  <Text style={[styles.subheading3, styles.subheadingFlexBox]}>{item.calorias}</Text>
                </View>
                {index !== listaIngredientes.length && <FlatListItemseparator />}
              </View>
            </Pressable>
          )}
          contentContainerStyle={{ position: 'absolute', zIndex: 30, bottom:0, top:1}}
        />
       
        <View style={[styles.spSubheadingRegularParent, styles.frameLayout]}>
          <View
            style={[styles.spSubheadingRegular6, styles.subheadingPosition]}
          >
            <Text style={[styles.subheading6, styles.subheadingTypo]}>
              Calorias
            </Text>
          </View>
          <View
            style={[styles.spSubheadingRegular7, styles.subheadingPosition]}
          >
            <Text style={[styles.subheading6, styles.subheadingTypo]}>
              Nombre
            </Text>
          </View>
        </View>
      </View>
      <Pressable style={styles.accent} onPress={handleAbrirPantallaEditarIngredientes2}>
        <View style={styles.lightPosition}>
          <LinearGradient
            style={[styles.bgAccent, styles.strokePosition]}
            locations={[0, 1]}
            colors={["#1dde7d", "#72dfc5"]}
          />
        </View>
        <View style={[styles.flatdefault, styles.flatdefaultPosition]}>
          <View style={[styles.spBody2Medium, styles.flatdefault1Position]}>
            <Text style={[styles.body2, styles.bodyLayout]}>
              Añadir alimento
            </Text>
          </View>
        </View>
      </Pressable>
      <Pressable style={styles.accent2} onPress={handleGuardarComida}>
        <View style={styles.lightPosition}>
          <LinearGradient
            style={[styles.bgAccent, styles.strokePosition]}
            locations={[0, 1]}
            colors={["#1dde7d", "#72dfc5"]}
          />
        </View>
        <View style={[styles.flatdefault1, styles.flatdefault1Position2]}>
          <View style={[styles.spBody2Medium, styles.flatdefault1Position2]}>
            <Text style={[styles.body21, styles.bodyLayout, route.params.editar ? {top:4, fontSize:12}: {}]}>
              {botonGuardar}
            </Text>
          </View>
        </View>
      </Pressable>
      <View style={[styles.default, styles.defaultPosition]}>
        <View style={[styles.stroke, styles.strokePosition]}>
          <View style={[styles.bgPrimary, styles.strokePosition]} />
        </View>
        <TextInput
          style={[styles.spSubheadingRegular8, styles.subheadingTypo]}
          placeholder="Ejemplo"
          keyboardType="default"
          placeholderTextColor="rgba(0, 0, 0, 0.87)"
          value= {nombreComida}
          onChangeText={handleChangeNombreComida}
        />
        <View style={styles.caption}>
          <Text style={[styles.caption1, styles.caption1Typo]}>Nombre</Text>
        </View>
      </View>
      <View style={[styles.caption2, styles.defaultPosition]}>
        <Text style={[styles.caption1, styles.caption1Typo]}>Ingredientes</Text>
      </View>
      <View style={[styles.spTitleMedium, styles.titleLayout]}>
        <Text style={[styles.title, styles.titleLayout]}>{totalKcal} kcal</Text>
      </View>
      <View style={styles.secLevelSwitch}>
        <View style={[styles.light, styles.lightPosition]}>
          <View style={[styles.bgLight, styles.strokePosition]} />
        </View>
        <View style={styles.spSubheadingRegular9}>
          <Text style={[styles.subheading8, styles.caption1Typo]}>
            Añadir al dia
          </Text>
          <RNPSwitch
            style={[styles.switchon, styles.bodyLayout]}
            value={switchOnValue}
            onValueChange={setSwitchOnValue}
            color="#fff"
          />
        </View>
      </View>
      <Pressable style={[styles.dark, styles.darkPosition]}onPress={()=> navigation.goBack()}>
        <View style={styles.lightPosition}>
          <LinearGradient
            style={[styles.bgAccent, styles.strokePosition]}
            locations={[0, 1]}
            colors={["#1a73e9", "#6c92f4"]}
          />
        </View>
        <View style={[styles.flatdefault1, styles.flatdefault1Position]}>
          <View style={[styles.spBody2Medium, styles.flatdefault1Position]}>
            <Text style={[styles.body22, styles.bodyFlexBox]}>volver</Text>
          </View>
        </View>
      </Pressable>
      {isPantallaEditarIngredientes2Visible && <PantallaEditarIngredientes2 onClose={handleCerrarPantallaEditarIngredientes2} alimentoEditar={alimentoEditar} />}
      {isPantallaEditarIngredientesVisible && <PantallaEditarIngredientes onClose={handleCerrarPantallaEditarIngredientes} onAbrirEditarAlimento={handleAbrirPantallaEditarIngredientes2} alimentoEditar={alimentoEditar}/>}
      {isSubmenuOpen && <Submenu onClose={handleCloseSubmenu} />}

    </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  bodyFlexBox: {
    justifyContent: "center",
    textAlign: "center",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    alignItems: "center",
    display: "flex",
  },
  body22: {
    fontSize: FontSize.size_2xs,
    color: Color.lightColor,
    width: 57,
    textTransform: "uppercase",
    textAlign: "center",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    height: 24,
    position: "absolute",
    left: 0,
    top: 3,
  },
  dark: {
    top: 457,
    width: 73,
    height: 32,
  },
  darkPosition: {
    left: 267,
    position: "absolute",
  },
  frameChildShadowBox: {
    height: 276,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    position: "absolute",
  },
  frameLayout: {
    width: 300,
    position: "absolute",
  },
  frameLayout1: {
    width: 300,
    position: "absolute",
  },
  subheadingPosition3: {
    height: 24,
    marginTop: -70,
    top: "50%",
    position: "absolute",
  },
  subheadingLayout: {
    width: 89,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.textColor,
    fontFamily: FontFamily.spCaptionRegular,
    lineHeight: 18,
    fontSize: FontSize.size_sm,
    height: 20,
    top: 0,

  },
  subheadingPosition2: {
    backgroundColor: Color.lightgray,
    marginTop: -94,
    height: 24,
    top: "50%",
    position: "absolute",
  },
  subheadingPosition1: {
    marginTop: 0,
    height: 10,

    left: 5
  },
  subheadingFlexBox: {
    alignItems: "center",
    display: "flex",
    height: 24,
  },
  subheadingPosition: {
    marginTop: -11.5,
    height: 24,
    top: "50%",
    position: "absolute",
  },
  subheadingTypo: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.spCaptionRegular,
    left: 0,
    position: "absolute",
  },
  strokePosition: {
    bottom: 0,
    right: 0,
    left: 0,
    position: "absolute",
  },
  flatdefaultPosition: {
    left: 8,
    right: 8,
  },
  flatdefault1Position: {
    marginTop: -12,
    height: 24,
    top: "50%",
    position: "absolute",
  },
  flatdefault1Position2: {
    marginTop: -14,
    height: 24,
    top: "55%",
    position: "absolute",
  },
  bodyLayout: {
    height: 22,
    position: "absolute",
  },
  defaultPosition: {
    right: 230,
    left: 21,
    position: "absolute",
  },
  caption1Typo: {
    lineHeight: 15,
    fontSize: FontSize.spCaptionRegular_size,
    textAlign: "left",
    color: Color.textColor,
    fontFamily: FontFamily.spCaptionRegular,
    left: 0,
    top: 0,
    position: "absolute",
  },
  titleLayout: {
    width: 96,
    height: 31,
    position: "absolute",
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
  pantallaCrearComidaChild: {
    top: 18,
    left: 13,
    width: 32,
    height: 31,
    position: "absolute",
  },
  frameChild: {
    backgroundColor: Color.whitesmoke_100,
    shadowColor: "rgba(0, 0, 0, 0.17)",
    width: 299,
    left: 0,
    top: 0,
  },
  frameItem: {
    top: 23,
    height: 1,
    borderTopWidth: 1,
    width: 300,
    borderColor: "rgba(95, 95, 95, 0.19)",
    borderStyle: "solid",
    left: 0,
  },
  frameInner: {
    top: 0,
    height: 1,
    borderTopWidth: 1,
    width: 300,
    borderColor: "rgba(95, 95, 95, 0.19)",
    borderStyle: "solid",
    left: 0,
  },
  lineView: {
    top: 68,
    height: 1,
    borderTopWidth: 1,
    width: 300,
    borderColor: "rgba(95, 95, 95, 0.19)",
    borderStyle: "solid",
    left: 0,
  },
  frameChild1: {
    top: 90,
    height: 1,
    borderTopWidth: 1,
    width: 300,
    borderColor: "rgba(95, 95, 95, 0.19)",
    borderStyle: "solid",
    left: 0,
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
    left: 0,
  },
  spSubheadingRegular: {
    left: 154,
    right: 0,
  },
  subheading1: {
    left: 0,
  },
  spSubheadingRegular1: {
    right: 0,
    left: 149,
  },
  spSubheadingRegular2: {
    left: 0,

  },
  subheading3: {
    width: 150,
    textAlign: "left",
    color: Color.textColor,
    alignItems: "center",
    display: "flex",
    top: 0,
    fontFamily: FontFamily.spCaptionRegular,
    lineHeight: 18,
    fontSize: FontSize.size_sm,
    left:60,

  },
  spSubheadingRegular3: {
    right: 150,
    left: 0,
  },
  subheading4: {
    width: 149,
    textAlign: "left",
    color: Color.textColor,
    alignItems: "center",
    display: "flex",
    top: 0,
    fontFamily: FontFamily.spCaptionRegular,
    lineHeight: 18,
    fontSize: FontSize.size_sm,
    left: 0,
    position: "absolute",
  },
  spSubheadingRegular4: {
    right: 89,
    left: 0,
  },
  subheading6: {
    lineHeight: 21,
    width: 145,
    alignItems: "center",
    display: "flex",
    height: 24,
    textAlign: "left",
    color: Color.textColor,
    top: 0,
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
    top: 0,
    overflow: "hidden",
  },
  rectangleParent: {
    width: 238,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: 21,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    top: 161,
    overflow: "hidden",
  },
  bgAccent: {
    borderRadius: Border.br_80xl,
    backgroundColor: Color.accentColor,
    top: 0,
  },
  body2: {
    width: 59,
    justifyContent: "center",
    textAlign: "center",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    alignItems: "center",
    display: "flex",
    color: Color.textColor,
    textTransform: "uppercase",
    fontSize: FontSize.size_4xs,
    left: 3,
    top: 1,
    height: 22,
  },
  spBody2Medium: {
    right: 0,
    left: 0,
  },
  flatdefault: {
    marginTop: -11.5,
    height: 24,
    top: "50%",
    position: "absolute",
  },
  accent: {
    left: 267,
    width: 82,
    top: 161,
    height: 31,
    position: "absolute",
  },
  body21: {
    width: 74,
    justifyContent: "center",
    textAlign: "center",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    alignItems: "center",
    display: "flex",
    color: Color.textColor,
    textTransform: "uppercase",
    fontSize: FontSize.size_4xs,
    left: 3,
    top: 1,
    height: 22,
  },
  flatdefault1: {
    left: 8,
    right: 8,
  },
  accent2: {
    top: 453,
    left: 20,
    width: 97,
    height: 40,
    position: "absolute",
  },
  bgPrimary: {
    backgroundColor: Color.textColor,
    top: 0,
  },
  stroke: {
    opacity: 0.4,
    height: 1,
  },
  spSubheadingRegular8: {
    bottom: 6,
    height: 20,
    opacity: 0.54,
    right: 0,
  },
  caption1: {
    width: 109,
    height: 16,
  },
  caption: {
    bottom: 32,
    height: 16,
    right: 0,
    left: 0,
    position: "absolute",
  },
  default: {
    top: 62,
    height: 56,
  },
  caption2: {
    bottom: 647,
    height: 16,
  },
  title: {
    fontSize: FontSize.size_xl,
    lineHeight: 26,
    justifyContent: "center",
    textAlign: "center",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    alignItems: "center",
    display: "flex",
    color: Color.textColor,
    left: 0,
    top: 0,
  },
  spTitleMedium: {
    top: 86,
    left: 192,
    borderColor: "#000",
    borderWidth: 1,
    borderStyle: "solid",
    width: 96,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  bgLight: {
    borderRadius: Border.br_10xs,
    top: 0,
    backgroundColor: Color.lightColor,
    bottom: 0,
  },
  light: {
    display: "none",
  },
  subheading8: {
    width: 116,
    alignItems: "center",
    display: "flex",
    height: 24,
  },
  switchon: {
    marginTop: -15,
    right: -10,
    width: 37,
    height: 22,
    top: "50%",
  },
  spSubheadingRegular9: {
    height: "50%",
    top: "25%",
    right: 207,
    bottom: "25%",
    left: 16,
    position: "absolute",
  },
  secLevelSwitch: {
    top: 449,
    right: -96,
    left: 117,
    height: 48,
    position: "absolute",
  },
  pantallaCrearComida: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.lightColor,
  },
});

export default PantallaCrearComida;
