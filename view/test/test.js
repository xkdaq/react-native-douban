/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Dimensions, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

let news = require('./../../src/img/icon_menu_news.png');
let market = require('./../../src/img/icon_menu_market.png');
let setting = require('./../../src/img/icon_menu_setting.png');
let about = require('./../../src/img/icon_menu_about.png');
let out = require('./../../src/img/icon_menu_out.png');

let {height, width} = Dimensions.get('window');

export default class Test extends Component<Props> {

    constructor(pop) {
        super(pop);
    }

    render() {

        return (
            <View>
                <View style={{height: 160, alignItems: 'center'}}>
                    <Image source={require("./../../src/img/img_header.png")}/>
                    <View style={{
                        marginTop: 30,
                        position: 'absolute',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}>
                        <Image source={require('./../../src/img/img_default_photo.png')}/>
                        <Text style={{color: 'white', marginTop: 2}}>Login to make great remarks</Text>
                        <TouchableOpacity style={styles.loginBtn}>
                            <Text style={{color: 'white', fontSize: 10}}>login</Text>
                        </TouchableOpacity>

                    </View>
                </View>

                <View style={{
                    height: height,
                    backgroundColor: 'white'
                }}>
                    {this.renderItem(news, 'News')}
                    {this.renderItem(market, 'Market')}
                    {this.renderItem(setting, 'Setting')}
                    {this.renderItem(about, 'About')}
                    {this.renderItem(out, 'Log out')}
                </View>
            </View>
        );
    }


    renderItem(img, title) {
        return (
            <TouchableOpacity
                onPress={() => this.props.navigation.navigate(title)}
                style={styles.item}
            >
                <View style={styles.item_left}>
                    <Image source={img}/>
                    <Text style={styles.item_left_text}>{title}</Text>
                </View>
                <Image style={styles.item_right_img} source={require('./../../src/img/icon_menu_right.png')}/>
            </TouchableOpacity>
        )
    }
}


const styles = StyleSheet.create({


    loginBtn: {
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        paddingHorizontal: 16,
        paddingVertical: 3,
        borderWidth: 1,
        borderColor: 'white'
    },


    item: {
        height: 54,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        justifyContent: 'space-between'
    },
    item_left: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 18
    },
    item_left_text: {
        color: '#9B9B9B',
        fontSize: 14,
        marginLeft: 12
    },
    item_right_img: {
        marginRight: 18
    }

});
