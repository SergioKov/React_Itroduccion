import { StyledImage } from './styles';// modo 1
console.log(StyledImage);

const Image = ({src}) => {
    console.log(src);
    return (
        <StyledImage src={src}/>
    );
};

export default Image;