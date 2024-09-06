import "./App.css";
import Login from "./components/login/login";

function App() {
  const checkUserName = (userName) => {
    if (userName === "" || userName.includes("o") || userName.includes("O")) {
      alert("Usuario inválido para registrarse");
    } else {
      alert("¡Usuario registrado correctamente!");
    }
  };
  return (
    <>
      <Login checkUserName={checkUserName}></Login>
    </>
  );
}

export default App;
