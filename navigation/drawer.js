import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';
import { HomeStack } from './stack';
import PerfilScreen from '../screens/perfil - screen';

const Drawer = createDrawerNavigator();

/*export function CerrarSesion({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10 }}>
            <Text>¿Estás seguro de que quieres cerrar sesión?</Text>
            <Pressable onPress={() => {
              // Aquí puedes poner la lógica para cerrar la sesión
              setModalVisible(!modalVisible);
              navigation.closeDrawer();
            }}>
              <Text>Sí, cerrar sesión</Text>
            </Pressable>
            <Pressable onPress={() => setModalVisible(!modalVisible)}>
              <Text>No, volver atrás</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <Pressable onPress={() => setModalVisible(true)}>
        <Text>Cerrar Sesión</Text>
      </Pressable>
    </View>
  );
}*/

const arrendadorUriIcon = "../resources/ArrendadadorLevel-icon.png";
const arrendadoUriIcon = "../resources/ArrendadoLevel-icon.png";


function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={{ alignItems: 'center', justifyContent: "center", padding: 20, flexDirection: "row" }}>
        <Image source={{ uri: arrendadorUriIcon }} style={styles.iconsStyles} />
        <Text style={[{ marginRight: 11 }, styles.txtEstatus]}>5 Estrellas</Text>
        <Image source={{ uri: arrendadoUriIcon }} style={styles.iconsStyles} />
        <Text style={styles.txtEstatus}>5 Estrellas</Text>
      </View>
      <DrawerItemList {...props} />
      <View style={{ width: "100%", height: "20%", alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity style={styles.botonLogout}>
          <Text style={{color:"#fff", fontSize:20}}>Cerrar sesión</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
}

export default function HomeDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerPosition: "right",
        headerShown: false,
        drawerStyle: {
          backgroundColor: "#4f6f32",
          borderRadius:10,
          width: "20%"
        },
        drawerActiveTintColor: "#fff"
      }}
    >
      <Drawer.Screen name="HomeScreen" component={HomeStack} options={{ drawerLabel: () => <Text style={{ color: "#fff" }}>Inicio</Text> }} />
      <Drawer.Screen name='PerfilScreen' component={PerfilScreen} options={{ drawerLabel: () => <Text style={{ color: "#fff" }}>Perfil</Text> }} />
      <Drawer.Screen name='PublicacionesScreen' component={HomeStack} options={{ drawerLabel: () => <Text style={{ color: "#fff" }}>Publicaciones</Text> }} />
      {/*<Drawer.Screen name='CerrarSesion' component={cerrarSesion} options={{ title: "Cerrar Sesión"}}/>*/}
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({

  iconsStyles: {
    width: 45, height: 45, resizeMode: 'center'
  },
  txtEstatus: {
    padding: 10, fontSize: 14, color: "#fff"
  },
  botonLogout: {
    marginHorizontal: "6%", width: "94%", height: "80%", backgroundColor: "#b70000", borderRadius: 10, shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.8, shadowRadius: 5, alignItems: "center", justifyContent: "center"
  }
});