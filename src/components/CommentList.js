import React, { Component, useState } from 'react'
import { ActivityIndicator, Text, View, StyleSheet, Image, SafeAreaView,
    ScrollView, ImageBackground, Animated, useWindowDimensions, TouchableOpacity, Linking} from 'react-native'
import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base'

export default function CommentList({comments, realtor, address, price, bed, bath, phone}) {

    return (
        <ScrollView
        horizontal={true} >
    {comments.length > 0 ? 
    comments.map((comment, commentIndex) => {
            return (
                <Left key={commentIndex} style={styles.container}>
                    <Thumbnail small source={{uri: comment.user.pro_pic}}/> 
                    <Body>
                        <Text style={styles.user}>{comment.user.first_name}</Text>
                        <Text note>{comment.content}</Text>
                    </Body>
                </Left>
            )})
    :
            <Left>
                <Body>
                    <Text>No Comments yet!</Text>
                </Body>
            </Left>
    }
    </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingRight: 12,
      },
    user: {
        fontWeight: "700"
    }
});