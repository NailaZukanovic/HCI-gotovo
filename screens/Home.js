import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList, Dimensions, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Favourite from '../components/Favourite';
// import {products} from '../components/products';
import Products from '../components/products';
import { useDispatch } from 'react-redux';
import { userLogout } from '../redux/actions';
const width = Dimensions.get("screen").width / 2 - 25;

const Home = ({navigation}) => {
  const {productc} = Products();

  
const dispatch = useDispatch();
const logout = () => {
  dispatch(userLogout());
}
 const Box = ({product}) => {
    return(
      <View style={styles.card}>
        <View style={styles.rating}>
        <Text style={{color:'#FFD700', fontWeight: 'bold'}}>Rating: {product.rating}</Text>
        </View>
        <TouchableOpacity style={{height: 100, alignItems: 'center'}} onPress={()=> navigation.navigate('ProductDetails', product)}>
          <Image source={{uri:product.image_link}} style={{flex:1, height: 50, width: 90}} />
        </TouchableOpacity>
        <Text style={styles.name}>{product.name}</Text>
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={{fontSize:25, fontWeight: 'bold'}}>Dobrodosli</Text>
          <Text style={{fontSize:30, fontWeight: 'bold', color: 'pink'}}>Frizerski Salon</Text>
        </View>
        <Icon name="logout" size={25} onPress= {logout}/>

      </View>  

      <View style={{marginTop: 29, flexDirection: 'row'}}>
        <TouchableOpacity onPress={() => navigation.navigate('Usluge')}>
          <Text style={{fontSize: 19, fontWeight: 'bold'}}>Vidite usluge</Text>
        </TouchableOpacity>
      </View>
      <FlatList keyboardShouldPersistTaps='always'
      columnWrapperStyle={{justifyContent:'space-between'}}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{marginTop: 10, paddingBottom:50}}
      numColumns={2}
      data={productc}
      renderItem={({item}) => <Box product={item}/>}
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
  logout: {
    backgroundColor: "#FF1493",
    height: 20,
    width: '40%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    marginTop:50
  },
  header: {
    flexDirection: 'row',
    marginTop: 50,
    justifyContent: 'space-between'
  },
  card: {
    height: 250,
    width: width,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    borderColor: 'rgba(245,45,45,0.5)',
    borderWidth: 1,
    marginVertical: 15
  
  },
  name: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 18,
    marginLeft: 18
  },
  favourite: {
    alignItems: 'flex-end',
    padding: 10
  },
  rating: {
    alignItems: 'flex-end',
    padding: 10
  }

})
export default Home;