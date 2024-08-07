import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Button, Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { RootStackParams } from '../navigator/StackNavigator';

//interface - props de navegación
interface Props extends StackScreenProps<RootStackParams, 'Pantalla3'> { };

export const Pantalla3Screen = ({ navigation }: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pantalla 3</Text>
      <Button
        title='Regresar'
        onPress={() => navigation.pop()} />
      <Button
        title='Ir a home'
        onPress={() => navigation.popToTop()} />
    </View>
  )
}
