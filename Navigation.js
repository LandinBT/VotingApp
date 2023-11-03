import React, { Component } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Agreements from './Agreements';
import Voting from './Voting';
import VotingResults from './VotingResults';

const Tab = createBottomTabNavigator();

export default class Navigation extends Component {
    render() {
        return (
            <Tab.Navigator>
                <Tab.Screen
                    name="Agreements"
                    component={Agreements}
                    options={{
                        headerShown: false,
                        tabBarLabel: 'Agreements',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="file-document-multiple" color={color} size={size} />
                        ),
                    }}
                />

                <Tab.Screen
                    name="Voting"
                    component={Voting}
                    options={{
                        headerShown: false,
                        tabBarLabel: 'Voting',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="vote" color={color} size={size} />
                        ),
                    }}
                />

                <Tab.Screen
                    name="Results"
                    component={VotingResults}
                    options={{
                        headerShown: false,
                        tabBarLabel: 'Results',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="list-status" color={color} size={size} />
                        ),
                    }}
                />

            </Tab.Navigator>
        )
    }
}
