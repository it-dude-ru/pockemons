import './style.module.css';
import Header from '../../components/Header/header';
import Layout from '../../components/Layout/layout';
import Footer from '../../components/Footer/footer';
import bg3 from '../../assets/bg3.jpg';
import bg2 from '../../assets/bg2.jpg';
import POKEMONS from '../../assets/pokemones.json';
import PokemonCard from '../../components/PokemonCard/pokemon-card';
import MenuHeader from '../../components/MenuHeader/menu-header';

function HomePage({onChangePage}) {
	const handleClickButton = (page) => {
		onChangePage && onChangePage(page);
	}
	return (
		<>
			<MenuHeader />
			<Header
				title='This is title'
				desc='This is Description!'
				onClickButton={handleClickButton}
			/>
			<Layout urlBg={bg3} title='Rules'>
				<p>In the game two players face off against one another, one side playing as "blue", the other as "red" on a 3x3 grid.</p>
				<p>Each players has five cards in a hand and the aim is to capture the opponent's cards byturning them into the player's own color of red or blue.</p>
			</Layout>
			<Layout colorBg='#202736' title='Cards'>
				<div className="flex">
					{
						POKEMONS.map(item => <PokemonCard key={item.id} {...item} />)
					}
				</div>
			</Layout>
			<Layout urlBg={bg2} />
			<Footer />
		</>
	);
}

export default HomePage;
