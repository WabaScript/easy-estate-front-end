import React, { Component, useState } from 'react'
import { ActivityIndicator, Text, View, StyleSheet, Image, SafeAreaView,
    ScrollView, ImageBackground, Animated, useWindowDimensions, TouchableOpacity, Linking} from 'react-native'
import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base'
import CommentList from './CommentList';

export default function ExpandedListingInfoCard({comments, realtor, address, price, bed, bath, phone}) {


    const phoneParse = (number) => {
        return number.replace("[()\\s-]+", "");
    }

    return (
        <>
            <Card >
                <CardItem >
                    {/* more details */}
                    <CommentList />
                </CardItem>
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