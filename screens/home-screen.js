import React from "react";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, Image, Pressable} from "react-native";
import { FlatList } from "react-native-gesture-handler";

const logo = "";
const fondo = "../resources/fondo_HomeScreen";

export default function HomeScreen () {
    const [logiado, isLogiado] = useState(false);

    const navigation = useNavigation();
    const [iniciar, setiniciar] = useState(false);
    const [registrar, setRegistrar] = useState(false);

    const inicioIN = () => setiniciar(true);
    const inicioOUT = () => setiniciar(false);
    const registrarIN = () => setRegistrar(true);
    const registrarOUT = () => setRegistrar(false);

    return(
        <View style = {style.screen}>
            <View style={{width: "100%", height:100, backgroundColor: "#4f6f32", position: "absolute", top:0, left:0, right:0, flexDirection: "row", justifyContent:"flex-end"}}>
                
                <Image source={{uri: logo}} />

                <Pressable onPress={()=>navigation.navigate('Login')} style={style.boton} onPressIn={inicioIN} onPressOut={inicioOUT}>
                    <Text style={iniciar ? style.textoSeleccionado : style.texto }>Inicia sesión</Text>
                </Pressable>
                <Text style={style.texto}>o</Text>
                <Pressable onPress={()=>navigation.navigate('Register')} style={style.boton} onPressIn={registrarIN} onPressOut={registrarOUT}>
                    <Text style={registrar ? style.textoSeleccionado : style.texto}>Registrate</Text>
                </Pressable>
            </View>
            
            <FlatList>
                <Image source={{uri: fondo}} style={[style.screen, StyleSheet.absoluteFillObject]}/>
            </FlatList>
        </View>
    );
}

const style = StyleSheet.create({
    screen:{
        justifyContent: "center",
        alignItems: "center",
    },

    boton:{
        height: "100%",
        position: "relative",
    },

    texto:{
        height: 100,
        display: "flex",
        alignItems:"center",
        justifyContent: "center",
        paddingHorizontal: 10,
        color: "white"
    },

    textoSeleccionado:{
        height: 100,
        display: "flex",
        alignItems:"center",
        justifyContent: "center",
        paddingHorizontal: 10,
        color: "cyan"
    }
});