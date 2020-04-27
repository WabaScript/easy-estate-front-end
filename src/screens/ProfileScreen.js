import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

import { Icon } from 'native-base'

function ProfileScreen() {
    return (
        <View style={styles.container}>
            <Text>This is your Profile!</Text>
        </View>
    );
}
export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});