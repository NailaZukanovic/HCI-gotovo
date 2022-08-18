import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {WebView} from 'react-native-webview';
const UslugeDetails = ({navigation, route}) => {

  const service= route.params;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="arrow-back" size={25} onPress={() => navigation.navigate('Usluge')}/>
        <Text style={{color:'#FFD700', fontWeight: 'bold'}}>Rating: {service.rating}</Text>
      </View>
      <View style={styles.videoContainer}>
        {/* <Text>Ovde ce ici video</Text> */}
        <WebView javaScriptEnabled={true} domStorageEnabled={true} source={{uri:service.video_link}}/>
      </View>
      <View style={styles.details}>
        <View style={{marginLeft: 19, flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{fontWeight: 'bold', fontSize: 18, color: '#ffffff'}}>Usluga salona</Text>
        </View>
        <View style={{marginLeft: 19, marginTop: 19, flexDirection: 'row', justifyContent: 'space-between', alignItems:'center'}}>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>{service.name}</Text>
          <View style={styles.price}>
            <Text style={{color: '#ffffff', fontSize: 18, fontWeight: 'bold'}}>${service.price}</Text>
          </View>
        </View>
        <View style={styles.descriptionView}>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>Detalji:</Text>
          <Text style={{marginTop: 9, lineHeight: 19, color: '#ffffff', fontWeight: 'bold'}}>{service.description}</Text>
        </View>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  descriptionView: {
    paddingHorizontal: 19,
    marginTop: 19
  },
  container: {
    flex: 1,
    backgroundColor: "#ffffff"
  },
  header: {
    flexDirection: 'row',
    marginTop: 50,
    justifyContent: 'space-between',
    paddingHorizontal: 15
  },
  videoContainer: {
    flex: 1
  },
  details:{
    flex:0.5,
    backgroundColor: '#FFD700',
    marginHorizontal: 10,
    marginBottom: 10,
    borderRadius:19,
    marginTop: 29,
    paddingTop: 29
  },
  price:{
    backgroundColor: 'orange',
    width: 81,
    height: 41,
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
    justifyContent: 'center',
    alignItems: 'center'
  }
});


export default UslugeDetails;