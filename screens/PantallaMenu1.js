import * as React from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  Pressable,
  Text,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const PantallaMenu1 = () => {
  return (
    <View style={styles.pantallaMenu}>
      <View style={[styles.shadow, styles.shadowPosition]}>
        <View style={[styles.colorsbgCard, styles.shadowPosition]}>
          <View style={[styles.bgLight, styles.lightPosition]} />
        </View>
      </View>
      <View style={[styles.header1, styles.shadowPosition]}>
        <View style={styles.lightPosition}>
          <LinearGradient
            style={[styles.bgPrimary, styles.lightPosition]}
            locations={[0, 1]}
            colors={["#1a73e9", "#6c92f4"]}
          />
        </View>
        <View style={[styles.blur, styles.lightPosition]}>
          <ImageBackground
            style={styles.lightPosition}
            resizeMode="cover"
            source={require("../assets/image1.png")}
          />
        </View>
        <Pressable style={[styles.spBody1Regular, styles.body2Layout]}>
          <Text style={[styles.body1, styles.bodyLayout]}>
            CorreoEjemplo99@gmail.com
          </Text>
          <Image
            style={styles.dropdownIcon}
            contentFit="cover"
            source={require("../assets/dropdown.png")}
          />
        </Pressable>
        <View style={[styles.spBody2Medium, styles.body2Layout]}>
          <Text style={[styles.body2, styles.bodyTypo]}>Jazmin Lopez</Text>
        </View>
        <View style={[styles.avatar, styles.avatarPosition]}>
          <Image
            style={[styles.avatar40x40Icon, styles.lightPosition]}
            contentFit="cover"
            source={require("../assets/avatar-40x40.png")}
          />
        </View>
      </View>
      <View style={[styles.menuModule, styles.shadowPosition]}>
        <View style={styles.lightPosition}>
          <View style={[styles.bgLight1, styles.lightPosition]} />
        </View>
        <Pressable style={[styles.defaultIcon, styles.defaultIconPosition]}>
          <View style={[styles.colorsbgCard, styles.shadowPosition]}>
            <View style={[styles.bgLight1, styles.lightPosition]} />
          </View>
          <Image
            style={[styles.accountIcon, styles.accountIconPosition]}
            contentFit="cover"
            source={require("../assets/account.png")}
          />
          <View style={[styles.spBody2Medium1, styles.accountIconPosition]}>
            <Text style={[styles.body21, styles.bodyTypo]}>
              Perfil Personal
            </Text>
          </View>
        </Pressable>
        <Pressable style={[styles.defaultIcon1, styles.defaultIconPosition]}>
          <View style={[styles.colorsbgCard, styles.shadowPosition]}>
            <View style={[styles.bgLight1, styles.lightPosition]} />
          </View>
          <Image
            style={[styles.accountIcon, styles.accountIconPosition]}
            contentFit="cover"
            source={require("../assets/account.png")}
          />
          <View style={[styles.spBody2Medium1, styles.accountIconPosition]}>
            <Text style={[styles.body21, styles.bodyTypo]}>Home</Text>
          </View>
        </Pressable>
        <Pressable style={[styles.defaultIcon2, styles.defaultIconPosition]}>
          <View style={[styles.colorsbgCard, styles.shadowPosition]}>
            <View style={[styles.bgLight1, styles.lightPosition]} />
          </View>
          <Image
            style={[styles.accountIcon, styles.accountIconPosition]}
            contentFit="cover"
            source={require("../assets/bank.png")}
          />
          <View style={[styles.spBody2Medium1, styles.accountIconPosition]}>
            <Text style={[styles.body21, styles.bodyTypo]}>Entrenamientos</Text>
          </View>
        </Pressable>
        <Pressable style={[styles.defaultIcon3, styles.defaultIconPosition]}>
          <View style={[styles.colorsbgCard, styles.shadowPosition]}>
            <View style={[styles.bgLight1, styles.lightPosition]} />
          </View>
          <Image
            style={[styles.accountIcon, styles.accountIconPosition]}
            contentFit="cover"
            source={require("../assets/iconspeople--walk.png")}
          />
          <View style={[styles.spBody2Medium1, styles.accountIconPosition]}>
            <Text style={[styles.body21, styles.bodyTypo]}>
              Medidas Corporales
            </Text>
          </View>
        </Pressable>
        <Pressable style={[styles.defaultIcon4, styles.defaultIconPosition]}>
          <View style={[styles.colorsbgCard, styles.shadowPosition]}>
            <View style={[styles.bgLight1, styles.lightPosition]} />
          </View>
          <Image
            style={[styles.accountIcon, styles.accountIconPosition]}
            contentFit="cover"
            source={require("../assets/iconspeople--walk1.png")}
          />
          <View style={[styles.spBody2Medium1, styles.accountIconPosition]}>
            <Text style={[styles.body21, styles.bodyTypo]}>Estadisticas</Text>
          </View>
        </Pressable>
        <Pressable style={[styles.defaultIcon5, styles.defaultIconPosition]}>
          <View style={[styles.colorsbgCard, styles.shadowPosition]}>
            <View style={[styles.bgLight1, styles.lightPosition]} />
          </View>
          <Image
            style={[styles.accountIcon, styles.accountIconPosition]}
            contentFit="cover"
            source={require("../assets/bank1.png")}
          />
          <View style={[styles.spBody2Medium1, styles.accountIconPosition]}>
            <Text style={[styles.body21, styles.bodyTypo]}>
              Bank account details
            </Text>
          </View>
        </Pressable>
        <Pressable style={[styles.defaultIcon6, styles.defaultIconPosition]}>
          <View style={[styles.colorsbgCard, styles.shadowPosition]}>
            <View style={[styles.bgLight1, styles.lightPosition]} />
          </View>
          <Image
            style={[styles.accountIcon, styles.accountIconPosition]}
            contentFit="cover"
            source={require("../assets/iconspeople--walk2.png")}
          />
          <View style={[styles.spBody2Medium1, styles.accountIconPosition]}>
            <Text style={[styles.body21, styles.bodyTypo]}>Nutricion</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  shadowPosition: {
    left: "0%",
    position: "absolute",
  },
  lightPosition: {
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    position: "absolute",
  },
  body2Layout: {
    height: 20,
    right: 0,
  },
  bodyLayout: {
    width: 293,
    color: Color.lightColor,
  },
  bodyTypo: {
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    lineHeight: 18,
    fontSize: FontSize.size_sm,
    height: 20,
    left: 0,
    top: 0,
    position: "absolute",
  },
  avatarPosition: {
    left: 16,
    position: "absolute",
  },
  defaultIconPosition: {
    height: 48,
    left: 0,
    right: 0,
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.lightColor,
  },
  accountIconPosition: {
    top: "50%",
    position: "absolute",
  },
  bgLight: {
    borderRadius: Border.br_base,
    backgroundColor: Color.lightColor,
  },
  colorsbgCard: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
  },
  shadow: {
    shadowColor: "rgba(38, 50, 56, 0.08)",
    shadowOffset: {
      width: 0,
      height: 16,
    },
    shadowRadius: 16,
    elevation: 16,
    shadowOpacity: 1,
    bottom: 0,
    left: "0%",
    right: "14.17%",
    top: 0,
    width: "85.83%",
  },
  bgPrimary: {
    backgroundColor: Color.accentColor,
  },
  blur: {
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
    overflow: "hidden",
  },
  body1: {
    fontFamily: FontFamily.robotoRegular,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    lineHeight: 18,
    fontSize: FontSize.size_sm,
    width: 293,
    color: Color.lightColor,
    height: 20,
    left: 0,
    top: 0,
    position: "absolute",
  },
  dropdownIcon: {
    right: 16,
    bottom: -2,
    width: 24,
    height: 24,
    position: "absolute",
  },
  spBody1Regular: {
    bottom: 16,
    left: 16,
    position: "absolute",
  },
  body2: {
    width: 293,
    color: Color.lightColor,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
  },
  spBody2Medium: {
    bottom: 36,
    left: 16,
    position: "absolute",
  },
  avatar40x40Icon: {
    borderRadius: Border.br_80xl,
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  avatar: {
    bottom: 72,
    width: 64,
    height: 64,
  },
  header1: {
    height: 191,
    right: "14.17%",
    width: "85.83%",
    left: "0%",
    overflow: "hidden",
    top: 0,
  },
  bgLight1: {
    backgroundColor: Color.lightColor,
  },
  accountIcon: {
    marginTop: -20,
    left: 8,
    width: 40,
    height: 40,
    opacity: 0.4,
  },
  body21: {
    color: Color.textColor,
    width: 237,
  },
  spBody2Medium1: {
    marginTop: -10,
    left: 72,
    height: 20,
    right: 0,
  },
  defaultIcon: {
    top: 244,
  },
  defaultIcon1: {
    top: 8,
  },
  defaultIcon2: {
    top: 56,
  },
  defaultIcon3: {
    top: 152,
  },
  defaultIcon4: {
    top: 200,
  },
  defaultIcon5: {
    top: 248,
    display: "none",
  },
  defaultIcon6: {
    top: 104,
  },
  menuModule: {
    top: 191,
    bottom: 2,
    right: "14.17%",
    width: "85.83%",
    left: "0%",
    overflow: "hidden",
  },
  pantallaMenu: {
    width: 360,
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.lightColor,
  },
});

export default PantallaMenu1;
