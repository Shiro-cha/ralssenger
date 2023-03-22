import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';

import MessageContainer from './MessageContainer';


export default function AssetExample({setPageToDisplay}) {


  function handlePress(evt){
    setPageToDisplay(
      <MessageContainer/>
      )
  }
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Vous pouvez commencer à discuter directement :p
      </Text> 
      <Button
      onPress={handlePress}
      title="Commencez"
      color="#841584"
      accessibilityLabel="Learn more about this purple button"
/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center', 
    padding: 24,
  },
  containerParent: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'normal',
    textAlign: 'center',
    color:"#333333"
  },
  logo: {
    height: 128,
    width: 128,
  },
});
