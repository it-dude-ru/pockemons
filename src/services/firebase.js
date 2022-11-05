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


export default Firebase;