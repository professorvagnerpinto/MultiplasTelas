/**
 *  Classe utilizada para encapsular os serviços do Firebase.
 *  by: Vagner Pinto
 */

import firebase from './FirebaseConnetion';

class Service {

    user = {};

    signOut() {
        firebase.auth().signOut();
    }

    addAuthListener(callback){
        //escuta o serviço de autenticação para saber o estado atual do usuário
        firebase.auth().onAuthStateChanged(callback);
    }

    signIn(email, senha) {
        return firebase.auth().signInWithEmailAndPassword(email, senha);
    }

    setUser(user) {
        this.user = user;
    }

    getUserInfo() {
        return firebase.database().ref('users').child(this.user.uid).once('value');
    }
}

export default new Service();
