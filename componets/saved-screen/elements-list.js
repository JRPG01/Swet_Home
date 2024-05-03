import React from "react";
import { View, FlatList, RefreshControl } from "react-native";
import { EJEMPLO } from "../../data/saved-screen/datos-guardados-ejemplos";
import ElementsItems from "./elements-items";

export default function ElementsList(){
    const renderItem = ({item}) => {
        return (
            <ElementsItems id={item.id} image={item.image} title={item.title} price={item.price} description={item.description}/>
        );
    }
    return(
        <View>
            <FlatList 
                data={EJEMPLO}
                keyExtractor={item=> item.id}
                renderItem={renderItem}
                numColumns={5}
                refreshControl = {
                    <RefreshControl 
                        refreshing = {false}
                        onRefresh={()=> console.log("refrescando...")}
                    />
                }
            />
        </View>
    );
}