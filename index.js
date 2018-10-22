/** @format */

import {AppRegistry} from 'react-native';
import AppTest from './AppTest';
import {name as appName} from './app.json';

//第一个版本v0.0.1 就直接指向APP
//AppRegistry.registerComponent(appName, () => App);

//第二个版本v0.0.2 我在里面练习布局和其他组件
AppRegistry.registerComponent(appName, () => AppTest);
