import { useRouteMatch, Route, Switch, Redirect } from 'react-router-dom';
import Footer from './components/Footer/footer';
import MenuHeader from './components/MenuHeader/menu-header';
import About from './routes/About/about';
import Contact from './routes/Contact/contact';
import GamePage from './routes/Game/game';
import HomePage from './routes/Home/home';
import cn from 'classnames';
import NotFound from './routes/NotFound/not-found';
import { FireBaseContext } from './context/firebase-context';
import Firebase from './services/firebase';

import s from './style.module.css';

const App = () => {
	const match = useRouteMatch('/');
	return (
		<FireBaseContext.Provider value={ new Firebase() }>
			<Switch>
				<Route path='/404' component={NotFound} />
				<Route>
					<MenuHeader bgActive={!match.isExact} />
					<div className={cn(s.wrap, {
						[s.isHomePage]: match.isExact
					})}>
						<Switch>
							<Route path='/' exact component={HomePage} />
							<Route path='/home' component={HomePage} />
							<Route path='/game' component={GamePage} />
							<Route path='/about' component={About} />
							<Route path='/contact' component={Contact} />
							<Route render={() => (
								<Redirect to='/404' />
							)} />
						</Switch>
					</div>
					<Footer />
				</Route>
			</Switch>
		</FireBaseContext.Provider>
	)
}

export default App;