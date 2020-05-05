import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import ListingsContainer from "../containers/ListingsContainer";

function HomeScreen() {
    return (
       <ListingsContainer/>
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