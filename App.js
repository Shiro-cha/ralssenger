import {useState,useEffect} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

const WelcomPage = ({setPageToDisplay}) =>{

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Bienvenu sur <Text style={styles.logo}>Ral'ssenger</Text>.
      </Text>
      <Card>
        <AssetExample setPageToDisplay={setPageToDisplay} />
      </Card>
    </View>
  );
}

export default function App() {


const [pageToDisplay,setPageToDisplay] = useState("")


useEffect(()=>{

  setPageToDisplay(<WelcomPage setPageToDisplay={setPageToDisplay}/>)

},[]);

  return (
    <>
      {pageToDisplay}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color:"#333333"
  },
  logo:{
    color:"#841584"
  }
});
