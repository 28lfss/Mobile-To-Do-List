import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Axios from "axios";
import AdicionarItem from './src/components/AdicionarItem';
import ItensListados from './src/components/ItensListados';

function HomeScreen() {
  const [lista, setLista] = useState([]);

  // READ
  useEffect(() => {
    Axios.get("http://192.168.1.24:3001/itens").then((response) => {
      setLista(response.data);
    });
  }, [lista]);

  // CREATE
  const submeterInformacao = (texto) => {
    Axios.post("http://192.168.1.24:3001/item", { item: texto });
  };

  // DELETE
  const deletarItem = (key) => {
    Axios.delete(`http://192.168.1.24:3001/item/${key}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.conteudo}>
        <AdicionarItem funcao={submeterInformacao} />
        <FlatList
          data={lista}
          renderItem={({ item }) => (
            <ItensListados props={item} funcao={deletarItem} />
          )}
        />
      </View>
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Notify" component={HomeScreen} />
        <Stack.Screen name="Note" component={Note} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Note({ route }) {
  const { itemText } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.noteText}>{itemText}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCEBB1',
  },
  conteudo: {
    padding: 40,
  },
  noteText: {
    fontSize:20,
    marginHorizontal:7,
    marginTop:10,
  },
});