/**
 * Vídeo #19 ao #20: MultiplasTelas - Módulo 12 - Requisições, Web Services e Banco de Dados - B7Web
 * Exemplo de App utlizando várias telas com Firebase (e como organizar o projeto).
 * Obs.: Para instalar as dependências do Firebase utilize o assistente da IDE, ou digite no terminal da IDE 'npm install firebase --save'.
 * by: Vagner Pinto
 */

import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Login from './src/Login';
import Home from './src/Home';

const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Login"
                    component={Login} />
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={ {headerLeft: null} } />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
