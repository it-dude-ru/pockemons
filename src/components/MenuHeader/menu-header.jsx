import {useState} from 'react';
import Menu from '../Menu/menu';
import Navbar from '../Navbar/navbar';

const MenuHeader = ({ bgActive }) => {
	const [isOpen, setOpen] = useState(null);
	const handleClick = () => {
		setOpen(prevState => !prevState);
	}
	return (
		<>
			<Menu isOpen={isOpen} handleClick={handleClick} />
			<Navbar isOpen={isOpen} bgActive={bgActive} onClickHamburg={handleClick} />
		</>
	)
}

export default MenuHeader;