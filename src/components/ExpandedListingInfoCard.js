import React, { Component, useState } from 'react'
import { ActivityIndicator, Text, View, StyleSheet, Image, SafeAreaView,
    ScrollView, ImageBackground, Animated, useWindowDimensions, TouchableOpacity, Linking} from 'react-native'
import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base'
import CommentList from './CommentList';

export default function ExpandedListingInfoCard({listId, comments, cityAndState, zip, neighborhood, features, sqrFoot}) {



    const phoneParse = (number) => {
        return number.replace("[()\\s-]+", "");
    }

    return (
        <>
        <View style={styles.container}>
            <Body style={styles.bod} >
                <Text note>Neighborhood: {neighborhood}</Text>
                <Text note>Features: {features}</Text>
            </Body>
            <CommentList listId={listId} comments={comments}/>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 60,
      },
      bod: {
        paddingBottom: 10
      },
    user: {
        fontWeight: "700"
    },
    right: {
        paddingLeft: 200
    }
});