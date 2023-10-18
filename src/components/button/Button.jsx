// import style from './button.module.css';
// console.log(style);
import { StyledButtonRed } from './styles';// modo 1
console.log(StyledButtonRed);

const Button = ({text, number}) => {
    console.log(text);
    console.log(number);
    /* modo 1 */
    /*
    return (
        <button className={`${style.button} ${style.red} ${style['b-rad']} ${style['color-white']}`}>
            {text} {number}
        </button>
    );
    */

    /* modo 2 */
    return (
        <StyledButtonRed color="darkblue">
            {text} {number}
        </StyledButtonRed>
    );
};

export default Button;