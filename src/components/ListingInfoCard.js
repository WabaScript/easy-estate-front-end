import React, { Component, useState } from 'react'
import { ActivityIndicator, Text, View, StyleSheet, Image, SafeAreaView,
    ScrollView, ImageBackground, Animated, useWindowDimensions, TouchableOpacity} from 'react-native'
import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base'

export default function ListingInfoCard({comments, realtor, address, price, bed, bath}) {
    const [cardOpen, setCardOpen] = useState(false)

    return (
        <>
            <Card >
                <CardItem style={{paddingLeft: 35}} >
                    <Left>
                        <Button transparent >
                            <Icon type="FontAwesome" name="phone" style={{color: "green"}}/>
                        </Button>
                        <Body>
                            <TouchableOpacity>
                            <Text>{realtor}</Text>
                            </TouchableOpacity>
                           <TouchableOpacity onPress={() => setCardOpen(!cardOpen)}>
                            <Text note>{address}</Text>
                            <Text note>{price}      {bed} bed {bath} bath</Text>
                            </TouchableOpacity> 
                        </Body>
                    </Left>
                </CardItem>
                {cardOpen &&
                <CardItem >
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
                </CardItem>
                }
            </Card>
        </>
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