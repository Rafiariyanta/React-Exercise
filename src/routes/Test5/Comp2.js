import { cssWrapper } from './style';
import { numberContext } from './index'
import { useContext } from 'react';

const Comp2 = () => {
  const {value} = useContext(numberContext)

  return(
    <>
      <div className={cssWrapper}>Latest inputted value is: myNumber:{value.myNumber} , myNumber1: {value.myNumber1}*</div>
    </>
  )
}

export default Comp2;