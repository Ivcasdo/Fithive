import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, TextInput, Pressable,TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Border, FontSize, FontFamily, Color } from "../GlobalStyles";
import auth, { firebase } from '@react-native-firebase/auth';
import { isEqual } from "lodash";

const PantallaMedidasCorporales2 = ({ onClose, editarmedida,medidaEditar }) => {

  const user = auth().currentUser;
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [cintura, setCintura] = useState('');
  const [cuello, setCuello] = useState('');
  const [cadera, setCadera] = useState('');
  const [genero, setGenero] = useState('Masculino');
  const opcionesGenero = ['Masculino','Femenino'];
  const [showOptions, setShowOptions] = useState(false);
  const handlePress = () => {
    setShowOptions(!showOptions);
  };
  const handleChangePeso = (text) =>{
    if (!text.match(/^[.,]/)) {
        setPeso(text);
    }
    
  };
  const handleChangeAltura = (text) =>{
    if (!text.match(/^[.,]/)) {
      setAltura(text);
  }
    
  };
  const handleChangeCintura = (text) =>{
    if (!text.match(/^[.,]/)) {
      setCintura(text);
  }
    
  };
  const handleChangeCuello = (text) =>{
    if (!text.match(/^[.,]/)) {
      setCuello(text);
  }
  };
  const handleChangecadera = (text) =>{
    if (!text.match(/^[.,]/)) {
      setCadera(text);
  }
    
  };

  const handleGuardarMedida= () =>{
    const today = new Date();
    // Obtener los valores de día, mes y año
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Los meses en JavaScript comienzan desde 0
    const year = String(today.getFullYear()).slice(-2); // Obtener los últimos dos dígitos del año

    const formattedDate = `${day}/${month}/${year}`;
    let indiceGrasas = '';
    if(altura != '' && cintura !='' && cuello != ''){
      if(genero === 'Masculino'){
        const result = 1.0324 - 0.19077 * Math.log10(cintura - cuello) + 0.15456 * Math.log10(altura);
        indiceGrasas = Number(((495 / result) - 450).toFixed(1));
      }else{
        if(cadera != ''){
          const result = 1.29579 - 0.35004 * Math.log10(cintura + cadera - cuello) + 0.22100 * Math.log10(altura);
          indiceGrasas = Number(((495 / result) - 450).toFixed(1));
        }
      }
    }
    let medida = '';
    if(genero==='Masculino'){
        medida = {
          peso: peso,
          fecha: formattedDate,
          cintura: cintura,
          indiceGrasa: `${indiceGrasas}%`,
          genero: genero,
          altura: altura,
          cuello: cuello
        };
    }else{
        medida = {
          peso: peso,
          fecha: formattedDate,
          cintura: cintura,
          indiceGrasa: `${indiceGrasas}%`,
          genero: genero,
          altura: altura,
          cuello: cuello,
          cadera: cadera,
        };
    }
    if(editarmedida){
      console.log(medidaEditar, medida)
      if(isEqual(medida,medidaEditar)){
        console.log('sin cambios');
        onClose();
      }else{
        const medidasRef = firebase.app().database('https://tfgivan-b5e4b-default-rtdb.europe-west1.firebasedatabase.app').ref(`users/${user.uid}/medidasCorporales`);
        medidasRef.once('value', (snapshot) => {
          snapshot.forEach((childSnapshot) => {
            const medid = childSnapshot.val();
            if(isEqual(medid,medidaEditar)){
              if(peso!=''){
                medidasRef.child(childSnapshot.key).update({peso: peso});
              }
              if(cintura!=''){
                medidasRef.child(childSnapshot.key).update({cintura: cintura});
              }
              if(cuello!=''){
                medidasRef.child(childSnapshot.key).update({cuello: cuello});
              }
              if(cadera!=''){
                medidasRef.child(childSnapshot.key).update({cadera: cadera});
              }
              if(indiceGrasas!=''){
                medidasRef.child(childSnapshot.key).update({indiceGrasa: indiceGrasas});
              }
            }
          })
        });
      }
    }else{
      const medidasRef = firebase.app().database('https://tfgivan-b5e4b-default-rtdb.europe-west1.firebasedatabase.app').ref(`users/${user.uid}/medidasCorporales`);
      medidasRef.once('value', (snapshot) => {
        if (snapshot.exists()) {
          let existeMedidaConMismaFecha = false;

          // Itera a través de todas las medidas en la snapshot
          snapshot.forEach(childSnapshot => {
            const childData = childSnapshot.val();
            if (childData.fecha === medida.fecha) {
              existeMedidaConMismaFecha = true;
            }
          });

          // Si no hay una medida con la misma fecha, agrega la nueva medida
          if (!existeMedidaConMismaFecha) {
            const nuevaMedidaRef = medidasRef.push();
            nuevaMedidaRef.set(medida);
          } else {
            alert("Ya has creado una medida en el dia de hoy");
          }
        }else{
          const nuevaMedidaRef = medidasRef.push();
          nuevaMedidaRef.set(medida);
        }
      });
    }
    onClose();
  };
  const handleBorrarMedida = () =>{
    const medidasRef = firebase.app().database('https://tfgivan-b5e4b-default-rtdb.europe-west1.firebasedatabase.app').ref(`users/${user.uid}/medidasCorporales`);
    medidasRef.once('value', (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        const medida = childSnapshot.val();
        if(isEqual(medida, medidaEditar)){
          medidasRef.child(childSnapshot.key).remove();
        }
      })
    });
    onClose();
  };
  useEffect(() => {
    if(editarmedida){
      setAltura(medidaEditar.altura);
      setCintura(medidaEditar.cintura);
      setPeso(medidaEditar.peso);
      setCuello(medidaEditar.cuello);
    }
  },[]);
  return (
    <View style={styles.pantallaMedidasCorporales2}>
      <View style={[styles.lightHamburger, styles.default2Layout]}>
        <View style={styles.light}>
          <View style={[styles.bgLight, styles.dark3Position]} />
        </View>
        <View style={styles.spTitleMedium}>
          <Text style={styles.title}>{`Medidas Corporales
`}</Text>
        </View>
        <Image
          style={styles.closeIcon}
          contentFit="cover"
          source={require("../assets/close.png")}
        />
      </View>
      <View style={[styles.cover, styles.coverPosition]}>
        <View style={[styles.default, styles.defaultPosition]}>
          <View style={[styles.stroke, styles.dark3Position]}>
            <View style={[styles.bgPrimary, styles.dark3Position]} />
          </View>
          <TextInput
            style={[styles.spSubheadingRegular, styles.coverPosition]}
            placeholder="70 kg"
            keyboardType="numeric"
            maxLength={3}
            placeholderTextColor="rgba(0, 0, 0, 0.87)"
            value={peso}
            onChangeText={handleChangePeso}
          />
          <View style={[styles.caption, styles.captionPosition]}>
            <Text style={[styles.caption1, styles.captionPosition]}>Peso</Text>
          </View>
        </View>
        <View style={[styles.default1, styles.defaultPosition]}>
          <View style={[styles.stroke, styles.dark3Position]}>
            <View style={[styles.bgPrimary, styles.dark3Position]} />
          </View>
          <TextInput
            style={[styles.spSubheadingRegular, styles.coverPosition]}
            placeholder="170 cm"
            keyboardType="numeric"
            maxLength={3}
            placeholderTextColor="rgba(0, 0, 0, 0.87)"
            value={altura}
            onChangeText={handleChangeAltura}
          />
          <View style={[styles.caption, styles.captionPosition]}>
            <Text style={[styles.caption1, styles.captionPosition]}>
              Altura
            </Text>
          </View>
        </View>
        <View style={[styles.default2, styles.default2Layout]}>
          <View style={[styles.stroke, styles.dark3Position]}>
            <View style={[styles.bgPrimary, styles.dark3Position]} />
          </View>
          <TextInput
            style={[styles.spSubheadingRegular, styles.coverPosition]}
            placeholder="100 cm"
            keyboardType="numeric"
            maxLength={3}
            placeholderTextColor="rgba(0, 0, 0, 0.87)"
            value={cintura}
            onChangeText={handleChangeCintura}
          />
          <View style={[styles.caption, styles.captionPosition]}>
            <Text style={[styles.caption1, styles.captionPosition]}>
              Cintura
            </Text>
          </View>
        </View>
        <View style={[styles.default3, styles.default2Layout]}>
          <View style={[styles.stroke, styles.dark3Position]}>
            <View style={[styles.bgPrimary, styles.dark3Position]} />
          </View>
          <TextInput
            style={[styles.spSubheadingRegular, styles.coverPosition]}
            placeholder="50 cm"
            keyboardType="numeric"
            maxLength={3}
            placeholderTextColor="rgba(0, 0, 0, 0.87)"
            value={cuello}
            onChangeText={handleChangeCuello}
          />
          <View style={[styles.caption, styles.captionPosition]}>
            <Text style={[styles.caption1, styles.captionPosition]}>
              Cuello
            </Text>
          </View>
        </View>
        {
          genero === 'Femenino' && (
            <View style={[styles.default11, styles.defaultPosition]}>
              <View style={[styles.stroke, styles.dark3Position]}>
                <View style={[styles.bgPrimary, styles.dark3Position]} />
              </View>
              <TextInput
                style={[styles.spSubheadingRegular, styles.coverPosition]}
                placeholder="120 cm"
                keyboardType="numeric"
                maxLength={3}
                placeholderTextColor="rgba(0, 0, 0, 0.87)"
                value={cadera}
                onChangeText={handleChangecadera}
              />
              <View style={[styles.caption, styles.captionPosition]}>
                <Text style={[styles.caption1, styles.captionPosition]}>
                  Cadera
                </Text>
              </View>
            </View>
          )
        }
        <Pressable style={[styles.dropdown2, styles.dropdown2Layout]} onPress={handlePress}>
          <View style={[styles.stroke, styles.dark3Position]}>
            <View style={[styles.bgPrimary, styles.dark3Position]} />
          </View>
          <View style={styles.spSubheadingRegular3}>
            <Text style={[styles.subheading2, styles.dropdown2Layout]}>
              {genero}
            </Text>
          </View>
            <Image
              style={styles.dropdownIcon}
              contentFit="cover"
              source={require("../assets/dropdown1.png")}
            />
          <View style={styles.caption}>
            <Text style={[styles.caption11, styles.dropdown2Layout]}>Genero</Text>
          </View>
          {showOptions && (
            <View style={styles.filtroObjetivos}>
              {opcionesGenero.map((generos, index) => (
                <TouchableOpacity
                  style={{ padding: 3 }}
                  key={index}
                  onPress={() => {
                    setGenero(generos);
                    setShowOptions(false); // Oculta las opciones cuando se selecciona una opción
                  }}
                >
                  <Text>{generos}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </Pressable>
      </View>
      
        
      <Pressable style={[styles.dark, styles.darkPosition]}onPress={handleGuardarMedida}>
        <View style={styles.light}>
          <LinearGradient
            style={[styles.bgPrimary3, styles.bgOutlinePosition]}
            locations={[0, 1]}
            colors={["#1a73e9", "#6c92f4"]}
          />
        </View>
        <View style={[styles.flatdefault, styles.flatdefaultPosition]}>
          <View style={[styles.spBody2Medium, styles.flatdefaultPosition1]}>
            <Text style={[styles.body2, styles.bodyTypo]}>Guardar</Text>
          </View>
        </View>
      </Pressable>
      {editarmedida && (
      <Pressable style={[styles.dark2, styles.darkPosition]}onPress={handleBorrarMedida}>
        <View style={[styles.dark3, styles.dark3Position]}>
          <View style={styles.bgOutlinePosition} />
        </View>
        <View style={[styles.flatdefault1, styles.flatdefaultPosition]}>
          <View style={[styles.spBody2Medium, styles.flatdefaultPosition1]}>
            <Text style={[styles.body21, styles.bodyTypo]}>borrar</Text>
          </View>
        </View>
      </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  filtroObjetivos:{
    backgroundColor: 'white',
    left:0,
    top:16,
    maxHeight:90,
    position: 'absolute',
    zIndex: 90,
    width: '100%',
    flex:1
  },
  caption11: {
    lineHeight: 15,
    fontSize: FontSize.size_xs,
    height: 16,
    fontFamily: FontFamily.robotoRegular,
    textAlign: "left",
    color: Color.textColor,
    left: 0,
    top: 0,
  },
  dropdownIcon: {
    width: 32,
    height: 32,
    bottom: 0,
    right: 0,
    top:-14,
    position: "absolute",
  },
  subheading2: {
    lineHeight: 21,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.robotoRegular,
    height: 20,
    textAlign: "left",
    color: Color.textColor,
    left: 0,
    top: 0,
  },
  spSubheadingRegular3: {
    opacity: 0.87,
    height: 20,
    bottom: 6,
    left: 0,
    right: 0,
    position: "absolute",
  },
  bgPrimary4: {
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  },
  bgPrimary4Bg: {
    backgroundColor: Color.grayColor,
    position: "absolute",
  },
  lightPosition: {
    left: 0,
    right: 0,
  },
  dropdown2: {
    top: 140,
    left: 186,
    height: 16,
  },
  dropdown2Layout: {
    width: 112,
    position: "absolute",
  },
  default2Layout: {
    height: 56,
    position: "absolute",
  },
  dark3Position: {
    bottom: 0,
    left: 0,
    right: 0,
    position: "absolute",
  },
  coverPosition: {
    left: 0,
    right: 0,
  },
  defaultPosition: {
    left: 29,
    right: 222,
    height: 56,
    position: "absolute",
  },
  captionPosition: {
    height: 16,
    left: 0,
    position: "absolute",
  },
  darkPosition: {
    top: 220,
    height: 40,
    position: "absolute",
  },
  bgOutlinePosition: {
    borderRadius: Border.br_7xs,
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
    position: "absolute",
  },
  flatdefaultPosition: {
    right: 8,
    left: 8,
    position: "absolute",
  },
  flatdefaultPosition1: {
    top: "50%",
    marginTop: -12,
    height: 24,
  },
  bodyTypo: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    textTransform: "uppercase",
    fontSize: FontSize.size_sm,
    height: 24,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    left: 0,
    top: 0,
    position: "absolute",
  },
  bgLight: {
    top: 0,
    backgroundColor: Color.lightColor,
  },
  light: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  title: {
    fontSize: FontSize.size_xl,
    lineHeight: 26,
    width: 216,
    height: 24,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    textAlign: "left",
    color: Color.textColor,
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
    width: 40,
    height: 40,
    left: 8,
    top: 8,
    position: "absolute",
  },
  lightHamburger: {
    left: 0,
    right: 0,
    top: 0,
  },
  bgPrimary: {
    backgroundColor: Color.textColor,
    top: 0,
  },
  stroke: {
    height: 1,
    opacity: 0.4,
  },
  spSubheadingRegular: {
    bottom: 6,
    height: 20,
    opacity: 0.54,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.robotoRegular,
    position: "absolute",
  },
  caption1: {
    fontSize: FontSize.size_xs,
    lineHeight: 15,
    width: 109,
    fontFamily: FontFamily.robotoRegular,
    textAlign: "left",
    height: 16,
    color: Color.textColor,
    top: 0,
  },
  caption: {
    bottom: 32,
    height: 16,
    right: 0,
  },
  default: {
    top: -3,
  },
  default1: {
    top: 49,
  },
  default11: {
    top: 100,
  },
  default2: {
    right: 65,
    left: 186,
    top: -3,
  },
  default3: {
    right: 65,
    left: 186,
    top: 49,
  },
  cover: {
    top: 48,
    height: 105,
    position: "absolute",
  },
  bgPrimary3: {
    shadowColor: "rgba(38, 50, 56, 0.08)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    backgroundColor: Color.accentColor,
  },
  body2: {
    color: Color.lightColor,
    width: 112,
  },
  spBody2Medium: {
    left: 0,
    right: 0,
    position: "absolute",
  },
  flatdefault: {
    top: "50%",
    marginTop: -12,
    height: 24,
  },
  dark: {
    right: 204,
    left: 28,
  },
  dark3: {
    opacity: 0.32,
    top: 0,
  },
  body21: {
    width: 56,
    color: Color.textColor,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    textTransform: "uppercase",
    fontSize: FontSize.size_sm,
  },
  flatdefault1: {
    bottom: 8,
    top: 8,
    right: 8,
  },
  dark2: {
    left: 192,
    width: 72,
  },
  pantallaMedidasCorporales2: {
    flex: 0.37,
    height: 270,
    width: "100%",
    backgroundColor: Color.lightColor,
    position: "absolute",
    bottom: 0,
  },
});

export default PantallaMedidasCorporales2;
