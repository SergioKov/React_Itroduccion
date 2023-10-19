import styled from 'styled-components'; // ver manual en https://styled-components.com/

const StyledButton2 = styled.button`
	background-color: green;
	padding: 1rem;
	border-radius: 0.5rem;
	color: white;
	font-size: 2rem;
	margin-right: 0.5rem;
	cursor: pointer;

	&:hover {
		opacity: 0.7;
		transition: 0.3s;
	}
`;

const StyledButton2Red = styled(StyledButton2)`
	background-color: red;
`;

const StyledButton2Grey = styled(StyledButton2)`
	background-color: grey;
`;

export { StyledButton2, StyledButton2Red, StyledButton2Grey };
