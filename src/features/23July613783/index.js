import React, { Component } from 'react'
import { AppRegistry, Button, View, StyleSheet } from 'react-native'
class App extends Component {
  render() {
      return (
          <View>
              <Button style={styles.button} title="Hello"/>
          </View>
      );
  }
}
const styles = StyleSheet.create({
  button: {
    color: "white"
  },
})
AppRegistry.registerComponent('App', () => App)