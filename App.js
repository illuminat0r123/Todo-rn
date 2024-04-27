import React, { useState } from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';
import Task from "./components/Task" 

export default function App() {
  const [task, setTask] = useState('');
  const [taskItems, setTaskItems] = useState([]);
  const handleTask = () => {
    setTaskItems([...taskItems, task])
    setTask('');
  }
  return (
    <View style={styles.container}>
      <View style={styles.taskWrapper}>
          <Text style={styles.sectionTitle}>Tytuł Taska</Text>
          <View style={styles.items}>
            {
              taskItems.map((item, index) => {
                return(
                  <TouchableOpacity key={index}>
                    <Task text={item} />
                  </TouchableOpacity>
                )
              })  
            }
          </View>
      </View>
      <KeyboardAvoidingView style={styles.writeTaskWrapper}>
                <TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText={(text) => setTask(text)}/>
                <TouchableOpacity onPress={() => handleTask()}>
                    <View style={styles.addWrapper}>
                        <Text style={styles.addText}>+</Text>
                    </View>
                </TouchableOpacity>
            </KeyboardAvoidingView>
    </View>
   
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8eaed',
},
taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
},
sectionTitle: {
    fontSize:24,
    fontWeight: 'bold',
},
items: {
  marginTop: 30,
},
writeTaskWrapper: {
  position: 'absolute',
  bottom: 60,
  width: '100%',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
},
input: {
  paddingVertical: 15,
  paddingHorizontal: 15,
  backgroundColor: '#fff',
  borderRadius: 60,
  borderColor: '#c0c0c0',
  borderWidth: 1,
  width: 250,
},
addWrapper: {
  width: 60,
  height: 60,
  backgroundColor: '#fff',
  borderRadius: 60,
  justifyContent: 'center',
  alignItems: 'center',
  borderColor: '#c0c0c0',
  borderWidth: 1,
},
addText: {}

});
