import React from "react";
import TextField from "@material-ui/core/TextField";
import Switch from "@material-ui/core/Switch";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import moment from "moment";
import "moment/locale/pt-br";

function DadosPessoais({ onProximo }) {
  moment.locale("pt-br");

  return (
    <form>
      <TextField id="nome" label="Nome" margin="normal" />
      <TextField id="sobrenome" label="sobrenomes" margin="normal" />
      <br />
      <TextField id="cpf" label="CPF" margin="normal" />
      <br />
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <DatePicker
          label="Aniversário"
          margin="normal"
          value={new Date()}
          onChange={() => {}}
        ></DatePicker>
      </MuiPickersUtilsProvider>
      <br />
      <FormControlLabel
        label="Receber Novidades?"
        control={
          <Switch id="novidades" defaultChecked={true} color="primary" />
        }
      />
      <FormControlLabel
        label="Receber Promoções"
        control={
          <Switch value="promocoes" defaultChecked={true} color="primary" />
        }
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

export default DadosPessoais;
