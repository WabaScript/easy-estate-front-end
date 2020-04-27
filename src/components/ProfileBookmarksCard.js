import React, { Component, useRef, useState } from "react";
import { View, Text, StyleSheet, ScrollView, ImageBackground, Animated, useWindowDimensions } from "react-native";
import { Icon, Container, Content, Card, CardItem } from 'native-base'
import { TouchableOpacity } from "react-native-gesture-handler";

import ProfileListings from "../components/ProfileListings"

function ProfileBookmarksCard({ listings, bookmarks }) {
   const [bookmarkToggle, setBookmarkToggle] = useState(true)

    return (
        <View>
        <Container style={styles.card}>
            <View style={styles.container}>
                <TouchableOpacity style={styles.box} onPress={() => setBookmarkToggle(true)}>
                    <Text style={styles.text}> Bookmarks </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.box} onPress={() => setBookmarkToggle(false)}>
                    <Text style={styles.text}> My Listings </Text>
                </TouchableOpacity>
            </View>
            {bookmarkToggle ? 
                <ProfileListings listings={bookmarks} />
            :
                <ProfileListings listings={listings} />
            }
        </Container>
        </View>
    );
}
export default ProfileBookmarksCard;

const styles = StyleSheet.create({
    card: {
       
        marginVertical: 4,
        marginHorizontal: 30,
        borderRadius: 25,
        overflow: "hidden",
        alignItems: "center",
        justifyContent: "center"
      },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',

    },
    box: {
        backgroundColor: "saddlebrown",
        width: "100%",
        alignItems: 'center',
        justifyContent: "center",
        padding: 6,
        borderRadius: 10,
        marginRight: 15,

      },
      text: {
          fontSize: 20,
          fontWeight: '700',
          color: 'white'
      }
});