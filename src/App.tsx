import React from "react";
import logo from "./logo.svg";
import { formataEmReais, soma, cifrao } from "./formataEmReiais";

function App() {
  const appMainClass = "app-main";

  const texto = "sou um paragrafo com um pouco de texto de uma const!";

  const reais = formataEmReais(5);

  return (
    <div
      classname={appMainClass}
      id="teste-teste-teste-teste-teste-teste-teste"
      style={}
    >
      <h1> sou um titulo h1</h1>
      <p> {texto} </p>
      <span>um valor: {reais}</span>
    </div>
  );
}

export default App;
