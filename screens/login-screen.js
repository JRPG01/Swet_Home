import React from "react";
import { StatusBar } from 'expo-status-bar';
import { View, Text, Image, StyleSheet } from "react-native";
import { BlurView } from "expo-blur";

const url = "https://mujeres.lifeway.com/wp-content/uploads/2022/09/Misionera-en-el-vecindario-300x204.jpg";

export default function LoginScreen() {
    return (
        <View style={style.screen}>
            <Image source={{ uri: url }} style={[style.screen, StyleSheet.absoluteFillObject]}/>
            <BlurView intensity={90} style={style.screen}>
                <View style={style.formulario}>
                    <Text>Hola</Text>
                </View>
            </BlurView>
            <StatusBar style="auto" />
        </View>
        
    );
}


const style = StyleSheet.create({
    screen: {
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        resizeMode: "cover"
    },

    formulario: {
        width: "30%",
        height: "80%",
        backgroundColor: "rgba(255,255,255,0.5)",
        borderColor: "#fff",
        borderWidth: 2,
        borderRadius: 10,
        padding: 1,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.80,
        shadowRadius: 10,
        elevation: 5,

    }
});