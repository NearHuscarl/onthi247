import React from 'react';
import PropTypes from 'prop-types';
import { documentProps } from '../utilities/proptypes';
import routes from '../routes';
import styled, { theme } from '../styles';
import { H3 } from './Headings';
import { Link, SizedBox } from './Common';

const List = styled.ul`
	& > :not(:last-child) {
		margin-bottom: 0.8rem;
	}
`;
const ListItem = styled.li`
	display: grid;
	grid-template-columns: max-content 1fr;
	grid-template-rows: repeat(2, min-content);
	align-items: flex-start;
	column-gap: 0.9rem;
`;
const Image = styled.img`
	grid-row: 1 / -1;
	width: 6.2rem;
	height: 6.2rem;
	object-fit: cover;
	border-radius: ${theme.borderRound};
`;
const Title = styled.div`
	font-size: 1.2rem;
`;
const Small = styled.div`
	font-size: 1rem;
`;

export default function DocumentListSideBar({ className, title, list }) {
	return (
		<div className={className}>
			<H3>{title}</H3>
			<SizedBox height={1} />
			<List>
				{list.map(({ id, publishDate, title: t, image }, index) => (
					<React.Fragment key={id}>
						<ListItem>
							<Image src={image} alt='document preview' />
							<Link to={`${routes.document.path}/001`}>
								<Title>{t}</Title>
							</Link>
							<Small>{publishDate}</Small>
						</ListItem>
						{index !== list.length - 1 && <SizedBox height={0.5} />}
					</React.Fragment>
				))}
			</List>
		</div>
	);
}

DocumentListSideBar.propTypes = {
	className: PropTypes.string,
	title: PropTypes.string.isRequired,
	list: PropTypes.arrayOf(documentProps).isRequired,
};

DocumentListSideBar.defaultProps = {
	className: '',
};
