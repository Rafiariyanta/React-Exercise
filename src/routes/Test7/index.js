import useRenderLog from "../../hooks/useRenderLog";
import Input from "./Input";
import Table from "./Table";

const Test7 = () => {
  useRenderLog('Test7', 1);

  let setValue = null;

  const onChildMount = (setter) => {
    setValue = setter;
  } 

  const handleClick = (value, e) => {
    e.preventDefault();
    setValue(value)
  }

  return(
    <div>
      <ul>
        <li>Please filter the table by name search (after press enter or click search button)</li>
        <li>No rerender allowed in <code>Test7</code> component</li>
      </ul>
      <Input handleClick={handleClick}/>
      <div>
        <Table onMount={onChildMount}/>
      </div>
    </div>
  )
}

export default Test7;