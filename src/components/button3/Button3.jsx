import { StyledButton2 } from './styles';
import { useState } from 'react';

const Button3 = ({text, action}) => {


    return <StyledButton2 onClick={action}>{text}</StyledButton2>;    
};



export default Button3;