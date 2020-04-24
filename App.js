import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';
import { GoogleAutoComplete } from 'react-native-google-autocomplete'

import LocationItem from './src/components/LocationItem'

//import { API_KEY } from './key'

export default function App() {
  return (
    <View style={styles.container}>
      <GoogleAutoComplete apiKey="AIzaSyB83SfaccVha2jO_M3UD9_ly5x7I2nbMpo" debounce={500} minLength={3}>
        {({ handleTextChange, locationResults, fetchDetails }) => (
          <React.Fragment>
            {console.log('locationResults', locationResults)}
            <View style={styles.inputWrapper}>
              <TextInput 
                style={styles.textInput}
                placeholder="Search a place" 
                onChangeText={handleTextChange}
              />
            </View>
            <ScrollView>
              {locationResults.map(el =>(
                <LocationItem
                  {...el}   
                  key={el.id}    
                  fetchDetails={fetchDetails}              
                />
              ))}
            </ScrollView>
          </React.Fragment>
        )}
      </GoogleAutoComplete>  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    height: 40,
    width: 300,
    borderWidth: 1,
    paddingHorizontal: 16,
  },
  inputWrapper: {
    marginTop: 80,
  }
});
