import { useState } from 'react';
import Layout from '../../components/Layout/layout';
import POKEMONS from '../../assets/pokemones.json';
import PokemonCard from '../../components/PokemonCard/pokemon-card';

import './style.module.css';

const GamePage = () => {
	const [pokemons, setPokemons] = useState(POKEMONS);
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
				pokemons.map(({ name, img, id, type, values, active }) => (
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