import React, { Component, useState } from 'react'
import { ActivityIndicator, Text, View, StyleSheet, Image, SafeAreaView,
    ScrollView, ImageBackground, Animated, useWindowDimensions, TouchableOpacity, Linking} from 'react-native'
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
                <CardItem style={{paddingLeft: 35}} >
                    <Left>
                        <Button transparent >
                            <Icon onPress={()=>{Linking.openURL(`tel:${phoneParse(phone)}`);}} style={styles.funcNavText} type="FontAwesome" name="phone" style={{color: "green"}}/>
                        </Button>
                        <Body>
                            <TouchableOpacity>
                                <Text onPress={() => Linking.openURL(`mailto:TESTING`)}title="support@example.com">
                                    {realtor}
                                </Text>
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