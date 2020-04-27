import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

import { Icon } from 'native-base'
import MainFeedContainer from "../containers/MainFeedContainer";

function HomeScreen() {
    return (
       <MainFeedContainer/>
    );
}
export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});