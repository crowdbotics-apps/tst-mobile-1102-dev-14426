import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export default class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = {
    Switch_3: true,
    CheckBox_17: true,
    CheckBox_5: true,
    TextInput_7: "",
    TextInput_9: ""
  }

  render = () => (
    <View>
      <Switch
        activeColor="#409EFF"
        inactiveColor="#C0CCDA"
        disabled={false}
        trackColor={{ false: "#C0CCDA", true: "#409EFF" }}
        value={this.state.Switch_3}
        onValueChange={nextChecked => this.setState({ Switch_3: nextChecked })}
      />
      <CheckBox
        title="Radio button"
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
        checked={this.state.CheckBox_17}
        onPress={nextChecked => this.setState({ CheckBox_17: nextChecked })}
      />
      <CheckBox
        title="Checkbox"
        checked={this.state.CheckBox_5}
        onPress={nextChecked => this.setState({ CheckBox_5: nextChecked })}
      />
      <TextInput
        placeholder="Sample text input placeholder"
        value={this.state.TextInput_7}
        onChangeText={nextValue => this.setState({ TextInput_7: nextValue })}
      />
      <TextInput
        placeholder="Number Input Placeholder"
        keyboardType="numeric"
        value={this.state.TextInput_9}
        onChangeText={nextValue => this.setState({ TextInput_9: nextValue })}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16
  },

  View_1: {},
  Text_3: {},
  View_1: {},
  Switch_3: {},
  CheckBox_17: {},
  CheckBox_5: {},
  TextInput_7: {},
  TextInput_9: {}
})
