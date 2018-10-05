/**
 * 书列表页
 * */
import React, {Component} from 'react';
import {ListView, ScrollView, View} from 'react-native';


import Util from './../common/util';
import SearchBar from './../common/searchbar';
import ServiceURL from './../common/service';
import BookItem from './book_item';
import BookDetail from './book_detail';

export default class bookList extends Component {
    constructor(props) {
        super(props);
        //dataSource
        var ds = new ListView.DataSource({
            rowHasChanged: (oldRow, newRow) => oldRow !== newRow
        });

        this._changeText = this._changeText.bind(this);
        this._renderRow = this._renderRow.bind(this);

        this.state = {
            dataSource: ds,
            //网络请求标志
            show: false,
            //搜索关键字
            keywords: "React"
        }
    }

    /**
     * 网络请求
     * */
    getData() {
        //开启loading
        this.setState({
            show: false
        })

        //请求数据
        var that = this;
        var url = ServiceURL.book_search + "?count=20&q=" + this.state.keywords
        Util.getRequest(url,
            //成功的回调
            function (data) {
                if (!data.books || data.books.length === 0) {
                    return alert("未查询到相关书籍")
                }
                //设置下载状态和数据源
                var ds = new ListView.DataSource({
                    rowHasChanged: (oldRow, newRow) => oldRow !== newRow
                })
                that.setState({
                    show: true,
                    dataSource: ds.cloneWithRows(data.books)
                })
            },
            //失败的回调
            function (error) {
                alert(error)
            }
        )

    }


    render() {
        return (
            <ScrollView>
                <SearchBar
                    placeholder="请输入图书的名称"
                    onPress={this._searchPress.bind(this)}
                    onChangeText={this._changeText}
                />
                {
                    this.state.show ?
                        <ListView
                            dataSource={this.state.dataSource}
                            initialListSize={10}
                            renderRow={this._renderRow}
                            renderSeparator={this._renderSeparator}
                        />
                        : Util.loading
                }
            </ScrollView>
        );
    }

    /**
     * 组件挂载完成
     * */
    componentDidMount() {
        //组件挂载完成后加载数据
        this.getData();
    }

    /**
     * 渲染item
     * */
    _renderRow(book) {
        return <BookItem book={book} onPress={this._showDetail.bind(this, book.id)}/>
    }

    /**
     * 渲染分割线
     * */
    _renderSeparator(sectionID, rowID) {
        var style = {
            height: 1,
            backgroundColor: "#ccc"
        }
        return (
            <View style={style} key={sectionID + rowID}/>
        )
    }

    /**
     * 输入框改变
     * */
    _changeText(text) {
        this.setState({keywords: text})
    }

    /**
     * 搜索
     * */
    _searchPress() {
        this.getData();
    }

    /**
     * 进入详情
     * */
    _showDetail(bookID) {
        var detailRoute = {
            component: BookDetail,
            passProps: {
                bookID: bookID
            }
        }
        this.props.navigator.push(detailRoute)
    }

}
