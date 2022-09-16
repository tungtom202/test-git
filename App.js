import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import Task from './components/Task';
export default function App() {
  return (
    <View style={styles.container}>
       <Task />
       <View style={[styles.box, {backgroundColor: '#4dc2c2'}]}>
        <Text>
          Square 2
        </Text>
        </View>
          <View style={[styles.box, {backgroundColor: '#ff637c'}]}>
          <Text>
            Square 03
          </Text>
          </View>        
       
      </View>
     
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-around'
  },
  box:{
    width: 100,
    height: 100,
    backgroundColor:'#7ce0f9',
    alignItems: 'center',
    justifyContent:'center'
  }
});
