import React from 'react'
import {Dimensions, StyleSheet, Text, View} from 'react-native'

const {width, height} = Dimensions.get('window');
export default class NewsList extends React.Component {
    render() {
        const {style} = this.props;
        var news = this.props.dic;
        return (
            <Text>{news.name}</Text>
        )
    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
