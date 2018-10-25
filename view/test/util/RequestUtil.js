import React from 'react';
import {ActivityIndicator, Dimensions} from 'react-native';

var RequestUtil = {
    //屏幕尺寸
    windowSize: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height
    },

    //fetch的get方法
    getRequest: function (url, successCallback, failCallbak) {
        fetch(url)
            .then(response => {
                return response.json()
            })
            .then(responseData => {
                successCallback(responseData)
            })
            .catch(error => {
                failCallbak(error)
            })
    },

    //fetch的post方法
    getRequestPost: function (url, successCallback, failCallbak) {

        fetch(url, {
            method: 'POST'
        })
            .then(response => {
                return response.json()
            })
            .then(responseData => {
                successCallback(responseData)
            })
            .catch(error => {
                failCallbak(error)
            })
    },


    //loading效果
    loading:
        <ActivityIndicator style={{marginTop: 200}}/>

}
module.exports = RequestUtil;
