import DATA from "./_data";

const Table = ({ name }) => {

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
        {DATA.filter(datas => datas.name.includes(name)).map((datas, index) => (
          <tr key={index}>
            <td>{datas.name}</td>
            <td>{datas.age}</td>
            <td>{datas.address}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table;
