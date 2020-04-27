import React, { Component, useEffect, useState } from "react";
import { ActivityIndicator, View, Text, StyleSheet } from "react-native";
import MainCard from '../components/MainCard'
import ProfileBookmarksCard from '../components/ProfileBookmarksCard'
import ProfileCard from '../components/ProfileCard'

import { Icon, Container, Content } from 'native-base'
import { ScrollView } from "react-native-gesture-handler";

function ProfileContainer() {
    const [isLoading, setLoading] = useState(true);
    const [user, setUser] = useState([]);

    // adding the empt array arg at the end simulates a true componentdidmount, rendering only on initial mount
    useEffect(() => {
        fetch(`http://10.0.0.113:3000/api/v1/users/5`)
          .then((response) => response.json())
          .then((json) => setUser(json))
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));
      }, []);
      // putting a state var will tell the effect to only take place when the state var is updated, ex. users

    return (
        <>
        {isLoading ? <ActivityIndicator style={styles.indicator}/> : (
        <>
        <Container >
            <Content showsVerticalScrollIndicator={false}>
                <ProfileCard 
                    pic={user.pro_pic} 
                    firstName={user.first_name} 
                    lastName={user.last_name} 
                    city={user.city} 
                    state={user.state}
                    realtor={user.realtor}
                    />
            </Content>
            </Container>
            <Container style={styles.container}>
            <Content>
                <ProfileBookmarksCard bookmarks={user.followed_listings} listings={user.listings}/>
            </Content>
        </Container>
        </>
        )}
        </>
    );
}
export default ProfileContainer;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
      },
      title: {
        marginBottom: 20
      },
      input: {
          marginVertical: 10
      },
      loginButton: {
          marginVertical: 10
      }
});
