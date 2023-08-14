import * as React from "react";
import { Pressable, StyleSheet, Text, View, TouchableWithoutFeedback,FlatList, Modal } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import Submenu from "./PantallaMenu";
import PantallaVerEntrenamientos from "./PantallaVerEntrenamiento";
import { useState,useEffect, useRef  } from "react";
import CalendarPicker from 'react-native-calendar-picker';
import auth, { firebase } from '@react-native-firebase/auth';
import moment from 'moment';
import ProgressCircle from 'react-native-progress-circle'
const PantallaInicio1 = () => {
  const navigation = useNavigation();
  const user = auth().currentUser;
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState(new Date());
  const [entrenamientos, setEntrenamientos] = useState([]);
  const [caloriasTotales, setCaloriasTotales] = useState('');
  const [caloriasRestantes, setCaloriasRestantes] = useState('');
  const [datosCargados, setDatosCargados] = useState(false);
  const [togglecomida, setToggleComida] = useState(false);
  const [porcentajeComidas, setPorcentajeComidas] = useState(0);
  const calendarRef = useRef(null);
  const [isPantallaVerEntrenamientoVisible, setisPantallaVerEntrenamientoVisible] = useState(false);
  const [verEntrenamiento, setVerEntrenamiento] = useState('');
  const handleOpenSubmenu = () => {
    setIsSubmenuOpen(true);
  };
  const handleCloseSubmenu = () => {
    setIsSubmenuOpen(false);
  };
  const handleOpenPantallaVerEntrenamientoVisible = (item)=>{
    setVerEntrenamiento(item);
    setisPantallaVerEntrenamientoVisible(true);
  }
  const handleClosePantallaVerEntrenamientoVisible = ()=>{
    setisPantallaVerEntrenamientoVisible(false);
  }
  const handleScreenPress = () => {
    if (isSubmenuOpen) {
      handleCloseSubmenu();
    }if(isPantallaVerEntrenamientoVisible){
      handleClosePantallaVerEntrenamientoVisible()
    }
  };
  const handleCambiarVista = () =>{
    setToggleComida(!togglecomida);
  }
  const handleIrA = () =>{
    if(!togglecomida){
      navigation.navigate("PantallaInicioEntrenamiento");
    }else{
      navigation.navigate('PantallaInicioNutricion');
    }
  }
  const handleDayPress = (day) => {
    const selectedDate = moment(day).format('DD/MM/YY');
    setSelectedDate(selectedDate);
    setSelectedDay(day);
    const entradasCalendarioRef = firebase.app().database('https://tfgivan-b5e4b-default-rtdb.europe-west1.firebasedatabase.app').ref(`users/${user.uid}/entradasCalendario`);
      entradasCalendarioRef.once('value', (snapshot) =>{
        if(snapshot.exists()){
          let entradaexiste = false;
          snapshot.forEach((childsnapshot)=>{
            const entrada = childsnapshot.val();
            if(entrada.fecha ===selectedDate){
              entradaexiste = true;
              if(entrada.entrenamientos){
                
                setEntrenamientos(entrada.entrenamientos);
              }else{
                setEntrenamientos([]);
              }
              if(entrada.comidas){
                const caloriasTotal =entrada.comidas.reduce((total, comida) => total + comida.calorias, 0);
                const caloriasRest = caloriasTotales-caloriasTotal;
                const porcentaje = (((caloriasTotales - caloriasRest) / caloriasTotales) * 100).toFixed(2);
                const progresoNumerico = parseFloat(porcentaje);
                setPorcentajeComidas(progresoNumerico);
                setCaloriasRestantes(caloriasRest);
              }else{
                setPorcentajeComidas(0);
                setCaloriasRestantes('');
              }
            }
          })
          if(!entradaexiste){
            setEntrenamientos([]);
            setPorcentajeComidas(0);
            setCaloriasRestantes('');
          }
        }
      })
    calendarRef.current.forceUpdate();
    // Aquí puedes actualizar los datos de la lista según el día seleccionado
  };
  useEffect(() =>{
    if(!datosCargados){
      const formattedDate = moment().format('DD/MM/YY');
      const caloriasRef = firebase.app().database('https://tfgivan-b5e4b-default-rtdb.europe-west1.firebasedatabase.app').ref(`users/${user.uid}/caloriasDiarias`);
      caloriasRef.once('value', (snapshot) =>{
        if(snapshot.exists){
          setCaloriasTotales(snapshot.val());
        }
      })
      const entradasCalendarioRef = firebase.app().database('https://tfgivan-b5e4b-default-rtdb.europe-west1.firebasedatabase.app').ref(`users/${user.uid}/entradasCalendario`);
      entradasCalendarioRef.once('value', (snapshot) =>{
        if(snapshot.exists()){
          snapshot.forEach((childsnapshot)=>{
            const entrada = childsnapshot.val();
            if(entrada.fecha ===formattedDate){
              if(entrada.entrenamientos){
                console.log(entrada.entrenamientos);
                setEntrenamientos(entrada,entrenamientos);
              }
              if(entrada.comidas){
                const caloriasTotal =entrada.comidas.reduce((total, comida) => total + comida.calorias, 0);
                const caloriasRest = caloriasTotales-caloriasTotal;
                console.log(caloriasRest);
                setCaloriasRestantes(caloriasRest);
              }else{
                setCaloriasRestantes(caloriasTotales);
              }
            }
          })
        }
      })
      setSelectedDate(formattedDate);
      setDatosCargados(true);
    }

  }, [])
  return (
    <TouchableWithoutFeedback onPress={handleScreenPress}>
    <View style={styles.pantallaInicio1}>
      <Pressable onPress={handleOpenSubmenu}> 
      <Image
        style={[styles.pantallaInicio1Child, styles.calendarPosition]}
        contentFit="cover"
        source={require("../assets/IconoApp.png")}
      />
      </Pressable>
      <Text style={styles.calendario}>Calendario</Text>
      <View style={[styles.calendar, styles.calendarPosition1]}>
        <View style={[styles.dates, styles.rowFlexBox]}>
          <CalendarPicker
            ref={calendarRef}
            startFromMonday= {true}
            onDateChange={handleDayPress}
            selectedStartDate={selectedDay}
            selectedDayColor="#1dde7d"
            selectedDayTextColor="#ffffff"
            weekdays={['Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab', 'Dom']}
            months={['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']}
            textStyle={{
              fontSize: 12
            }}
            width= {300}
            previousComponent = {
              <View style={[styles.arrow, styles.arrowFlexBox]}>
                <Image
                  style={styles.vectorIcon}
                  contentFit="cover"
                  source={require("../assets/vector1.png")}
                />
              </View>
            }
            nextComponent = {
              <View style={[styles.arrow1, styles.arrowFlexBox]}>
                <Image
                  style={[styles.vectorIcon,{ transform: [{ rotateY: '180deg' }] }] }
                  contentFit="cover"
                  source={require("../assets/vector11.png")}
                />
              </View>
            }
          />
        </View>
      </View>
      {togglecomida === false && (
      <View style={styles.entrenamiento}>
        <Text style={[styles.entrenamiento1, styles.february2021FlexBox]}>
          Entrenamiento
        </Text>
        <View style={styles.entrenamiento1Parent}>
          <FlatList
            data={entrenamientos}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index}) => (
              <Pressable style={[styles.entrenamiento11, styles.entrenamientoPosition]} onPress={()=> handleOpenPantallaVerEntrenamientoVisible(item)}>
                <View style={styles.spSubheadingRegular}>
                  <Text style={styles.subheading}>{item.nombre}</Text>
                </View>
              </Pressable>
            )}
            contentContainerStyle={{ position: 'absolute', zIndex: 30, bottom:0, top:1}}
          />
        </View>
      </View>)}
      {togglecomida === true && (
      <View style={styles.entrenamiento}>
        <Text style={[styles.entrenamiento1, styles.february2021FlexBox]}>
          Calorias
        </Text>
        <View style={styles.entrenamiento1Parent}>
          <View style= {styles.progresoDiarioIcon}>
            <ProgressCircle
                percent={porcentajeComidas}
                radius={35}
                borderWidth={6}
                color="#3399FF"
                shadowColor="#999"
                bgColor="#fff"
                
            >
                <Text style={{ fontSize: 12 }}>{caloriasRestantes}</Text>
            </ProgressCircle>
          </View>
          <View style={styles.caloriasParent}>
            <Text style={[styles.calorias2, styles.objetivoTypo]}>
              {caloriasTotales} calorias
            </Text>
            <Text style={[styles.objetivo, styles.objetivoTypo]}>objetivo:</Text>
            <Image
              style={[styles.mdiflagVariantIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/mdiflagvariant.png")}
            />
          </View>
        </View>
      </View>)}
      <Pressable style={[styles.accent, styles.accentLayout1]} onPress={handleCambiarVista}>
        <View style={styles.lightPosition}>
          <LinearGradient
            style={[styles.bgAccent, styles.bgAccentPosition]}
            locations={[0, 1]}
            colors={["#1dde7d", "#72dfc5"]}
          />
        </View>
        <View style={[styles.flatdefault, styles.flatdefaultPositionvista]}>
          <View style={[styles.spBody2Medium, styles.flatdefaultPositionvista]}>
            <Text style={[styles.body2, styles.bodyTypo]}>Cambiar vista</Text>
          </View>
        </View>
      </Pressable>
      <Pressable style={[styles.accent2, styles.accentLayout]} onPress={handleIrA}>
        <View style={styles.lightPosition}>
          <LinearGradient
            style={[styles.bgAccent, styles.bgAccentPosition]}
            locations={[0, 1]}
            colors={["#1dde7d", "#72dfc5"]}
          />
        </View>
        <View style={[styles.flatdefault, styles.flatdefaultPosition]}>
          <View style={[styles.spBody2Medium, styles.flatdefaultPosition]}>
            <Text style={[styles.body21, togglecomida ? styles.bodyTypo2 : styles.bodyTypo]}>
            {togglecomida ? "Ir a nutricion" : "Ir a entrenamientos"}
            </Text>
          </View>
        </View>
      </Pressable>
      {isPantallaVerEntrenamientoVisible && 
        <PantallaVerEntrenamientos onClose={handleClosePantallaVerEntrenamientoVisible} entrenamiento={verEntrenamiento}/>
    }
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
  overlay: {
    
    bottom: 0,
    
    backgroundColor: 'white',
    zIndex: 1000,
},
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparente
  },
  
  iconLayout: {
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  mdiflagVariantIcon: {
    top: 15,
    left: 0,
    position: "absolute",
  },
  objetivo: {
    width: 84,
    left: 27,
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
  calorias2: {
    left: 82,
    width: 80,
  },
  caloriasParent: {
    top: 53,
    left: 55,
    width: 159,
    height: 44,
    position: "absolute",
    overflow: "hidden",
  },
  progresoDiarioIcon: {
    top: 0,
    left: 105,
    height: 82,
    width: 80,
    position: "absolute",
    overflow: "hidden",
  },
  calendarPosition: {
    left: 13,
    position: "relative",
  },
  calendarPosition1: {
    left: 13,
    position: "relative",
  },
  rowFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
    overflow: "hidden",
    top: 0,
    bottom: 100,
    right: 17,
    height: "100%",
    width: "100%",
  },
  arrowFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  february2021FlexBox: {
    textAlign: "left",
    color: Color.black,
  },
  monTypo: {
    opacity: 0.5,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    color: Color.black,
  },
  entrenamientoPosition: {
    height: 20,
    left: 0,
    right: 0,
    width: 300,
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
  accentLayout: {
    height: 40,
    width: 97,
    left: 21,
    position: "absolute",
  },
  accentLayout1: {
    top: 350,
    height: 40,
    width: 97,
    left: 21,
    position: "absolute",
  },
  bgAccentPosition: {
    left: 0,
    right: 0,
  },
  flatdefaultPosition: {
    marginTop: -12,
    top: "50%",
    height: 24,
    position: "absolute",
  },
  flatdefaultPositionvista: {
    marginTop: -12,
    top: "55%",
    height: 24,
    position: "absolute",
  },
  bodyTypo: {
    height: 22,
    width: 74,
    display: "flex",
    fontFamily: FontFamily.spBUTTON,
    fontWeight: "500",
    textTransform: "uppercase",
    left: 3,
    top: 1,
    color: Color.textColor,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    position: "absolute",
  },
  bodyTypo2: {
    height: 22,
    width: 74,
    display: "flex",
    fontFamily: FontFamily.spBUTTON,
    fontWeight: "500",
    fontSize: 9,
    textTransform: "uppercase",
    left: 3,
    top: 5,
    color: Color.textColor,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    position: "absolute",
  },
  pantallaInicio1Child: {
    top: 18,
    width: 32,
    height: 31,
  },
  calendario: {
    top: 60,
    left: 26,
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.spCaptionRegular,
    fontSize: FontSize.spTitleMedium_size,
    position: "absolute",
  },
  vectorIcon: {
    width: 8,
    height: 10,
  },
  posCalendar:{
    flex: 1,
    alignItems: 'center', // Alinea el contenido al centro horizontalmente
    justifyContent: 'center',
  },
  arrow: {
    height: 24,
    width: 24,
    backgroundColor: Color.whitesmoke,
    borderRadius: Border.br_81xl,
    justifyContent: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  february2021: {
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    fontSize: FontSize.spBUTTON_size,
  },
  arrow1: {
    transform: [
      {
        rotate: "-180deg",
      },
    ],
    height: 24,
    width: 24,
    backgroundColor: Color.whitesmoke,
    borderRadius: Border.br_81xl,
    justifyContent: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  month: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
    position: "relative",
    zIndex: 2,
    backgroundColor: "#fff",
  },
  mon: {
    fontSize: FontSize.spCaptionRegular_size,
  },
  text: {
    fontSize: FontSize.size_mini,
    lineHeight: 23,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    color: Color.black,
  },
  row: {
    alignItems: "center",
    alignSelf: "stretch",
  },
  wrapper: {
    backgroundColor: "#79fb9d",
    width: 18,
    height: 21,
    overflow: "hidden",
  },
  text19: {
    lineHeight: 21,
    fontSize: FontSize.spBUTTON_size,
  },
  dates: {

    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
    flex: 1,
    position: "absolute",
  },
  calendar: {
    borderRadius: 5,
    width: 323,
    height: 300,
    padding: 16,
    overflow: "hidden",
    backgroundColor: Color.lightColor,
    alignItems: "center",
    top:55,
  },
  entrenamiento1: {
    left: 5,
    width: 141,
    height: 22,
    top: 0,
    fontFamily: FontFamily.spCaptionRegular,
    fontSize: FontSize.spTitleMedium_size,
    textAlign: "left",
    position: "absolute",
  },
  lineIcon: {
    right: -37,
    maxWidth: "100%",
    height: 1,
    opacity: 0.24,
    left: 16,
    bottom: 0,
    position: "absolute",
    overflow: "hidden",
  },
  lightShadowBox: {
    shadowOpacity: 1,
    elevation: 8,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(176, 190, 197, 0.24)",
    borderRadius: Border.br_10xs,
    height: 17,
    alignSelf: "stretch",
    backgroundColor: Color.lightColor,
  },
  light: {
    display: "none",
    justifyContent: "center",
    alignItems: "center",
  },
  subheading: {
    fontSize: FontSize.size_smi,
    lineHeight: 17,
    color: Color.textColor,
    textAlign: "left",
    alignSelf: "stretch",
    fontFamily: FontFamily.spCaptionRegular,
  },
  spSubheadingRegular: {
    marginTop: -8,
    right: 0,
    top: 0,
    left: 16,
    justifyContent: "center",
    alignItems: "center",

  },
  entrenamiento11: {
    top: 5,
  },
  entrenamiento12: {
    top: 21,
  },
  entrenamiento1Parent: {
    top: 37,
    left: 12,
    width: 258,
    height: 115,
    position: "absolute",
    overflow: "hidden",
  },
  entrenamiento: {
    top: 390,
    width: 299,
    height: 160,
    left: 21,
    position: "absolute",
    overflow: "hidden",
  },
  bgAccent: {
    borderRadius: Border.br_80xl,
    backgroundColor: Color.accentColor,
    bottom: 0,
    left: 0,
    top: 0,
    position: "absolute",
  },
  body2: {
    fontSize: FontSize.size_4xs,
  },
  spBody2Medium: {
    left: 0,
    right: 0,
  },
  flatdefault: {
    right: 8,
    left: 8,
  },
  accent: {
    top: 293,
  },
  body21: {
    fontSize: FontSize.size_5xs,
  },
  accent2: {
    top: 529,
  },
  pantallaInicio1: {
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.lightColor,

  },
});

export default PantallaInicio1;
