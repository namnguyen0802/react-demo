import React from 'react';

import logoImage from '../../assets/images/burger-logo.png';
import'./Logo.css';

const logo = (props) => (
	<div className="Logo" style={{height: props.height}}>
		<img src={logoImage} alt="MyBurger" />
	</div>
);

export default logo;
