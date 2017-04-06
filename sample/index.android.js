import React,{ Component} from 'react'
import { AppRegistry } from 'react-native'
import AppRootContainer from './src/App'



const sample = () => (
  <AppRootContainer />
)

AppRegistry.registerComponent('sample', () => sample)
