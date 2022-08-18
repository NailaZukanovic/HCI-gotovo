import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Favourite from '../components/Favourite';
import Services from '../components/services';
import UslugeDetails from './UslugeDetails';
import { useDispatch } from 'react-redux';
import { userLogout } from '../redux/actions';
const width = Dimensions.get("screen").width / 2 + 50;
const Usluge = ({navigation}) => {

  const {servicec} = Services();

  const dispatch = useDispatch();
const logout = () => {
  dispatch(userLogout());
}
  const Box = ({service}) => {

    return(
      <View style={styles.card}>
        <View style={styles.like}>
          <Favourite service={service}/>
        </View>
        <TouchableOpacity style={{height: 100, alignItems: 'center'}} onPress={()=> navigation.navigate('UslugeDetails', service)} >
          <Image source={{uri:service.image_link}} style={{flex:1, height: 115, width: 200, borderRadius: 10}} />
        </TouchableOpacity>
        <Text style={{fontSize: 19, fontWeight: 'bold', marginTop: 19, marginLeft:19}} >
          {service.name}
        </Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 15, alignItems: 'center'}} >
          <Text style={{fontSize: 15, fontWeight: 'bold', marginLeft: 25, color: '#FFD700'}}>
          Rating: {service.rating}
          </Text>
          <Text style={{fontSize: 15, fontWeight: 'bold', color: 'rgba(245,45,45,0.5)', marginRight: 25}}>
            Price: ${service.price}
          </Text>
        </View>
      </View>
    )
  }
  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={{fontSize:25, fontWeight: 'bold'}}>Usluge</Text>
          <Text style={{fontSize:30, fontWeight: 'bold', color: 'pink'}}>Frizerskog Salona</Text>
        </View>
        <Icon name="logout" size={25} onPress= {logout}/>
      </View>

      <View style={{marginTop: 29, flexDirection: 'row'}}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={{fontSize: 19, fontWeight: 'bold'}}>Vidite proizvode</Text>
        </TouchableOpacity>
      </View>
      <FlatList keyboardShouldPersistTaps='always'
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{marginTop: 10, paddingBottom:50, marginLeft: 55}}
      numColumns={1}
      data={servicec}
      renderItem={({item}) => <Box service={item}/>}
      />


      </View>
  )

}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 15
  },
  header: {
    flexDirection: 'row',
    marginTop: 50,
    justifyContent: 'space-between'
  },
  logout: {
    backgroundColor: "#FF1493",
    height: 20,
    width: '40%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    marginTop:50
  },
  card: {
    height: 250,
    width: width,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    borderColor: 'rgba(245,45,45,0.5)',
    borderWidth: 1,
    marginVertical: 15,
    marginBottom: 25
  },
  like: {
    alignItems: 'flex-end',
    padding: 10,

  }
});

export default Usluge;