import React from "react";
import TextField from "@material-ui/core/TextField";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
function DadosEnvio({ onProximo, onAnterior }) {
  return (
    <form>
      <TextField id="cep" label="CEP" />
      <TextField id="endereco" label="Endereço" />
      <TextField id="numero" label="N°" />
      <TextField id="estado" label="Estado" />
      <TextField id="cidade" label="Cidade" />
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
          onClick={onProximo}
          disabled={onProximo == null}
        >
          Próximo
        </Button>
      </ButtonGroup>
    </form>
  );
}

export default DadosEnvio;
