import React, { Component, useState } from 'react'
import { ActivityIndicator, Text, View, StyleSheet, Image, SafeAreaView,
    ScrollView, ImageBackground, Animated, useWindowDimensions, TouchableOpacity, Linking} from 'react-native'
import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base'
import Input from './Input'

export default function CommentList({listId, comments, realtor, address, price, bed, bath, phone}) {

    const [comment, setComment] = useState('')
    const [newComment, setNewComment] = useState(false)

    const handleComment = () => {
        const commentPost = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                    user_id: 5,
                    listing_id: listId,
                    content: comment
                })
        }
        fetch(`http://10.0.0.113:3000/api/v1/comments`, commentPost)
            .then((response) => response.json())
            .then((json) => comments.push(json))
            .then(setNewComment(false))
            .catch((error) => console.error(error))
    }

    return (
        <>
            <ScrollView horizontal={true} >
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
            {newComment &&
                <ScrollView >
                <Body style={styles.newForm} >
                   <Input style={styles.inputOverRide} onChangeText={(text) => setComment(text)} value={comment}/>
                   <Icon type="FontAwesome" name="send" style={styles.send} onPress={() => handleComment()} />
                </Body>
                </ScrollView>
            }
            <Right style={styles.right}>
                <TouchableOpacity onPress={() => {setNewComment(!newComment)}}>
                    <Icon type="Ionicons" name="md-add-circle-outline" style={{fontSize: 30, color: "green"}} />
                </TouchableOpacity>
            </Right>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingRight: 12,
      },
    user: {
        fontWeight: "700"
    },
    right: {
        paddingLeft: 200
    },
    newForm: {
        padding: 15,
        flexDirection: "row"
    },
    inputOverRide: {
        backgroundColor: "lightgrey",
        width: '80%',
        padding: 10,
        borderRadius: 10
      },
    send: {
       
        paddingTop: 8, 
        paddingLeft: 5, 
        fontSize: 30, 
        color: "green"
    }
});