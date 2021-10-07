import React from "react";
import { Close } from "@styled-icons/evaicons-solid/Close";
import  axios  from "axios"

import { Container, CloseButton, Button } from "./styles";

class CreateTaskModal extends React.Component {
  state = {
    task: {
      taskName: "",
      description: "",
      color: ""
    }
  }

  updateField(event) {
    const task = { ...this.state.task };
    task[event.target.name] = event.target.value;
    this.setState({ task });
    console.log(event.target.value)
  }

  render(){
  return (
    <Container>
      <form>
        <h3>Nome da Tarefa</h3>
        <input type="text" placeholder="title" value={this.state.task.taskName} onChange={e => this.updateField(e)} name="taskName"/>
        <h3>Descrição da tarefa</h3>
        <input type="text" placeholder="description" value={this.state.task.description} name="description"/>
        <h3>Cor da Tarefa: </h3>
        <input type="color" name="color" id="TaskColor" value={this.state.task.color}/>

        <Button>Enviar</Button>
      </form>
      <CloseButton onClick={this.props.onClose}>
        <Close />
      </CloseButton>
    </Container>
  );
  }
}

export default CreateTaskModal;
