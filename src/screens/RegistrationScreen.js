import React, { useState, useContext } from 'react';
import {View, StyleSheet, Text, ScrollView, KeyboardAvoidingView, Switch, TouchableOpacity } from 'react-native';
import {Icon} from 'native-base';
import * as ImagePicker from 'expo-image-picker';
import Heading from '../components/Heading';
import Input from '../components/Input';
import LoginScreenRegButton from '../components/LoginScreenRegButton';
import QuickHomeButton from '../components/QuickHomeButton';
import Error from '../components/Error';
import {Context} from '../actions/Store'
import RegionButton from '../components/RegionButton'
import RegionPicker from '../components/RegionPicker'
 
export default function RegistrationScreen({ navigation }) {
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [proPic, setProPic] = useState("");
    const [city, setCity] = useState("");
    const [regionalState, setRegionalState] = useState("Select State...");
    const [realtor, setRealtor] = useState(false);
    const [pickerToggle, setPickerToggle] = useState(false);
    const [userImage, setUserImage] = useState("")

    const toggleSwitch = () => setRealtor(prevState => !prevState);

    const [state, dispatch] = useContext(Context);

    const handleSubmit = () => {
        const newUserPost = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({ user: {
               first_name: firstName,
               last_name: lastName,
               email: email,
               password: password,
               pro_pic: proPic,
               city: city,
               state: regionalState,
               realtor: realtor,
               image: userImage.base64
            }})
        }
        fetch(`http://10.0.0.113:3000/api/v1/users`, newUserPost)
            .then((response) => response.json())
            .then((json) => { 
                if (json.errors){alert(json.errors)
                }else{
                dispatch({type: "SET_CURRENT_USER", payload: json})
                alert("Thank You for Registering!")
                navigation.navigate("MainStack")
                }
            })
            
    }
    const handleAddPhotos = () => {
        ImagePicker.getCameraRollPermissionsAsync()
        ImagePicker.launchImageLibraryAsync({base64: true}).then(img => !img.cancelled && setUserImage(img))

    }

    const handleCamera = () => {
        ImagePicker.getCameraPermissionsAsync()
        ImagePicker.launchCameraAsync({base64: true}).then(img => setUserImage(img))
    }

  return (
    <KeyboardAvoidingView behavior="padding">    
        <ScrollView>
            <View style={styles.container}>
                <Heading style={styles.title}>Please Sign Up</Heading>
                {/* <Error error={" "} /> */}
            </View>
            <View style={styles.uploadIcons} >
                    <TouchableOpacity onPress={handleAddPhotos} style={{paddingRight: 50}}>
                        <Icon type="Entypo" name="image" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleCamera}>
                        <Icon type="Entypo" name="camera"/>
                    </TouchableOpacity>
                </View>
            <Input 
                style={styles.input} 
                placeholder={"Enter First Name ..."} 
                onChangeText={(text) => setFirstName(text)} value={firstName}
            />
            <Input 
                style={styles.input} 
                placeholder={"Enter Last Name ..."} 
                onChangeText={(text) => setLastName(text)} value={lastName}
            />
            <Input 
                style={styles.input} 
                placeholder={"Enter E-mail..."} 
                onChangeText={(text) => setEmail(text.toLowerCase())} value={email}
                keyboardType={'email-address'} 
            />
            <Input 
                style={styles.input} 
                placeholder={"Enter Password..."}
                onChangeText={(text) => setPassword(text)} value={password}
                secureTextEntry
            />
            <Input 
                style={styles.input} 
                placeholder={"Enter City..."} 
                onChangeText={(text) => setCity(text)} value={city}
                keyboardType={'email-address'} 
            />
            <RegionButton
                style={styles.input}
                title={regionalState} 
                onPress={() => {setPickerToggle(!pickerToggle)}}
            />
            { pickerToggle &&
                <RegionPicker
                    style={styles.input} 
                    itemStyle={{marginVertical: 10, height: 100}}
                    selectedValue={regionalState}
                    onValueChange={(itemValue) => setRegionalState(itemValue)}
                />
            }
            <Input 
                style={styles.input} 
                placeholder={"Insert Profile Image Link..."} 
                onChangeText={(text) => setProPic(text)} value={proPic}
                keyboardType={'email-address'} 
            />
            <View style={styles.realtorBool}>
            <Text style={{color: '#a1a1a1'}}>Realtor?</Text>
                <Switch
                    label={"Realtor?"}
                    trackColor={{ false: "#767577", true: "#8f4c00" }}
                    thumbColor={realtor ? "#94ff57" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={realtor}
                />
            </View>
            <View style={styles.btnContainer}>
                <LoginScreenRegButton title={"Register"} style={styles.loginButton} onPress={handleSubmit} />
                <QuickHomeButton title={"Return To Login"} onPress={() => {navigation.goBack()}}/>
            </View>
        </ScrollView>
    </KeyboardAvoidingView>
    );
}
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
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
  title: {
    marginBottom: 20
  },
  input: {
      marginVertical: 10
  },
  loginButton: {
      marginVertical: 10
  },
  realtorBool: {
    flexDirection: 'row',
    backgroundColor: "lightgrey",
    width: '100%',
    padding: 10,
    justifyContent: 'space-between',
    borderRadius: 10,
    marginVertical: 10
  }
});