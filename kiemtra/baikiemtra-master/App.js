import React, { Component } from 'react';

import { Alert, StyleSheet, Text, View, TouchableOpacity, Image,ScrollView } from 'react-native';
//import Header from './Head/Header';
export default class thu extends Component {
  componentDidMount() {
    // Alert.alert(
    //   'Thông báo',
    //   'Ứng dụng muốn truy cập vào vị trí của bạn',
    //   [
    //     {
    //       text: "Don't Allow",
    //       onPress: () => console.log("Don't Allow Pressed"),
    //       style: 'cancel',
    //     },
    //     { text: 'OK', onPress: () => console.log('OK Pressed') },
    //   ],
    //   { cancelable: false }
    // );
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <Image 
                    source={require('./assets/gio.png')}
                />
            </TouchableOpacity>
            <Text>Shopertino</Text>
            <TouchableOpacity>
                <Image 
                    source={require('./assets/cart.png')}
                />
            </TouchableOpacity>
        </View>

      <ScrollView horizontal={true}>
      <View style={styles.item}>
        <Image style={styles.image} source={require('./assets/list/00.png')}/>
      </View>

      <View style={styles.item}>
        <Image style={styles.image} source={require('./assets/list/01.png')} />
      </View>

      <View style={styles.item}>
        <Image style={styles.image} source={require('./assets/list/02.png')} />
      </View>
    </ScrollView>

    
      
    <ScrollView>
    <Text style={{fontSize:28, textAlign:'center',marginTop:20}}> New Arrival</Text>
      <View style={styles.item2}>
        <Image style={styles.image2} source={require('./assets/list/1.png')}/>
      </View>
      <Text style={styles.text3} >Swet Never Sally mini dress</Text>
      <Text style={styles.text4} >$34,99</Text>
      
      <Text style={{fontSize:28,marginTop:20}} >Feature</Text>
        <ScrollView horizontal={true}>
           <View style={styles.item4}>
             <Image style={styles.image4} source={require('./assets/list/15.png')}/>
           
           </View>

            <View style={styles.item4}>
              <Image style={styles.image4} source={require('./assets/list/16.png')} />
            </View>

            <View style={styles.item4}>
               <Image style={styles.image4} source={require('./assets/list/17.png')} />
            </View>
       </ScrollView>
       
      <Text style={{fontSize:28,marginTop:80}} >Best Saller</Text>

    <ScrollView>

      <View style={{flexDirection:'row'}}>

       <View style={{}}>
        <Image style={styles.image5} source={require('./assets/list/7.png')}/>
      </View>
      <View style={{}}>
        <Image style={styles.image5} source={require('./assets/list/8.png')}/>
      </View>
      </View>
       <View style={{flexDirection:'row'}}>

       <View style={{}}>
        <Image style={styles.image6} source={require('./assets/list/9.png')}/>
      </View>
      <View style={{}}>
        <Image style={styles.image6} source={require('./assets/list/10.png')}/>
      </View>
      </View>

    </ScrollView>

    </ScrollView>


    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },

  header:{ flexDirection: 'row', 
  justifyContent: 'space-between', 
  marginBottom: 10,
  marginTop:40,
  padding: 10
  //marginHorizontal:60
 }
 ,
 image:{
  width:150,
  height:60,
  marginHorizontal:4,
  borderRadius:10,
 },
 image4:{
  width:200,
  height:400,

 },
 item2:{
  marginTop:20,
  alignItems:'center', 
 },
 item4:{
  width:300,
  height:420,
 },
 image5:{
  marginLeft:10,
  marginTop:10
 },
 image6:{
  marginLeft:10,
  marginBottom:200,
  marginTop:20,
 },
 text3:{
  textAlign:'center',
  marginTop:20,
  fontSize:16,
 }
 ,
 text4:{
  color:'#9B9B9B',
  textAlign:'center',
  marginTop:5,
  fontSize:16,
 }

});