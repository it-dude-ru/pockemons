import { useState, useEffect, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PokemonCard from '../../../../components/PokemonCard/pokemon-card';
import { FireBaseContext } from '../../../../context/firebase-context';
import { PokemonContext } from '../../../../context/pokemon-context';
import { getPokemonsAsync, selectPokemonsData, selectPokemonsLoading } from '../../../../store/pokemons';
import s from './style.module.css';

const StartPage = () => {

	const firebase = useContext(FireBaseContext);
	const pokemonsContext = useContext(PokemonContext);
	const isLoading = useSelector(selectPokemonsLoading);
	const pokemonsRedux = useSelector(selectPokemonsData);
	const dispatch = useDispatch();
	const history = useHistory();
	const [pokemons, setPokemons] = useState({});

	useEffect(() => {
		dispatch(getPokemonsAsync());
	}, []);

	useEffect(() => {
		setPokemons(pokemonsRedux);
	}, [pokemonsRedux]);

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

	const handleStartGameClick = () => {
		history.push('/game/board');
	}

	return (
		<>
			<div className={s.buttonWrap}>
				<button
				onClick={handleStartGameClick}
				disabled={Object.keys(pokemonsContext.pokemons).length < 5}
				>
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