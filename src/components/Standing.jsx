import React from 'react';
import PropTypes from 'prop-types';
import { standingProps } from '../utilities/proptypes';

export default function Standing({ title, standing }) {
	return (
		<section>
			<h3 className='h3 mb-sm'>{title}</h3>
			<ul className='standing mb-md'>
				{standing.map((u, index) => (
					<React.Fragment>
						<li key={u.name} className='standing__rank'>
							<img
								className='standing__avatar'
								src={u.avatar}
								alt='user avatar'
							/>
							<div className='standing__info'>
								<h4 className='h4 standing__name'>{u.name}</h4>
								<p className='standing__lvl'>{`Level: ${u.level}`}</p>
							</div>
						</li>
						{index !== standing.length - 1 ? <div className='line' /> : null}
					</React.Fragment>
				))}
			</ul>
		</section>
	);
}

Standing.propTypes = {
	title: PropTypes.string.isRequired,
	standing: standingProps.isRequired,
};
