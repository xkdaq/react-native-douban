import React, {Component} from 'react';
import {ListView, ScrollView, View} from 'react-native';

import Util from './../common/util';
import SearchBar from './../common/searchbar';
import ServiceURL from './../common/service';
import MovieItem from './../movie/movie_item';
import MovieWebView from './../common/customWebView'

export default class movieList extends Component {
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({
            rowHasChanged: (oldRow, newRow) => oldRow !== newRow
        })
        this._renderRow = this._renderRow.bind(this);
        this._changeText = this._changeText.bind(this);
        this.state = {
            show: false,
            dataSource: ds,
            keywords: "从你的全世界路过"
        }
    }

    getData() {
        this.setState({show: false})
        var that = this;
        var url = ServiceURL.movie_search + "?count=20&q=" + this.state.keywords;
        Util.getRequest(url,
            function (data) {
                //成功回调
                if (!data.subjects || data.subjects.length === 0) {
                    return alert("未查询到相关电影")
                }
                var ds = new ListView.DataSource({
                    rowHasChanged: (oldRow, newRow) => oldRow !== newRow
                })
                that.setState({
                    show: true,
                    dataSource: ds.cloneWithRows(data.subjects)
                })
            }, function (error) {
                alert(error)
            })
    }

    _showDetail(title, url) {
        var detailRoute = {
            component: MovieWebView,
            passProps: {
                backName: "电影",
                title: title,
                url: url
            }
        }
        this.props.navigator.push(detailRoute)
    }

    _changeText(text) {
        this.setState({
            keywords: text
        })
    }

    _searchPress() {
        this.getData();
    }

    render() {
        return (
            <ScrollView>
                <SearchBar
                    placeholder="请输入电影名称"
                    onChangeText={this._changeText}
                    onPress={this._searchPress.bind(this)}
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

    componentDidMount() {
        this.getData();
    }

    _renderRow(movie) {
        return (<MovieItem movie={movie} onPress={this._showDetail.bind(this, movie.title, movie.alt)}/>)
    }

    //渲染分割线
    _renderSeparator(sectionID, rowID) {
        var style = {
            height: 1,
            backgroundColor: "#ccc"
        }
        return (
            <View style={style} key={sectionID + rowID}/>
        )
    }
}
