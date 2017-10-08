import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import Itens from './Itens'
import axios from 'axios';

class ListItems extends Component<{}> {

    // constructor(props){
    //     super(props);
    //     console.log('Construindo a aplicação');
    // }

    // componentWillMount(){
    //   console.log('Fazer algo antes de renderizar');
    // }

    // componentDidMount(){
    //     console.log('Fazer algo depois de renderizar');
    // }

    constructor(props){
        super(props);
  
        this.state = {  listaItems: [] };
      }
  
      componentWillMount(){
          // request http
          axios.get('http://faus.com.br/recursos/c/dmairr/api/itens.html')
          .then((response) => { this.setState({ listaItems: response.data }) })
          .catch(() => { console.log('Erro ao recuperar os dados')});
      }

    render(){
        // console.log('Objeto renderizado');
        return(
          <ScrollView>
              { this.state.listaItems.map(item => {
                return(
                    <Itens key={item.titulo} item={item} />
                    );
              }) }
          </ScrollView>
        );
    }
}

export default ListItems;