import styled from '../styles';

const SizedBox = styled.div`
	height: ${(props) => props.height || '0'}rem;
	width: ${(props) => props.width || '0'}rem;
`;

const Bold = styled.div`
	font-weight: 600;
`;

export { Bold, SizedBox };
