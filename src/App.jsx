import {useRouteMatch, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer/footer';
import MenuHeader from './components/MenuHeader/menu-header';
import About from './routes/About/about';
import Contact from './routes/Contact/contact';
import GamePage from './routes/Game/game';
import HomePage from './routes/Home/home';
import cn from 'classnames';
import s from './style.module.css';

const App = () => {
	const match = useRouteMatch('/');
	return (
		<Switch>
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
				</Switch>
				</div>
				<Footer />
			</Route>
			<Route  />
		</Switch>
	)
}

export default App;