import React, { Component, useRef } from "react";
import { View, Text, StyleSheet, ScrollView, ImageBackground, Animated, useWindowDimensions } from "react-native";
import { Icon, Container, Content, Card, CardItem } from 'native-base';
import {locHost} from '../helpers/localhost';


function ProfileListings({ listings }) {
    const scrollX = useRef(new Animated.Value(0)).current;
    const { width: windowWidth } = useWindowDimensions();
    const money = (num) => {
        return '$' + num.toFixed().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
      }
      
    return (
        <>
        {listings &&
            <Content showsVerticalScrollIndicator={false}>
                <Card style={styles.card}>
                <CardItem style={styles.shadow}>
                    <ScrollView
                        horizontal={true}
                        pagingEnabled
                        showsHorizontalScrollIndicator={false}
                        decelerationRate={0} //snap
                        snapToInterval={windowWidth * .8} //your element width
                        snapToAlignment={"center"}
                        scrollEventThrottle={10}
                        onScroll={Animated.event([{
                            nativeEvent: {
                                contentOffset: {
                                x: scrollX
                                }
                            }}
                        ])}
                    >
                        {listings.map((listing, listingIndex) => {
                            return (
                                <View style={{ width: windowWidth * .8, height: 275 }} key={listingIndex} >
                                    <ImageBackground 
                                        source={{ uri: listing.uploaded_images.length !== 0 ? 
                                            listing.uploaded_images[0].replace('localhost', `${locHost}`) : listing.default_image[0] }} 
                                        style={styles.card} 
                                        />
                                    <Text style={{textAlign: "center"}}> {listing.address} {listing.city}, {listing.state}</Text>
                                    <Text style={{textAlign: "center"}}> {listing.price ? money(listing.price) : "$0.00"} </Text>
                                </View>
                            );
                        })}
                    </ScrollView>
                </CardItem>
                {/* <CardItem style={styles.indicatorContainer}>
                    {listings.map((listing, listingIndex) => {
                        const width = scrollX.interpolate({
                        inputRange: [
                            windowWidth * (listingIndex - 1),
                            windowWidth * listingIndex,
                            windowWidth * (listingIndex + 1)
                        ],
                        outputRange: [10, 20, 10],
                        extrapolate: "clamp"
                        });
                        return (
                        <Animated.View
                            key={listingIndex}
                            style={[styles.normalDot, { width }]}
                        />
                        );
                    })}
                </CardItem> */}
                </Card>
                
            </Content>
        }
        </>
    );
}
export default ProfileListings;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    card: {
        flex: 1,
        marginVertical: 4,
        marginHorizontal: 30,
        borderRadius: 25,
        overflow: "hidden",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: 'rgba(52, 52, 52, 0.0)',
    },
    box: {
        width: '100%',
        padding: 20,
        borderRadius: 10,
        marginVertical: 10
    },
    shadow: {
        backgroundColor: 'rgba(52, 52, 52, 0.0)',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,
    },
    transparent: {
        backgroundColor: 'rgba(52, 52, 52, 0.0)',
    }
});