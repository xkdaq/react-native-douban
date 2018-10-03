/**
 * 封装 导航器初始化设置
 *外部传入：
 * component 需要展示的页面组件
 *route 对象  必须添加Component属性，如果需要传值可以添加passProps属性
 * */
import React, {Component} from 'react';

import {Navigator} from "react-native-deprecated-custom-components";

export default class Navigation extends Component {
    render() {
        var rootRoute = {
            component: this.props.component,
            passProps: {}
        }
        return (
            <Navigator
                initialRoute={rootRoute}
                configureScene={() => {
                    return Navigator.SceneConfigs.HorizontalSwipeJump;
                }}
                renderScene={(route, navigator) => {
                    var Component = route.component;
                    return (
                        <Component
                            navigator={navigator}
                            route={route}
                            {...route.passProps}
                        />
                    )
                }}
            />
        );
    }
}
