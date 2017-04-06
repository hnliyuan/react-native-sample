import React , { Component } from 'react'
import { Text } from 'react-native'

import { TabNavigator, StackNavigator } from 'react-navigation'

import ChatScreen from './Chatsc'


class RecentChatsScreen extends React.Component {
  render() {
    return <ChatScreen/>
  }
}

class AllContactsScreen extends React.Component {
  render() {
    return <ChatScreen/>
  }
}



const MainScreenNavigator = TabNavigator({
  Recent: { screen: RecentChatsScreen },
  All: { screen: AllContactsScreen },
});

export default MainScreenNavigator