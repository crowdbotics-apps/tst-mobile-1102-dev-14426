import React, { Component } from 'react'
import { AppRegistry, Text, View, Button, StyleSheet } from 'react-native'
class App extends Component {
  state = {
      count: 0,
  };
  handleCounter = () => {
     this.setState({"count": this.state.count + 1})
  };
  
  render() {
      const { count } = this.state;
      return (
          <View>
              <Button onPress={this.handleCounter} title="Increment Count!"/>
              <Text style={styles.text}>{count}</Text>
          </View>
      );
  }
}
const styles = StyleSheet.create({
  text: {
    color: "red"
  },
})
AppRegistry.registerComponent('App', () => App)