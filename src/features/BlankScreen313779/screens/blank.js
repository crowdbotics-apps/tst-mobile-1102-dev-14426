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
    CheckBox_3: true,
    TextInput_5: "This is the value.",
    CheckBox_7: true,
    Switch_9: true
  }

  render = () => (
    <View>
      <CheckBox
        title="Checkbox"
        containerStyle={styles.CheckBox_3}
        checked={this.state.CheckBox_3}
        onPress={nextChecked => this.setState({ CheckBox_3: nextChecked })}
      />
      <TextInput
        placeholder="Sample text input placeholder"
        value={this.state.TextInput_5}
        onChangeText={nextValue => this.setState({ TextInput_5: nextValue })}
      />
      <CheckBox
        title="Radio button"
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
        containerStyle={styles.CheckBox_7}
        checked={this.state.CheckBox_7}
        onPress={nextChecked => this.setState({ CheckBox_7: nextChecked })}
      />
      <Switch
        trackColor={{ false: "#C0CCDA", true: "#409EFF" }}
        style={styles.Switch_9}
        value={this.state.Switch_9}
        onValueChange={nextChecked => this.setState({ Switch_9: nextChecked })}
      />
      <Text>Sample text content</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16
  },

  View_1: {},
  CheckBox_3: {},
  View_1: {},
  CheckBox_3: {},
  View_1: {},
  CheckBox_3: {
    width: 200,
    borderColor: "#eb1919",
    borderStyle: "dotted",
    lineHeight: 15
  },

  View_1: {},
  CheckBox_3: {
    width: 200,
    borderColor: "#eb1919",
    borderStyle: "dotted",
    lineHeight: 15
  },

  TextInput_5: {},
  View_1: {},
  CheckBox_3: {
    width: 200,
    borderColor: "#eb1919",
    borderStyle: "dotted",
    lineHeight: 15
  },

  TextInput_5: {},
  CheckBox_7: {},
  View_1: {},
  CheckBox_3: {
    width: 200,
    borderColor: "#eb1919",
    borderStyle: "dotted",
    lineHeight: 15
  },

  TextInput_5: {},
  CheckBox_7: { textDecorationLine: "line-through" },
  View_1: {},
  CheckBox_3: {
    width: 200,
    borderColor: "#eb1919",
    borderStyle: "dotted",
    lineHeight: 15
  },

  TextInput_5: {},
  CheckBox_7: { textDecorationLine: "line-through" },
  Switch_9: { alignSelf: "flex-start" },
  View_1: {},
  CheckBox_3: {
    width: 200,
    borderColor: "#eb1919",
    borderStyle: "dotted",
    lineHeight: 15
  },

  TextInput_5: {},
  CheckBox_7: { textDecorationLine: "line-through" },
  Switch_9: { alignSelf: "flex-start" },
  Text_11: {},
  View_1: {},
  CheckBox_3: {
    width: 200,
    borderColor: "#eb1919",
    borderStyle: "dotted",
    textTransform: "uppercase",
    lineHeight: 15
  },
  TextInput_5: {},
  CheckBox_7: { textDecorationLine: "line-through" },
  Switch_9: { alignSelf: "flex-start" },
  Text_11: {}
})
