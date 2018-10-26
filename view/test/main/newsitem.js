/**
 * 外部传入
 * book  新闻的类
 * onPress 点击事件处理
 * */
import React, {Component} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default class newsitem extends Component {
    render() {
        var news = this.props.news;
        return (
            <TouchableOpacity style={styles.item} {...this.props}>

                <View style={styles.contentContainer}>
                    <View>
                        <Text style={{color: '#4A4A4A'}} numberOfLines={3}>{news.title}</Text>
                    </View>
                    <View>
                        <Text style={{color: '#4A4A4A', fontSize: 10}} numberOfLines={1}>{news.type}</Text>
                        <Text style={{color: '#4A4A4A', fontSize: 10}} numberOfLines={1}>{news.time}</Text>
                    </View>
                </View>

                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={{uri: news.img}}/>
                </View>
            </TouchableOpacity>
        );
    }
}


var styles = StyleSheet.create({
    item: {
        backgroundColor: 'white',
        flexDirection: "row",
        height: 110,
        padding: 10
    },
    contentContainer: {
        flex: 1,
        marginLeft: 8,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    imageContainer: {
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        width: 120,
        height: 90,
        borderRadius: 4
    },

});
