import {  useState } from "react";
import Input from "./Input";
import Table from "./Table";

const Test4 = () => {
  const [name, setName] = useState('')

  const handleClick = (value, e) => {
    e.preventDefault();
    setName(value)
  }

  return(
    <div>
      <ul>
        <li>Please render data into the table</li>
        <li>Please filter the table by name search (after press enter or click search button)</li>
      </ul>
      <Input handleClick={handleClick}/>
      <div>
        <Table name={name}/>
      </div>
    </div>
  )
}

export default Test4;