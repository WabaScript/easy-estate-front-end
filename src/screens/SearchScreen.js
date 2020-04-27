import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

import { Icon } from 'native-base'

function SearchScreen() {
    return (
        <View style={styles.container}>
            <Text>Go and Search something!</Text>
        </View>
    );
}
export default SearchScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});