import { useState } from "react";
import Input from "./Input";
import Label from "./Label";

const Test2 = () => {
  const [vals, setVals] = useState('')

  const handleChange = (value) => {
    setVals(value);
  }

  const handleClick = () => {
    setVals('');
  }

  return(
    <div>
      <ul>
        <li>Render user input value inside the label below</li>
        <li>show "close button" only when hovered, and clear the input value when clicked.</li>
      </ul>
      <p>
        <Label value={vals} handleClick={handleClick}/>
      </p>
      <Input handleChange={handleChange} value={vals}/>
    </div>
  )
}

export default Test2;