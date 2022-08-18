import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
const ProductDetails = ({navigation, route}) => {

  const product = route.params;
  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="arrow-back" size={25} onPress={() => navigation.navigate('Home')}/>
        <Text style={{color:'#FFD700', fontWeight: 'bold'}}>Price: ${product.price}</Text>
      </View>
      <View style={styles.image}>
      <Image source={{uri:product.image_link}} style={{flex: 1,resizeMode: 'contain', width: 200, height: 200}} />
      </View>
      <View style={styles.detailsContainer}>
          <View style={styles.detailsView}>
          <Text style={styles.text}>Product Details</Text>
          </View>
          <View style={styles.line} />
          <View style={styles.productView}>
            <Text style={{fontSize: 15, fontWeight: 'bold'}}>Product name: {product.name}</Text>
            </View>
          <View style={{paddingHorizontal: 18, marginTop: 5}}>
            <Text style={{fontSize: 15, fontWeight:'bold'}}>Description</Text>
          <Text style={{fontSize:10, lineHeight: 19, color:'#ffffff'}}>{product.description}</Text>
          </View>
      </View>
    </View>
  )


}


const styles = StyleSheet.create({
  productView:{
    marginHorizontal: 20,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  container:{
    flex:1,
    backgroundColor: "#ffffff",

  },
  image:{
    flex: 0.5,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: 'rgba(245,45,45,0.5)',
    borderWidth: 1,
    marginHorizontal: 15
  },
  header: {
    flexDirection: 'row',
    marginTop: 50,
    justifyContent: 'space-between',
    paddingHorizontal: 15
  },
  detailsContainer: {
    flex: 0.5,
    backgroundColor: 'rgba(245,45,45,0.5)',
    marginHorizontal: 15,
    marginBottom: 10,
    marginTop: 30,
    paddingTop: 30,
    paddingHorizontal: 10,
    borderRadius: 10
  },
  detailsView: {
    flexDirection: 'row',
    marginLeft: 15,
    alignItems: 'flex-end',
    paddingBottom: 10
  },
  line: {
    width: '100%',
    height: 2,
    backgroundColor: '#ffffff'
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff'
  }
})
export default ProductDetails;