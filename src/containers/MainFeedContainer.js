import React, { Component, useEffect, useState } from "react";
import { ActivityIndicator, View, Text, StyleSheet } from "react-native";
import MainCard from '../components/MainCard'

import { Icon, Container, Content } from 'native-base'
import { ScrollView } from "react-native-gesture-handler";

function MainFeedContainer() {
    const [isLoading, setLoading] = useState(true);
    const [listings, setListings] = useState([]);

    // adding the empt array arg at the end simulates a true componentdidmount, rendering only on initial mount
    useEffect(() => {
        fetch('http://10.0.0.113:3000/api/v1/listings')
          .then((response) => response.json())
          .then((json) => setListings(json))
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));
      }, []);
      // putting a state var will tell the effect to only take place when the state var is updated, ex. listings
      
      const money = (num) => {
        return '$' + num.toFixed().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
      }

    return (
        <>
        {isLoading ? <ActivityIndicator style={styles.indicator}/> : (
        <Container styles={styles.container}>
            <Content showsVerticalScrollIndicator={false}>
                {listings.map((listing, index) => {
                    return (
                        <MainCard 
                            images={listing.default_image} 
                            thumb={listing.owner.pro_pic} 
                            realtor={listing.owner.first_name + listing.owner.last_name} 
                            address={listing.address +" "+ listing.state} 
                            price={money(listing.price)} 
                            bed={listing.bed} 
                            bath={listing.bath}
                            comments={listing.comments}
                            updatedDate={listing.updated_at}
                            updatedTime={listing.updated_at}
                            />
                    );
                })}
            </Content>
        </Container>
        )}
        </>
    );
}
export default MainFeedContainer;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white'
    },
    indicator: {
        paddingTop: 200

    }
});


// const images = [[
//    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/hbx040120analissetaft-013-copy-1582917414.jpg?resize=768:*",
//    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/hbx040120analissetaft-008-copy-1582917953.jpg?crop=1.00xw:0.854xh;0,0.146xh&resize=768:*",
//    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/080819-hb-taft-533-copy-1582917745.jpg?resize=768:*",
//    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/080819-hb-taft-095-copy-1582917891.jpg?crop=1.00xw:0.873xh;0,0.127xh&resize=768:*"
// ], [    
//   "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/edc-web-tour-tom-kundig-08-1583781711.jpg?crop=1.00xw:0.872xh;0,0.128xh&resize=980:*",
//   "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/edc-web-tour-tom-kundig-03-1583781710.jpg?crop=1xw:1xh;center,top&resize=980:*",
//   "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/edc-web-tour-tom-kundig-02-1583781712.jpg?crop=1xw:1xh;center,top&resize=980:*"
// ], [    
//    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/edc050120silvestri-001-1585576823.jpg?resize=980:*",
//    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/edc050120silvestri-009-1585577432.jpg?resize=768:*",
//    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/edc050120silvestri-006-1585578992.jpg?resize=768:*",
// ], [
//    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/edc040120anatomy-fouquet-014-1584368945.jpg?crop=1xw:1xh;center,top&resize=980:*",
//    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/edc040120anatomy-fouquet-012-1584368951.jpg?crop=1xw:1xh;center,top&resize=980:*",
//    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/edc040120anatomy-fouquet-015-1584368947.jpg?crop=1xw:1xh;center,top&resize=980:*"
// ], [
//    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/190522-squire-partners-chelseabarracks-197-jpg-1580852679.jpg?resize=768:*",
//    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/chelsea-barracks-the-artist-residence-dressed-by-elicyon-image-credit-aj20-1580852982.jpg?resize=768:*",
//    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/chelsea-barracks-the-artist-residence-dressed-by-elicyon-image-credit-aj12-1580852887.jpg?resize=768:*"
// ], [    
//    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/190522-squire-partners-chelseabarracks-197-jpg-1580852679.jpg?resize=768:*",
//    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/chelsea-barracks-the-artist-residence-dressed-by-elicyon-image-credit-aj20-1580852982.jpg?resize=768:*",
//    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/chelsea-barracks-the-artist-residence-dressed-by-elicyon-image-credit-aj12-1580852887.jpg?resize=768:*"
// ]];