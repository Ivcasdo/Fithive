import * as React from "react";
import {
  ImageBackground,
  StyleSheet,
  Pressable,
  View,
  Text,TouchableWithoutFeedback, Modal
} from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import Submenu from "./PantallaMenu";
import { useState, useEffect } from "react";
import auth, { firebase } from '@react-native-firebase/auth';
const PantallaPerfilDeUsuario = () => {
  const navigation = useNavigation();
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const user = auth().currentUser;
  const [nombreUsuario,setNombreUsuario] = useState('');
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
  const handleLogout = () => {
    auth().signOut().then(() => console.log('User signed out!'));
    navigation.navigate("PantallaIniciarSesion")
  }
  useEffect(()=>{
    const nombreUsRef = firebase.app().database('https://tfgivan-b5e4b-default-rtdb.europe-west1.firebasedatabase.app').ref(`users/${user.uid}/nombre`);
    const handleNombreUsuarioChange = (snapshot) => {
      setNombreUsuario(snapshot.val());
    };
    nombreUsRef.on('value', handleNombreUsuarioChange);
    return () => {
      nombreUsRef.off('value', handleNombreUsuarioChange);
    };
  },[])
  return (
    <TouchableWithoutFeedback onPress={handleScreenPress}>
    <View style={styles.pantallaPerfilDeUsuario}>
      <ImageBackground
        style={[
          styles.pantallaPerfilDeUsuarioChild,
          styles.firstLevelDefaultParentPosition,
        ]}
        resizeMode="cover"
        source={require("../assets/IconoApp.png")}
      />
      <Pressable style={[styles.ellipseParent, styles.darkFlexBox]} onPress={handleOpenSubmenu}>
        <Image
          style={styles.frameChildLayout}
          contentFit="cover"
          source={require("../assets/ellipse-3.png")}
        />
        <View
          style={[
            styles.materialSymbolsarrowBack,
            styles.chevronRightIconLayout,
          ]}
        >
          <Image
            style={styles.vectorIcon}
            contentFit="cover"
            source={require("../assets/vector.png")}
          />
        </View>
      </Pressable>
      <View style={styles.spBody2Medium}>
        <Text style={[styles.body2, styles.body2FlexBox]}>{nombreUsuario}</Text>
      </View>
      <View
        style={[
          styles.firstLevelDefaultParent,
          styles.firstLevelDefaultParentPosition,
        ]}
      >
        <Pressable style={[styles.firstLevelDefault, styles.firstPosition]} onPress={() => navigation.navigate("PantallaCambioNombreUsuairo")}>
          <View style={[styles.light, styles.lightFlexBox]}>
            <View style={[styles.bgLight, styles.lightLayout]} />
          </View>
          <Image
            style={[styles.chevronRightIcon, styles.chevronRightIconLayout]}
            contentFit="cover"
            source={require("../assets/chevronright.png")}
          />
          <View style={[styles.spSubheadingRegular, styles.lightFlexBox]}>
            <Text
              style={[styles.subheading, styles.body2FlexBox]}
            >{`Cambiar nombre de usuario `}</Text>
          </View>
        </Pressable>
        <Pressable style={[styles.firstLevelDefault1, styles.firstPosition]} onPress={() => navigation.navigate("PantallaCambioContrasea")}>
          <View style={[styles.light, styles.lightFlexBox]}>
            <View style={[styles.bgLight1, styles.lightLayout]} />
          </View>
          <Image
            style={[styles.chevronRightIcon, styles.chevronRightIconLayout]}
            contentFit="cover"
            source={require("../assets/chevronright.png")}
          />
          <View style={[styles.spSubheadingRegular, styles.lightFlexBox]}>
            <Text style={[styles.subheading, styles.body2FlexBox]}>
              Cambiar contraseña
            </Text>
          </View>
        </Pressable>

        <Pressable style={[styles.firstLevelDefault3, styles.firstPosition]}onPress={() => navigation.navigate("PantallaCambioCorreoElectronico")}>
          <View style={[styles.light, styles.lightFlexBox]}>
            <View style={[styles.bgLight1, styles.lightLayout]} />
          </View>
          <Image
            style={[styles.chevronRightIcon, styles.chevronRightIconLayout]}
            contentFit="cover"
            source={require("../assets/chevronright.png")}
          />
          <View style={[styles.spSubheadingRegular, styles.lightFlexBox]}>
            <Text style={[styles.subheading, styles.body2FlexBox]}>
              Cambiar correo electronico
            </Text>
          </View>
        </Pressable>
       
        
        <Pressable style={[styles.dark, styles.darkLayout]} onPress={handleLogout}>
          <Image
            style={[styles.darkIcon, styles.darkLayout]}
            contentFit="cover"
            source={require("../assets/-dark111.png")}
          />
        </Pressable>
      </View>
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
  
  firstLevelDefaultParentPosition: {
    left: 20,
    position: "absolute",
  },
  darkFlexBox: {
    alignItems: "center",
    position: "absolute",
  },
  chevronRightIconLayout: {
    height: 24,
    width: 24,
  },
  body2FlexBox: {
    textAlign: "left",
    color: Color.textColor,
    height: 18,
  },
  firstPosition: {
    height: 48,
    left: -16,
    right: -8,
    position: "absolute",
  },
  lightFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  lightLayout: {
    borderRadius: Border.br_10xs,
    height: 48,
    backgroundColor: Color.lightColor,
  },
  darkLayout: {
    height: 40,
    width: 106,
  },
  pantallaPerfilDeUsuarioChild: {
    top: 65,
    width: 49,
    height: 49,
  },
  frameChildLayout: {
    height: 32,
    width: 32,
  },
  vectorIcon: {
    height: "66.67%",
    width: "66.67%",
    top: "16.67%",
    right: "16.67%",
    bottom: "16.67%",
    left: "16.67%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  materialSymbolsarrowBack: {
    marginTop: -28,
    overflow: "hidden",
  },
  ellipseParent: {
    top: 18,
    left: 13,
    height: 32,
    width: 32,
  },
  body2: {
    top: 0,
    left: 0,
    fontSize: FontSize.spBUTTON_size,
    lineHeight: 18,
    fontWeight: "500",
    fontFamily: FontFamily.spBUTTON,
    width: 111,
    position: "absolute",
  },
  spBody2Medium: {
    top: 119,
    width: 86,
    height: 18,
    left: 20,
    position: "absolute",
  },
  bgLight: {
    alignSelf: "stretch",
  },
  light: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    display: "none",
    width: "100%",
  },
  chevronRightIcon: {
    marginTop: -12,
    top: "50%",
    right: 8,
    opacity: 0.4,
    position: "absolute",
  },
  subheading: {
    fontSize: FontSize.size_base,
    lineHeight: 21,
    fontFamily: FontFamily.spCaptionRegular,
    width: 272,
  },
  spSubheadingRegular: {
    top: 15,
    right: 56,
    bottom: 15,
    left: 16,
  },
  firstLevelDefault: {
    top: -3,
  },
  bgLight1: {
    width: 344,
  },
  firstLevelDefault1: {
    top: 45,
  },
  firstLevelDefault2: {
    top: 141,
  },
  firstLevelDefault3: {
    top: 93,
  },
  firstLevelDefault4: {
    top: 189,
  },
  firstLevelDefault5: {
    top: 237,
  },
  darkIcon: {
    borderRadius: Border.br_7xs,
    opacity: 0.81,
  },
  dark: {
    bottom: 169,
    left: 166,
    justifyContent: "flex-end",
    alignItems: "center",
    position: "absolute",
  },
  firstLevelDefaultParent: {
    top: 143,
    width: 320,
    height: 510,
    overflow: "hidden",
  },
  pantallaPerfilDeUsuario: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.lightColor,
  },
});

export default PantallaPerfilDeUsuario;
