import { useRef } from "react";

const Input = ({ handleClick }) => {
  const inputRef = useRef();


  return (
    <form>
      <input ref={inputRef} type="text" placeholder="search" />
      <button type="submit" onClick={ e => handleClick(inputRef.current.value, e)} >🔍</button>
    </form>
  )
}

export default Input;
