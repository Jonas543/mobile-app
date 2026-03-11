import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ProductCard from './components/Productcard.js';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Dit is een component!!!</Text>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0b0b0f',
    alignItems: 'center',
    justifyContent: 'center',
    color:'#fff'
  },
});
