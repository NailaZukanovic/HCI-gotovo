import axios from 'axios';
import { Alert } from 'react-native';

export const userLogin = (email, password, setToken, token) => {
  axios.post('https://auth-jwt-backend.herokuapp.com/user/login', {email, password}).then(res => {
    setToken(res.data.token);
  }).catch(err => {
    Alert.alert("Greska pri logovanju");
  });
  return ({
    type: 'LOGIN',
    payload: token
  })
}

export const userLogout = () => {
  return({
    type: "LOGOUT"
  })
}