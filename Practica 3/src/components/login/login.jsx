import { useState } from "react";

const Login = ({ checkUserName }) => {
  const [userName, setUserName] = useState("");
  const handlerInput = (e) => {
    var inputValue = e.target.value;
    setUserName(inputValue);

    if (inputValue.includes("o") || inputValue.includes("O")) {
      alert("Por favor, ¡Nombres de usuario sin la letra o!");
    }
  };
  const handlerRegister = (e) => {
    e.preventDefault();
    checkUserName(userName);
  };
  return (
    <div>
      <form>
        <input
          onChange={handlerInput}
          value={userName}
          placeholder="Nombre de usuario"
        ></input>
        <button type="submit" onClick={handlerRegister}>
          Registrar
        </button>
      </form>
      <p> {userName} </p>
    </div>
  );
};

export default Login;
