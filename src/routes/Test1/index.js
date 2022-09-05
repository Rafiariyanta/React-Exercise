import { useState } from "react";

const Test1 = () => {
  const [vals, setVals] = useState('');

  return(
    <div>
      <ul>
        <li>Please render the inputted value</li>
      </ul>
      <p>
        <b>User Input: </b> {vals}
      </p>
      <input type="text" placeholder="input here" onChange={e => setVals(e.target.value)} />
    </div>
  )
}

export default Test1;