import Button from "./components/button/Button";
import Title from "./components/title/Title";
import Subtitle from "./components/subtitle/Subtitle";
import Text from "./components/text/Text";
import Box from "./components/box/Box";
import { GlobalStyles } from "./styles/GlobalStyles";

// <Button text="Botón simple" number="1"/>

const App = () => {
	return (
		<>
			<GlobalStyles/>
			<Title text="Reliable, efficient delivery" />
			<Subtitle text="Powered by Technology" />
			<Text text="Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful" />
			

			<Box borderTop="#00c8c8" text1="Subervisor" text2="Monitors activity to identify project roadblocks" src="../public/icon-supervisor.svg"/>
			<Box borderTop="#ff637b" text1="Team Builder" text2="Scans our talent network to create the optimal team for your project" src="../public/icon-team-builder.svg"/>
			<Box borderTop="#377fd2" text1="Calculator" text2="Uses data from past projects to provide better delivery estimates" src="../public/icon-calculator.svg"/>
			<Box borderTop="#fcae4a" text1="Karma" text2="Regularly evaluates our talent to ensure quality" src="../public/icon-karma.svg"/>
			
		</>
	);
	
};


//console.log(App());

export default App;
