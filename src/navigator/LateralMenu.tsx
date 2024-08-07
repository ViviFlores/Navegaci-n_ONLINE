import { createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { SettingsScreen } from '../screens/SettingsScreen';

const Drawer = createDrawerNavigator();

export const LateralMenu = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="StackNavigator" options={{title:'Home'}} component={StackNavigator} />
            <Drawer.Screen name="Settings" options={{title:'Configuración'}} component={SettingsScreen} />
        </Drawer.Navigator>
    );
}