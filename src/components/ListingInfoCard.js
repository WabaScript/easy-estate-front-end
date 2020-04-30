import React, { Component, useState } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Linking} from 'react-native'
import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base'
import CommentList from './CommentList'
import ExpandedListingInfoCard from './ExpandedListingInfoCard'

export default function ListingInfoCard({listId, phone, comments, realtor, address, price, bed, bath, cityAndState, zip, neighborhood, features, sqrFoot, updatedDate,}) {


    const [cardOpen, setCardOpen] = useState(false)

    const phoneParse = (number) => {
        return number.replace("[()\\s-]+", "");
    }

    return (
        <>
            <Card >
                <TouchableOpacity onPress={() => setCardOpen(!cardOpen)}>
                    <CardItem style={{paddingLeft: 35}} >
                        <Left>
                            <View style={{flexDirection: 'column'}}>
                                <Button transparent >
                                    <Icon onPress={()=>{Linking.openURL(`tel:${phoneParse(phone)}`);}} 
                                        type="FontAwesome" 
                                        name="phone" 
                                        style={{color: "green"}}
                                    />
                                </Button>
                                <Button transparent >
                                    <Icon onPress={() => Linking.openURL(`mailto:TESTING`)} 
                                        type="Entypo" name="mail" 
                                        style={{color: "green"}}/>
                                </Button>
                            </View>
                            <Body style={{paddingBottom:10}}>
                                <Text> {address} </Text>
                                <Text> {cityAndState}</Text>
                                <Text> {bed} bed {bath} bath</Text>
                                <Text >{price} </Text>    
                            </Body>
                        </Left>
                    </CardItem>
                </TouchableOpacity> 
                {cardOpen &&
                <CardItem >
                     <ExpandedListingInfoCard listId={listId} comments={comments} cityAndState={cityAndState} zip={zip} neighborhood={neighborhood} features={features} sqrFoot={sqrFoot} />
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