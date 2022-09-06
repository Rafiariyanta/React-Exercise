import { useState } from "react";
import Solar from "./Solar";

const Test9 = () => {
  const [number, setNumber] = useState(1);

  return (
    <>
      <ul>
        <li>Make a solar system</li>
        <li>Number of planets must revolves around the sun</li>
        <li>The color of each planet must be unique</li>
        <li>More far the planet = more time it's revolves</li>
      </ul>
      <input type="text" value={number} placeholder="number of planet" onChange={e => setNumber(e.target.value)}/>
      <Solar number={number}/>
    </>
  )
}

export default Test9;