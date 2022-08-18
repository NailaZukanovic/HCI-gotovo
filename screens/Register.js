import { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Image , TouchableOpacity, Alert} from 'react-native';
import axios from 'axios';
const Register = ({navigation}) => {
    const [ime, setIme] = useState('');
    const [prezime, setPrezime] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');


    const register = () => {
      if(email === '' || password === '' || ime === '' || prezime === '')
      {
        Alert.alert('Upozorenje:', 'Niste popunili sva neophodna polja');
          return;
      }

      axios.post('https://auth-jwt-backend.herokuapp.com/user/signup', {email, password, ime, prezime})
      .then(res => {
        // Alert.alert(res.data.message);
        console.log("Uspesno ste se registrovali");
      }).catch(err => {
        console.log(err);
        // Alert.alert("Greska pri registraciji");

        console.log("Greska pri registraciji");
      });
    }
  return(
    <View style={styles.container}>
      <View style={styles.inputView}>
      <TextInput style={styles.TextInput} placeholder="ime" placeholderTextColor="#003F5C" value={ime} onChangeText={(text) => setIme(text)}/>
      </View>
      <View style={styles.inputView} >
      <TextInput style={styles.TextInput} placeholder="prezime" placeholderTextColor="#003F5C" value={prezime} onChangeText={(text) => setPrezime(text)}/>
      </View>
      <View style={styles.inputView} >
      <TextInput style={styles.TextInput} placeholder="password" placeholderTextColor="#003F5C" value={password} onChangeText={(text) => setPassword(text)} secureTextEntry={true}/>
      </View>
      <View style={styles.inputView} >
      <TextInput style={styles.TextInput} placeholder="email" placeholderTextColor="#003F5C" value={email} onChangeText={(text) => setEmail(text)}/>
      </View>





      <TouchableOpacity style={styles.loginBtn} onPress={()=> register()}>
        <Text >
          Registruj se
        </Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={{marginTop:20, borderColor:'#FFC0CB', borderWidth: 1, borderRadius: 15, padding: 10}}
              onPress={() =>
                navigation.navigate('Login')
              }
      >
        <Text style={styles.registerButton} >
          Imate nalog? Login
        </Text>
      </TouchableOpacity>
    </View>
  )


};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    marginBottom: 40,
    height: 250,
    width: 250
  },
  inputView: {
    backgroundColor: '#FFC0CB',
    borderRadius: 25,
    height: 25,
    width: "60%",
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  TextInput: {
    flex: 1,
    height: 25
  },
  registerButton: {
    height: 30
  },
  loginBtn: {
    backgroundColor: "#FF1493",
    height: 50,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    marginTop: 40
  }
});
export default Register;