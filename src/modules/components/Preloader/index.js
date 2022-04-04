import React from 'react';
import preloader from '../../../assets/images/loading.gif'

import './index.scss';

const Preloader = () => {
	return (
		<div className='preloader'>
			<img src={preloader} alt='preloader' />
		</div>
	);
}

export default Preloader;