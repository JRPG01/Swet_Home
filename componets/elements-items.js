import { TouchableOpacity, Text, Image, StyleSheet } from "react-native";

export default function ElementsItems({id, image ,title, price ,description}){
    return (
        <TouchableOpacity style={styles.card} onPress={()=>{}}>
            <Image source={{uri: image}} style={{width: "30%", height:"30%", resizeMode: "center"}}/>
            <Text>{title}</Text>
            <Text>{price}</Text>
            <Text numberOfLines={3}>{description}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card:{
        alignItems:"center",
        justifyContent: "center",
        width: "18%",
        height: 250,
        backgroundColor:"white",
        borderRadius: 10,
        margin: "1%",
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
});