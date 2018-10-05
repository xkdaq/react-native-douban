/**
 * 组件!!!
 * */

import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";


export default class SearchBar extends Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.input} {...this.props}/>
                </View>
                <TouchableOpacity style={styles.btn}{...this.props}>
                    <Text style={styles.search}>搜索</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        height: 44,
        marginTop: 10
    },

    inputContainer: {
        flex: 1,
        marginLeft: 5
    },
    input: {
        flex: 1,
        height: 44,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: "#ccc",
        padding: 5
    },
    btn: {
        width: 55,
        height: 44,
        marginLeft: 5,
        marginRight: 5,
        backgroundColor: "#23BEFF",
        borderRadius: 4
    },
    search: {
        flex: 1,
        color: "#fff",
        fontSize: 15,
        fontWeight: "bold",
        textAlign: "center",
        lineHeight: 40
    }

});



