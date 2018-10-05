/**
 * 每行的电影信息,点击item进入电影详情页面
 *外部传入：
 * movie电影对象
 * onPress事件处理方法
 * */
import React, {Component} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';


export default class movieItem extends Component {
    render() {
        var movie = this.props.movie;
        //提出演员姓名，原始数据中，数组元素是描述演员对象
        var actors = [];
        for (var i in movie.casts) {
            actors.push(movie.casts[i].name)
        }
        return (
            <TouchableOpacity style={styles.item} {...this.props}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} resizeMode="contain" source={{uri: movie.images.medium}}/>
                </View>
                <View style={styles.contentContainer}>
                    <View style={styles.textContainer}><Text style={styles.text}
                                                             numberOfLines={1}>名称:{movie.title}</Text></View>
                    <View style={styles.textContainer}><Text style={styles.text}
                                                             numberOfLines={1}>演员:{actors}</Text></View>
                    <View style={styles.textContainer}><Text style={styles.text}
                                                             numberOfLines={1}>评分:{movie.rating.average}</Text></View>
                    <View style={styles.textContainer}><Text style={styles.text}
                                                             numberOfLines={1}>时间:{movie.year}</Text></View>
                    <View style={styles.textContainer}><Text style={styles.text}
                                                             numberOfLines={1}>标签:{movie.genres}</Text></View>
                </View>
            </TouchableOpacity>
        );
    }
}

var styles = StyleSheet.create({
    item: {
        flexDirection: "row",
        height: 120,
        padding: 10
    },
    imageContainer: {
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        width: 80,
        height: 110
    },
    contentContainer: {
        flex: 1,
        marginLeft: 10
    },
    textContainer: {
        flex: 1,
        justifyContent: "center"
    },
    text: {
        color: "black"
    }

})
