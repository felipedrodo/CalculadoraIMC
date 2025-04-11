// Importações
import { StyleSheet, Text, View } from 'react-native';
import Title from './src/components/Title';
import FormIMC from './src/components/FormIMC';

export default function App() {
  return (
    // Container 
    <View style={styles.container}>
      <Title />
      <FormIMC />
    </View>
  );
}

// Estilização
const styles = StyleSheet.create({
  container: {
    flex: 1,                     
    backgroundColor: '#e0ffff',     
    padding: 16,                
    justifyContent: 'center',       
  },
});

 
