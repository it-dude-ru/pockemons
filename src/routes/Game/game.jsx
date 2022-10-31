import { useState, useEffect } from 'react';
//import POKEMONS from '../../assets/pokemones.json';
import PokemonCard from '../../components/PokemonCard/pokemon-card';

import database from '../../services/firebase';

import './style.module.css';

const GamePage = () => {
	const [pokemons, setPokemons] = useState({});

	useEffect(() => {
		database.ref('pokemons').once('value', (snapshot) => {
			setPokemons(snapshot.val());
		})
	}, [])

	const handleChangeActive = (id) => {
		setPokemons(prevState => {
			return Array.from(prevState, (item) => {
				if (item.id === id) item.active = true;
				return item;
			});
		});
	}
	return (
		<div className="flex">
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
	)
}

export default GamePage;