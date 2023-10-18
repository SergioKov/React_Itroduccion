import styled from 'styled-components'; // ver manual en https://styled-components.com/

const StyledBox = styled.div`
	background-color: white;
	padding: 1rem;
	border-radius: 0.3rem;
	width: 21.875rem;
	height: 15.625rem;
	margin: 1rem;
	box-shadow: 0px 10px 20px 0px #858383;
	border-top: 5px solid ${props => props.bordertop};
`;

export { StyledBox };
