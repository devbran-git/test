import React from 'react';
import {Text, View} from 'react-native';

const Ball = () => {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#f00',
      }}>
      <Text>Retângulo</Text>
      <Text>Quadrado</Text>
    </View>
  );
};

export default Ball;
