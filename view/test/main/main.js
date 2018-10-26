/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Dimensions, Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import ScrollableTabView, {ScrollableTabBar} from 'react-native-scrollable-tab-view'
import RequestUtil from './../util/RequestUtil'
import APIs from "../util/service";
import Swiper from "react-native-swiper";
import NewsList from "./newslist";
import Util from "../../common/util";

const {width} = Dimensions.get('window');

export default class Main extends Component<Props> {

    constructor(pop) {
        super(pop);
        this.state = {
            bannerArr: "",
            tabName: "",
        };
    }

    render() {
        return (

                <View style={{flex: 1, flexDirection: 'column'}}>
                    <View style={styles.wrapper}>
                        {this.renderBanner()}
                    </View>
                    <View style={{flex: 1}}>
                        {this.renderTabView()}
                    </View>
                </View>


        );
    }

    /**
     * 加载banner图
     * */
    renderBanner() {
        let arr = [];
        if (this.state.bannerArr.code === 1) {
            for (let i = 0; i < this.state.bannerArr.data.length; i++) {
                let url = this.state.bannerArr.data[i].img;
                arr.push(
                    <Image
                        key={i}
                        resizeMode="cover"
                        style={styles.bannerImage}
                        source={{uri: url.indexOf('http') === 0 ? `${url}` : `http://${url}`}}
                    />
                )
            }

            return (
                <Swiper
                    style={styles.wrapper}
                    height={140}
                    autoplay={true}
                    autoplayTimeout={4}
                    dot={<View style={styles.bannerDot}/>}
                    activeDot={<View style={styles.bannerActiveDot}/>}
                    paginationStyle={{bottom: 6}}
                    loop>
                    {arr}
                </Swiper>
            );
        } else {
            return (
                Util.loading
            );
        }
    }

    /**
     * 加载tablayout
     * */
    renderTabView() {
        let tabNameList = [];
        if (this.state.tabName.code === 1) {
            var data = this.state.tabName.data;
            tabNameList.push(
                data.map((news, i) => {
                    return (<View key={i} tabLabel={news.title}>
                        <NewsList key={i} news={news} navigation={this.props.navigation}/>
                    </View>)
                })
            );
            return (
                <ScrollableTabView
                    renderTabBar={() => <ScrollableTabBar/>}
                    tabBarBackgroundColor="#ffffff"
                    tabBarUnderlineStyle={styles.tabBarUnderline}
                    tabBarActiveTextColor="#3e9ce9"
                    tabBarInactiveTextColor="#aaaaaa">
                    {tabNameList}
                </ScrollableTabView>
            );

        } else {
            return (
                Util.loading
            );
        }
    }


    getArticleList(type) {

        alert(type);

        // var that = this;
        // let formData = new FormData();
        // formData.append("type", type);
        //
        // const opts = {
        //     method: "POST",
        //     body: formData,
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'multipart/form-data',
        //     },
        // };
        //
        // fetch('http://120.79.75.17:8094/article/getArticleList', opts)
        //     .then(response => {
        //         return response.json()
        //     })
        //     .then(data => {
        //         if (data.code === 1) {
        //             if (!data.data || data.data.length === 0) {
        //                 alert('未查询到相关新闻')
        //             }
        //             var ds = new ListView.DataSource({
        //                 rowHasChanged: (oldRow, newRow) => oldRow !== newRow
        //             })
        //             that.setState({
        //                 show: true,
        //                 dataSource: ds.cloneWithRows(data.data)
        //             })
        //
        //
        //         } else {
        //             alert('请求失败')
        //         }
        //     })
        //     .catch(error => {
        //         alert(error)
        //     });
    }


    componentDidMount() {
        this.getBannerData();
    }

    /**
     * 获取头部的轮播图
     * */
    getBannerData() {
        var that = this;
        /**
         * 获取banner广告轮播
         * */
        RequestUtil.getRequestPost(APIs.getBanner,
            function (data) {
                //成功回调
                that.setState({
                    bannerArr: data
                })
            }, function (error) {
                alert(error)
            });

        /**
         * 获取文章类别
         * */
        // RequestUtil.getRequestPost(APIs.getArticleType,
        //     function (data) {
        //         //成功回调
        //         that.setState({
        //             tabName: data
        //         })
        //     }, function (error) {
        //         alert(error)
        //     });

        /**
         * 获取文章类别(测试)
         * */
        RequestUtil.getRequest(APIs.getTestArticleType,
            function (data) {
                //成功回调
                that.setState({
                    tabName: data
                })
            }, function (error) {
                alert(error)
            })


    }
}


const styles = StyleSheet.create({

    //首页轮播图
    wrapper: {
        width: width,
        height: 140
    },
    //轮播默认小圆点
    bannerDot: {
        backgroundColor: '#9B9B9B',
        width: 10,
        height: 2,
        borderRadius: 0,
        margin: 3
    },
    //轮播选中小圆点
    bannerActiveDot: {
        backgroundColor: '#FFFFFF',
        width: 10,
        height: 2,
        borderRadius: 0,
        margin: 3
    },
    //轮播图片
    bannerImage: {
        flex: 1,
        width: width,
    },

    //tab
    tab: {
        paddingBottom: 0
    },
    //tab的文字
    tabText: {
        fontSize: 16
    },
    //tab的下划线
    tabBarUnderline: {
        backgroundColor: '#3e9ce9',
        height: 2
    }
});
