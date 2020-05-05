import React, { useState } from "react";
import { View, Text, StyleSheet, } from "react-native";
import { Icon, Container, Content, Card, CardItem } from 'native-base'
import { TouchableOpacity } from "react-native-gesture-handler";
import { LinearGradient } from 'expo-linear-gradient';

import ProfileListings from "../components/ProfileListings"

function ProfileBookmarksCard({ listings, bookmarks }) {
   const [bookmarkToggle, setBookmarkToggle] = useState(true)
//    const [listingsArr, setListingsArr] = useState(listings)

//    deleteListing = (delList) => {
//         fetch(`http://localhost:3000/listings/${delList.id}`, {method: "DELETE"} )
//         let newArray =  listings.filter(listing => listing.id !== delList.id)
//         setListingsArr(newArray)
//     }

    return (
        <View>
            <Container style={styles.card}>
                <LinearGradient
                    colors={[ '#FFC694','#A34C00', ]}
                    style={{ position: 'absolute', left: 0, right: 0, top: 0, height: 900 }}
                />
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
       backgroundColor: 'black',
        marginVertical: 4,
        borderRadius: 25,
        overflow: "hidden",
        alignItems: "center",
        justifyContent: "center",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30
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