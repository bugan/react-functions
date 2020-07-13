import React, { useState } from "react";
import DadosPessoais from "./DadosPessoais/DadosPessoais";
import DadosUsuario from "./DadosUsuario/DadosUsuario";
import DadosEnvio from "./DadosEnvio/DadosEnvio";

function FormularioCadastro() {
  const lista = [
    <DadosUsuario onProximo={proximo} />,
    <DadosPessoais onProximo={proximo} onAnterior={voltar} />,
    <DadosEnvio onAnterior={voltar} />,
  ];
  let index = 0;
  const [atual, setAtual] = useState(lista[index]);

  function proximo() {
    index++;
    setAtual(lista[index]);
  }

  function voltar() {
    index--;
    setAtual(lista[index]);
  }
  return <>{atual}</>;
}

export default FormularioCadastro;
