import React from 'react';
import logo from './logo.png';

const Header = () => {
	return (
		<header>
			<img src={logo} alt='Logo' className='logo'></img>
			<h3>Url Shortener Service</h3>
		</header>
	);
};

export default Header;
