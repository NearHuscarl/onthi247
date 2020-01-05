import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { documentProps } from '../utilities/proptypes';
import Tag, { TagGroup } from './Tag';
import { H4 } from './Headings';
import { Bold, Line, EllipsisButton } from './Common';
import styled, { appColors, theme, mixins } from '../styles';
import routes from '../routes';

const List = styled.section`
	& > :not(:last-child) {
		margin-bottom: 2rem;
	}
`;

const ListItem = styled.article`
	display: grid;
	grid-template-columns: min-content minmax(20rem, 1fr);
	grid-template-rows: repeat(5, min-content);
	column-gap: 2.1rem;
	row-gap: 0.35rem;

	position: relative;

	h4 {
		margin-bottom: 0;
	}

	img {
		width: 18.9rem;
		height: 11rem;
		border-radius: ${theme.borderRound};
		grid-row: 1 / -1;
	}

	h4 {
		transition: color 0.15s;
		color: ${appColors.blue};

		&:hover {
			color: ${mixins.lighten(appColors.blue)};
		}
	}
`;
const Description = styled.div`
	font-size: 1.3rem;
`;
const Stats = styled.div`
	font-size: 1.2rem;
`;
const More = styled.div`
	position: absolute;
	top: 0;
	right: 0;
`;

export default function DocumentList({ list }) {
	return (
		<List>
			{list.map((e, index) => (
				<React.Fragment key={e.id}>
					<ListItem>
						<img src={e.image} alt='exam preview' />
						<Link to={`${routes.document.path}/001`}>
							<H4>{e.title}</H4>
						</Link>
						<Bold>{`Môn ${e.subject}`}</Bold>
						<Description>{e.description}</Description>
						<Stats>
							<span>Phát hành: </span>
							<Bold as='span'>{e.publishDate} </Bold>
							<span> - Lượt xem: </span>
							<Bold as='span'>{e.views.toLocaleString()}</Bold>
							<span> - Lượt tải: </span>
							<Bold as='span'>{e.downloads.toLocaleString()}</Bold>
						</Stats>
						<TagGroup>
							{e.tags.map((t) => (
								<Tag key={t}>{t}</Tag>
							))}
						</TagGroup>
						<More>
							<EllipsisButton />
						</More>
					</ListItem>
					{index !== list.length - 1 ? <Line /> : null}
				</React.Fragment>
			))}
		</List>
	);
}

DocumentList.propTypes = {
	list: PropTypes.arrayOf(documentProps).isRequired,
};
