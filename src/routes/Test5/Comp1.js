import { cssWrapper } from './style';

import { useContext, useState } from "react";
import Comp2 from "./Comp2";
import { numberContext } from './index'


const Comp1 = () => {
  const {value, setValue} = useContext(numberContext)
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
      Latest Inputted from <code>{isChecked ? value.myNumber1 : null}</code>
      <br/>
      <br/>
      <label htmlFor="overwrite">
        Local overwrite: <input id="overwrite" type="checkbox" value={isChecked} onChange={handleCheckBox}/>
        {isChecked && 
        <input id="mynumber1" type="text" value={value.myNumber1} placeholder="input mynumber1" onChange={e => setValue({ ...value, myNumber1: e.target.value })}/>
        }
      </label>
      <Comp2 />
    </div>
  )
}

export default Comp1;