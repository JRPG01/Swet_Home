import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView } from "react-native";
import { BlurView } from "expo-blur";

const imglogo = "../resources/logo-SweetHome.png";
const imgfondo = "../resources/fondo_HomeScreen.jpg";
const imgFacebook = "../resources/facebook-icon.png";
const imgX = "../resources/x-icon.png";
const imgYoutube = "../resources/youtube-icon.png";
const imgProfile = "../resources/profile-icon.png";
const imgUser = "../resources/profile-icon-black.png";
const imgSaved = "../resources/saved-icon.png";
const regresar = "../resources/botonRegresar.png";

export default function PublicationScreen() {
    const navigation = useNavigation();

    return (
        <View style={style.screen}>
            <Image source={{ uri: imgfondo }} style={[style.fondo, StyleSheet.absoluteFillObject]} />
            <BlurView intensity={30} style={style.fondo}>

                <View style={style.header}>
                    <View style={{ width: "85%", height: "70%", justifyContent: "center" }}>
                        <TouchableOpacity style={{ width: "10%", height: "100%", justifyContent: "flex-start", marginLeft: "1%" }} onPress={() => navigation.navigate('Home')}>
                            <Image source={{ uri: imglogo }} style={style.logo} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: "15%", height: "70%", justifyContent: "flex-end", alignItems: "center", flexDirection: "row" }}>
                        <TouchableOpacity onPress={() => navigation.navigate('Saved')} style={[{ width: "20%", marginRight: "0%", borderRadius: 10, justifyContent: "center", alignItems: "center" }, style.boton]}>
                            <Image source={{ uri: imgSaved }} style={style.botonesHeader} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.openDrawer()} style={[{ width: "20%", marginHorizontal: "10%", borderRadius: 10, justifyContent: "center", alignItems: "center" }, style.boton]}>
                            <Image source={{ uri: imgProfile }} style={style.botonesHeader} />
                        </TouchableOpacity>
                    </View>
                </View>

                <ScrollView style={{ width: "100%", margin: 0, padding: 30, border: 0 }}>
                    <View style={{ width: "100%", justifyContent: "center", alignItems: "center" }}>
                        <View style={style.elementos}>
                            {/* Titulo */}
                            <View style={{ alignItems: "center", justifyContent: "center", width: "100%", flexDirection: "row", paddingHorizontal: 25 }}>
                                <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{marginRight: 10}} >
                                    <Image source={{ uri: regresar }} style={style.regresar} />
                                </TouchableOpacity>
                                <View style={{backgroundColor: "#fff", padding:20, borderRadius: 10, width: "100%", shadowColor: "#000", shadowOffset: { width: 0, height: 0, }, shadowOpacity: 0.30, shadowRadius: 5}}>
                                    <Text style={{ marginLeft: 10, fontSize: 50, color: "#000" }}>Titulo de la publicación</Text>
                                </View>
                            </View>

                            {/*Carusel de imagenes*/}
                            <View style={{ width: "100%", height: 500, backgroundColor: "#000", borderRadius: 10, marginVertical: 20, shadowColor: "#000", shadowOffset: { width: 0, height: 0, }, shadowOpacity: 0.30, shadowRadius: 5 }}>

                            </View>

                            {/*La demas información*/}
                            <View style={{ flexDirection: "row", width: "100%" }}>
                                <View style={{ width: "50%", marginVertical: 1, marginHorizontal: 5 }}>
                                    <TouchableOpacity style={{ height: 100, backgroundColor: "#fff", borderRadius: 10, justifyContent: "flex-start", alignItems: "center", flexDirection: "row", padding: 20, shadowColor: "#000", shadowOffset: { width: 0, height: 0, }, shadowOpacity: 0.30, shadowRadius: 5 }}>
                                        <View>
                                            <Image source={{ uri: imgUser }} style={{ width: 50, height: 50, borderRadius: "100%" }} />
                                        </View>
                                        <View style={{ width: "30%" }}>
                                            <Text style={{ fontSize: 30 }}> Jhon Doe </Text>
                                        </View>
                                        <View style={{ alignItems: "flex-end", justifyContent: "center", width: "60%" }}>
                                            <View style={{ justifyContent: "center", alignItems: "center" }}>
                                                <Text style={{ fontSize: 15 }}> 5 estrellas </Text>
                                                <Text style={{ fontSize: 15 }}> * * * * * </Text>
                                                <Text style={{ fontSize: 15 }}> 99 Evaluaciones </Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                    <View style={{ justifyContent: "space-between", alignItems: "center", height: 300, backgroundColor: "#fff", borderRadius: 10, padding: 20, marginTop: 10, shadowColor: "#000", shadowOffset: { width: 0, height: 0, }, shadowOpacity: 0.30, shadowRadius: 5 }}>
                                        <Text style={{ fontSize: 20 }}> Detalles sobre la propiedad </Text>
                                        <View style={{ width: "100%" }}>
                                            <Text style={{ marginTop: 10 }}>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                Pellentesque lacinia placerat nisi ut ornare.
                                                Suspendisse est erat, tempus eget lectus sed, iaculis tempor turpis.
                                                Mauris elit purus, volutpat ornare condimentum ac, tempus sit amet est.
                                            </Text>
                                            <Text style={{ marginTop: 10 }}>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                Pellentesque lacinia placerat nisi ut ornare.
                                                Suspendisse est erat, tempus eget lectus sed, iaculis tempor turpis.
                                                Mauris elit purus, volutpat ornare condimentum ac, tempus sit amet est.
                                            </Text>
                                            <Text style={{ marginTop: 10 }}>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                Pellentesque lacinia placerat nisi ut ornare.
                                                Suspendisse est erat, tempus eget lectus sed, iaculis tempor turpis.
                                                Mauris elit purus, volutpat ornare condimentum ac, tempus sit amet est.
                                            </Text>
                                        </View>
                                        <TouchableOpacity style={{ justifyContent: "center", alignItems: "center", backgroundColor: "#fff", borderRadius: 10, padding: 20, shadowColor: "#000", shadowOffset: { width: 0, height: 0, }, shadowOpacity: 0.30, shadowRadius: 5 }}>
                                            <Text> Mostrar más detalles </Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ justifyContent: "space-between", alignItems: "center", backgroundColor: "#fff", borderRadius: 10, padding: 20, marginTop: 10, shadowColor: "#000", shadowOffset: { width: 0, height: 0, }, shadowOpacity: 0.30, shadowRadius: 5 }}>
                                        <View>
                                            <Text style={{ fontSize: 20 }}> ### de reseñas </Text>
                                        </View>
                                        <View style={{ paddingTop: 10 }}>
                                            <View style={{ flexDirection: "row", fontSize: 15 }}>
                                                <Text>Juan Perez </Text>
                                                <Text> - </Text>
                                                <Text> 3.5/5 Estrellas </Text>
                                            </View>
                                            <Text>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                Pellentesque lacinia placerat nisi ut ornare.
                                                Suspendisse est erat, tempus eget lectus sed, iaculis tempor turpis.
                                                Mauris elit purus, volutpat ornare condimentum ac, tempus sit amet est.
                                            </Text>
                                        </View>
                                        <View style={{ paddingTop: 10 }}>
                                            <View style={{ flexDirection: "row", fontSize: 15 }}>
                                                <Text>Juan Perez </Text>
                                                <Text> - </Text>
                                                <Text> 3.5/5 Estrellas </Text>
                                            </View>
                                            <Text>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                Pellentesque lacinia placerat nisi ut ornare.
                                                Suspendisse est erat, tempus eget lectus sed, iaculis tempor turpis.
                                                Mauris elit purus, volutpat ornare condimentum ac, tempus sit amet est.
                                            </Text>
                                        </View>
                                        <View style={{ paddingTop: 10 }}>
                                            <View style={{ flexDirection: "row", fontSize: 15 }}>
                                                <Text>Juan Perez </Text>
                                                <Text> - </Text>
                                                <Text> 3.5/5 Estrellas </Text>
                                            </View>
                                            <Text>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                Pellentesque lacinia placerat nisi ut ornare.
                                                Suspendisse est erat, tempus eget lectus sed, iaculis tempor turpis.
                                                Mauris elit purus, volutpat ornare condimentum ac, tempus sit amet est.
                                            </Text>
                                        </View>
                                        <TouchableOpacity style={{ justifyContent: "center", alignItems: "center", backgroundColor: "#fff", borderRadius: 10, marginTop: 20, padding: 20, shadowColor: "#000", shadowOffset: { width: 0, height: 0, }, shadowOpacity: 0.30, shadowRadius: 5 }}>
                                            <Text> Mostrar más </Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={{ height: "auto", width: "49%", marginVertical: 1, marginHorizontal: 5 }}>
                                    <View style={{ height: "100%", backgroundColor: "#fff", borderRadius: 10, justifyContent: "flex-start", alignItems: "center", flexDirection: "row", padding: 20, shadowColor: "#000", shadowOffset: { width: 0, height: 0, }, shadowOpacity: 0.30, shadowRadius: 5 }}>

                                    </View>
                                </View>
                            </View>
                            {/* Ultima parte para los comentarios */}
                            <View style={{width: "100%", height: 500, backgroundColor: "#fff", borderRadius:10, marginTop: 10}}>

                            </View>
                        </View>
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
    regresar: {
        width: 50,
        height: 50
    },

    cards: {
        alignItems: "center",
        justifyContent: "center",
        width: "80%",
        backgroundColor: "white",
        borderRadius: 10,
        margin: 10,
        padding: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.30,
        shadowRadius: 5,
        elevation: 5,
    },

    screen: {
        flex: 1
    },

    logo: {
        alignItems: "center",
        width: "100%",
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
        //margin: 30,
        padding: 30,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        backgroundColor: "rgba(249, 244, 217, 0.8)",
        borderRadius: 10,
        top: 0,
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