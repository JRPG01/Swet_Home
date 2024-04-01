import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView } from "react-native";
import { BlurView } from "expo-blur";
import ElementsList from "../componets/elements-list";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";

const imglogo = "../resources/logo-SweetHome.png";
const imgfondo = "../resources/fondo_HomeScreen.jpg";
const imgBuscar = "../resources/botonBuscar.png";
const imgFacebook = "../resources/facebook-icon.png";
const imgX = "../resources/x-icon.png";
const imgYoutube = "../resources/youtube-icon.png";
const imgProfile = "../resources/profile-icon.png";
const imgSaved = "../resources/saved-icon.png";

export default function HomeScreen() {
    const navigation = useNavigation();

    //Saber si hay sesión activa
    const [sesion, setSesion] = useState("sesion");
    const { getItem, setItem } = useAsyncStorage('@isLogin');

    const readSesion = async () => {
        const item = await getItem();
        setSesion(item);
    }
    const writeSesion = async (value) => {
        await setItem(value);
        setSesion(value);
    }

    //Se usa useEffect para cuando se ingrese por primera vez a la web, cierra la sesión (cuando se el navigate para ir a home, este efecto no se aplica)
    useEffect(() => { writeSesion("true"); }, []);

    return (
        <View style={style.screen}>
            <Image source={{ uri: imgfondo }} style={[style.fondo, StyleSheet.absoluteFillObject]} />
            <BlurView intensity={30} style={style.fondo}>

                <View style={style.header}>
                    <TouchableOpacity style={{ width: "85%", height: "70%", justifyContent: "center" }} onPress={() => navigation.navigate('Home')}>
                        <Image source={{ uri: imglogo }} style={style.logo} />
                    </TouchableOpacity>
                    <View style={{ width: "15%", height: "70%", justifyContent: "flex-end", alignItems: "center", flexDirection: "row" }}>
                        {sesion == "false" ?
                            <>
                                <TouchableOpacity onPress={() => navigation.navigate('Login')} style={style.boton}>
                                    <Text style={style.texto}>Inicia sesión</Text>
                                </TouchableOpacity>
                                <Text style={style.texto} selectable={false}>o</Text>
                                <TouchableOpacity onPress={() => navigation.navigate('Register')} style={style.boton}>
                                    <Text style={style.texto}>Registrate</Text>
                                </TouchableOpacity>
                            </>
                            :
                            <>
                                <TouchableOpacity onPress={() => navigation.navigate('Guardado')} style={[{ width: "20%", marginRight: "0%", borderRadius: 10, justifyContent: "center", alignItems: "center" }, style.boton]}>
                                    <Image source={{ uri: imgSaved }} style={style.botonesHeader} />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => navigation.openDrawer()} style={[{ width: "20%", marginHorizontal: "10%", borderRadius: 10, justifyContent: "center", alignItems: "center" }, style.boton]}>
                                    <Image source={{ uri: imgProfile }} style={style.botonesHeader} />
                                </TouchableOpacity>
                            </>
                        }
                    </View>
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
                    <Text style={style.texto} selectable={false}>Sweet Home, inc.© 2024</Text>
                    <TouchableOpacity style={{ height: "100%", width: 40, alignItems: "center", justifyContent: "center" }}>
                        <Image source={{ uri: imgFacebook }} style={style.socialWeb} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ height: "100%", width: 40, alignItems: "center", justifyContent: "center" }}>
                        <Image source={{ uri: imgX }} style={style.socialWeb} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ height: 80, width: 40, alignItems: "center", justifyContent: "center" }}>
                        <Image source={{ uri: imgYoutube }} style={style.socialWeb} />
                    </TouchableOpacity>
                </View>
            </BlurView>
        </View>
    );
}

const style = StyleSheet.create({
    screen: {
        flex: 1
    },

    logo: {
        justifyContent: "flex-start",
        alignItems: "center",
        width: "10%",
        height: "100%",
        resizeMode: "center",
    },

    fondo: {
        justifyContent: "center",
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
        justifyContent: "flex-start",
        alignItems: "center"
    },

    botonesHeader: {
        width: "100%",
        height: "80%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 10,
        color: "white",
        resizeMode: "center"
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

    socialWeb: {
        height: "50%",
        width: "100%",
        resizeMode: "center",

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
        backgroundColor: "#000",
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