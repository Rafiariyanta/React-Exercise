import { useState } from 'react';
import Modal from './Modal';
import { cssForm } from './style';

const Test8 = () => {
  // ONLY ONE HANDLE METHOD ALLOWED
  const [data, setData] = useState({
    name: '',
    age: 0,
    address: ''
  })
  const [show, setShow] = useState(false);
  const handleInput = (e) => {
    if(e.target.classList.value === 'nameInput'){
      setData({
        ...data,
        name: e.target.value
      })
    }else if(e.target.classList.value === 'ageInput'){
      setData({
        ...data,
        age: e.target.value
      })
    }else if(e.target.classList.value === 'addressInput'){
      setData({
        ...data,
        address: e.target.value
      })
    }
  };

  const resetForm = () => {
      setData({
      name: '',
      age: 0,
      address: ''
      })
      setShow(false)
  }

  return(
    <div>
      <ul>
        <li>User can input the form - only 1 handle method is allowed</li>
        <li>When submit display the modal</li>
        <li>Show the form value inside the modal</li>
        <li>Reset the form and close the modal when user click the reset button</li>
      </ul>
      <form className={cssForm}>
        <input className='nameInput' value={data.name} type="text" placeholder="name" onChange={handleInput}/>
        <input className='ageInput' value={data.age ? data.age : ""} type="text" placeholder="age" onChange={handleInput}/>
        <textarea className='addressInput' value={data.address} type="text" placeholder="address" onChange={handleInput}/>
        <button onClick={e => {e.preventDefault(); setShow(!show)}}>Submit</button>
      </form>
      {show && 
      <Modal data={data} resetForm={resetForm}/>
      }
    </div>
  )
}

export default Test8;