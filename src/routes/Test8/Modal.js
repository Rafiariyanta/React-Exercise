import { cssModal } from "./style"

const Modal = ({ data, resetForm}) => {
  return (
    <div className={cssModal}>
      Name: {data.name}
      <br/>
      Age: {data.age}
      <br/>
      Address: {data.address}
      <br/>
      <button onClick={() => {
        resetForm()
      }}>Reset</button>
    </div>
  );
};

export default Modal;
