/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Dimensions, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

var news = require('./src/img/icon_menu_news.png');
var market = require('./src/img/icon_menu_market.png');
var setting = require('./src/img/icon_menu_setting.png');
var about = require('./src/img/icon_menu_about.png');
var out = require('./src/img/icon_menu_out.png');

let {height, width} = Dimensions.get('window');

export default class AppTest extends Component<Props> {

    constructor(pop) {
        super(pop);
    }

    render() {

        return (
            <View>
                <View style={{height: 160, alignItems: 'center'}}>
                    <Image style={{height: 160}} source={require("./src/img/img_header.png")}/>
                    <View style={{
                        flex: 1,
                        marginTop: 30,
                        position: 'absolute',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}>
                        <Image source={require('./src/img/img_default_photo.png')}/>
                        <Text style={{
                            marginTop: 10,
                            fontSize: 14,
                            color: 'white'
                        }}>会唱情歌的小猴子</Text>
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
                style={{
                    height: 54,
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor: 'white',
                    justifyContent: 'space-between'
                }}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginLeft: 18
                }}>
                    <Image source={img}/>
                    <Text style={{
                        color: '#9B9B9B',
                        fontSize: 14,
                        marginLeft: 12
                    }}>{title}</Text>
                </View>
                <Image style={{marginRight: 18}} source={require('./src/img/icon_menu_right.png')}/>
            </TouchableOpacity>
        )
    }
}


const styles = StyleSheet.create({



});
