import React from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Image,
} from 'react-native';
import firebase from 'firebase'

export default class LoginScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      emailID: '',
      password: '',
    };
  }

  login = async (email,password)=>{
if(email  && password){
  try{
const response = await firebase.auth().signInWithEmailAndPassword(email,password)
if(response){
  this.props.navigation.navigate('Transaction')
}
  }
  catch(err){
    switch(err.code){
      case 'auth/user-not-found' : alert('User does not exist ') 
      break;
      case 'auth/invalid-email' : alert('incorrect email or password')
      break;
        case 'auth/invalid-password' : alert('incorrect email or password')
      break;
      
    }
  }
}else{
  alert('enter email and password')
}
  }
  render() {
    return (
      <KeyboardAvoidingView style={{ alignItems: 'center', marginTop: 20 }}>
        <Image
          source={require('../assets/booklogo.jpg')}
          style={{ width: 200, height: 200 }}
        />
        <Text style={{ textAlign: 'center', fontSize: 30 }}>BEDTIME STORIES</Text>
        <View>
          <TextInput
          style={styles.loginBox}
            placeholder={'abc@example.com'}
            keyboardType="email-address"
            onChangeText={(text) => {
              this.setState({
                emailID: text,
              });
            }}
          />
          <TextInput
          style={styles.loginBox}
            placeholder={'Enter Password'}
            secureTextEntry={true}
            onChangeText={(text) => {
              this.setState({
                password: text,
              });
            }}
          />
        </View>
        <View>
          <TouchableOpacity
            style={{
              height: 30,
              width: 90,
              borderWidth: 1,
              paddingTop: 5,
              borderRadius: 7,
            }}
            onPress={()=>{this.login(this.state.emailID,this.state.password)}}
            >
            <Text style={{ textAlign: 'center' }}> Login In </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}
const styles = StyleSheet.create({
  loginBox: {
    width: 300,
    height: 40,
    borderWidth: 1.5,
    fontSize: 20,
    margin: 10,
    paddingLeft: 10,
  },
});
