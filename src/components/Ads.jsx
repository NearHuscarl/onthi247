import React from 'react';
import Ads1 from '../../public/images/notads-1.png';
import Ads2 from '../../public/images/notads-2.png';
import { H3 } from './Headings';
import styled, { theme, helperStyles } from '../styles';

const AdsContainer = styled.div`
	display: grid;
	grid-auto-rows: min-content;
	justify-content: center;

	& > :not(:last-child) {
		${helperStyles.marginBottomSmall}
	}

	img {
		width: 21rem;
		height: 11rem;
		object-fit: cover;
		border-radius: ${theme.borderRound};
		cursor: pointer;
	}
`;

export default function Ads() {
	return (
		<AdsContainer>
			<H3 className='mb-sm'>Quảng cáo</H3>
			<a
				href='https://nearhuscarl.github.io/portfolio'
				alt='notads'
				target='_blank'
				rel='noopener noreferrer'
			>
				<img src={Ads1} alt='ads 1' />
			</a>
			<a
				href='https://nearhuscarl.github.io/portfolio'
				alt='notads'
				target='_blank'
				rel='noopener noreferrer'
			>
				<img src={Ads2} alt='ads 2' />
			</a>
		</AdsContainer>
	);
}
