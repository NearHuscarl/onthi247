import React from 'react';
import PropTypes from 'prop-types';
import isString from 'lodash/isString';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ContentContainer from '../layout/ContentContainer';
import styled, { appColors } from '../styles';
import routes from '../routes';

export { routes };

const Background = styled.div`
	background-color: ${appColors.greyLight0};
	/* border-bottom: solid 1px ${appColors.greyLight2}; */

	position: relative;

	&::before {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		height: 1px;
		width: 100%;
		background-color: ${appColors.greyLight2};
	}
`;
const Container = styled(ContentContainer)`
	padding: 1.5rem 0;
	background-color: ${appColors.greyLight0};
`;
const BreadcrumbItem = styled.span`
	font-size: 1.4rem;
	${(props) => props.isFirst && 'font-weight: 600;'}

	&:not(:last-child) {
		margin-right: 1rem;
	}

	a {
		color: ${appColors.greyDark2};
		transition: color 0.25s;

		&:hover,
		&:active,
		&:focus {
			color: ${appColors.greyDark1};
		}
	}
`;

function linkComponent(p) {
	if (isString(p)) {
		return <HashLink to='#'>{p}</HashLink>;
	}

	return <Link to={p.path}>{p.name}</Link>;
}

export default function Breadcrumb({ path }) {
	return (
		<Background>
			<Container>
				{path.map((p, index) => {
					const key = index;
					const isFirst = index === 0;

					if (index !== path.length - 1) {
						return (
							<React.Fragment key={key}>
								<BreadcrumbItem isFirst={isFirst}>
									{linkComponent(p)}
								</BreadcrumbItem>
								<BreadcrumbItem>
									<FontAwesomeIcon icon={faChevronRight} size='sm' />
								</BreadcrumbItem>
							</React.Fragment>
						);
					}
					return (
						<BreadcrumbItem key={key}>{linkComponent(p)}</BreadcrumbItem>
					);
				})}
			</Container>
		</Background>
	);
}

Breadcrumb.propTypes = {
	path: PropTypes.arrayOf(
		PropTypes.oneOfType(
			PropTypes.shape({
				name: PropTypes.string,
				path: PropTypes.string,
			}),
			PropTypes.string,
		),
	).isRequired,
};
