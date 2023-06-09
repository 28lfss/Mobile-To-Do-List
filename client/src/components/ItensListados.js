import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function ItensListados({ props, funcao }) {
  const navigation = useNavigation();

  const handleSearchPress = () => {
    navigation.navigate('Note', { itemText: props.itens });
  };

  return (
    <View style={styles.postagem}>

      <TouchableOpacity onPress={handleSearchPress}>
        <View style={styles.iconContainer}>
          <MaterialIcons name='search' size={18} color={'gray'} style={styles.icon} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => funcao(props.id)}>
        <View style={styles.iconContainer}>
         <MaterialIcons name='delete' size={18} color={'gray'} style={styles.icon} />
        </View>
      </TouchableOpacity>
      
      <Text style={styles.itemTexto}>{props.itens}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  postagem: {
    padding: 10,
    marginTop: 16,
    borderRadius: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    flexDirection: 'column',
    marginRight: 10,
  },
  icon: {
    marginVertical: 5,
  },
  itemTexto: {
    flex: 1,
    color: 'black',
    marginLeft: 5,
  },
});
