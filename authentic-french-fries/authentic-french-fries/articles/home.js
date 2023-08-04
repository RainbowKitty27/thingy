import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import One from './one';

export default class HomeScreen extends React.Component {
  article1 = () => {
    this.props.navigation.navigate('One');
  };
  render() {
    return (
      <View>
        <Button style={styles.button} onPress={this.article1} title="Article 1">
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 15,
    marginTop: 50,
    width: 200,
    height: 50,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
  },
});
