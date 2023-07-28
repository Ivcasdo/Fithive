import React, { useState, useEffect } from "react";
import { Pressable, StyleSheet, View, Text,TouchableWithoutFeedback,FlatList } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import Submenu from "./PantallaMenu";
import PantallaAjusteObjetivos from "./PantallaAjusteObjetivos";
import PantallaAadirComida from "./PantallaAadirComida";
import PantallaEditarComidaDelDia from "./PantallaEditarComidaDelDia";
import auth, { firebase } from '@react-native-firebase/auth';
import { isEqual } from "lodash";
import ProgressCircle from 'react-native-progress-circle'
const PantallaInicioNutricion = () => {
  const user = auth().currentUser;
  const navigation = useNavigation();
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [objetivoCalorias, setObjetivoCalorias] = useState('');
  const [fechaSeleccionada, setFechaSeleccionada] = useState('');
  const [fechaFormato, setFechaFormato] = useState('');
  const [listaComidas, setListaComidas] = useState([]);
  const [isFirstRun, setIsFirstRun] = useState(true);
  const [caloriasRestantes, setCaloriasRestantes] = useState('');
  const[porcentajeProg, setPorcentajeProg] = useState(0);
  const [comidaDiaEditar, setComidaDiaEditar] = useState('');
  
  const handleOpenSubmenu = () => {
    setIsSubmenuOpen(true);
  };
  const handleCloseSubmenu = () => {
    setIsSubmenuOpen(false);
  };
  const handleScreenPress = () => {
    if (isSubmenuOpen) {
      handleCloseSubmenu();
    }if(isPantallaAjusteObjetivosVisible){
      handleCerrarPantallaAjusteObjetivos();
    }if(isPantallaAadircomidaVisible){
      handleCerrarPantallaAadircomida();
    }if(isPantallaEditarComidaDelDiaVisible){
      handleCerrarPantallaEditarComidaDelDia();
    }
  };

  const [isPantallaAjusteObjetivosVisible, setIsPantallaAjusteObjetivosVisible] = useState(false);
  const handleAbrirPantallaAjusteObjetivos = () => {
    setIsPantallaAjusteObjetivosVisible(true);
  };
  const handleCerrarPantallaAjusteObjetivos = () => {
    setIsPantallaAjusteObjetivosVisible(false);
  };

  const [isPantallaAadircomidaVisible, setIsPantallaAadircomidaVisible] = useState(false);
  const handleAbrirPantallaAadircomida = () => {
    setIsPantallaAadircomidaVisible(true);
  };
  const handleCerrarPantallaAadircomida = () => {
    setIsPantallaAadircomidaVisible(false);
  };

  const [isPantallaEditarComidaDelDiaVisible, setisPantallaEditarComidaDelDiaVisible] = useState(false);
  const handleAbrirPantallaEditarComidaDelDia = (item) =>{
    setComidaDiaEditar(item);
    setisPantallaEditarComidaDelDiaVisible(true);
  }
  const handleCerrarPantallaEditarComidaDelDia = () =>{
    
    setisPantallaEditarComidaDelDiaVisible(false);
  }
  const handleAvanzarDia = () => {
    const fechaActual = new Date();
    const fechaSeleccionadaDate = new Date(fechaFormato);
    // Comparamos la fecha actual con la fecha seleccionada
    if (fechaFormato.getDate() == fechaActual.getDate() && fechaFormato.getMonth() == fechaActual.getMonth() && fechaFormato.getFullYear() == fechaActual.getFullYear()) {
      // No hacemos nada si la fecha seleccionada es igual o posterior a la fecha actual
      return;
    }
    fechaSeleccionadaDate.setDate(fechaSeleccionadaDate.getDate() + 1);
    const day = fechaSeleccionadaDate.getDate();
    const monthIndex = fechaSeleccionadaDate.getMonth();
    const year = fechaSeleccionadaDate.getFullYear();
    const monthNames = [
      'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
      'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];
    const monthName = monthNames[monthIndex];
    const formattedDate = `${day} ${monthName} ${year}`;
    setFechaSeleccionada(formattedDate);
    setFechaFormato(fechaSeleccionadaDate);
  };
  
  const handleRetrocederDia = () => {
    const fechaActual = new Date(fechaFormato);
    fechaActual.setDate(fechaActual.getDate() - 1);
    const day = fechaActual.getDate();
    const monthIndex = fechaActual.getMonth();
    const year = fechaActual.getFullYear();
    const monthNames = [
      'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
      'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];
    const monthName = monthNames[monthIndex];
    const formattedDate = `${day} ${monthName} ${year}`;
    setFechaFormato(fechaActual);
    setFechaSeleccionada(formattedDate);
  };

  const FlatListItemseparator = () => {
    return (
      <View style={[styles.frameItem, styles.frameLayout]} />
    );
  };
  const ItemSeparator = () => <View style={{ height: 10 }} />;
  useEffect(() =>{
    const getFormattedDate = (date) => {
      const day = date.getDate();
      const monthNames = [
        'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
      ];
      const monthIndex = date.getMonth();
      const monthName = monthNames[monthIndex];
      const year = date.getFullYear();
      return `${day} ${monthName} ${year}`;
    };
    const today = new Date();
    const formattedToday = getFormattedDate(today);
    if(isFirstRun){
      setFechaFormato(today);
      setFechaSeleccionada(formattedToday);
    }
    setIsFirstRun(false);
    const formatDate = (inputDate) =>{
      const dateObj = new Date(inputDate);
      // Obtener el día, el mes y el año del objeto Date
      const day = dateObj.getDate().toString().padStart(2, '0');
      const monthIndex = String(dateObj.getMonth() + 1).toString().padStart(2,'0');
      const year = dateObj.getFullYear().toString().slice(-2);
      
      // Obtener el nombre del mes
      
      // Formatear la fecha en el formato deseado
      const formattedDate = `${day}/${monthIndex}/${year}`;

      return formattedDate;
    }
    const fechaFormateada = formatDate(fechaFormato);
    let caloriasrest =0;
    let entradaexiste = false;
    const comidasRef = firebase.app().database('https://tfgivan-b5e4b-default-rtdb.europe-west1.firebasedatabase.app').ref(`users/${user.uid}/entradasCalendario`);
    const updateListaComidas = (formattedDate) => {
      comidasRef.on('value', (snapshot) => {
        const listaDeComidas = [];
        snapshot.forEach((childsnapshot) => {
          const entrada = childsnapshot.val();
          if (entrada && entrada.comidas && isEqual(entrada.fecha, formattedDate)) {
            listaDeComidas.push(...entrada.comidas);
            entradaexiste= true;
          }
        });
        const caloriasTotal =listaDeComidas.reduce((total, comida) => total + comida.calorias, 0);
        caloriasrest = objetivoCalorias-caloriasTotal;
        if(entradaexiste){
          setCaloriasRestantes(caloriasrest);
          const progresoCalorias = (((objetivoCalorias - caloriasRestantes) / objetivoCalorias) * 100).toFixed(2);
          const progresoNumerico = parseFloat(progresoCalorias);
          setPorcentajeProg(progresoNumerico);
        }else{
          setCaloriasRestantes(0);
          setPorcentajeProg(0);
        }
        
        setListaComidas(listaDeComidas);
      });
    };
  
    updateListaComidas(fechaFormateada);
    
    const caloriasRef = firebase.app().database('https://tfgivan-b5e4b-default-rtdb.europe-west1.firebasedatabase.app').ref(`users/${user.uid}/caloriasDiarias`);
    const handleSnapshot = (snapshot) => {
      const caloriasData = snapshot.val();
      setObjetivoCalorias(caloriasData);
    }
    caloriasRef.on('value', handleSnapshot);
    return () => {
      caloriasRef.off('value', handleSnapshot);
      comidasRef.off('value');
    }
  },[caloriasRestantes,fechaSeleccionada])
  return (
    <TouchableWithoutFeedback onPress={handleScreenPress}>
    <View style={styles.pantallaInicioNutricion}>
      <Pressable onPress={handleOpenSubmenu}>
        <Image
          style={styles.pantallaInicioNutricionChild}
          contentFit="cover"
          source={require("../assets/ellipse-1.png")}
        />
      </Pressable>
      <View style={[styles.rectangleParent, styles.frameChildShadowBox]}>
        <View style={[styles.frameChild, styles.frameChildPosition]} />
        <View style={[styles.frameItem, styles.frameLayout]} />
        <FlatList
            data={listaComidas}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index}) => (
                <View style={{ marginTop: 3, marginBottom: 3 }}>  
                    <View style={[styles.spSubheadingRegular, styles.subheadingPosition1]}>
                        <Pressable 
                          style={{ padding: 3 }} 
                          onPress={()=> handleAbrirPantallaEditarComidaDelDia(item)}
                        >
                            <Text style={[styles.subheading, styles.subheadingTypo]}>
                              {item.nombre}
                            </Text>
                        </Pressable>
                    </View>
                    {index !== listaComidas.length && <FlatListItemseparator />}
                </View>
            )}
            ItemSeparatorComponent={ItemSeparator}
            contentContainerStyle={{ position: 'absolute', zIndex: 30, bottom:0, top:25}}
        />
        
        
        <View style={styles.month}>
          <Pressable onPress={handleRetrocederDia}>
          <Image
            style={[styles.arrowIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/arrow.png")}
          />
          </Pressable>
          <Text style={styles.febrero2021}>{fechaSeleccionada}</Text>
          <Pressable onPress={handleAvanzarDia}>
          <Image
            style={[styles.arrowIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/arrow1.png")}
          />
          </Pressable>
        </View>
      </View>
      <Pressable style={[styles.accent, styles.accentLayout]} onPress={handleAbrirPantallaAjusteObjetivos}>
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
              Cambiar objetivo
            </Text>
          </View>
        </View>
      </Pressable>
      <Pressable style={[styles.accent2, styles.accentLayout]} onPress={handleAbrirPantallaAadircomida}>
        <View style={styles.accent1}>
          <LinearGradient
            style={[styles.bgAccent, styles.bgAccentPosition]}
            locations={[0, 1]}
            colors={["#1dde7d", "#72dfc5"]}
          />
        </View>
        <View style={[styles.flatdefault, styles.flatdefaultPosition2]}>
          <View style={[styles.spBody2Medium, styles.flatdefaultPosition2]}>
            <Text style={[styles.body2, styles.bodyTypo]}>Añadir comida</Text>
          </View>
        </View>
      </Pressable>
      <View style={styles.calorias}>
        <Text style={[styles.calorias1, styles.comidasTypo]}>Calorias</Text>
        <View style= {styles.progresoDiarioIcon}>
          <ProgressCircle
              percent={porcentajeProg}
              radius={40}
              borderWidth={6}
              color="#3399FF"
              shadowColor="#999"
              bgColor="#fff"
              
          >
              <Text style={{ fontSize: 15 }}>{caloriasRestantes}</Text>
          </ProgressCircle>
        </View>
        <View style={styles.caloriasParent}>
          <Text style={[styles.calorias2, styles.objetivoTypo]}>
            {objetivoCalorias} calorias
          </Text>
          <Text style={[styles.objetivo, styles.objetivoTypo]}>objetivo:</Text>
          <Image
            style={[styles.mdiflagVariantIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/mdiflagvariant.png")}
          />
        </View>
      </View>
      <Text style={[styles.comidas, styles.comidasTypo]}>Comidas</Text>
      <Pressable style={[styles.accent4, styles.accentLayout]} onPress={() => navigation.navigate("PantallaBibliotecaDeAlimentos")} >
        <View style={styles.accent1}>
          <LinearGradient
            style={[styles.bgAccent, styles.bgAccentPosition]}
            locations={[0, 1]}
            colors={["#1dde7d", "#72dfc5"]}
          />
        </View>
        <View style={[styles.flatdefault, styles.flatdefaultPosition2]}>
          <View style={[styles.spBody2Medium, styles.flatdefaultPosition2]}>
            <Text style={[styles.body22, styles.bodyTypo]}>COmidas</Text>
          </View>
        </View>
      </Pressable>
      {isPantallaAjusteObjetivosVisible && <PantallaAjusteObjetivos onClose={handleCerrarPantallaAjusteObjetivos} />}
      {isPantallaAadircomidaVisible && <PantallaAadirComida onClose={handleCerrarPantallaAadircomida} />}
      {isPantallaEditarComidaDelDiaVisible && <PantallaEditarComidaDelDia onClose={handleCerrarPantallaEditarComidaDelDia} comidaDelDia={comidaDiaEditar}fechaSeleccionada={fechaSeleccionada}/>}
      {isSubmenuOpen && <Submenu onClose={handleCloseSubmenu} />}
    </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  frameChildShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    width: 301,
  },
  frameChildPosition: {
    left: 0,
    position: "absolute",
  },
  frameLayout: {
    height: 1,
    width: 302,
    borderTopWidth: 1,
    borderColor: "rgba(95, 95, 95, 0.19)",
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  subheadingPosition1: {
    height: 20,
    left: 5,

  },
  subheadingTypo: {
    display: "flex",
    textAlign: "left",
    color: Color.textColor,
    fontFamily: FontFamily.spSubheadingRegular,
    lineHeight: 21,
    fontSize: FontSize.spSubheadingRegular_size,
    alignItems: "center",
    top: 0,
  },
  subheadingPosition: {
    height: 27,
    left: 0,
    position: "absolute",
  },
  iconLayout: {
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  accentLayout: {
    height: 40,
    width: 97,
    top: 521,
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
    height: 22,
    width: 74,
    justifyContent: "center",
    textAlign: "center",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    textTransform: "uppercase",
    left: 3,
    top: 1,
    alignItems: "center",
    display: "flex",
    color: Color.textColor,
    position: "absolute",
  },
  comidasTypo: {
    height: 26,
    width: 111,
    fontSize: FontSize.size_xl,
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.spSubheadingRegular,
    position: "absolute",
  },
  objetivoTypo: {
    height: 17,
    fontSize: FontSize.size_3xs,
    top: 19,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    textTransform: "uppercase",
    color: Color.black,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    position: "absolute",
  },
  pantallaInicioNutricionChild: {
    top: 18,
    left: 13,
    width: 32,
    height: 31,
    position: "absolute",
  },
  frameChild: {
    backgroundColor: Color.whitesmoke_100,
    shadowColor: "rgba(0, 0, 0, 0.17)",
    height: 246,
    top: 0,
    width: 301,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
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
    width: 300,
    alignItems: "center",
    height: 20,
    left: 0,
  },
  subheading1: {
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.textColor,
    fontFamily: FontFamily.spSubheadingRegular,
    lineHeight: 21,
    fontSize: FontSize.spSubheadingRegular_size,
    top: 0,
    width: 301,
  },
  spSubheadingRegular1: {
    marginTop: 12,
    right: -26,
    backgroundColor: Color.gainsboro_200,
    top: "50%",
  },
  spSubheadingRegular: {
    marginTop: 0,
    right: 30,
    top: "10%",
  },
  arrowIcon: {
    borderRadius: Border.br_81xl,
  },
  febrero2021: {
    fontSize: FontSize.size_sm,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.black,
    textAlign: "left",
  },
  month: {
    top: 2,
    width: 291,
    flexDirection: "row",
    justifyContent: "space-between",
    left: 5,
    alignItems: "center",
    position: "absolute",
    overflow: "hidden",
  },
  rectangleParent: {
    top: 295,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    height: 193,
    width: 301,
    left: 27,
    position: "absolute",
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
    fontSize: FontSize.size_4xs,
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
    left: 132,
  },
  accent2: {
    left: 22,
  },
  calorias1: {
    left: 5,
    top: 0,
  },
  progresoDiarioIcon: {
    top: 26,
    left: 109,
    height: 82,
    width: 80,
    position: "absolute",
    overflow: "hidden",
  },
  calorias2: {
    left: 82,
    width: 80,
  },
  objetivo: {
    width: 84,
    left: 27,
  },
  mdiflagVariantIcon: {
    top: 15,
    left: 0,
    position: "absolute",
  },
  caloriasParent: {
    top: 101,
    left: 70,
    width: 159,
    height: 44,
    position: "absolute",
    overflow: "hidden",
  },
  calorias: {
    top: 74,
    width: 299,
    height: 160,
    left: 29,
    position: "absolute",
    overflow: "hidden",
  },
  comidas: {
    top: 234,
    left: 29,
  },
  body22: {
    fontSize: FontSize.size_2xs,
  },
  accent4: {
    left: 236,
  },
  pantallaInicioNutricion: {
    backgroundColor: Color.lightColor,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default PantallaInicioNutricion;
