import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';


const Task=(props) => {
    return (
        <View style={styles.container}>
            <View style={styles.leftitems}>
               <TouchableOpacity style={styles.squre}></TouchableOpacity> 
               <Text style={styles.itemtext}>
                 {props.text}
               </Text>
            </View>
            <View style={styles.circule}></View>
            
        </View>
    );
}



const styles = StyleSheet.create({
   container:{
    backgroundColor:'#242323',
    padding: 20,
    borderRadius: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
   },

   leftitems:{
    flexDirection:'row',
    alignItems:'center',
    flexWrap: 'wrap',
   },

   squre:{
    width: 24,
    height:24,
    backgroundColor:'#f0cb11',
    opacity: 0.8,
    borderRadius: 2,
    marginRight: 15,
   },

   itemtext:{
    color:'#fff',
    maxWidth:'80%',
   },

   circule:{
    width: 12,
    height:12,
    borderColor: '#fff',
    borderWidth: 2,
    borderRadius: 5,
   },
});

export default Task;