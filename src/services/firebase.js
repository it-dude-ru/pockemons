import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

const firebaseConfig = {
	apiKey: "AIzaSyB3tdi1d5vkDBVGKaL9TGGr8_fY_UGJ3Yw",
	authDomain: "pokemons01.firebaseapp.com",
	databaseURL: "https://pokemons01-default-rtdb.europe-west1.firebasedatabase.app",
	projectId: "pokemons01",
	storageBucket: "pokemons01.appspot.com",
	messagingSenderId: "86674983099",
	appId: "1:86674983099:web:81623adb2a2e0b308a019e"
};

firebase.initializeApp(firebaseConfig);

class Firebase {
	constructor() {
		this.fire = firebase;
		this.database = this.fire.database();
	}

	getPokemonSoket = (cb) => {
		this.database.ref('pokemons').on('value', (snapshot) => {
			cb(snapshot.val());
		})
	}
	
	offPokemonSoket = () => {
		this.database.ref('pokemons').off();
	}
	
	getPokemonsOnce = async () => {
		return await this.database.ref('pokemons').once('value').then(snapshot => snapshot.val());
	}

	postPokemon = (key, pokemon) => {
		this.database.ref(`pokemons/${key}`).set(pokemon);
	}

	addPokemon = (data, cb) => {
		const newKey = this.database.ref().child('pokemons').push().key;
		this.database.ref('pokemons/' + newKey).set(data).then(() => cb());
	}
}

const FirebaseClass = new Firebase();

export default FirebaseClass;