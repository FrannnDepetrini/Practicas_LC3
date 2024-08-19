import "./App.css";
import { Table } from "./components";

function App() {
  const netIncomes = [
    { brand: "McDonalds", income: 1291283 },
    { brand: "Burger King", income: 1927361 },
    { brand: "KFC", income: 1098463 },
  ];

  const averageIncomes = (
    netIncomes.reduce(
      (accumulator, currentValue) => accumulator + currentValue.income,
      0
    ) / netIncomes.length
  ).toFixed(3);

  return (
    <>
      <Table list={netIncomes}></Table>
      <p style={{ textAlign: "end" }}>Promedio de incomes: ${averageIncomes}</p>
    </>
  );
}

export default App;
