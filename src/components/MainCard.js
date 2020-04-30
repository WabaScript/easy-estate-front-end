import React, { Component, useRef, useState } from 'react'
import {  Text, View, StyleSheet, ScrollView, ImageBackground, Animated, useWindowDimensions, TouchableOpacity} from 'react-native'
import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base'
import ListingInfoCard from './ListingInfoCard';

export default function MainCard({phone, listId, thumb, images, realtor, address, price, bed, bath, updatedDate, cityAndState, features, neighborhood, zip, sqrFoot, comments}) {

    const scrollX = useRef(new Animated.Value(0)).current;
    const { width: windowWidth } = useWindowDimensions();
    const [userId, setUserId] = useState('')

    const handleBookmark = () => {
        const followListingPost = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                    follower_id: 5,
                    listing_id: listId
                })
        }
        fetch(`http://10.0.0.113:3000/api/v1/follow_listings`, followListingPost)
            .then((response) => response.json())
            .then((json) => alert("Listing added to Bookmarks!"))
            .catch((error) => console.error(error))
    }

    return (
        <>
            <Card>
                <CardItem>
                    <Left>
                        { thumb && <Thumbnail source={{uri: thumb}} /> }
                        <Body>
                            <Text>{realtor}</Text>
                            <Text note>{updatedDate}</Text>
                        </Body>
                    </Left>
                    <Right>
                        <TouchableOpacity onPress={() => handleBookmark()} >
                            <Icon type="MaterialIcons" name="library-add" />
                        </TouchableOpacity>
                    </Right>
                </CardItem>
                <CardItem>
                    <ScrollView
                        horizontal={true}
                        pagingEnabled
                        showsHorizontalScrollIndicator={false}
                        scrollEventThrottle={10}
                        onScroll={Animated.event([{
                            nativeEvent: {
                                contentOffset: {
                                x: scrollX
                                }
                            }}
                        ])}>
                        {images && images.map((image, imageIndex) => {
                            return (
                                <View style={{ width: windowWidth, height: 300 }} key={imageIndex} >
                                    <ImageBackground source={{ uri: image }} style={styles.card} />
                                </View>
                            );
                        })}
                    </ScrollView>
                </CardItem>
                <CardItem style={styles.indicatorContainer}>
                    {images.map((image, imageIndex) => {
                        const width = scrollX.interpolate({
                            inputRange: [
                                windowWidth * (imageIndex - 1),
                                windowWidth * imageIndex,
                                windowWidth * (imageIndex + 1)
                            ],
                            outputRange: [10, 20, 10],
                            extrapolate: "clamp"
                        });
                        return (
                        <Animated.View
                            key={imageIndex}
                            style={[styles.normalDot, { width }]}
                        />
                        );
                    })}
                </CardItem>
            </Card>
            <ListingInfoCard
                listId={listId} 
                phone ={phone} 
                comments={comments} 
                realtor={realtor} 
                address={address} 
                price={price} 
                bed={bed} 
                bath={bath}
                cityAndState={cityAndState}
                zip={zip}
                neighborhood={neighborhood}
                features={features}
                sqrFoot={sqrFoot}
                updatedDate={updatedDate}
            />
        </>
    )
}



const styles = StyleSheet.create({
    // container: {
    //   flex: 1,
    //   alignItems: "center",
    //   justifyContent: "center"
    // },
    // scrollContainer: {
    //   height: 300,
    //   alignItems: "center",
    //   justifyContent: "center"
    // },
    card: {
      flex: 1,
      marginVertical: 4,
      marginHorizontal: 30,
      borderRadius: 25,
      overflow: "hidden",
      alignItems: "center",
      justifyContent: "center"
    },
    normalDot: {
      height: 8,
      width: 8,
      borderRadius: 4,
      backgroundColor: "silver",
      marginHorizontal: 4,
      overflow: "hidden"
    },
    indicatorContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden"

    }
  });
  