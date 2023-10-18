import styled from 'styled-components'; // ver manual en https://styled-components.com/

const StyledButton = styled.button`
	background-color: red;
	padding: 1rem;
	border-radius: 0.5rem;
	border: none;
`;

const StyledButtonRed = styled(StyledButton)`
	background-color: ${props => props.color};
	color: aliceblue;
`;

export { StyledButton, StyledButtonRed };
