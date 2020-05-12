import React, { Component, useEffect, useState, useContext } from "react";
import { ActivityIndicator, View, Text, StyleSheet } from "react-native";
import MainCard from '../components/MainCard'
import ProfileBookmarksCard from '../components/ProfileBookmarksCard'
import ProfileCard from '../components/ProfileCard'
import { LinearGradient } from 'expo-linear-gradient';
import {Context} from '../actions/Store'
import { Icon, Container, Content } from 'native-base'

function ProfileContainer() {
    const [state, dispatch] = useContext(Context);
    const [isLoading, setLoading] = useState(true);
    const [user, setUser] = useState([]);


    // adding the empt array arg at the end simulates a true componentdidmount, rendering only on initial mount
    useEffect(() => {
        state.currentUser &&
        fetch(`http://10.0.0.113:3000/api/v1/users/${state.currentUser.id}`)
          .then((response) => response.json())
          .then((json) => setUser(json))
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));
      }, []);
      // putting a state var will tell the effect to only take place when the state var is updated, ex. users

    return (
        <>
        {state.currentUser &&
        <>
        {isLoading ? <ActivityIndicator style={styles.indicator}/> : (
        <>
        <Container >
            <LinearGradient
            colors={['#A34C00', '#FFC694', ]}
            style={{ position: 'absolute', left: 0, right: 0, top: 0, height: 420,}}
            />
                <Content showsVerticalScrollIndicator={false}>
                    <ProfileCard 
                        pic={user.uploaded_image ? user.uploaded_image : user.pro_pic} 
                        firstName={user.first_name} 
                        lastName={user.last_name} 
                        city={user.city} 
                        state={user.state}
                        realtor={user.realtor}
                        />
                </Content>
        </Container>
        <Container >
            <LinearGradient
                colors={['#FFC694', '#A34C00', ]}
                style={{ position: 'absolute', left: 0, right: 0, top: 0, height: 500 }}
            />
            <Content showsVerticalScrollIndicator={false}>
                    <ProfileBookmarksCard bookmarks={user.followed_listings} listings={user.listings}/>
            </Content>
        </Container>
        </>
        )}
        </>
        }
        </>
    );
}
export default ProfileContainer;

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
