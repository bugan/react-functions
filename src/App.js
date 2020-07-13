import React from "react";
import "./App.css";
import FormularioCadastro from "./components/Form/Form";
import Container from "@material-ui/core/Container";

function App() {
  return (
    <Container maxWidth="sm">
      <FormularioCadastro></FormularioCadastro>
    </Container>
  );
}

export default App;
