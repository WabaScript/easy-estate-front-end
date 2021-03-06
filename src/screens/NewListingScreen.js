import React, { useState, useEffect, useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import {Context} from '../actions/Store'
import NewListingForm from "../components/NewListingForm";
import {locHost} from '../helpers/localhost';

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
        fetch(`http://${locHost}:3000/api/v1/listings`, listingPost)
            .then((response) => response.json())
            .then((json) => { 
                if (!json.errors){
                    dispatch({type: "ADD_LISTINGS", payload: json});
                    navigation.push("AppTabMain", {screen: 'Home'})
                }else{
                    navigation.push("AppTabMain", {screen: 'New Post'})
                    alert("Something went wrong. Try again")
                }
            })
            .catch((error) => {console.error(error); alert("Something went wrong. Try again")})
    }

    return (
        <>
            {state.currentUser ?
            <NewListingForm navigation={navigation} submitListing={submitListing}/>
            :
            <Text>Please Login to Submit a Listing</Text>}
        </>
    );
}
export default NewListingScreen;

const styles = StyleSheet.create({
    container: {
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
