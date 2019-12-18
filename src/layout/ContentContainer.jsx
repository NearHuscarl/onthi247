import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { appColors, theme } from '../constants';

const ContentContainerDiv = styled.div`
	background-color: ${appColors.white};

	margin: 0 auto;
	max-width: ${theme.pageContainerWidth};
`;

const ContentContainerMain = styled.main`
	background-color: ${appColors.white};

	margin: 0 auto;
	max-width: ${theme.pageContainerWidth};
`;

const ContentContainer = ({ mainTag, children }) => {
	return mainTag ? (
		<ContentContainerMain>{children}</ContentContainerMain>
	) : (
		<ContentContainerDiv>{children}</ContentContainerDiv>
	);
};

ContentContainer.propTypes = {
	mainTag: PropTypes.bool,
	children: PropTypes.node,
};

ContentContainer.defaultProps = {
	mainTag: false,
};

export default ContentContainer;
