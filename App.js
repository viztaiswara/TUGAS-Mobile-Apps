import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';
import Ones from './element/Ones';
import Twos from './element/Twos';


export default TabNavigator({
    Search: { screen: Ones },
    Map: { screen: Twos},
})
 

