import { cssWrapper } from './style';
import { numberContext } from './index'
import { useContext } from 'react';

const Comp2 = ({ myNumber1 }) => {
  const number = useContext(numberContext)

  return(
    <>
      <div className={cssWrapper}>Latest inputted value is: myNumber:{number} , myNumber1: {myNumber1}*</div>
    </>
  )
}

export default Comp2;