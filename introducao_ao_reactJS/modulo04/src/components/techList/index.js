import React, { Component } from "react";
import TechItem from "../techItem"

class TechList extends Component {
  state = {
    newTech: "",
    techs: []
  };
  // executado assim que o componente aparece em tela
  componentDidMount(){}
  /* executado sempre que houver alterações nas props ou no estado, pois ele recebe as props
  antigas e o estado antigo com prevProps e prevState como parametros*/
  componentDidUpdate(_, prevState){
    // salvar no localStorage somente quando muda algo no estado de techs
    if(prevState.techs !== this.state.techs) {
      localStorage.setItem('techs', JSON.stringify(this.state.techs))
    }
  }
 //executado quando o componente deixa de existir
 componentWillUnmount(){}

  // armazenando os dados do input
  handleInputChange = e => {
    this.setState({
      newTech: e.target.value
    });
  };
// controlando stado imutavel criando novo estado e adicionando novos items
  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      techs: [...this.state.techs, this.state.newTech],
      newTech: ''
    })
  }
// ação de remover tecnoloia filtrando o valor diferente 
  handleDelete = (tech) => {
    this.setState({
      techs: this.state.techs.filter(t => t !== tech)
    })
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <ul>
            {this.state.techs.map(tech => (
              <TechItem 
                tech={tech} 
                key={tech} 
                onDelete={() => this.handleDelete(tech)}/>
            ))}
          </ul>
          <h3>Techs</h3>
          <label htmlFor="addTech">add techs</label>
          <input
            type="text"
            name=""
            id="addTech"
            value={this.state.newTech}
            onChange={this.handleInputChange}
          />
          <button type="submit">Enviar</button>
        </form>
      </>
    );
  }
}
export default TechList;
