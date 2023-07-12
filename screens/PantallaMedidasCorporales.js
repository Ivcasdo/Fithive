import React, { useState, useEffect } from "react";
import { Pressable, StyleSheet, View, Text, TouchableWithoutFeedback,FlatList } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import auth, { firebase } from '@react-native-firebase/auth';
import Submenu from "./PantallaMenu";
import PantallaMedidasCorporales2 from "./PantallaMedidasCorporales2";
const PantallaMedidasCorporales = () => {
  const user = auth().currentUser;
  const [listaMedidas, setListaMedidas] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [editarMedida, setEditarMedida] = useState(false);
  const [medidaEditar, setMedidaEditar] = useState('');
  const handleOpenSubmenu = () => {
    setIsSubmenuOpen(true);
  };
  const handleCloseSubmenu = () => {
    setIsSubmenuOpen(false);
  };
  const handleScreenPress = () => {
    if (isSubmenuOpen) {
      handleCloseSubmenu();
    }if(isPantallaMedidasCorporales2Visible){
      handleCerrarPantallaMedidasCorporales2();
    }
  };
  const [isPantallaMedidasCorporales2Visible, setIsPantallaMedidasCorporales2Visible] = useState(false);
  const handleAbrirPantallaMedidasCorporales2 = (editar,medida) => {
    setEditarMedida(editar);
    setMedidaEditar(medida);
    setIsPantallaMedidasCorporales2Visible(true);
  };
  const handleCerrarPantallaMedidasCorporales2 = () => {
    setIsPantallaMedidasCorporales2Visible(false);
  };

  const FlatListItemseparator = () => {
    return (
      <View style={styles.frameInner} />
    );
  };
  
  useEffect(() => {
    const medidasRef = firebase.app().database('https://tfgivan-b5e4b-default-rtdb.europe-west1.firebasedatabase.app').ref(`users/${user.uid}/medidasCorporales`);
    const handleSnapshot = (snapshot) => {
      const medidasData = snapshot.val();
      if (medidasData) {
        const medidasArray = [];
        // Convertir los ejercicios en un array y actualizar el estado
        Object.keys(medidasData).forEach((key) => {
          medidasArray.push(medidasData[key]);
        });
        console.log(medidasArray);
        setListaMedidas(medidasArray);
      }
    };
    medidasRef.on('value', handleSnapshot);
  
    // Limpiar la suscripción al desmontar el componente
    return () => {
      medidasRef.off('value', handleSnapshot);
    };
  }, []);
  return (
    <TouchableWithoutFeedback onPress={handleScreenPress}>
    <View style={styles.pantallaMedidasCorporales}>
      <Pressable onPress={handleOpenSubmenu}>
      <Image
        style={styles.pantallaMedidasCorporalesChild}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      </Pressable>
      <View style={[styles.frameParent, styles.parentLayout]}>
        <View style={[styles.rectangleParent, styles.frameChildShadowBox]}>
          <View style={[styles.frameChild, styles.frameChildShadowBox]} />
          <View style={[styles.frameChild2, styles.frameChildLayout]} />
          <View style={[styles.frameChild3, styles.frameChildLayout]} />
          <View style={[styles.frameChild4, styles.frameChildLayout]} />
          <View
            style={[styles.spSubheadingRegularParent, styles.subheadingLayout7]}
          >
            <View
              style={[styles.spSubheadingRegular, styles.subheadingPosition1]}
            >
              <Text style={[styles.subheading, styles.subheadingTypo3]}>
                Cintura
              </Text>
            </View>
            <View
              style={[styles.spSubheadingRegular1, styles.subheadingPosition1]}
            >
              <Text style={[styles.subheading1, styles.subheadingTypo2]}>
                Indice de grasa
              </Text>
            </View>
            <View
              style={[styles.spSubheadingRegular2, styles.subheadingPosition1]}
            >
              <Text style={[styles.subheading2, styles.subheadingTypo2]}>
                Fecha
              </Text>
            </View>
            <View
              style={[styles.spSubheadingRegular3, styles.subheadingPosition1]}
            >
              <Text style={[styles.subheading3, styles.subheadingTypo3]}>
                Peso
              </Text>
            </View>
          </View>
          <FlatList
          data={listaMedidas}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index}) => (
            <View style={{marginBottom: 4}}>
            <Pressable onPress={()=> handleAbrirPantallaMedidasCorporales2(true, item)}>
              <View style= {{marginBottom: 5,top:0,flexDirection: 'row'}}>
                <View style={[styles.spSubheadingRegularFrame, styles.body2Layout]}>
                  <View style={[styles.spSubheadingRegular6, styles.subheadingPosition]}>
                    <Text style={[styles.subheading6, styles.subheadingLayout3]}>
                      {item.peso}kg
                    </Text>
                  </View>
                </View>
                <View style={[styles.frameView, styles.subheadingWrapperLayout]}>
                  <View style={[styles.spSubheadingRegular7,styles.subheadingWrapperLayout,]}>
                    <Text style={[styles.subheading7, styles.subheadingWrapperLayout]}>
                      {item.cintura}cm
                    </Text>
                  </View>
                </View>
                <View style={[styles.spSubheadingRegularWrapper,styles.subheadingLayout6,]}>
                  <View style={[styles.spSubheadingRegular4, styles.subheadingPosition]}>
                    <Text style={[styles.subheading4, styles.subheadingFlexBox]}>
                      {item.indiceGrasa}
                    </Text>
                  </View>
                </View>
                <View style={[styles.spSubheadingRegularContainer,styles.subheadingLayout4,]}>
                  <View style={[styles.spSubheadingRegular4, styles.subheadingPosition]}>
                    <Text style={[styles.subheading5, styles.subheadingTypo]}>
                      {item.fecha}
                    </Text>
                  </View>
                </View>
                  {index !== listaMedidas.length && <FlatListItemseparator />}
              </View>
            </Pressable>
            </View>
          )}
          contentContainerStyle={{ position: 'absolute', zIndex: 30, bottom:0, top:1}}
        />
          
        </View>
        <Pressable style={[styles.accent, styles.accentPosition]} onPress={()=> handleAbrirPantallaMedidasCorporales2(false)}>
          <View style={styles.accent1}>
            <LinearGradient
              style={[styles.bgAccent, styles.subheadingPosition]}
              locations={[0, 1]}
              colors={["#1dde7d", "#72dfc5"]}
            />
          </View>
          <View style={[styles.flatdefault, styles.flatdefaultPosition]}>
            <View style={[styles.spBody2Medium, styles.flatdefaultPosition]}>
              <Text style={[styles.body2, styles.body2Layout]}>
                Añadir medidas
              </Text>
            </View>
          </View>
        </Pressable>
      </View>
      <Text style={styles.medidasCorporales}>Medidas corporales</Text>
      {isPantallaMedidasCorporales2Visible && <PantallaMedidasCorporales2 onClose={handleCerrarPantallaMedidasCorporales2} editarmedida={editarMedida} medidaEditar={medidaEditar}/>}
      {isSubmenuOpen && <Submenu onClose={handleCloseSubmenu} />}
    </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  parentLayout: {
    height: 256,
    overflow: "hidden",
  },
  frameChildShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    top: 0,
    position: "absolute",
  },
  frameLayout: {
    height: 1,
    borderTopWidth: 1,
    borderColor: "rgba(95, 95, 95, 0.19)",
    borderStyle: "solid",
    width: 300,
    left: 0,
    position: "absolute",
  },
  frameChildLayout: {
    height: 277,
    width: 1,
    borderRightWidth: 1,
    borderColor: "rgba(95, 95, 95, 0.19)",
    borderStyle: "solid",
    top: 0,
    position: "absolute",
  },
  subheadingLayout7: {
    height: 23,
    overflow: "hidden",
  },
  subheadingPosition1: {
    marginTop: -11.5,
    height: 24,
    top: "50%",
    position: "absolute",
  },
  subheadingTypo3: {
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.textColor,
    fontFamily: FontFamily.robotoRegular,
    lineHeight: 15,
    fontSize: FontSize.size_xs,
    height: 24,
    left: 0,
    top: 0,
    position: "absolute",
  },
  subheadingTypo2: {
    lineHeight: 14,
    fontSize: FontSize.size_2xs,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.textColor,
    fontFamily: FontFamily.robotoRegular,
    height: 24,
    left: 0,
    top: 0,
    position: "absolute",
  },
  subheadingLayout6: {
    width: 81,

  },
  subheadingPosition: {
    right: 0,
    left: 0,
  },
  subheadingFlexBox: {
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    display: "flex",
    color: Color.textColor,
  },
  subheadingLayout4: {
    width: 38,
  },
  subheadingTypo: {
    lineHeight: 10,
    fontSize: FontSize.size_5xs,
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    display: "flex",
    color: Color.textColor,
    fontFamily: FontFamily.robotoRegular,
    left: 0,
    top: 0,
  },
  body2Layout: {
    height: 22,

  },
  subheadingLayout3: {
    width: 40,
    left: 0,
  },
  subheadingWrapperLayout: {
    height: 21,
 
  },
  subheadingLayout1: {
    width: 80,
    height: 21,
    position: "absolute",
  },
  subheadingLayout: {
    width: 37,
    height: 21,
    position: "absolute",
  },
  subheadingWrapperBg: {
    backgroundColor: Color.silver,
    top: 46,
    overflow: "hidden",
  },
  accentPosition: {
    top: 0,
    position: "absolute",
  },
  flatdefaultPosition: {
    marginTop: -12,
    height: 24,
    top: "50%",
    position: "absolute",
  },
  pantallaMedidasCorporalesChild: {
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
    height: 276,
    left: 0,
  },
  frameItem: {
    top: 23,
  },
  frameInner: {
    top: 46,
    height: 1,
    width: 300,
    borderTopWidth: 1,
    borderColor: "rgba(95, 95, 95, 0.19)",
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  lineView: {
    top: 68,
  },
  frameChild1: {
    top: 90,
  },
  frameChild2: {
    left: 175,
  },
  frameChild3: {
    left: 94,
  },
  frameChild4: {
    left: 41,
  },
  subheading: {
    width: 68,
  },
  spSubheadingRegular: {
    right: 206,
    left: 43,
    height: 24,
    top: "50%",
  },
  subheading1: {
    width: 101,
  },
  spSubheadingRegular1: {
    right: 128,
    left: 96,
    height: 24,
    top: "50%",
  },
  subheading2: {
    width: 30,
  },
  spSubheadingRegular2: {
    right: 94,
    left: 176,
    height: 24,
    top: "50%",
  },
  subheading3: {
    width: 36,
  },
  spSubheadingRegular3: {
    right: 259,
    left: 5,
    height: 24,
    top: "50%",
  },
  spSubheadingRegularParent: {
    left: -1,
    backgroundColor: Color.gainsboro_100,
    width: 300,
    height: 23,
    top: 0,
    position: "absolute",
  },
  subheading4: {
    lineHeight: 18,
    fontSize: FontSize.size_sm,
    justifyContent: "center",
    fontFamily: FontFamily.robotoRegular,
    top: 0,
    width: 81,
    position: "absolute",
    height: 24,
    left: 0,
  },
  spSubheadingRegular4: {
    height: 24,
    top: "50%",
    marginTop: -11.5,
    position: "absolute",
  },
  spSubheadingRegularWrapper: {
    top: 24,
    height: 23,
    overflow: "hidden",
    left: 0,
  },
  subheading5: {
    width: 38,
    position: "absolute",
    height: 24,
  },
  spSubheadingRegularContainer: {
    height: 23,
    overflow: "hidden",
    left: 2,
    top: 28,
  },
  subheading6: {
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    display: "flex",
    color: Color.textColor,
    lineHeight: 18,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.robotoRegular,
    top: 0,
    height: 24,
    position: "absolute",
  },
  spSubheadingRegular6: {
    marginTop: -11,
    height: 0,
    top: "50%",
    position: "absolute",
  },
  spSubheadingRegularFrame: {
    width: 40,
    left: 0,
    top: 24,
    overflow: "hidden",
  },
  subheading7: {
    width: 52,
    height: 21,
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    display: "flex",
    color: Color.textColor,
    lineHeight: 18,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.robotoRegular,
    top: 0,
    left: 0,
  },
  spSubheadingRegular7: {
    marginTop: -10.5,
    right: 0,
    left: 0,
    top: "50%",
  },
  frameView: {
    top: 24,
    width: 52,
    height: 21,
    left: 0,
    overflow: "hidden",
  },
  subheading8: {
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    display: "flex",
    color: Color.textColor,
    lineHeight: 18,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.robotoRegular,
    top: 0,
    left: 0,
  },
  spSubheadingRegularWrapper1: {
    backgroundColor: Color.silver,
    top: 46,
    overflow: "hidden",
    left: 94,
  },
  subheading9: {
    lineHeight: 10,
    fontSize: FontSize.size_5xs,
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    display: "flex",
    color: Color.textColor,
    fontFamily: FontFamily.robotoRegular,
    left: 0,
    top: 0,
  },
  spSubheadingRegularWrapper2: {
    backgroundColor: Color.silver,
    top: 46,
    overflow: "hidden",
    left: 175,
  },
  subheading10: {
    width: 40,
    left: 0,
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    display: "flex",
    color: Color.textColor,
    lineHeight: 18,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.robotoRegular,
    top: 0,
  },
  spSubheadingRegularWrapper3: {
    height: 21,
    position: "absolute",
    width: 40,
    left: 0,
  },
  spSubheadingRegularWrapper4: {
    height: 21,
    position: "absolute",
    width: 52,
    left: 41,
  },
  rectangleParent: {
    left: 1,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    width: 212,
    height: 256,
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
    textTransform: "uppercase",
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
    width: 56,
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    display: "flex",
    color: Color.textColor,
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
    left: 227,
    width: 79,
    height: 38,
  },
  frameParent: {
    top: 129,
    width: 312,
    left: 22,
    height: 256,
    position: "absolute",
  },
  medidasCorporales: {
    top: 80,
    fontSize: FontSize.size_xl,
    color: Color.black,
    textAlign: "center",
    fontFamily: FontFamily.robotoRegular,
    left: 22,
    position: "absolute",
  },
  pantallaMedidasCorporales: {
    backgroundColor: Color.lightColor,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default PantallaMedidasCorporales;
