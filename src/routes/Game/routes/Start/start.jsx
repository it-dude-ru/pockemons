import { useState, useEffect, useContext } from 'react';
import PokemonCard from '../../../../components/PokemonCard/pokemon-card';
import { FireBaseContext } from '../../../../context/firebase-context';
import { PokemonContext } from '../../../../context/pokemon-context';
import s from './style.module.css';

const StartPage = () => {

	const firebase = useContext(FireBaseContext);
	const pokemonsContext = useContext(PokemonContext);

	const [pokemons, setPokemons] = useState({});

	useEffect(() => {
		firebase.getPokemonSoket((pokemons) => {
			setPokemons(pokemons);
		});
		return () => firebase.offPokemonSoket();
	}, []);

	const handleChangeSelected = (key) => {
		const pokemon = { ...pokemons[key] };
		pokemonsContext.onSelectedPokemons(key, pokemon);
		setPokemons(prevState => ({
			...prevState,
			[key]: {
				...prevState[key],
				selected: !prevState[key].selected
			}
		}))
	}

	return (
		<>
			<div className={s.buttonWrap}>
				<button>
					Start Game
				</button>
			</div>
			<div className={s.flex}>
				{
					Object.entries(pokemons).map(([key, { name, img, id, type, values, selected }]) => (
						<PokemonCard
							className={s.card}
							key={key}
							name={name}
							img={img}
							id={id}
							type={type}
							values={values}
							isActive={true}
							isSelected={selected}
							onClickCard={() => {
								if (Object.keys(pokemonsContext.pokemons).length < 5 || selected) {
									handleChangeSelected(key)
								}
							}}
						/>
					))
				}
			</div>
		</>
	);
}

export default StartPage;