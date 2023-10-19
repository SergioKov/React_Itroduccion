import Title from '../title/Title';
import { StyledButton2Red } from './styles';
import { StyledButton2Grey } from './styles';
import { StyledButton2 } from './styles';
import { useState } from 'react';

const Button2 = () => {
const [number, setNumber] = useState(0);

    return <>
        <Title>Number: {number}</Title>
        <StyledButton2 onClick={() => increment(number, setNumber)} onMouseOver={() => increment2(number, setNumber)}>
             Incremenar +1        
        </StyledButton2>

        <StyledButton2Red onClick={() => decrement(number, setNumber)}>
             Decremenar -1        
        </StyledButton2Red>

        <StyledButton2Grey onClick={() => resetNumber(number, setNumber)}>
             Reset number         
        </StyledButton2Grey>
    </>
    
};


const increment = (number, setNumber) => {
    setNumber(number + 1);
}
const increment2 = (number, setNumber) => {
    setNumber(number + 10 + 1);
}
const decrement = (number, setNumber) => {
    setNumber(number - 1);
}

const resetNumber = (number, setNumber) => {
    setNumber(0);
}

// const sayHi = (name) => {
//     console.log('hola', name);
// }

export default Button2;