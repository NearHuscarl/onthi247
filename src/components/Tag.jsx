import styled, { theme } from '../styles';

const Tag = styled.div`
	padding: 0.3rem 0.6rem;

	background-color: #e1ecf4;
	color: #39739d;
	border-radius: ${theme.borderRound};
	font-size: 1rem;
	font-weight: 600;

	transition: background-color 0.2s;
	cursor: pointer;

	&:hover {
		background-color: darken(#e1ecf4, 7.5%);
	}
`;

export const TagGroup = styled.div`
	display: flex;
	align-items: flex-start;

	& > :not(:last-child) {
		margin-right: 0.7rem;
	}
`;

export default Tag;
