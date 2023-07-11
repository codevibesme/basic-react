import Body from "./Body";
import Form from "./Form";
import { useState } from "react";

function App() {
  const [colorName, setColorName] = useState('');
  const changeColor = (newColor) => {
    setColorName(newColor);
  }
  return (
    <div className ="App">
      <Body colorName = {colorName}/>
      <Form 
        colorName = {colorName}
        changeColor={changeColor}
      />
    </div>
  );
}

export default App;
