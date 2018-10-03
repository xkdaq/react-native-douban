/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Image, StyleSheet} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import bookList from "./view/book/book_list";
import movieList from "./view/movie/movie_list";
import Navigation from './view/common/navigation';


type Props = {};
export default class App extends Component<Props> {
    constructor(pop) {
        super(pop);
        this.state = {
            tab: "book"
        }
    }

    render() {
        return (
            <TabNavigator
                tabBarStyle={{height: 50}}
                style={styles.tab}>
                <TabNavigator.Item
                    selected={this.state.tab === 'book'}
                    title="book"
                    renderIcon={() => <Image
                        style={styles.image}
                        source={require('./src/img/icon_book_normal.png')}/>}
                    renderSelectedIcon={() => <Image
                        style={styles.image}
                        source={require('./src/img/icon_book_selected.png')}
                    />}
                    onPress={() => this.setState({tab: 'book'})}>
                    <Navigation component={bookList}/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.tab === 'movie'}
                    title="movie"
                    renderIcon={() => <Image
                        style={styles.image}
                        source={require('./src/img/icon_me_normal.png')}/>}
                    renderSelectedIcon={() => <Image
                        style={styles.image}
                        source={require('./src/img/icon_me_selected.png')}
                    />}
                    onPress={() => this.setState({tab: 'movie'})}>
                    <Navigation component={movieList}/>
                </TabNavigator.Item>
            </TabNavigator>
        );
    }
}

const styles = StyleSheet.create({

    //TabNavigator
    tab: {
        flex: 1
    },
    //TabNavigator的image
    image: {
        width: 26,
        height: 26
    }

});
