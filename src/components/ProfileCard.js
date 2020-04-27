import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

import { Icon, Card, CardItem, Left, Thumbnail, Body, Content } from 'native-base'

function ProfileCard({ pic, firstName, lastName, city, state, realtor }) {
    return (
        <View style={styles.container}>
            <Thumbnail large source={{uri: pic}} /> 
                <Body>
                    <Text>{firstName} {lastName}</Text>
                    <Text>{city}, {state}</Text>
                    <Text note>{ realtor ? "Realtor" : null}</Text>
                </Body>
        </View>
    );
}
export default ProfileCard;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});