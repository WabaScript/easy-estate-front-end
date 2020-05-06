import React from 'react';
import { Text, View, StyleSheet, Picker } from 'react-native';
 
export default function RegionPicker({style, ...props}) {
  return (
    <Picker {...props} style={[styles.input, style]} >
        <Picker.Item label="Alabama" value="AL" />
        <Picker.Item label="Alaska" value="AK" />
        <Picker.Item label="Arizona" value="AZ" />
        <Picker.Item label="Arkansas" value="AR" />
        <Picker.Item label="California" value="CA" />
        <Picker.Item label="Colorado" value="CO" />
        <Picker.Item label="Connecticut" value="CT" />
        <Picker.Item label="Delaware" value="DE" />
        <Picker.Item label="District of Columbia" value="DC" />
        <Picker.Item label="Florida" value="FL" />
        <Picker.Item label="Georgia" value="GA" />
        <Picker.Item label="Hawaii" value="HI" />
        <Picker.Item label="Idaho" value="ID" />
        <Picker.Item label="Illinois" value="IL" />
        <Picker.Item label="Indiana" value="IN" />
        <Picker.Item label="Iowa" value="IA" />
        <Picker.Item label="Kansas" value="KS" />
        <Picker.Item label="Kentucky" value="KY" />
        <Picker.Item label="Louisiana" value="LA" />
        <Picker.Item label="Maine" value="ME" />
        <Picker.Item label="Maryland" value="MD" />
        <Picker.Item label="Massachusetts" value="MA" />
        <Picker.Item label="Michigan" value="MI" />
        <Picker.Item label="Minnesota" value="MN" />
        <Picker.Item label="Mississippi" value="MS" />
        <Picker.Item label="Missouri" value="MO" />
        <Picker.Item label="Montana" value="MT" />
        <Picker.Item label="Nebraska" value="NE" />
        <Picker.Item label="Nevada" value="NV" />
        <Picker.Item label="New Hampshire" value="NH" />
        <Picker.Item label="New Jersey" value="NJ" />
        <Picker.Item label="New Mexico" value="NM" />
        <Picker.Item label="New York" value="NY" />
        <Picker.Item label="North Carolina" value="NC" />
        <Picker.Item label="North Dakota" value="ND" />
        <Picker.Item label="Ohio" value="OH" />
        <Picker.Item label="Oklahoma" value="OK" />
        <Picker.Item label="Oregon" value="OR" />
        <Picker.Item label="Pennsylvania" value="PA" />
        <Picker.Item label="Rhode Island" value="RI" />
        <Picker.Item label="South Carolina" value="SC" />
        <Picker.Item label="South Dakota" value="SD" />
        <Picker.Item label="Tennessee" value="TN" />
        <Picker.Item label="Texas" value="TX" />
        <Picker.Item label="Utah" value="UT" />
        <Picker.Item label="Vermont" value="VT" />
        <Picker.Item label="Virginia" value="VA" />
        <Picker.Item label="Washington" value="WA" />
        <Picker.Item label="West Virginia" value="WV" />
        <Picker.Item label="Wisconsin" value="WI" />
        <Picker.Item label="Wyoming" value="WY" />
    </Picker>
    );
}

const styles = StyleSheet.create({
    title: {
        marginBottom: 20
    },
    input: {
        marginVertical: 10
    }
});

