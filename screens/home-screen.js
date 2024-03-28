import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView } from "react-native";
import { BlurView } from "expo-blur";
import ElementsList from "../componets/elements-list";

const imglogo = "";
const imgfondo = "../resources/fondo_HomeScreen.jpg";
const imgBuscar = "../resources/botonBuscar.png";

export default function HomeScreen() {
    const navigation = useNavigation();
    return (
        <View style={style.screen}>
            <Image source={{ uri: imgfondo }} style={[style.fondo, StyleSheet.absoluteFillObject]} />
            <BlurView intensity={30} style={style.fondo}>

                <View style={style.header}>
                    <Image source={{ uri: imglogo }} />
                    <TouchableOpacity onPress={() => navigation.navigate('Login')} style={style.boton}>
                        <Text style={style.texto}>Inicia sesión</Text>
                    </TouchableOpacity>
                    <Text style={style.texto} selectable={false}>o</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Register')} style={style.boton}>
                        <Text style={style.texto}>Registrate</Text>
                    </TouchableOpacity>
                </View>

                <ScrollView style={{ width: "100%", margin: 0, padding: 0, border: 0 }}>
                    <View style={style.busqueda}>
                        <TextInput style={style.textoBusqueda} placeholder="¿Que deseas buscar?" />
                        <TouchableOpacity>
                            <Image source={{ uri: imgBuscar }} style={style.botonBuscar} />
                        </TouchableOpacity>
                    </View>


                    <View style={style.elementos}>
                        <ElementsList />
                    </View>
                </ScrollView>

                <View style={style.pie}>

                </View>
            </BlurView>
        </View>
    );
}

const style = StyleSheet.create({
    screen: {
        flex: 1
    },
    fondo: {
        justifyContent: "flex-start",
        alignItems: "center",
        height: "100%",
        width: "100%",
        resizeMode: "stretch",
    },

    header: {
        width: "100%",
        height: 80,
        backgroundColor: "#4f6f32",
        top: 0,
        left: 0,
        right: 0,
        flexDirection: "row",
        justifyContent: "flex-end"
    },

    busqueda: {
        width: "100%",
        height: 200,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        top: 80,
        left: 0,
        right: 0
    },

    elementos: {
        position: "absolute",
        width: "100%",
        backgroundColor: "rgba(249, 244, 217, 0.8)",
        borderRadius: 10,
        top: 280,
        left: 0,
        right: 0,
    },

    pie: {
        width: "100%",
        height: 50,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "#000",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
    },

    boton: {
        height: "100%",
        position: "relative",
    },

    texto: {
        height: 80,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 10,
        color: "white"
    },

    textoBusqueda: {
        width: "50%",
        height: 40,
        borderColor: "#fff",
        borderRadius: 10,
        padding: 10,
        marginVertical: 10,
        backgroundColor: "#ffffff90",
        fontSize: 16,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.80,
        shadowRadius: 5,
        elevation: 5,
    },

    botonBuscar: {
        marginHorizontal: 5,
        marginVertical: 10,
        width: 40,
        height: 40,
        resizeMode: "cover",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.80,
        shadowRadius: 5,
        elevation: 5,
    }
});