import "./table.css";

const Table = ({ list }) => {
  const trMapped = list.map((income, index) => {
    return (
      <tr key={index}>
        <td>{income.brand}</td>
        <td>$ {income.income}</td>
      </tr>
    );
  });
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Income</th>
          </tr>
        </thead>
        <tbody>{trMapped}</tbody>
      </table>
    </>
  );
};
export default Table;
