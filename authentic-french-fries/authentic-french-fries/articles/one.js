import * as React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import App from '../App'
import HomeScreen from './home'
export default class One extends React.Component {
more = () => {
    this.props.navigation.navigate('HomeScreen');
  };
  render() {
   return (
     
    <View style={styles.container}>
    <Text>"If you want 2017 to be an exciting year, design it that way. That's the advice of former Google career coach and job strategist Jenny Blake , who has helped more than a thousand people improve their work lives. She recommends creating a ""mind map,"" a visual diagram of your interests and goals. Drawing one doesn't take long and could help you figure out the next project, hobby or career change that will make the new year happier and more successful, Blake says. ""My favorite way to brainstorm creatively, whether it's about values or setting goals for the new year, is through mind maps,"" Blake tells CNBC. To make one, write down the year at the center of a piece of paper, and then draw spokes with different themes that are important to you. For example, your spokes could be business, personal life, health and fitness, fun, or skill building. From each of those themes, draw additional spokes to connect the themes to ways you want to improve or experiment in that area. Blake recommends you ask yourself: ""What's important to me about that? And what does success look like?"" For example, in ""personal life,"" you could write, ""Meet up with a friend at least once a month"" or ""Take a music class."" The visual trick works because it helps you see the different ways you can improve, Blake writes in her book "" Pivot: The Only Move That Matters Is Your Next One ."" ""With mind mapping you are taking pen to paper, going old-school,"" Blake says. And if you're like many professionals who sit too much and stare too long at a computer, drawing might actually be fun. ""The goal is to break out of linear thinking,"" Blake says. ""Go broad. Go big. Go sideways, and then experiment to see which of your ideas is most likely to lead to a resonant next step."</Text>
      <Button style={styles.button} color="green" title="Like"/>
       <Button style={styles.button} color="red" title="Unlike"/>
       <Button style={styles.button} onPress={this.more}  title="More"/>
    </View>
  );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
   
   button: {
   width: '40%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderWidth: 2,
    borderRadius: 10,
  },
});

