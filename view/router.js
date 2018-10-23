import React from "react";
import {StackNavigator} from "react-navigation";
import Test from "./test/test";
import News from "./test/news";
import Market from "./test/market";
import Setting from "./test/setting";
import About from "./test/about";
import APP from "./../App";

import bookList from "./book/book_list";
import movieList from "./movie/movie_list";
import Mine from "./me/me";


const RootStack = StackNavigator(
    {
        APP: {
            screen: APP,
            navigationOptions: ({navigation}) => ({
                header: null
            })

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
        bookList: {screen: bookList},
        movieList: {screen: movieList},
        Mine: {screen: Mine},
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
