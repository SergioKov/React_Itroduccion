
import Title from '../title/Title';
import Text2 from '../text2/Text2';
import Image from '../image/Image';
import { StyledBox } from './styles';// modo 1
// import { style } from './box.module.css';
console.log(StyledBox);

const Box = ({text1, text2, src, bordertop}) => {
    console.log(text1);
    console.log(text2);
    console.log(src);
    console.log(bordertop);
    return (
        <StyledBox bordertop={bordertop}>
            <Title text={text1}/>
            <Text2 text={text2}/>
            <Image src={src}/>
        </StyledBox>
    );
};

export default Box;