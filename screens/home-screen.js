import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, Image, Pressable} from "react-native";

const logo = "";

export default function HomeScreen () {
    const navigation = useNavigation();

    return(
        <View style = {style.screen}>
            <View style={{width: "100%", height:100, backgroundColor: "#4f6f32"}}>
                <Image source={{uri: logo}} />

            </View>
            
            <Text>Pantalla Home</Text>

            <View style={style.screen}>
                <Pressable onPress={()=>navigation.navigate('Login')} style={style.boton}>
                    <Text>Login</Text>
                </Pressable>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    screen:{
        justifyContent: "center",
        alignItems: "center"
    },

    boton:{
        justifyContent: "center",
        alignItems: "center",
        margin: 50,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(255, 0, 0, 1)"
    }
});