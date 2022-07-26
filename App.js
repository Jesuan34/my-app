import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <view>
        <TextInput placeholder='Item' style= {styles.TextInput}/>
        <Button title='Agregar' />
      </view>
      <view>

      </view>
      <Text>Hola, Coder!</Text>
      <StatusBar style="auto" />
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

  TextInput: {
    width: 200,
    borderBottomColor:'black',
    borderBottomWidth:'1',
  },
});


