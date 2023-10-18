
import Title from "./components/title/Title";
import Subtitle from "./components/subtitle/Subtitle";
import Text from "./components/text/Text";
import Box from "./components/box/Box";
import { GlobalStyles } from "./styles/GlobalStyles";
import WrBoxes from "./components/wr-boxes/WrBoxes";
import Button2 from "./components/button2/Button2";
import Button3 from "./components/button3/Button3";
import { useState } from "react";

// <Button text="Botón simple" number="1"/>

const App = () => {
	const [number, setNumber] = useState(0);
	return (
		<>
			<GlobalStyles/>

			<Title text="Reliable, efficient delivery" />
			<Subtitle text="Powered by Technology" />
			<Text text="Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful" />
			
			<WrBoxes />

		
			<h1>Number: {number}</h1>

			<Button3 text='+1' action={()=> increment(number, setNumber)} />
			<Button3 text='+2' action={()=> increment2(number, setNumber)} />
			<Button3 text='Reset' action={()=> reset(number, setNumber)} />
			<Button3 text='-1' action={()=> decrement(number, setNumber)} />
			<Button3 text='-2' action={()=> decrement2(number, setNumber)} />
			

			
			
		</>
	);
	
};

const increment = (number, setNumber) => {
    setNumber(number + 1);
}
const increment2 = (number, setNumber) => {
    setNumber(number + 2);
}
const decrement = (number, setNumber) => {
    setNumber(number - 1);
}
const decrement2 = (number, setNumber) => {
    setNumber(number - 2);
}

const reset = (number, setNumber) => {
    setNumber(0);
}


export default App;
