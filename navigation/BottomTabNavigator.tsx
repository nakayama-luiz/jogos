import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { MainStackNavigator, ToDoListStackNavigator } from './StackNavigator'

export type TabParamList = {
  HomeTab: undefined
  TodoListTab: undefined
}

const Tab = createBottomTabNavigator<TabParamList>()

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName='TodoListTab'
    >
      <Tab.Screen
        name="HomeTab"
        options={{ title: 'Tab Squirtle' }}
        component={MainStackNavigator}
      />
      <Tab.Screen
        name="TodoListTab"
        options={{ title: 'Tab Todo List' }}
        component={ToDoListStackNavigator}
      />
    </Tab.Navigator>
  )
}

export default BottomTabNavigator
