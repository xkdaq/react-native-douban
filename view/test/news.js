/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text} from 'react-native';
import {DrawerNavigator} from "react-navigation";
import FirstPager from "./pager/FirstPager";
import SecondPager from "./pager/SecondPager";


export default class News extends Component<Props> {

    constructor(pop) {
        super(pop);
    }

    render() {
        return (
            <SimpleAppNavigator/>
        );
    }
}
const SimpleAppNavigator = DrawerNavigator({
    page1: {screen: FirstPager},
    page2: {screen: SecondPager}
}, {
    initialRouteName: 'page1',
    swipeEnabled: true,
    animationEnabled: true,
    lazy: false,
    tabBarPosition: 'bottom',
});

const styles = StyleSheet.create({});
