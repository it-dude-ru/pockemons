import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import PokemonCard from '../../../../components/PokemonCard/pokemon-card';
import { PokemonContext } from '../../../../context/pokemon-context';
import PlayerBoard from './PlayerBoard/player-board';
import s from './style.module.css';

//const BASE_API_URL = 'http://zar-marathon.it-dude.ru/api/pokemons/';
const BASE_API_URL = 'https://reactmarathon-api.netlify.app/api/';

const BoardPage = () => {
	const { pokemons } = useContext(PokemonContext);

	const [board, setBoard] = useState([]);
	const [player1, setPlayer1] = useState(() => {
		return Object.values(pokemons).map(item => ({
			...item,
			posession: 'blue',
		}))
	});
	const [player2, setPlayer2] = useState([]);
	const [choiseCard, setChoiseCard] = useState(null);

	useEffect(() => {
		async function fetchData() {
			const boardResponse = await fetch(BASE_API_URL + 'board');
			const boardRequest = await boardResponse.json();
			setBoard(boardRequest.data);

			const player2Response = await fetch(BASE_API_URL + 'create-player');
			const player2Request = await player2Response.json();
			setPlayer2(() => {
				return player2Request.data.map(item => ({
					...item,
					posession: 'red',
				}))
			});
		}
		fetchData();
	}, []);

	const handleClickBoardPlate = async (position) => {
		if (choiseCard) {
			const params = {
				position,
				card: choiseCard,
				board,
			}

			const res = await fetch(BASE_API_URL + 'players-turn', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(params),
			});

			const request = await res.json();

			console.log('request.data ', request.data);
		}
	}

	return (
		<div className={s.root}>
			<div className={s.playerOne}>
				<PlayerBoard
					player={1}
					cards={player1}
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
					player={2}
					cards={player2}
					onClickCard={(card) => setChoiseCard(card)}
				/>
			</div>
		</div>
	);
};
export default BoardPage;