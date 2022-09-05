import { useRef } from "react";
import useRenderLog from "../../hooks/useRenderLog";
import Input from "./Input";
import Table from "./Table";

const Test7 = () => {
  useRenderLog('Test7', 1);
  const nameRef = useRef('')

  const handleClick = (value, e) => {
    e.preventDefault()
    nameRef.current = value
  }

  return(
    <div>
      <ul>
        <li>Please filter the table by name search (after press enter or click search button)</li>
        <li>No rerender allowed in <code>Test7</code> component</li>
      </ul>
      <Input handleClick={handleClick}/>
      <div>
        <Table name={nameRef.current}/>
      </div>
    </div>
  )
}

export default Test7;