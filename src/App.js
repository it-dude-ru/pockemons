import {useState} from 'react';
import GamePage from './routes/Game/game';
import HomePage from './routes/Home/home';


const App = () => {
	const [page, setPage] = useState('app');
	const handleChangePage = (page) => {
		setPage(page);
		console.log('App');
	}
	switch (page) {
		case 'app':
			return <HomePage onChangePage={handleChangePage}/>
		case 'game':
			return <GamePage />
		default:
			return <HomePage />
	}
}

export default App;