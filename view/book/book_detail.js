import React, {Component} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';


import Header from "../common/header";
import Util from "../common/util";
import BookItem from './book_item';
import ServiceURL from './../common/service';


export default class bookDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            bookData: null
        }
    }

    render() {
        var bookData = this.state.bookData;
        return (
            <View style={styles.container}>{
                this.state.bookData ?
                    <View>
                        <Header
                            initObj={{backName: "book", barTitle: bookData.title}}
                            navigator={this.props.navigator}/>

                        <ScrollView>
                            <View>
                                <BookItem book={bookData}/>
                                <View>
                                    <Text style={styles.title}>图书简介</Text>
                                    <Text style={styles.text}>{bookData.summary}</Text>
                                </View>
                                <View style={{marginTop: 10}}>
                                    <Text style={styles.title}>作者简介</Text>
                                    <Text style={styles.text}>{bookData.author_intro}</Text>
                                </View>
                                <View style={{height: 55}}/>
                            </View>
                        </ScrollView>
                    </View>
                    : Util.loading
            }


            </View>


        )
    }


    /**
     * 组件挂载完成
     * */
    componentDidMount() {
        this.getData();
    }


    getData() {
        //开启loading，每次搜索都需要重新下载显示数据
        var that = this;
        var url = ServiceURL.book_detail_id + this.props.bookID;
        Util.getRequest(url,
            function (data) {
                //成功回调
                that.setState({//state发生变化就会重新渲染，执行render
                    bookData: data
                })
            }, function (error) {
                //失败回调
                alert(error)
            })

    }

}


var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    title: {
        fontSize: 16,
        margin: 10,
        fontWeight: "bold"
    },
    text: {
        marginLeft: 10,
        marginRight: 10,
        color: "#000d22"

    }
})