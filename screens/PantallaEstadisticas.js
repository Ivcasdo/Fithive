import React, { useState,useEffect } from "react";
import { Pressable, StyleSheet, View, Text, TouchableWithoutFeedback,TouchableOpacity,ScrollView } from "react-native";
import { Image } from "expo-image";
import { FontFamily, Color, FontSize } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import auth, { firebase } from '@react-native-firebase/auth';
import { isEqual } from "lodash";
import { LineChart } from 'react-native-gifted-charts';
import Submenu from "./PantallaMenu";
const PantallaEstadisticas = () => {
  const user = auth().currentUser;
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [datosCargados, setDatosCargados] = useState(false);
  const [tipoDatos, setTipoDatos] = useState('Ejercicios');
  const [seleccionar, setSeleccionar] = useState('');
  const [showOptions, setShowOptions] = useState(false);
  const [showOptions2, setShowOptions2] = useState(false);
  const [listaEjercicios, setListaEjercicios] = useState([]);
  const [listaDatosSeleccionada, setlistaDatosSeleccionada] = useState([]);
  //datos a representar en el grafico
  const [chartData, setCharData] = useState([]);
  //variables a mostrar en las listas
  const elegirDatos = ['Ejercicios', 'Medidas'];
  const opcionesMedidas = ['Peso', 'cintura', 'indice de grasa'];
  
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
  const handlePress = () => {
    setShowOptions(!showOptions);
  };
  const handlePress2 = () => {
    setShowOptions2(!showOptions2);
  };
  const handleMostrarDatos = (dato) =>{
    setSeleccionar(dato);
    setShowOptions2(false);
    const listaDatos = [];
    if(tipoDatos === 'Medidas'){
      const muestraRef = firebase.app().database('https://tfgivan-b5e4b-default-rtdb.europe-west1.firebasedatabase.app').ref(`users/${user.uid}/medidasCorporales`);
      muestraRef.once('value', (snapshot) =>{
        if(snapshot.exists){
          snapshot.forEach((childsnapshot)=>{
            const medida = childsnapshot.val();
            if(dato==='Peso'){
              const muestra = {
                valor: medida.peso,
                fecha: medida.fecha,
              }
              listaDatos.push(muestra);
              
            }
            if(dato==='cintura'){
              const muestra = {
                valor: medida.cintura,
                fecha: medida.fecha,
              }
              listaDatos.push(muestra);
              
            }
            if(dato==='indice de grasa'){
              const muestra = {
                valor: medida.indiceGrasa,
                fecha: medida.fecha,
              }
              listaDatos.push(muestra);
              
            }
            
          })
          const datos = listaDatos.map(item => {
            console.log('1',item);  // Verifica qué datos estás manejando
            return {label: item.fecha, value: Number(item.valor)};
          });
          console.log('2',datos)
          const grouped = datos.reduce((result, item) => {
            if (!result[item.label]) {
              // Si esta fecha no ha sido vista antes, la guardamos
              result[item.label] = item;
            } else if (Number(item.value) > Number(result[item.label].value)) {
              // Si esta fecha ya existe y el nuevo valor de 'y' es mayor, actualizamos la entrada
              result[item.label] = item;
            }
            return result;
          }, {});
          console.log('3',grouped);
          
          // Ahora convertimos el objeto agrupado de vuelta a un array
          const filteredData = Object.values(grouped);
          console.log('4',filteredData);
          setCharData(filteredData);
          
        }
      })
      
    }else{
      const entradasCalendarioRef = firebase.app().database('https://tfgivan-b5e4b-default-rtdb.europe-west1.firebasedatabase.app').ref(`users/${user.uid}/entradasCalendario`);
      entradasCalendarioRef.once('value',(snapshot)=>{
        if(snapshot.exists()){
          snapshot.forEach((childsnapshot)=>{
            const entrada = childsnapshot.val();
            entrada.entrenamientos.forEach((entrenamiento)=>{
              entrenamiento.ejercicios.forEach((ejercicio)=>{
                const ejercicioNombre = ejercicio.nombre;
                if(ejercicioNombre === dato){
                  let maxPeso = 0;
                  ejercicio.series.forEach((serie)=>{
                    const pesoSerie = serie.peso;
                    if(pesoSerie>maxPeso){
                      maxPeso=pesoSerie;
                    }
                  })
                  const muestra = {
                    peso: maxPeso,
                    fecha: entrada.fecha
                  };
                  listaDatos.push(muestra);
                }
              })
            })
          })
          const datos = listaDatos.map(item => {
            console.log('1',item);  // Verifica qué datos estás manejando
            return {label: item.fecha, value: Number(item.peso)};
          });
          console.log('2',datos)
          const grouped = datos.reduce((result, item) => {
            if (!result[item.label]) {
              // Si esta fecha no ha sido vista antes, la guardamos
              result[item.label] = item;
            } else if (Number(item.value) > Number(result[item.label].value)) {
              // Si esta fecha ya existe y el nuevo valor de 'y' es mayor, actualizamos la entrada
              result[item.label] = item;
            }
            return result;
          }, {});
          console.log('3',grouped);
          
          // Ahora convertimos el objeto agrupado de vuelta a un array
          const filteredData = Object.values(grouped);
          console.log('4',filteredData);
          setCharData(filteredData);
          
        }
      })
    }
    
  }
  useEffect(()=>{
    const arrayEjercicios= [];
    
    const entradasCalendarioRef = firebase.app().database('https://tfgivan-b5e4b-default-rtdb.europe-west1.firebasedatabase.app').ref(`users/${user.uid}/entradasCalendario`);
    entradasCalendarioRef.once('value', (snapshot)=>{
        
      snapshot.forEach((childsnapshot)=>{
        const entrada= childsnapshot.val();
        if (entrada.entrenamientos) {
          entrada.entrenamientos.forEach((entrenamiento) => {
            entrenamiento.ejercicios.forEach((ejercicio) => {
              const ejercicioNombre = ejercicio.nombre;
              // Verificamos que el nombre del ejercicio no esté ya en el arrayEjercicios
              const existeEjercicio = arrayEjercicios.some((e) =>
                e === ejercicioNombre
              );
              
              if (!existeEjercicio) {
                arrayEjercicios.push(ejercicioNombre);
              }
            });
          });
        }
      })
      
      setListaEjercicios(arrayEjercicios);
    });
      
    
    if(tipoDatos === 'Ejercicios'){
      setlistaDatosSeleccionada(arrayEjercicios);
      setSeleccionar('');
    }else{
      setlistaDatosSeleccionada(opcionesMedidas);
      setSeleccionar('');
    }
  },[tipoDatos])
  return (
    <TouchableWithoutFeedback onPress={handleScreenPress}>
    <View style={styles.pantallaEstadisticas}>
      <Pressable onPress={handleOpenSubmenu}>
      <Image
        style={styles.pantallaEstadisticasChild}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      </Pressable>
      <View style={styles.nbchartsLinechatsWrapper}>
      {
        chartData.length > 0 ? (
          <LineChart
            data={chartData}
            style={{ marginVertical: 10 }}
            yAxisColor="#0BA5A4"
            xAxisColor="#0BA5A4"
            spacing={70}
            initialSpacing={30}
            
          />
        ) : (
          <Text>No hay datos disponibles para mostrar.</Text>
        )
      }
      </View>
      <Pressable style={[styles.dropdown, styles.dropdownLayout, { zIndex: 100 }]}  onPress={handlePress}>
        <View style={[styles.stroke, styles.strokePosition]}>
          <View style={[styles.bgPrimary, styles.strokePosition]} />
        </View>
        <View style={[styles.spSubheadingRegular, styles.subheadingPosition]}>
          <Text style={[styles.subheading, styles.caption1Typo]}>
            {tipoDatos}
          </Text>
        </View>
        <Image
          style={[styles.dropdownIcon, styles.strokePosition]}
          contentFit="cover"
          source={require("../assets/dropdown1.png")}
        />
        <View style={[styles.caption, styles.captionPosition]}>
          <Text style={[styles.caption1, styles.captionPosition]}>
            Tipo de datos
          </Text>
        </View>
        {showOptions &&(
            <View style={[styles.filtroObjetivos]}>
              {elegirDatos.map((dato, index) => (
                <TouchableOpacity
                  style={{ padding: 10 }}
                  key={index}
                  onPress={() => {
                    setTipoDatos(dato);
                    setShowOptions(false); // Oculta las opciones cuando se selecciona una opción
                  }}
                >
                  <Text>{dato}</Text>
                </TouchableOpacity>
              ))}
            </View>
        )}
      </Pressable>
      <Pressable style={[styles.dropdown1, styles.dropdownLayout]} onPress={handlePress2}>
        <View style={[styles.stroke, styles.strokePosition]}>
          <View style={[styles.bgPrimary, styles.strokePosition]} />
        </View>
        <View style={[styles.spSubheadingRegular, styles.subheadingPosition]}>
          <Text style={[styles.subheading, styles.caption1Typo]}>
            {seleccionar}
          </Text>
        </View>
        <Image
          style={[styles.dropdownIcon, styles.strokePosition]}
          contentFit="cover"
          source={require("../assets/dropdown1.png")}
        />
        <View style={[styles.caption, styles.captionPosition]}>
          <Text style={[styles.caption1, styles.captionPosition]}>
            Selecciona ejercicio/medidad
          </Text>
        </View>
        {showOptions2 &&(
            <View style={[styles.filtroObjetivos]}>
              {listaDatosSeleccionada.map((dato, index) => (
                <TouchableOpacity
                  style={{ padding: 10 }}
                  key={index}
                  onPress={() => handleMostrarDatos(dato)}
                >
                  <Text>{dato}</Text>
                </TouchableOpacity>
              ))}
            </View>
        )}
      </Pressable>
      <Text style={[styles.estadisticas, styles.textTypo]}>Estadisticas</Text>
      {isSubmenuOpen && <Submenu onClose={handleCloseSubmenu} />}
    </View>
    
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  filtroObjetivos:{
    backgroundColor: 'white',
    left:0,
    top:50,
    maxHeight:90,
    position: 'absolute',
    zIndex: 999,
    width: '100%',
    flex:1
  },
  textPosition: {
    top: 0,
    left: 0,
  },
  textTypo2: {
    textAlign: "right",
    fontFamily: FontFamily.spCaptionRegular,
    color: Color.darkslategray,
    fontSize: FontSize.spCaptionRegular_size,
    position: "absolute",
  },
  textTypo1: {
    left: 7,
    textAlign: "right",
    color: Color.darkslategray,
    fontFamily: FontFamily.spCaptionRegular,
    fontSize: FontSize.spCaptionRegular_size,
    position: "absolute",
  },
  textTypo: {
    textAlign: "center",
    fontFamily: FontFamily.spCaptionRegular,
    position: "absolute",
  },
  dropdownLayout: {
    height: 48,
    width: 199,
    left: 22,
    position: "absolute",
  },
  strokePosition: {
    bottom: 0,
    right: 0,
    position: "absolute",
  },
  subheadingPosition: {
    height: 20,
    left: 0,
    position: "absolute",
  },
  caption1Typo: {
    textAlign: "left",
    color: Color.textColor,
    width: 199,
    fontFamily: FontFamily.spCaptionRegular,
    top: 0,
  },
  captionPosition: {
    height: 16,
    left: 0,
    position: "absolute",
  },
  pantallaEstadisticasChild: {
    top: 18,
    left: 13,
    height: 31,
    width: 32,
    position: "absolute",
  },
  horizontalLinesIcon: {
    top: 7,
    left: 31,
    width: 277,
    height: 235,
    position: "absolute",
  },
  text: {
    top: 234,
    left: 14,
  },
  text1: {
    top: 176,
  },
  text2: {
    top: 117,
  },
  text3: {
    top: 59,
  },
  text4: {
    left: 0,
    top: 0,
  },
  leftText: {
    width: 21,
    height: 248,
    left: 0,
    position: "absolute",
  },
  text5: {
    color: Color.darkslategray,
    textAlign: "center",
    fontSize: FontSize.spCaptionRegular_size,
    top: 0,
    left: 0,
  },
  text6: {
    left: 46,
    color: Color.darkslategray,
    textAlign: "center",
    fontSize: FontSize.spCaptionRegular_size,
    top: 0,
  },
  text7: {
    left: 92,
    color: Color.darkslategray,
    textAlign: "center",
    fontSize: FontSize.spCaptionRegular_size,
    top: 0,
  },
  text8: {
    left: 139,
    color: Color.darkslategray,
    textAlign: "center",
    fontSize: FontSize.spCaptionRegular_size,
    top: 0,
  },
  text9: {
    left: 185,
    color: Color.darkslategray,
    textAlign: "center",
    fontSize: FontSize.spCaptionRegular_size,
    top: 0,
  },
  text10: {
    left: 230,
    color: Color.darkslategray,
    textAlign: "center",
    fontSize: FontSize.spCaptionRegular_size,
    top: 0,
  },
  text11: {
    left: 277,
    color: Color.darkslategray,
    textAlign: "center",
    fontSize: FontSize.spCaptionRegular_size,
    top: 0,
  },
  bottomText: {
    top: 248,
    left: 15,
    width: 309,
    height: 14,
    position: "absolute",
  },
  lineArea: {
    top: 53,
    left: 30,
    width: 278,
    height: 189,
    position: "absolute",
  },
  pointsIcon: {
    top: 50,
    left: 27,
    width: 286,
    height: 174,
    position: "absolute",
  },
  nbchartsLinechats: {
    width: 324,
    height: 262,
    left: 0,
    position: "absolute",
  },
  nbchartsLinechatsWrapper: {
    top: 122,
    width: 317,
    height: 280,
    left: 22,
    position: "absolute",
    overflow: "hidden",
  },
  bgPrimary: {
    backgroundColor: Color.grayColor,
    left: 0,
    top: 0,
  },
  stroke: {
    height: 1,
    opacity: 0.4,
    left: 0,
  },
  subheading: {
    fontSize: FontSize.size_base,
    lineHeight: 21,
    height: 20,
    left: 0,
    position: "absolute",
  },
  spSubheadingRegular: {
    bottom: 6,
    opacity: 0.87,
    right: 0,
  },
  dropdownIcon: {
    height: 32,
    width: 32,
  },
  caption1: {
    lineHeight: 15,
    textAlign: "left",
    color: Color.textColor,
    width: 199,
    fontFamily: FontFamily.spCaptionRegular,
    top: 0,
    fontSize: FontSize.spCaptionRegular_size,
    height: 16,
  },
  caption: {
    bottom: 32,
    right: 0,
  },
  dropdown: {
    top: 423,
  },
  dropdown1: {
    top: 486,
  },
  estadisticas: {
    top: 80,
    left: 20,
    fontSize: FontSize.spTitleMedium_size,
    color: Color.black,
  },
  pantallaEstadisticas: {
    backgroundColor: Color.lightColor,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default PantallaEstadisticas;
