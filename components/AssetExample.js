import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Vous pouvez commencer à discuter directement :p
      </Text>
      <Button
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
