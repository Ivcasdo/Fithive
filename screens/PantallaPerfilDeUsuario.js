import * as React from "react";
import {
  ImageBackground,
  StyleSheet,
  Pressable,
  View,
  Text,
} from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const PantallaPerfilDeUsuario = () => {
  return (
    <View style={styles.pantallaPerfilDeUsuario}>
      <ImageBackground
        style={[
          styles.pantallaPerfilDeUsuarioChild,
          styles.firstLevelDefaultParentPosition,
        ]}
        resizeMode="cover"
        source={require("../assets/ellipse21.png")}
      />
      <Pressable style={[styles.ellipseParent, styles.darkFlexBox]}>
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
        <Text style={[styles.body2, styles.body2FlexBox]}>Ejemplo nombre</Text>
      </View>
      <View
        style={[
          styles.firstLevelDefaultParent,
          styles.firstLevelDefaultParentPosition,
        ]}
      >
        <Pressable style={[styles.firstLevelDefault, styles.firstPosition]}>
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
        <Pressable style={[styles.firstLevelDefault1, styles.firstPosition]}>
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
        <Pressable style={[styles.firstLevelDefault2, styles.firstPosition]}>
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
              Cambiar foto de perfil
            </Text>
          </View>
        </Pressable>
        <Pressable style={[styles.firstLevelDefault3, styles.firstPosition]}>
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
        <Pressable style={[styles.firstLevelDefault4, styles.firstPosition]}>
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
              Personalizacion
            </Text>
          </View>
        </Pressable>
        <Pressable style={[styles.firstLevelDefault5, styles.firstPosition]}>
          <View style={[styles.light, styles.lightFlexBox]}>
            <View style={[styles.bgLight1, styles.lightLayout]} />
          </View>
          <Image
            style={[styles.chevronRightIcon, styles.chevronRightIconLayout]}
            contentFit="cover"
            source={require("../assets/chevronright.png")}
          />
          <View style={[styles.spSubheadingRegular, styles.lightFlexBox]}>
            <Text
              style={[styles.subheading, styles.body2FlexBox]}
            >{`Notificaciones `}</Text>
          </View>
        </Pressable>
        <Pressable style={[styles.dark, styles.darkLayout]}>
          <Image
            style={[styles.darkIcon, styles.darkLayout]}
            contentFit="cover"
            source={require("../assets/-dark111.png")}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
    fontSize: FontSize.size_sm,
    lineHeight: 18,
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
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
    fontFamily: FontFamily.robotoRegular,
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
