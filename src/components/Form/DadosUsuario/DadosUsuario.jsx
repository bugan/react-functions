import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

function DadosUsuario({ onProximo }) {
  return (
    <form>
      <TextField
        id="nome"
        label="Nome"
        defaultValue={"coloque seu nome"}
        fullWidth
        margin="normal"
      />
      <TextField
        id="emial"
        label="Email"
        defaultValue={"@gmail.com"}
        margin="normal"
        fullWidth
      />
      <TextField
        id="senha"
        label="Senha"
        margin="normal"
        type="password"
        fullWidth
      />

      <ButtonGroup
        variant="contained"
        color="default"
        size="large"
        margin="normal"
      >
        <Button color="secondary">Voltar</Button>
        <Button color="primary" onClick={onProximo}>
          Próximo
        </Button>
      </ButtonGroup>
    </form>
  );
}

export default DadosUsuario;
