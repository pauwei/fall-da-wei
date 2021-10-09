import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button, SafeAreaView, Alert, Text, View } from 'react-native';

export default function App() {
  return (
    
    <View style={styles.container}>
      <Text>Don't Fall on Da Wei?</Text>
      <StatusBar style="auto" />
      <Button
        title="Press me"
        color="#f194ff"
        onPress={() => Alert.alert('Button with adjusted color pressed')}
      />
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
});
