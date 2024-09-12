import React , {  useState } from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from './components/Task';

export default function App() {

  const [task, setTask] =  useState();

  const [taskitems , setTaskitems]= useState([]);

  const handleAddingTask =() =>{
    Keyboard.dismiss();
    setTaskitems([...taskitems, task])
    setTask(null);
  }

  // deteting task
  const deleteTask = (index) => {
    let itemsCopy = [...taskitems];
    itemsCopy.splice(index,1);
    setTaskitems(itemsCopy);
  }


  return (
    <View style={styles.container}>
      {/* Today's task */}
      <View style={styles.taskWrapper}>
        <Text style={styles.taskTitle}>Task Planner</Text>

        <View style={styles.items}>
          {/* Here we add the task */}
          {
            taskitems.map((item, index) => {
             return (
              <TouchableOpacity key={index} onPress={()=>deleteTask(index)}>
                <Task text={item}/>
              </TouchableOpacity>
             )
            })
          }
        </View>
      </View>


      {/* Write a task */}
      <KeyboardAvoidingView
         behavior={Platform.OS === "android" ? "padding" :"height"}
         style={styles.writeTaskWrapper}>

          <TextInput style={styles.input} placeholder={'Write the Task'} placeholderTextColor={'#fff'}  onChangeText={text => setTask(text)}/>

          <TouchableOpacity onPress={()=> handleAddingTask()}>
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
    backgroundColor: '#050505',
    
    
    // justifyContent: 'center',
  },
  taskWrapper:{
    paddingTop:60,
    paddingHorizontal:20
  },
  taskTitle: {
    fontSize: 24,
    fontWeight:'bold',
    color: '#ffff',
  },
  items:{
    color:'#fff',
    marginTop: 30,
  },
  input:{
    color:'#ffff',
    paddingVertical: 15,
    paddingHorizontal: 15,
    width: 250,
    backgroundColor: '#333',
    borderRadius: 20,
    borderColor: '#ffff',
    borderWidth: 1,
    
    
  },
  writeTaskWrapper:{
    position:'absolute',
    bottom:60,
    width:'100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  addWrapper:{
    width:60,
    height:60,
    backgroundColor:'#333',
    borderRadius:60,
    justifyContent:'center',
    alignItems:'center',
    borderColor: '#ffff',
    borderWidth: 1,
  },
  addText:{
    color:'#ffff',
  },
});
