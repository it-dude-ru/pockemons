import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

const firebaseConfig = {
	apiKey: "AIzaSyAlkJKSHjBF5KV8NlWNgPEOxoOvjCtnTZ0",
	authDomain: "pokemons02.firebaseapp.com",
	databaseURL: "https://pokemons02-default-rtdb.firebaseio.com",
	projectId: "pokemons02",
	storageBucket: "pokemons02.appspot.com",
	messagingSenderId: "690531131672",
	appId: "1:690531131672:web:ff4682a116d151b1e5be6d"
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