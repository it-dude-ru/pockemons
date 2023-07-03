import Header from '../../components/Header/header';
import Layout from '../../components/Layout/layout';
import bg3 from '../../assets/bg3.jpg';
import bg2 from '../../assets/bg2.jpg';
import './style.module.css';

function HomePage() {

	const handleClickButton = () => {
	}
	return (
		<>
			<Header
				title='Pokemons'
				desc='The game from "ReactJS" course of Zar Zakharov'
				onClickButton={handleClickButton}
			/>
			<Layout urlBg={bg3} title='Rules'>
				<p>In the game two players face off against one another, one side playing as "blue", the other as "red" on a 3x3 grid.</p>
				<p>Each players has five cards in a hand and the aim is to capture the opponent's cards byturning them into the player's own color of red or blue.</p>
			</Layout>
			<Layout urlBg={bg2} />
		</>
	);
}

export default HomePage;
