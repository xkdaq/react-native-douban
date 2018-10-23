/**
 * 我的
 * */
import React, {Component} from 'react';
import {Dimensions, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import News from "../test/news";

//背景图片和默认的头像
let header = require("./../../src/img/img_header.png");
let photo = require('./../../src/img/img_default_photo.png');
//新闻、市场、设置、关于、退出登录
let news = require('./../../src/img/icon_menu_news.png');
let market = require('./../../src/img/icon_menu_market.png');
let setting = require('./../../src/img/icon_menu_setting.png');
let about = require('./../../src/img/icon_menu_about.png');
let out = require('./../../src/img/icon_menu_out.png');
//右边的箭头
let right = require('./../../src/img/icon_menu_right.png');

let {height} = Dimensions.get('window');

export default class Mine extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <View style={{height: 160, alignItems: 'center'}}>
                    <Image style={{height: 160}} source={header}/>
                    <View style={{
                        flex: 1,
                        marginTop: 30,
                        position: 'absolute',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}>
                        <Image source={photo}/>
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
                    {this.renderItem(news, '新闻')}
                    {this.renderItem(market, '市场')}
                    {this.renderItem(setting, '设置')}
                    {this.renderItem(about, '关于')}
                    {this.renderItem(out, '退出登录')}
                </View>
            </View>
        );
    }

    /**
     * img:图标
     * title:标题
     * */
    renderItem(img, title) {
        return (
            <TouchableOpacity
                style={styles.item}
                //onPress={this._toNews.bind(this)}
            >
                <View style={styles.item_left}>
                    <Image source={img}/>
                    <Text style={styles.item_text}>{title}</Text>
                </View>
                <Image style={styles.item_right} source={right}/>
            </TouchableOpacity>
        )
    }

    _toNews() {
        var detailRoute = {
            component: News
        };
        this.props.navigator.push(detailRoute)
    }

}

const styles = StyleSheet.create({

    //条目
    item: {
        height: 54,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        justifyContent: 'space-between'
    },

    //条目左边的图片和文字
    item_left: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 18
    },

    //条目文字
    item_text: {
        color: '#9B9B9B',
        fontSize: 14,
        marginLeft: 12
    },

    //条目右边的箭头
    item_right: {
        marginRight: 18
    }

});
