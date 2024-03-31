import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, View, Image, StyleSheet } from "react-native";
import { BlurView } from "expo-blur";

const imgFondo = "../resources/fondo_Login.jpg";

export default function RegisterScreen(){
    const navigator = useNavigation();
    return(
        <View style={{flex: 1}}>
            <Image source={{uri: imgFondo}} style={[style.fondo, StyleSheet.absoluteFillObject]}/>
            <BlurView intensity={70} style={style.fondo}>
                <View style={style.formulario}>

                </View>
            </BlurView>
        </View>
    );
}

const style = StyleSheet.create({
    fondo:{
        width: "100%",
        height: "100%",
        resizeMode: "cover",
        alignItems: "center",
        justifyContent: "center",
    },

    formulario:{
        width: 450,
        height: "80%",
        backgroundColor: "rgba(255,255,255,0.5)",
        borderRadius: 10,
        
    },
});