import React, { useState,useEffect } from "react";
import { Pressable, StyleSheet, View, Text, TextInput, TouchableWithoutFeedback,FlatList} from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Switch as RNPSwitch } from "react-native-paper";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import Submenu from "./PantallaMenu";
import PantallaEditarIngredientes2 from "./PantallaEditarIngredientes2";
const PantallaCrearComida = () => {
  const [switchOnValue, setSwitchOnValue] = useState(false);
  const navigation = useNavigation();
  const [totalKcal, setTotalKcal] = useState('');
  const [nombreComida, setNombreComida] = useState('');
  const [listaIngredientes, setListaIngredientes] = useState([]);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  const handleOpenSubmenu = () => {
    setIsSubmenuOpen(true);
  };
  const handleCloseSubmenu = () => {
    setIsSubmenuOpen(false);
  };
  const handleChangeNombreComida = (text) => {
    setNombreComida(text);
  };
  const handleScreenPress = () => {
    if (isSubmenuOpen) {
      handleCloseSubmenu();
    }if(isPantallaEditarIngredientes2Visible){
      handleCerrarPantallaEditarIngredientes2();
    }
  };
  const [isPantallaEditarIngredientes2Visible, setIsPantallaEditarIngredientes2Visible] = useState(false);
  const handleAbrirPantallaEditarIngredientes2 = () => {
    setIsPantallaEditarIngredientes2Visible(true);
  };
  const handleCerrarPantallaEditarIngredientes2 = (alimento) => {
    if(alimento){
      const nuevaListaIngredientes = [...listaIngredientes, alimento];
      setListaIngredientes(nuevaListaIngredientes);
    }
    console.log(listaIngredientes);
    setIsPantallaEditarIngredientes2Visible(false);
  };
  const FlatListItemseparator = () => {
    return (
      <View style={[styles.frameInner, styles.frameLayout]} />
    );
  };

  useEffect(() => {
    const totalCal = listaIngredientes.reduce((total, alimento) => {
      return total + parseInt(alimento.calorias);
    }, 0);
    console.log(totalCal);
    setTotalKcal(totalCal);
    
  }, [listaIngredientes])
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
            <View style= {{marginBottom: 5,top:0, flexDirection: 'row'}}>
              <View style={[styles.spSubheadingRegular2, styles.subheadingPosition1]}>
                <Text style={[styles.subheading, styles.subheadingLayout]}>{item.nombre}</Text>
              </View>
              <View style={[styles.spSubheadingRegular5, styles.subheadingPosition1]}>
                <Text style={[styles.subheading3, styles.subheadingFlexBox]}>{item.calorias}</Text>
              </View>
              {index !== listaIngredientes.length && <FlatListItemseparator />}
            </View>
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
      <Pressable style={styles.accent2} onPress={() => navigation.goBack()}>
        <View style={styles.lightPosition}>
          <LinearGradient
            style={[styles.bgAccent, styles.strokePosition]}
            locations={[0, 1]}
            colors={["#1dde7d", "#72dfc5"]}
          />
        </View>
        <View style={[styles.flatdefault1, styles.flatdefault1Position2]}>
          <View style={[styles.spBody2Medium, styles.flatdefault1Position2]}>
            <Text style={[styles.body21, styles.bodyLayout]}>
              Añadir al dia
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
            Añadir a biblioteca
          </Text>
          <RNPSwitch
            style={[styles.switchon, styles.bodyLayout]}
            value={switchOnValue}
            onValueChange={setSwitchOnValue}
            color="#fff"
          />
        </View>
      </View>
      {isPantallaEditarIngredientes2Visible && <PantallaEditarIngredientes2 onClose={handleCerrarPantallaEditarIngredientes2} />}
      {isSubmenuOpen && <Submenu onClose={handleCloseSubmenu} />}
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
    position: "absolute",
  },
  frameLayout: {
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
    height: 24,
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
    height: 24,
    top: "10%",
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
    marginTop: -12,
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
    top: 46,
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
  spSubheadingRegular5: {

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
    marginTop: -11,
    right: -33,
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
