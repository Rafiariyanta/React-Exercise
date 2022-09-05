import { useEffect, useRef } from "react";
import DATA from "./_data";

const Table = ({ name }) => {
  const tableRef = useRef();

  useEffect(() => {
    DATA.filter(datas => datas.name.includes(name))
    console.log('yeah');
  } , [name])
  return (
    <table ref={tableRef}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        {DATA.map((eachrow, idx) => (
          <tr key={idx}>
            <td>{eachrow.name}</td>
            <td>{eachrow.age}</td>
            <td>{eachrow.address}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table;
