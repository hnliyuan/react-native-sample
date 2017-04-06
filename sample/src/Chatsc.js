import React , { Component } from 'react'
import { View , Text , Button } from 'react-native'
import { StackNavigator } from 'react-navigation'

class ChatScreen extends React.Component {
  static navigationOptions = {
    title: 'Chat with Jane',
  };
  render() {
  	const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Hello, Chat App!</Text>
        <Button
          onPress={() => navigate('Home')}
          title="Chat with Home"
        />
      </View>
    );
  }
}

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Hello, Chat App!</Text>
        <Button
          onPress={() => navigate('Chat')}
          title="Chat with Lucy"
        />
      </View>
    );
  }
}

const Chatsc = StackNavigator({
  Home: { screen: HomeScreen },
  Chat: { screen: ChatScreen },
});

export default Chatsc