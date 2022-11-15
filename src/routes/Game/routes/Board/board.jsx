import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import PokemonCard from '../../../../components/PokemonCard/pokemon-card';
import { PokemonContext } from '../../../../context/pokemon-context';
import s from './style.module.css';

const BASE_API_URL = 'http://zar-marathon.it-dude.ru';

const BoardPage = () => {
	const [board, setBoard] = useState([]);
	const { pokemons } = useContext(PokemonContext);

	useEffect(() => {
		async function fetchData() {
			const boardResponse = await fetch(BASE_API_URL + '/api/pokemons/board');
			const boardRequest = await boardResponse.json();
			setBoard(boardRequest.data);
		}
		fetchData();
	}, []);

	// const history = useHistory();
	// if (Object.keys(pokemons).length === 0) {
	// 	history.replace('/game');
	// }

	const handleClickBoardPlate = (position) => {
		console.log('position ', position);
	}

	return (
		<div className={s.root}>
			<div className={s.playerOne}>
				{
					Object.values(pokemons).map(({ id, name, img, type, values }) => (
						<PokemonCard
							className={s.card}
							key={id}
							name={name}
							img={img}
							id={id}
							type={type}
							values={values}
							minimize
							isActive
						/>
					))
				}
			</div>
			<div className={s.board}>
				{
					board.map(item => (
						<div
							key={item.position}
							className={s.boardPlate}
							onClick={() => !item.card && handleClickBoardPlate(item.position)}
						>
							{item.card && <PokemonCard {...item} minimize />}
						</div>
					))
				}
			</div>
		</div>
	);
};
export default BoardPage;