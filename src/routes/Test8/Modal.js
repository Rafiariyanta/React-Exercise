import { cssModal } from "./style"

const Modal = ({ data, setData, setShow }) => {
  return (
    <div className={cssModal}>
      Name: {data.name}
      <br/>
      Age: {data.age}
      <br/>
      Address: {data.address}
      <br/>
      <button onClick={() => {
        setData({
        name: '',
        age: 0,
        address: ''
        })
        setShow(false)
      }}>Reset</button>
    </div>
  );
};

export default Modal;
