import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';

const Player = () => {
  const [sound, setSound] = useState(new Audio.Sound());
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  const playSound = async () => {
    await sound.loadAsync(require('../assets/song.mp3'));
    await sound.playAsync();
    setIsPlaying(true);
  };

  const pauseSound = async () => {
    await sound.pauseAsync();
    setIsPlaying(false);
  };

  const stopSound = async () => {
    await sound.stopAsync();
    setIsPlaying(false);
  };

  return (
    <View>
      <Text>Reproductor de Música</Text>
      <TouchableOpacity onPress={playSound}>
        <Text>Reproducir</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={pauseSound}>
        <Text>Pausar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={stopSound}>
        <Text>Detener</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Player;