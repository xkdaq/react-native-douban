/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text} from 'react-native';


export default class FirstPager extends Component<Props> {

    constructor(pop) {
        super(pop);
    }

    render() {

        return (
            <Text>我是侧边栏的第一个页面啦</Text>
        );
    }
}


const styles = StyleSheet.create({});
