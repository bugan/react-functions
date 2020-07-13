import React, { useState } from "react";
import DadosPessoais from "./DadosPessoais/DadosPessoais";
import DadosUsuario from "./DadosUsuario/DadosUsuario";
import DadosEnvio from "./DadosEnvio/DadosEnvio";

function FormularioCadastro() {
  const formularios = [
    <DadosUsuario onProximo={proximo} />,
    <DadosPessoais onProximo={proximo} onAnterior={voltar} />,
    <DadosEnvio onAnterior={voltar} onProximo={proximo} />,
  ];
  let index = 0;
  const [atual, setAtual] = useState(formularios[index]);
  const informacoesColetadas = [];

  function proximo(informacoes) {
    console.log(informacoes);
    informacoesColetadas[index] = informacoes;
    index++;
    setAtual(formularios[index]);
  }

  function voltar() {
    index--;
    setAtual(formularios[index]);
  }
  return <>{atual}</>;
}

export default FormularioCadastro;
