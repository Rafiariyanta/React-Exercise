import {useEffect, useState } from "react";
import DATA from "./_data";

const Table = ({ onMount }) => {
  const [name, setName] = useState('')

  useEffect(() => {
    onMount(setName);
  }, [onMount, name])

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        {DATA.filter(datas => datas.name.includes(name)).map((eachrow, idx) => (
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
