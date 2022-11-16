import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import PokemonCard from '../../../../components/PokemonCard/pokemon-card';
import { PokemonContext } from '../../../../context/pokemon-context';
import PlayerBoard from './PlayerBoard/player-board';
import s from './style.module.css';

const BASE_API_URL = 'http://zar-marathon.it-dude.ru/api/pokemons/';

const BoardPage = () => {
	const [board, setBoard] = useState([]);
	const [player2, setPlayer2] = useState([]);
	const [choiseCard, setChoiseCard] = useState(null);

	const { pokemons } = useContext(PokemonContext);

	useEffect(() => {
		async function fetchData() {
			const boardResponse = await fetch(BASE_API_URL + 'board');
			const boardRequest = await boardResponse.json();
			setBoard(boardRequest.data);

			const player2Response = await fetch(BASE_API_URL + 'create');
			const player2Request = await player2Response.json();
			setPlayer2(player2Request.data)
		}
		fetchData();
	}, []);

	const handleClickBoardPlate = (position) => {
		console.log('position ', position);
	}

	return (
		<div className={s.root}>
			<div className={s.playerOne}>
				<PlayerBoard
					cards={Object.values(pokemons)}
					onClickCard={(card) => setChoiseCard(card)}
				/>
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
			<div className={s.playerTwo}>
				<PlayerBoard
					cards={player2}
					onClickCard={(card) => setChoiseCard(card)}
				/>
			</div>
		</div>
	);
};
export default BoardPage;