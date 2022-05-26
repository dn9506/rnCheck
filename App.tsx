import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { AddTodo } from './src/AddTodo';
import { Navbar } from './src/Navbar';

export default function App() {
  return (
    <View style={styles.container}>
            <Navbar title = "Title string"/>
            <AddTodo />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
  text: {
    
  }
});
