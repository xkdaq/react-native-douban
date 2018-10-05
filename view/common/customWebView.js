import React, {Component} from 'react';
import {StyleSheet, View, WebView} from 'react-native';

import Header from './header';

/**
 * 外部传入:
 * @param navigator
 * @param backName
 * @param title
 * @param url
 * */
export default class CustomWebView extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Header
                    navigator={this.props.navigator}
                    initObj={{
                        backName: this.props.backName,
                        barTitle: this.props.title
                    }}
                />
                <WebView
                    startInLoadingState={true}
                    contentInset={{top: -144, bottom: -220}}
                    source={{uri: this.props.url}}
                />
            </View>
        );
    }

    _pop() {
        this.props.navigator.pop();
    }
}

var styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFF",
        flex: 1
    }
})
