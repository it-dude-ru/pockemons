import { useState, useEffect } from 'react';
//import POKEMONS from '../../assets/pokemones.json';
import PokemonCard from '../../components/PokemonCard/pokemon-card';

import database from '../../services/firebase';

import s from './style.module.css';

const DATA = {
	"abilities": [
		"keen-eye",
		"tangled-feet",
		"big-pecks"
	],
	"stats": {
		"hp": 63,
		"attack": 60,
		"defense": 55,
		"special-attack": 50,
		"special-defense": 50,
		"speed": 71
	},
	"type": "flying",
	"img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png",
	"name": "pidgeotto",
	"base_experience": 122,
	"height": 11,
	"id": 17,
	"values": {
		"top": "A",
		"right": 2,
		"bottom": 7,
		"left": 5
	}
}

const GamePage = () => {
	const [pokemons, setPokemons] = useState({});

	const getPokemons = () => {
		database.ref('pokemons').once('value', (snapshot) => {
			setPokemons(snapshot.val());
		});
	}

	useEffect(getPokemons(), []);

	const handleChangeActive = (id) => {
		setPokemons(prevState => {
			return Object.entries(prevState).reduce((acc, item) => {
				const pokemon = { ...item[1] };
				if (pokemon.id === id) {
					pokemon.active = true;
				};
				acc[item[0]] = pokemon;
				database.ref('pokemons/' + item[0]).set(pokemon);
				return acc;
			}, {});
		});
	}

	const handleAddPokemon = () => {
		const data = DATA;
		const newKey = database.ref().child('pokemons').push().key;
		database.ref('pokemons/' + newKey).set(data).then(() => getPokemons());
	}

	return (
		<>
		<div className={s.buttonWrap}>
				<button onClick={handleAddPokemon}>
					Add New Pokemon
				</button>
		</div>
		<div className={s.flex}>
			{
				Object.entries(pokemons).map(([key, { name, img, id, type, values, active }]) => (
					<PokemonCard
						key={id}
						name={name}
						img={img}
						id={id}
						type={type}
						values={values}
						isActive={active}
						onClickCard={handleChangeActive}
					/>))
			}
		</div>
		</>
	);
}

export default GamePage;