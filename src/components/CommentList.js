import React, { useState, useContext } from 'react'
import { Text, StyleSheet, ScrollView, TouchableOpacity} from 'react-native'
import { Thumbnail, Body, Left, Right, Button, Icon } from 'native-base'
import Input from './Input'
import {Context} from '../actions/Store'

export default function CommentList({listId, comments, realtor, address, price, bed, bath, phone}) {

    const [comment, setComment] = useState('')
    const [toggleComBox, setToggleComBox] = useState(false)
    const [state, dispatch] = useContext(Context)

    const handleComment = async () => {
        if (comment !== '') {
        const commentPost = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                    user_id: state.currentUser.id,
                    listing_id: listId,
                    content: comment
                })
        }
        const response = await fetch(`http://10.0.0.113:3000/api/v1/comments`, commentPost)
        const body = await response.json()
        comments.push(body)
        setToggleComBox(!toggleComBox)
        } else {
            alert("You didn't enter a comment")
        }
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
            {toggleComBox &&
                <ScrollView >
                    
                <Body style={styles.newForm} >
                   <Input style={styles.inputOverRide} onChangeText={(text) => setComment(text)} value={comment}/>
                   <TouchableOpacity onPress={() => handleComment()}>
                        <Icon type="FontAwesome" name="send" style={styles.send} />
                   </TouchableOpacity>
                </Body>
                </ScrollView>
            }
            <Right style={styles.right}>
                <TouchableOpacity onPress={() => {setToggleComBox(!toggleComBox)}}>
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