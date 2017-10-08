import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

class Itens extends Component {


    render(){
        return(
            <View style={styles.item}>
              <View style={styles.foto}>
                <Image style={{height: 100, width: 100}} source={{ uri: this.props.item.foto }} />
              </View>
              <View style={styles.detalhesItem}>
                <Text style={styles.title}>{this.props.item.titulo}</Text>
                <Text style={styles.value}>R${this.props.item.valor}</Text>
                <Text style={styles.detalhes}>Local: {this.props.item.local_anuncio}</Text>
                <Text style={styles.detalhes}>Data de Publicação: {this.props.item.data_publicacao}</Text>
              </View>
            </View>
        );
    }
}

export default Itens;


const styles = StyleSheet.create({
    item: {
      borderWidth: 0.5,
      borderColor: '#999',
      margin: 10,
      padding: 10,
      flexDirection: 'row',
      backgroundColor: '#fff'
    },
    foto:{
        width: 102,
        height: 102
    },
    detalhesItem: {
        marginLeft: 20,
        flex: 1
    },
    title:{
        fontSize: 18,
        color: '#3B9AE8',
        marginBottom: 5

    },
    value: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    detalhes: {
        fontSize: 14
    }
  });