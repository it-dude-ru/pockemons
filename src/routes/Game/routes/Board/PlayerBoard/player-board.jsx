import cn from 'classnames';
import { useState } from 'react';
import PokemonCard from '../../../../../components/PokemonCard/pokemon-card';
import s from './style.module.css';

const PlayerBoard = ({ player, cards, onClickCard }) => {
	const [isSelected, setSelected] = useState(null);
	return (
		<>
			{
				cards.map((item) => (
					<div
						className={cn(s.cardBoard, {
							[s.selected]: isSelected === item.id
						})}
						onClick={() => {
							setSelected(item.id);
							onClickCard && onClickCard({
								...item,
								player
							});
						}}
					>
						<PokemonCard
							key={item.id}
							name={item.name}
							img={item.img}
							id={item.id}
							type={item.type}
							values={item.values}
							minimize
							isActive
						/>
					</div>
				))
			}
		</>
	);
}

export default PlayerBoard;