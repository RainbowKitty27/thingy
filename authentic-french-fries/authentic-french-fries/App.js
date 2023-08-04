import * as React from 'react';
import { View } from 'react-native';
import HomeScreen from './articles/home'
import One from './articles/one'
import Recomended from './articles/rec'
import { createAppContainer, createSwitchNavigator} from 'react-navigation'; 

export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppContainer/>
      </View>
    );
  }
}


var AppNavigator = createSwitchNavigator({
  HomeScreen:HomeScreen,
  One : One,
  Recomended:Recomended
})

const AppContainer = createAppContainer(AppNavigator)
