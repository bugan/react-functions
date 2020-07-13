import React from "react";
import TextField from "@material-ui/core/TextField";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";

function DadosEnvio({ onProximo, onAnterior }) {
  const dados = {};
  function escutadorInput(event) {
    const { name, value } = event.target;
    dados[name] = value;
  }
  return (
    <form>
      <TextField id="cep" label="CEP" onChange={escutadorInput} name="cep" />

      <TextField
        id="endereco"
        label="Endereço"
        onChange={escutadorInput}
        name="endereco"
        required
      />
      <TextField
        id="numero"
        label="N°"
        onChange={escutadorInput}
        name="numero"
        required
      />
      <TextField
        id="estado"
        label="Estado"
        onChange={escutadorInput}
        name="estado"
        required
      />
      <TextField
        id="cidade"
        label="Cidade"
        onChange={escutadorInput}
        name="cidade"
        required
      />
      <br />
      <ButtonGroup
        variant="contained"
        color="default"
        size="medium"
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

export default DadosEnvio;
