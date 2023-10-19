import Box from "../box/Box";
import { StyledWrBoxes } from "./styles";


const WrBoxes = () => {
    // console.log(text);
    // console.log(number);
    return (
        <StyledWrBoxes>
            <Box bordertop="#00c8c8" text1="Subervisor" text2="Monitors activity to identify project roadblocks" src="../public/icon-supervisor.svg"/>

            <Box bordertop="#ff637b" text1="Team Builder" text2="Scans our talent network to create the optimal team for your project" src="../public/icon-team-builder.svg"/>
            
            <Box bordertop="#377fd2" text1="Calculator" text2="Uses data from past projects to provide better delivery estimates" src="../public/icon-calculator.svg"/>

            <Box bordertop="#fcae4a" text1="Karma" text2="Regularly evaluates our talent to ensure quality" src="../public/icon-karma.svg"/>

        </StyledWrBoxes>
    );
};

export default WrBoxes;