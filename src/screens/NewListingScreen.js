import React, { Component, useState, useEffect, useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import {Context} from '../components/Store'

import { Icon } from 'native-base'
import NewListingForm from "../components/NewListingForm";

function NewListingScreen({navigation}) {

    const [state, dispatch] = useContext(Context);
    
    function submitListing(newListing) {
        const listingPost= {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({listing: newListing})
        }
        fetch(`http://10.0.0.113:3000/api/v1/listings`, listingPost)
            .then((response) => response.json())
            .then((json) => console.log(json))
            .then((json) => { 
                dispatch({type: "ADD_LISTINGS", payload: json})
            })
            .catch((error) => console.error(error))
    }


    return (
        <View style={styles.container}>
            <Text>New Listing Screen!</Text>
            <NewListingForm navigation={navigation} submitListing={submitListing}/>
        </View>
        
    );
}
export default NewListingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
