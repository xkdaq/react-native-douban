/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import RootStack from "./view/router";


export default class AppTest extends Component<Props> {

    constructor(pop) {
        super(pop);
    }

    render() {
        return <RootStack/>;
    }

}
