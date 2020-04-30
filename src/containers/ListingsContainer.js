import React, { Component, useEffect, useState, useContext } from "react";
import { ActivityIndicator, View, Text, StyleSheet } from "react-native";
import MainCard from '../components/MainCard'
import {Context} from '../actions/Store'

import { Icon, Container, Content } from 'native-base'
import { ScrollView } from "react-native-gesture-handler";

function ListingsContainer() {
    const [isLoading, setLoading] = useState(true);
   // const [listings, setListings] = useState([]);

    const [state, dispatch] = useContext(Context);

    // adding the empt array arg at the end simulates a true componentdidmount, rendering only on initial mount
    useEffect(() => {
        fetch('http://10.0.0.113:3000/api/v1/listings')
          .then((response) => response.json())
          .then((json) => { 
              dispatch({type: "SET_LISTINGS", payload: json})
              // setListings(json)
            })
          .finally(() => setLoading(false));
      }, []);
      // putting a state var will tell the effect to only take place when the state var is updated, ex. listings
      
      const money = (num) => {
        return '$' + num.toFixed().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
      }

    return (
        <>
        {isLoading ? <ActivityIndicator style={styles.indicator}/> : (
            state.listings.length > 0 ?
            <Container styles={styles.container}>
                <Content showsVerticalScrollIndicator={false} disableKBDismissScroll>
                    {state.listings.map((listing, index) => {
                        return (
                            <MainCard 
                                key={index}
                                listId={listing.id}
                                realtor={listing.owner.first_name + listing.owner.last_name} 
                                thumb={listing.owner.pro_pic} 
                                phone={listing.p_contact}
                                price={money(listing.price)} 
                                images={listing.default_image} 
                                address={listing.address}
                                cityAndState={listing.city + ", " + listing.state}
                                zip={listing.zipcode}
                                neighborhood={listing.neighborhood}
                                bed={listing.bed} 
                                bath={listing.bath}
                                features={listing.features}
                                sqrFoot={listing.sqrFoot}
                                comments={listing.comments}
                                updatedDate={listing.createdFormat}
                            />
                        );
                    })}
                </Content>
            </Container>
        : 
            <Text> There seems to have been a network issue, please try again </Text>) } 
        </>
    );
}
export default ListingsContainer;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white'
    },
    indicator: {
        paddingTop: 200

    }
});