import React from "react";
import TextField from "@material-ui/core/TextField";
import Switch from "@material-ui/core/Switch";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";

function DadosPessoais({ onProximo, onAnterior }) {
  const dados = {
    promocoes: true,
    novidades: true,
  };
  function escutadorInput(event) {
    const { name, value } = event.target;
    dados[name] = value;
  }
  function escutadorToogle(event) {
    const { name, checked } = event.target;
    dados[name] = checked;
  }

  return (
    <form>
      <TextField
        id="nome"
        label="Nome"
        margin="normal"
        name="nome"
        onChange={escutadorInput}
      />
      <TextField
        id="sobrenome"
        label="sobrenomes"
        margin="normal"
        name="sobrenome"
        onChange={escutadorInput}
      />
      <br />
      <TextField
        id="cpf"
        label="CPF"
        margin="normal"
        name="cpf"
        onChange={escutadorInput}
      />
      <br />

      <TextField
        label="Aniversário"
        margin="normal"
        type="date"
        defaultValue="1993-01-04"
        name="aniversario"
        onChange={escutadorInput}
      />

      <br />
      <FormControlLabel
        label="Receber Novidades?"
        control={
          <Switch
            id="novidades"
            defaultChecked={true}
            color="primary"
            name="novidades"
            onChange={escutadorToogle}
          />
        }
      />
      <FormControlLabel
        label="Receber Promoções"
        control={
          <Switch
            defaultChecked={true}
            color="primary"
            name="promocoes"
            onChange={escutadorToogle}
          />
        }
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
          onClick={() => onProximo(dados)}
          disabled={onProximo == null}
        >
          Próximo
        </Button>
      </ButtonGroup>
    </form>
  );
}

export default DadosPessoais;
