const Input = ({ value, handleChange }) => {
  return <input type="text" value={value} placeholder="input here" onChange={e => handleChange(e.target.value)}/>
}

export default Input;
