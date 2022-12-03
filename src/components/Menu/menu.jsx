import {Link} from 'react-router-dom';
import cn from 'classnames';
import s from './style.module.css';

const MENU = [
	{
		title: 'HOME',
		to: 'home',
	},
	{
		title: 'GAME',
		to: 'game',
	},
	{
		title: 'ABOUT',
		to: 'about',
	},
	{
		title: 'CONTACT',
		to: 'contact',
	},
];

const Menu = ({isOpen, handleClick}) => {
	return (
		<div className={cn(s.menuContainer, {
			[s.active]: isOpen === true,
			[s.deactive]: isOpen === false
		})}>
			<div className={s.overlay} />
			<div className={s.menuItems} onClick={handleClick}>
				<ul>
					{
						MENU.map(({ title, to }, index) => (
							<li key={index}>
								<Link to={`/${to}`}>
									{title}
								</Link>
							</li>
						))
					}
				</ul>
			</div>
		</div>
	)
}

export default Menu;