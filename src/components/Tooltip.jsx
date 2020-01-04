import Tippy from '@tippy.js/react';
import styled, { appColors, theme } from '../styles';

const Tooltip = styled(Tippy)`
	/* https://atomiks.github.io/tippyjs/themes/#creating-a-theme */
	padding: 1rem 1.5rem;
	padding-bottom: 0;

	background-color: ${appColors.white};
	box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.25);
	color: ${theme.fontColor};

	&[data-placement^='top'] .tippy-arrow {
		border-top-color: ${appColors.white};
	}
	&[data-placement^='bottom'] .tippy-arrow {
		border-bottom-color: ${appColors.white};
	}
	&[data-placement^='left'] .tippy-arrow {
		border-left-color: ${appColors.white};
	}
	&[data-placement^='right'] .tippy-arrow {
		border-right-color: ${appColors.white};
	}
`;

export default Tooltip;
