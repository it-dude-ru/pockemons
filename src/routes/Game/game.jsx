import './style.module.css';

const GamePage = ({ onChangePage }) => {
	const handleClick = () => {
		onChangePage && onChangePage('home');
	}
	return (
		<>
			<div>
				<h1>This is Game Page!!!</h1>
			</div>
			<button onClick={handleClick}>
				Back Home
			</button>
		</>
	)
}

export default GamePage;