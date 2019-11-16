import React from 'react';
import Ads1 from '../../public/images/notads-1.jpg';
import Ads2 from '../../public/images/notads-2.jpg';

export default function Ads() {
	return (
		<div className='notads'>
			<h3 className='h3 mb-sm'>Quảng cáo</h3>
			<a
				href='https://nearhuscarl.github.io/portfolio'
				alt='notads'
				target='_blank'
				rel='noopener noreferrer'
			>
				<img src={Ads1} alt='ads 1' className='notads__img mb-sm' />
			</a>
			<a
				href='https://nearhuscarl.github.io/portfolio'
				alt='notads'
				target='_blank'
				rel='noopener noreferrer'
			>
				<img src={Ads2} alt='ads 2' className='notads__img' />
			</a>
		</div>
	);
}
