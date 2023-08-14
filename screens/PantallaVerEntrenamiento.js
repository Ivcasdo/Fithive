import * as React from "react";
import { View, Text, StyleSheet, Pressable, FlatList } from "react-native";
import { Image } from "expo-image";
import { FontFamily, Color, FontSize } from "../GlobalStyles";
import { useState,useEffect } from "react";
const PantallaVerEntrenamientos = ({onClose, entrenamiento}) => {
    const [listaEjercicios, setListaEjercicios] = useState([]);
    const handlePantallaSuperpuesta = ()=>{
        onClose();
    }
    useEffect(()=>{
        setListaEjercicios(entrenamiento.ejercicios);
    },[])
  return (
    <View style={styles.pantallaVerEntrenamientos}>
      <View style={[styles.lightHamburger, styles.defaultPosition]}>
        <View style={styles.spTitleMedium}>
          <Text style={styles.title}>{entrenamiento.nombre}</Text>
        </View>
        <Pressable onPress={handlePantallaSuperpuesta}>
            <Image
            style={styles.closeIcon}
            contentFit="cover"
            source={require("../assets/close.png")}
            />
        </Pressable>
      </View>
      <View style={[styles.cover]}>
        <Text style={[styles.ejercicios, styles.subheadingTypo]}>
          Ejercicios
        </Text>
        <FlatList
            data={listaEjercicios}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index}) => (
                <View style={[styles.default, styles.defaultPosition]}>
                    <View style={[styles.caption, styles.captionPosition]}>
                        <Text style={[styles.caption1, styles.captionPosition]}>
                            {item.nombre}
                        </Text>
                    </View>

                    {Object.values(item.series).map((serie, idx) => (
                        <View key={idx} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 7 }}>
                            <View style={[styles.stroke, styles.strokeLayout, ]}>
                                <View style={styles.bgPrimary} />
                            </View>
                            <View style={[styles.spSubheadingRegular, styles.subheadingLayout1, ]}>
                                <Text style={[styles.subheading, styles.subheadingTypo]}>
                                    {serie.peso} kg
                                </Text>
                            </View>
                            
                            <View style={[styles.stroke1, styles.stroke1Position,]}>
                                <View style={styles.bgPrimary} />
                            </View>
                            <View style={[styles.spSubheadingRegular1, styles.stroke1Position,]}>
                                <Text style={[styles.subheading1, styles.subheadingTypo]}>
                                    {serie.repeticiones} rep
                                </Text>
                            </View>
                        </View>
                    ))}

                </View>
            )}
            contentContainerStyle={{ bottom:0, top:45}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  defaultPosition: {
    left: 0,

  },
  strokeLayout: {
    opacity: 0.4,
    height: 1,
    bottom: 0,
  },
  subheadingLayout1: {
    opacity: 0.54,
    height: 20,
    bottom: 6,
  },
  subheadingTypo: {
    fontFamily: FontFamily.spCaptionRegular,
    textAlign: "left",
    
  },
  stroke1Position: {
    left: 93,
    right: 0,

  },
  captionPosition: {
    height: 16,
    left: 0,
  },
  title: {
    lineHeight: 26,
    fontWeight: "500",
    fontFamily: FontFamily.spTitleMedium,
    width: 216,
    height: 24,
    textAlign: "left",
    color: Color.textColor,
    fontSize: FontSize.spTitleMedium_size,
    left: 0,
    top: 0,
    position: "absolute",
  },
  spTitleMedium: {
    top: 16,
    right: 72,
    bottom: 16,
    left: 72,
    position: "absolute",
  },
  closeIcon: {
    top: 8,
    left: 8,
    width: 40,
    height: 40,
    position: "absolute",
  },
  lightHamburger: {
    height: 66,
    right: 0,
    top: 0,
    left: 0,
    backgroundColor: 'white',
    zIndex:90,
  },
  bgPrimary: {
    backgroundColor: Color.textColor,
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
    position: "absolute",
  },
  stroke: {
    right: 96,
    left: 0,

  },
  subheading: {
    width: 50,
    lineHeight: 21,
    fontSize: FontSize.spSubheadingRegular_size,
    fontFamily: FontFamily.spCaptionRegular,
    height: 20,
    color: Color.textColor,
    left: 0,
    top: 0,
    position: "absolute",
  },
  spSubheadingRegular: {
    right: 96,
    left: 0,

  },
  stroke1: {
    opacity: 0.4,
    height: 1,
    bottom: 0,
  },
  subheading1: {
    width: 50,
    lineHeight: 21,
    fontSize: FontSize.spSubheadingRegular_size,
    fontFamily: FontFamily.spCaptionRegular,
    height: 20,
    color: Color.textColor,
    left: 0,
    top: 0,
    position: "absolute",
  },
  spSubheadingRegular1: {
    opacity: 0.54,
    height: 20,
    bottom: 6,
  },
  caption1: {
    fontSize: FontSize.spCaptionRegular_size,
    lineHeight: 15,
    width: 159,
    fontFamily: FontFamily.spCaptionRegular,
    textAlign: "left",
    color: Color.textColor,
    height: 16,
    top: 0,
  },
  caption: {
    bottom: 0,
    right: 0,
    marginBottom: 5,
  },
  default: {
    top: 0,
    right: 141,
    height: 100,
  },
  ejercicios: {
    top: 7,
    color: Color.black,
    width: 141,
    height: 36,
    fontFamily: FontFamily.spCaptionRegular,
    fontSize: FontSize.spTitleMedium_size,
    left: 0,
    position: "absolute",
    zIndex:100,
    backgroundColor:'white'
  },
  cover: {
    top: 56,
    right: 31,
    left: 29,
    height: 200,
    position: "absolute",
  },
  pantallaVerEntrenamientos: {
    backgroundColor: Color.lightColor,
    flex: 1,
    width: "100%",
    height: 531,
  },
});

export default PantallaVerEntrenamientos;
