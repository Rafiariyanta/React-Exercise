import { cssWrapper, cssModalRight } from './style';
import { numberContext } from './index'
import { useContext } from 'react';

const Comp4 = (/* NO PROPS ALLOWED */) => {
  const {setValue} = useContext(numberContext)

  const handleChange = event => {
    setValue({ myNumber: event.target.value, myNumber1: event.target.value })
  }

  return(
    <>
      <div className={cssWrapper}>
        <div className={cssModalRight}>
          Input Modal
          <button type="button">⊗</button>
        </div>
        <input id="mynumber2" type="text" placeholder="input mynumber2" onChange={handleChange}></input>
      </div>
    </>
  )
}

export default Comp4;