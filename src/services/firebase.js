import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

const firebaseConfig = {
	apiKey: "AIzaSyCY72hxOqedwEY1SGRSN-aVIPyQwm9XbVs",
	authDomain: "pokemons-962f7.firebaseapp.com",
	databaseURL: "https://pokemons-962f7-default-rtdb.firebaseio.com",
	projectId: "pokemons-962f7",
	storageBucket: "pokemons-962f7.appspot.com",
	messagingSenderId: "104119477606",
	appId: "1:104119477606:web:6306213ba3346ee1cfd4a7"
};

firebase.initializeApp(firebaseConfig);

export const fire = firebase;
export const database = fire.database();

export default database;