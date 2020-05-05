import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import ProfileContainer from "../containers/ProfileContainer";

function ProfileScreen() {
    return (
        <ProfileContainer/>
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