/**
 * 外部传入
 * book  图书的类
 * onPress 点击事件处理
 * */
import React, {Component} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default class bookItem extends Component {
    render() {
        var book = this.props.book;
        return (
            <TouchableOpacity style={styles.item} {...this.props}>
                {/*图书图像*/}
                <View>
                    <Image style={styles.image} source={{uri: book.image}}/>
                </View>
                {/*图书信息*/}
                <View style={styles.contentContainer}>
                    <View style={styles.textContainer}>
                        <Text numberOfLines={1}>{book.title}</Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.publisher_author} numberOfLines={1}>{book.publisher}</Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.publisher_author} numberOfLines={1}>{book.author}</Text>
                    </View>
                    <View style={{flexDirection: "row", flex: 1, alignItems: "center"}}>
                        <Text style={styles.price}>{book.price}</Text>
                        <Text style={styles.pages}>{book.pages}页</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}


var styles = StyleSheet.create({
    item:{
        flexDirection: "row",
        height:120,
        padding: 10
    },
    imageContainer:{
        justifyContent: "center",
        alignItems: "center"
    },
    image:{
        width:80,
        height: 100
    },
    contentContainer:{
        flex:1,
        marginLeft: 15
    },
    textContainer:{
        flex:1,
        justifyContent: "center"
    },
    publisher_author:{
        color:"#a3a3a3",
        fontSize:13
    },
    price:{
        color:"#2bb2a3",
        fontSize:16
    },
    pages:{
        marginLeft:10,
        color:"#a7a0a0"
    }
})