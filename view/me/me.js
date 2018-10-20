/**
 * 我的
 * */
import React, {Component} from 'react';
import {Dimensions, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

let news = require('./../../src/img/icon_menu_news.png');
let market = require('./../../src/img/icon_menu_market.png');
let setting = require('./../../src/img/icon_menu_setting.png');
let about = require('./../../src/img/icon_menu_about.png');
let out = require('./../../src/img/icon_menu_out.png');

let {height} = Dimensions.get('window');

export default class Mine extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <View style={{height: 160, alignItems: 'center'}}>
                    <Image style={{height: 160}} source={require("./../../src/img/img_header.png")}/>
                    <View style={{
                        flex: 1,
                        marginTop: 30,
                        position: 'absolute',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}>
                        <Image source={require('./../../src/img/img_default_photo.png')}/>
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
                    {this.renderItem(news, '图书')}
                    {this.renderItem(market, '电影')}
                    {this.renderItem(setting, '设置')}
                    {this.renderItem(about, '关于')}
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
                <Image style={{marginRight: 18}} source={require('./../../src/img/icon_menu_right.png')}/>
            </TouchableOpacity>
        )
    }

}

const styles = StyleSheet.create({

});
