/**
 * Vídeo #19 ao #20: MultiplasTelas - Módulo 12 - Requisições, Web Services e Banco de Dados - B7Web
 * Exemplo de App utlizando várias telas com Firebase (e como organizar o projeto).
 * Obs.: Para instalar as dependências do Firebase utilize o assistente da IDE, ou digite no terminal da IDE 'npm install firebase --save'.
 * by: Vagner Pinto
 */

import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default class Home extends Component{

    constructor(props){
        super(props);
        console.log(this.props.route.params.nome);
        this.state={
            nome:this.props.route.params.nome
        };
    }

    render(){
        return (
            <View style={styles.body}>
                <Text>Olá, {this.state.nome}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    body:{
        margin:10
    }
});


