
import Title from '../title/Title';
import Text from '../text/Text';
import Image from '../image/Image';
import { StyledBox } from './styles';// modo 1
// import { style } from './box.module.css';
console.log(StyledBox);

const Box = ({text1, text2, src, borderTop}) => {
    console.log(text1);
    console.log(text2);
    console.log(src);
    console.log(borderTop);
    return (
        <StyledBox borderTop={borderTop}>
            <Title text={text1}/>
            <Text text={text2}/>
            <Image src={src}/>
        </StyledBox>
    );
};

export default Box;