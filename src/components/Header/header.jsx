import s from './style.module.css';

function Header({ title, desc, onClickButton }) {
	const handleClick = () => {
		onClickButton && onClickButton('game');
	}
	return (
		<header className={s.root}>
			<div className={s.forest}></div>
			<div className={s.container}>
				{title && (<h1>{title}</h1>)}
				{desc && (<p>{desc}</p>)}
				<button onClick={handleClick}>
					Start Game
				</button>
			</div>
		</header>
	)
}

export default Header;

