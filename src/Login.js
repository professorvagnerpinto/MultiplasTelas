/**
 * Vídeo #19 ao #20: MultiplasTelas - Módulo 12 - Requisições, Web Services e Banco de Dados - B7Web
 * Exemplo de App utlizando várias telas com Firebase (e como organizar o projeto).
 * Obs.: Para instalar as dependências do Firebase utilize o assistente da IDE, ou digite no terminal da IDE 'npm install firebase --save'.
 * by: Vagner Pinto
 */

import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput, Button} from 'react-native';
import Service from './Service';

export default class Login extends Component{

    constructor(props){
        super(props);
        this.state={};

        //assegura que não tenha usuário logado no App
        Service.signOut();

        //faz o bind do comportamemto com o componente
        this.logar = this.logar.bind(this);
    }

    logar(){

        Service.addAuthListener( (user) => {
            if(user){
                Service.setUser(user);
                Service.getUserInfo()
                    .then( (ds) => {
                        this.props.navigation.navigate('Home', {
                            nome:ds.val().nome
                        });
                    })
                    .catch( (error) => {
                        alert(error.message);
                    });
            }
        });

        Service.signIn(this.state.email, this.state.senha)
            .catch( (error) => {
                alert(error.message);
            });
    }

    render(){
        return (
            <View style={styles.body}>
                <Text>Email:</Text>
                <TextInput style={styles.input} onChangeText={(email)=>this.setState({email})} />
                <Text>Senha:</Text>
                <TextInput secureTextEntry={true} style={styles.input} onChangeText={(senha)=>{this.setState({senha})}} />
                <Button title={"Logar"} style={styles.button} onPress={this.logar} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    body:{
        margin:10
    },
    input:{
        height:40,
        borderWidth:1,
        borderColor:'#FF0000',
        marginBottom:10
    },
    button:{
        margin:20
    }
});
