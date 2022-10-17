import './App.css';
import Header from './components/Header/header';
import Layout from './components/Layout/layout';
import Footer from './components/Footer/footer';
import bg1 from './assets/bg1.jpg';
import bg2 from './assets/bg2.jpg';
import POKEMONS from './assets/pokemones.json';
import PokemonCard from './components/PokemonCard/pokemon-card';

function App() {
	return (
		<>
			<Header title='This is title' desc='This is Description!' />
			<Layout urlBg={ bg1 } />
			<Layout colorBg='red'>
				<div className="flex">
					{
						POKEMONS.map(item => <PokemonCard key = {item.id} {...item} />)
					}
				</div>
			</Layout>
			<Layout urlBg={ bg2 } />
			<Footer />
		</>
	);
}

export default App;
