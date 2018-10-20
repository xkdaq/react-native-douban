import React from "react";
import {StackNavigator} from "react-navigation";
import Test from "./test/test";


const RootStack = StackNavigator(
    {
        Test: {
            screen: Test,
            navigationOptions: ({navigation}) => ({
                header: null
            })

        },

        //..
    },
    {
        navigationOptions: {
            headerTintColor: "#fff",
            headerStyle: {
                backgroundColor: "#23a2f2"
            }
        }
    }
);

export default RootStack;
