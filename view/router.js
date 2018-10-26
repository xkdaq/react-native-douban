import React from "react";
import {StackNavigator} from "react-navigation";
import Test from "./test/test";
import News from "./test/news";
import Market from "./test/market";
import Setting from "./test/setting";
import About from "./test/about";
import Main from "./test/main/main";
import NewsDetail from "./test/main/newsdetail";


const RootStack = StackNavigator(
    {

        Main: {
            screen: Main,
            navigationOptions: ({navigation}) => ({
                header: null
            })
        },

        NewsDetail: {
            screen: NewsDetail,
            navigationOptions: {title: "News"}
        },


        //测试页面
        Test: {
            screen: Test,
            navigationOptions: ({navigation}) => ({
                header: null
            })

        },
        //测试页面:News
        News: {
            screen: News,
            navigationOptions: {
                title: 'News'
            }
        },
        //测试页面:Market
        Market: {
            screen: Market,
            navigationOptions: {
                title: 'Market'
            }
        },
        //测试页面:Setting
        Setting: {
            screen: Setting,
            navigationOptions: {
                title: 'Setting'
            }
        },
        //测试页面:About
        About: {
            screen: About,
            navigationOptions: ({navigation}) => ({
                header: null
            })
        },
        //..
    },
    {
        navigationOptions: {
            headerTintColor: "#4a4a4a",
            headerStyle: {
                backgroundColor: "#ffffff"
            }
        }
    }
);

export default RootStack;
