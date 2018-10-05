import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from "./left_icon";

/**
 * 外部传入:
 * @param initObj(backName,barTitle)
 * @param navigator 点击返回上一层的pop()
 * */
export default class Header extends Component {
    render(pop1 = pop) {

        //获取obj对象，包括按钮名称和title
        var headerContent = this.props.initObj;

        return (
            <View style={styles.header}>
                <TouchableOpacity style={styles.left_btn}>
                    <Icon/>
                    <Text style={styles.btn_text}>{headerContent.backName}</Text>
                </TouchableOpacity>
                <View style={styles.title_container}>
                    <Text style={styles.title}>{headerContent.barTitle}</Text>
                </View>

            </View>
        );
    }

    _pop() {
        this.props.navigator.pop();
    }

}

var styles = StyleSheet.create({
    container: {
        width: 15,
        height: 15,
        borderLeftWidth: 2,
        borderBottomWidth: 2,
        borderColor: "#fff",
        marginLeft: 10,
        transform: [{rotate: "45deg"}]
    },
    header: {
        height: 44,
        backgroundColor: "#3457ff",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    left_btn: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    btn_text: {
        color: "#fff",
        fontSize: 17,
        fontWeight: "bold"
    },
    title_container: {
        flex: 1,
        justifyContent: "cneter",
        alignItems: "center"
    },
    title: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 5,
        marginLeft: -50,
        textAlign: "center"
    }

});






















