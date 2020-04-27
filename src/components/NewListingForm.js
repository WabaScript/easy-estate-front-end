import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, } from "react-native";

import { Icon } from 'native-base'
import MainFeedContainer from "../containers/MainFeedContainer";
import { TextInput } from "react-native-gesture-handler";

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
        <View style={styles.container}>
       <ScrollView keyboardDismissMode='on-drag' style={styles.container}>
        <KeyboardAvoidingView behavior='padding'>
            <TextInput 
            placeholder="Address" 
            style={styles.input} 
            onChangeText={(text) => setAddress(text)} value={address}
            />
            <TextInput 
            placeholder="City" 
            style={styles.input} 
            onChangeText={(text) => setCity(text)} value={city}
            />
            <TextInput 
            placeholder="State" 
            style={styles.input} 
            onChangeText={(text) => setState(text)} value={state}
            />
            <TextInput 
            placeholder="Zipcode" 
            style={styles.input} 
            onChangeText={(text) => setZipcode(text)} value={zipcode}
            />
            <TextInput 
            placeholder="Neighborhood" 
            style={styles.input} 
            onChangeText={(text) => setNeighborhood(text)} value={neighborhood}
            />
            <TextInput 
            placeholder="Price" 
            style={styles.input} 
            onChangeText={(text) => setPrice(text)} value={price}
            />
            <TextInput 
            placeholder="Features" 
            style={styles.input} 
            onChangeText={(text) => setFeatures(text)} value={features}
            />
            <TextInput 
            placeholder="Bed" 
            style={styles.input} 
            onChangeText={(text) => setBed(text)} value={bed}            
            />
            <TextInput 
            placeholder="Bath" 
            style={styles.input} 
            onChangeText={(text) => setBath(text)} value={bath}
            />
            <TextInput 
            placeholder="Square Footage" 
            style={styles.input} 
            onChangeText={(text) => setSqr_foot(text)} value={sqr_foot}
            />
            <TextInput 
            placeholder="Insert one default image link" 
            style={styles.input} 
            onChangeText={(text) => setDefault_image(text)} value={default_image}
            />
            <TextInput 
            placeholder="Contact Phone Number" 
            style={styles.input} 
            onChangeText={(text) => setP_contact(text)} value={p_contact}
            />
            <TextInput 
            placeholder="Owner_id" 
            style={styles.input} 
            onChangeText={(text) => setOwner_id(text)} value={owner_id}
            />
        <TouchableOpacity style={styles.btn} onPress={() => {submitListing(newListing); navigation.navigate("Home")}}>
                <Text style={styles.text}>
                    <Icon type="Entypo" name="new-message"/> Submit Listing
                </Text>

        </TouchableOpacity>
       </KeyboardAvoidingView>
       </ScrollView>
       </View>
    );
}
export default NewListingForm;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white',
        paddingRight: 40,
        padding: 10
    },
    input: {
        backgroundColor: "lightgrey",
        width: '100%',
        padding: 10,
        borderRadius: 10
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
      }
});
