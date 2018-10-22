import React from "react";
import {StackNavigator} from "react-navigation";
import Test from "./test/test";
import News from "./test/news";
import Market from "./test/market";
import Setting from "./test/setting";
import About from "./test/about";


const RootStack = StackNavigator(
    {
        Test: {
            screen: Test,
            navigationOptions: ({navigation}) => ({
                header: null
            })

        },

        News: {
            screen: News,
            navigationOptions: {
                title: 'News'
            }
        },

        Market: {
            screen: Market,
            navigationOptions: {
                title: 'Market'
            }
        },

        Setting: {
            screen: Setting,
            navigationOptions: {
                title: 'Setting'
            }
        },

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
