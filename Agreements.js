//"https://votingapp2023.000webhostapp.com/data.php?"
import React, { Component } from 'react'
import { FlatList, Text, View } from 'react-native'

/**
const renderItem = ({ item }) => (
  <View>
    <Text>{item.title}</Text>
    <Button title="Votar" onPress={() => navigation.navigate('Voting', { agreement: item })} />
    <Button title="Resultados" onPress={() => navigation.navigate('Results', { agreement: item })} />
  </View>
);
*/

/**
constructor(props) {
 super(props);
    this.state = {
      modalVisibleEmail: false,

      description: "",
      votes_in_favor: 0,
      votes_against: 0,
      abstencions: 0
    };
  }
 */

export default class Agreements extends Component {

  render() {
    return (
      <Text>Hola Mundo!</Text>
      /*
      <View>
        <FlatList
          data={agreements}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    */
    )
  }

}
