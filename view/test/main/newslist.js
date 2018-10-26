import React from 'react'
import {ListView, StyleSheet, View} from 'react-native'
import RequestUtil from "../util/RequestUtil";
import APIs from "../util/service";
import Util from "../../common/util";
import NewsItem from './newsitem';


export default class NewsList extends React.Component {

    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({
            rowHasChanged: (oldRow, newRow) => oldRow !== newRow
        });

        this._renderRow = this._renderRow.bind(this);
        this.state = {
            dataSource: ds,
            //网络请求标志
            show: false,
        }

    }

    render() {
        return (
            <View>
                {this.state.show ?
                    <ListView
                        dataSource={this.state.dataSource}
                        initialListSize={10}
                        renderRow={this._renderRow}
                        renderSeparator={this._renderSeparator}
                    />
                    : Util.loading}
            </View>
        )
    }

    componentDidMount() {
        this.getNewsList();
    }

    /**
     * 渲染item
     * */
    _renderRow(news) {
        return <NewsItem news={news} onPress={() => this.props.navigation.navigate('NewsDetail', {newid: 'detail'})}/>
    }

    /**
     * 渲染分割线
     * */
    _renderSeparator(sectionID, rowID) {
        var style = {
            height: 5,
            backgroundColor: "#F5F5F5"
        }
        return (
            <View style={style} key={sectionID + rowID}/>
        )
    }


    /**
     * 获取新闻列表
     * */
    getNewsList() {
        //开启loading
        this.setState({
            show: false
        });

        var that = this;
        RequestUtil.getRequest(APIs.getNewsList + this.props.news.name,
            function (data) {
                if (!data.data || data.data.length === 0) {
                    return alert("未查询到相关新闻")
                }

                //设置下载状态和数据源
                var ds = new ListView.DataSource({
                    rowHasChanged: (oldRow, newRow) => oldRow !== newRow
                })
                that.setState({
                    show: true,
                    dataSource: ds.cloneWithRows(data.data)
                })
            }
            , function (error) {
                alert(error)
            })
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
