import React, { Component } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Agreements from './Agreements';
import Voting from './Voting';
import VotingResults from './VotingResults';

const Tab = createBottomTabNavigator();

export default class Navigation extends Component {
    render() {
        return (
            <Tab.Navigator>
                <Tab.Screen name="Agreements" component={Agreements} options={{ headerShown: false }} />
                <Tab.Screen name="Voting" component={Voting} options={{ headerShown: false }} />
                <Tab.Screen name="Results" component={VotingResults} options={{ headerShown: false }} />
            </Tab.Navigator>
        )
    }
}
