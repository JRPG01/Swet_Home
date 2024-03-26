import React from "react";
import { StatusBar } from 'expo-status-bar';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { BlurView } from "expo-blur";

const fondo = "../resources/fondo_Login.jpg";
const Logo = "";

export default function LoginScreen() {
    return (
        <View style={style.screen}>
            <Image source={{ uri: fondo }} style={[style.screen, StyleSheet.absoluteFillObject]}/>
            <BlurView intensity={70} style={style.screen}>
                <View style={style.formulario}>
                    <View style={style.titulo}>
                        <Text style={style.inicio}>Inicia Sesión</Text>
                        <Text>O registrate si no tienes una cuenta</Text>
                    </View>
                    <View style={{margin: 40}}>
                        <View style={{marginTop: 10}}>
                            <Text style={style.label}>Email</Text>
                            <TextInput style={style.campos} placeholder="Escribe tu correo aquí"></TextInput>
                        </View>
                        <View style={{marginTop: 10}}>
                            <Text style={style.label}>Contraseña</Text>
                            <TextInput style={style.campos} placeholder="Escribe tu contraseña aquí" secureTextEntry={true}></TextInput>
                            <TouchableOpacity>
                                <Text style={{color: "red", fontWeight: "bold"}}>Olvide la contraseña</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{marginTop: 60}}>
                            <TouchableOpacity style={style.boton}>
                                <Text style={{fontSize: 19, fontWeight: '400', color: 'white',}}>Iniciar Sesión</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={style.botonRegistrar}>
                                <Text style={{fontSize: 19, fontWeight: '400', color: 'white'}}>Registrarse</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
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
        resizeMode: "cover",
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
        shadowRadius: 15,
        elevation: 5,

    },

    titulo: {
        alignItems: "center",
        justifyContent: "center",
        width: "80%",
        height: "20%",
        margin: 16,
    },

    inicio:{
        fontSize: 40,
        fontWeight: "bold",
    },

    label: {
        fontSize: 19,
        fontWeight: '400',
        color: 'black',
        width: 250,
        fontWeight: "bold",
    },

    campos: {
        width: 250,
        height: 40,
        borderColor: "#fff",
        borderRadius: 10,
        padding: 10,
        marginVertical: 10,
        backgroundColor: "#ffffff90",
        marginBottom: 20,
    },

    boton: {
        width: 250,
        height: 40,
        borderRadius: 10,
        backgroundColor: "rgb(35,35,35)",
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 10,
    },

    botonRegistrar: {
        width: 250,
        height: 40,
        borderRadius: 10,
        backgroundColor: "#4f6f32",
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 10,
    }
});