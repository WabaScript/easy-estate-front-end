import React, { Component, useRef } from "react";
import { View, Text, StyleSheet, ScrollView, ImageBackground, Animated, useWindowDimensions } from "react-native";

import { Icon, Container, Content, Card, CardItem } from 'native-base'


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
                        ])}
                    >
                        {listings.map((listing, listingIndex) => {
                            return (
                                <View style={{ width: windowWidth, height: 300 }} key={listingIndex} >
                                    <ImageBackground 
                                        source={{ uri: listing.uploaded_images.length !== 0 ? 
                                            listing.uploaded_images[0].replace('localhost', "10.0.0.113") : listing.default_image[0] }} 
                                        style={styles.card} 
                                        />
                                    <Text> {listing.address} {listing.city}, {listing.state} - {money(listing.price)} </Text>
                                </View>
                            );
                        })}
                    </ScrollView>
                </CardItem>
                <CardItem style={styles.indicatorContainer}>
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
                </CardItem>
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
        justifyContent: "center"
        },
    box: {
        width: '100%',
        padding: 20,
        borderRadius: 10,
        marginVertical: 10
    }
});