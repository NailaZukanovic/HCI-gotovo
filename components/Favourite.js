import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Services from '../components/services';

const Favourite = ({service}) => {
  
  const {setServicec} = Services();

  const changeService = (service) => {
    service.like = !service.like;
    setServicec((prevService) => [...prevService, service]);
  };
  return(
    <TouchableOpacity style={{    height: 29,
      width: 29,
      borderRadius: 18,
      backgroundColor: service.like ? 'rgba(245,44,44,0.4)' : 'rgba(5,5,5,0.4)',
      alignItems: 'center',
      justifyContent: 'center'}} onPress={() => changeService(service)}>
      <Icon name="heart" size={18} color={service.like ? 'red' : 'black'}/>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  favouriteView: {
    height: 29,
    width: 29,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
export default Favourite;