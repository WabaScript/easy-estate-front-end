import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

import { Icon, Card, CardItem, Left, Thumbnail, Body, Content } from 'native-base'


function ProfileCard({ pic, firstName, lastName, city, state, realtor }) {
    return (
        <View >
            <Thumbnail style={styles.thumby} large source={{uri: pic}} /> 
                <Body>
                    <Text style={styles.name}>{firstName}{lastName} </Text>
                    <View style={styles.info}>
                        <Text style={styles.infoText}>{city}, {state}</Text>
                        <Text style={styles.infoText} note>{ realtor ? "  ♦︎ Realtor" : null}</Text>
                    </View>
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
    },
    name: {
        marginBottom: 10,
        position: 'absolute',
        height: 80,
        marginRight: 40,
        paddingLeft: 30,
        marginLeft: 10,
        marginTop: 145,
        fontSize: 30,
        color: "white", 
        fontWeight: '800',
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 1,
        shadowRadius: 9.11,
        elevation: 14,
    },
    thumby: {
            width: 80,
            height: 80,
            borderRadius: 63,
            borderWidth: 4,
            borderColor: "white",
            marginBottom:10,
            position: 'absolute',
            marginLeft: 20,
            marginTop: 120
    },
    info: {
        position: "absolute",
        right: 10,
        width: 100,
        top: 210,
        padding: 3,
    },
    infoText: {
        fontSize: 18,
        color: "white", 
        textShadowColor: 'grey', 
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 1,
        shadowRadius: 9.0,
        elevation: 10,
    }
});