import {useState} from 'react';
import Menu from '../Menu/menu';
import Navbar from '../Navbar/navbar';

const MenuHeader = ({ bgActive }) => {
	const [isOpen, setOpen] = useState(null);
	const handleClockHamburg = () => {
		setOpen(prevState => !prevState);
	}
	return (
		<>
			<Menu isOpen={isOpen} />
			<Navbar isOpen={isOpen} bgActive={bgActive} onClickHamburg={handleClockHamburg} />
		</>
	)
}

export default MenuHeader;