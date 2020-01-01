import React from 'react';
import PropTypes from 'prop-types';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ContentContainer from '../layout/ContentContainer';
import styled, { appColors } from '../styles';

const Background = styled.div`
	background-color: ${appColors.greyLight1};
`;
const Container = styled(ContentContainer)`
	padding: 1.5rem 0;
	background-color: ${appColors.greyLight1};
`;
const BreadcrumbItem = styled.span`
	font-size: 1.4rem;
	${(props) => props.isFirst && 'font-weight: 600;'} :not(:last-child) {
		margin-right: 1rem;
	}
`;

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
								<BreadcrumbItem isFirst={isFirst}>{p}</BreadcrumbItem>
								<BreadcrumbItem>
									<FontAwesomeIcon icon={faChevronRight} size='sm' />
								</BreadcrumbItem>
							</React.Fragment>
						);
					}
					return <BreadcrumbItem key={key}>{p}</BreadcrumbItem>;
				})}
			</Container>
		</Background>
	);
}

Breadcrumb.propTypes = {
	path: PropTypes.arrayOf(PropTypes.string).isRequired,
};
