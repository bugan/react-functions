import React, { useRef } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

function DadosUsuario({ onProximo, onAnterior }) {
  const formulario = useRef(null);
  const dados = {};
  function escutadorInput(event) {
    const { name, value } = event.target;
    dados[name] = value;
  }

  function enviarDados(event) {
    event.preventDefault();
    console.log("passou aqui");
    onProximo(dados);
  }
  return (
    <form ref={formulario} onSubmit={enviarDados}>
      <TextField
        id="nome"
        name="nome"
        label="Nome"
        placeholder={"coloque seu nome"}
        fullWidth
        margin="normal"
        onChange={escutadorInput}
      />
      <TextField
        id="email"
        name="email"
        label="Email"
        defaultValue={"@gmail.com"}
        margin="normal"
        fullWidth
        onChange={escutadorInput}
      />
      <TextField
        id="senha"
        name="senha"
        label="Senha"
        margin="normal"
        type="password"
        fullWidth
        onChange={escutadorInput}
      />

      <ButtonGroup
        variant="contained"
        color="default"
        size="large"
        margin="normal"
      >
        <Button
          color="secondary"
          onClick={onAnterior}
          disabled={onAnterior == null}
        >
          Voltar
        </Button>
        <Button
          color="primary"
          onClick={() => {
            console.log(formulario.current);
            formulario.current.submit();
          }}
          disabled={onProximo == null}
        >
          Próximo
        </Button>
      </ButtonGroup>
    </form>
  );
}

export default DadosUsuario;
