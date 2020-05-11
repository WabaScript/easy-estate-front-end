import React, { useState, useContext } from "react";
import { View, Text, StyleSheet, KeyboardAvoidingView, Image } from "react-native";
import { Container, Content } from 'native-base'
import Input from '../components/Input'
import {Context} from '../actions/Store'
import QuickHomeButton from '../components/QuickHomeButton'
import MainCard from '../components/MainCard'

function SearchScreen({navigation}) {
    const [state, dispatch] = useContext(Context);
    const [searchTerm, setSearchTerm] = useState('')
    const [filteredListings, setFilteredListings] = useState([])
    const money = (num) => {return '$' + num.toFixed().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}

    const searchFilter = text => {    
        const newData = state.listings.filter(listing => {      
            const listingData = `${listing.city.toUpperCase()} ${listing.state.toUpperCase()}    
                ${listing.neighborhood.toUpperCase()} ${listing.zipcode.toUpperCase()}`;
            const textData = text.toUpperCase()
                
            return listingData.indexOf(textData) > -1
        });
        setFilteredListings(newData)
    };

    return (
        <View style={styles.container}>
            <Input 
                placeholder="Search Here" 
                style={styles.input} 
                onChangeText={(text) => {setSearchTerm(text); searchFilter(text)}} value={searchTerm}
            />
            <QuickHomeButton title={"Go Back"} onPress={() => {navigation.goBack()}} style={styles.submitButton}/>
            <>
            <KeyboardAvoidingView behavior="padding">
            {state.listings.length > 0 ?
            <Container styles={styles.container}>
                <Content showsVerticalScrollIndicator={false} disableKBDismissScroll style={{backgroundColor: '#f2f2f2'}}>
                    {searchTerm !== "" && filteredListings.map((listing, index) => {
                        return (
                            <MainCard 
                                key={index}
                                listId={listing.id}
                                realtor={listing.owner.first_name + listing.owner.last_name} 
                                thumb={listing.owner.pro_pic} 
                                phone={listing.p_contact}
                                price={listing.price ? money(listing.price) : "$0.00"} 
                                images={listing.uploaded_images.length >= 1 ? listing.uploaded_images : listing.default_image}
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
                    <View style={{justifyContent: 'center', alignItems: 'center', marginBottom: 40 }} >
                        <Image source={require('../../assets/houseIcon2.gif')} style={{width: 50, height: 50}}/>
                    </View>
                </Content>
            </Container>
            : 
            <Text> There seems to have been a network issue, please try again </Text>} 
            </KeyboardAvoidingView>
            </>
        </View>
    );
}
export default SearchScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        padding: 20,
        alignItems: 'center',
        justifyContent: "center"
      },
      text: {
          fontSize: 20,
          fontWeight: '700',
          color: 'white'
      },
      input: {
          marginVertical: 10
      },
      submitButton: {
          marginBottom: 10
      },

});