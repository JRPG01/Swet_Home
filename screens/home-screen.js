import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, Button } from "react-native";

export default function HomeScreen () {
    const navigation = useNavigation();
    return(
        <View style = {style.screen}>
            <Text>Pantalla Home</Text>
            <View>
                <Button onPress={()=>navigation.navigate('Login')} style={style.boton}>Login</Button>
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
        width: "100%",
        height: "2%"
    }
});