import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Pantalla de Inicio</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Player')}>
        <Text>Ir al Reproductor</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;