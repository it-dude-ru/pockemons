import Header from '../../components/Header/header';
import Layout from '../../components/Layout/layout';
import bg3 from '../../assets/bg3.jpg';
import bg2 from '../../assets/bg2.jpg';
import './style.module.css';

function HomePage({onChangePage}) {
	const handleClickButton = (page) => {
		console.log('Home page' + page);
		onChangePage && onChangePage(page);
	}
	return (
		<>
			<Header
				title='This is title'
				desc='This is Description!'
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