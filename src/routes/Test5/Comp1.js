import { cssWrapper } from './style';

import { useState } from "react";
import Comp2 from "./Comp2";


const Comp1 = () => {
  const [value, setValue] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckBox = event => {
    if(event.target.checked){
      setIsChecked(true)
    }else{
      setIsChecked(false);
    }
  }

  return(
    <div className={cssWrapper}>
      Latest Inputted from <code>{isChecked ? value : null}</code>
      <br/>
      <br/>
      <label htmlFor="overwrite">
        Local overwrite: <input id="overwrite" type="checkbox" value={isChecked} onChange={handleCheckBox}/>
        {isChecked && 
        <input id="mynumber1" type="text" value={value} placeholder="input mynumber1" onChange={e => setValue(e.target.value)}/>
        }
      </label>
      <Comp2 myNumber1={value}/>
    </div>
  )
}

export default Comp1;