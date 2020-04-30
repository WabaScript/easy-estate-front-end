import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, } from "react-native";
import Input from '../components/Input';
import { Icon } from 'native-base'
import Heading from '../components/Heading'
import Error from '../components/Error';
import { TextInput } from "react-native-gesture-handler";
import LoginScreenRegButton from "./LoginScreenRegButton";
import QuickHomeButton from './QuickHomeButton'

const NewListingForm = ({ navigation, submitListing }) => {
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zipcode, setZipcode] = useState("");
    const [neighborhood, setNeighborhood] = useState("");
    const [price, setPrice] = useState("");
    const [features, setFeatures] = useState("");
    const [bed, setBed] = useState("");
    const [bath, setBath] = useState("");
    const [sqr_foot, setSqr_foot] = useState("");
    const [default_image, setDefault_image] = useState('');
    const [p_contact, setP_contact] = useState("");
    const [owner_id, setOwner_id] = useState("");

    // const onChangeAddress = addressValue => setAddress(addressValue)

    const newListing = {
        address: address,
        city: city,
        state: state,
        zipcode: zipcode,
        neighborhood: neighborhood,
        price: price,
        features: features,
        bed: bed,
        bath: bath,
        sqr_foot: sqr_foot,
        default_image: [default_image],
        p_contact: p_contact,
        owner_id: owner_id
    }

    return (
        <KeyboardAvoidingView behavior="padding">
            <ScrollView contentContainerStyle={{paddingBottom: 30}}>
            <View style={styles.container}>
                <Heading style={styles.title}>Submit Your Listing</Heading>
                <Error error={" "} />
            
                <Input 
                    placeholder="Address" 
                    style={styles.input} 
                    onChangeText={(text) => setAddress(text)} value={address}
                />
                <Input 
                    placeholder="City" 
                    style={styles.input} 
                    onChangeText={(text) => setCity(text)} value={city}
                />
                <Input 
                    placeholder="State" 
                    style={styles.input} 
                    onChangeText={(text) => setState(text)} value={state}
                />
                <Input 
                    placeholder="Zipcode" 
                    style={styles.input} 
                    onChangeText={(text) => setZipcode(text)} value={zipcode}
                />
                <Input 
                    placeholder="Neighborhood" 
                    style={styles.input} 
                    onChangeText={(text) => setNeighborhood(text)} value={neighborhood}
                />
                <Input 
                    placeholder="Price" 
                    style={styles.input} 
                    onChangeText={(text) => setPrice(text)} value={price}
                />
                <Input 
                    placeholder="Features" 
                    style={styles.input} 
                    onChangeText={(text) => setFeatures(text)} value={features}
                />
                <Input 
                    placeholder="Bed" 
                    style={styles.input} 
                    onChangeText={(text) => setBed(text)} value={bed}            
                />
                <Input 
                    placeholder="Bath" 
                    style={styles.input} 
                    onChangeText={(text) => setBath(text)} value={bath}
                />
                <Input 
                    placeholder="Square Footage" 
                    style={styles.input} 
                    onChangeText={(text) => setSqr_foot(text)} value={sqr_foot}
                />
                <Input 
                    placeholder="Insert one default image link" 
                    style={styles.input} 
                    onChangeText={(text) => setDefault_image(text)} value={default_image}
                />
                <Input 
                    placeholder="Contact Phone Number" 
                    style={styles.input} 
                    onChangeText={(text) => setP_contact(text)} value={p_contact}
                />
                <Input 
                    placeholder="Owner_id" 
                    style={styles.input} 
                    onChangeText={(text) => setOwner_id(text)} value={owner_id}
                />
                </View>
                <View style={styles.btnContainer}>
                    <LoginScreenRegButton 
                        title={"Submit Listing"} 
                        style={styles.submitButton} 
                        onPress={() => {submitListing(newListing); navigation.push("AppTabMain", {screen: 'Home'})}} 
                    />
                    <QuickHomeButton title={"Go Back"} onPress={() => {navigation.goBack()}}/>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}
export default NewListingForm;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        padding: 20,
        alignItems: 'center',
        justifyContent: "center"
      },
    btnContainer: {
        flex: 1,
        padding: 15,
        alignItems: 'center',
        justifyContent: "center"
      },
      btn: {
        backgroundColor: "saddlebrown",
        width: "100%",
        alignItems: 'center',
        justifyContent: "center",
        padding: 30,
        borderRadius: 10
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
          marginVertical: 10
      },
      
});
