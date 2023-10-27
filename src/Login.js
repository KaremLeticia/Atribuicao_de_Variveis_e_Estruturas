import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import React, {useState} from 'react'
import { useNavigation } from '@react-navigation/native'
import { firebase } from '../config'

const Login = () => {
    const navigation = useNavigation()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    loginUser = async (email,password) => {
        try{
            await firebase.auth().signInWithEmailAndPassword(email,password)
        } catch (error){
          alert(error)
        }
    }


    return (
      <View style={styles.container}>
        <Text style={{fontStyle: 'italic', fontSize:26,}}>
          Aplicativo da Ka ;***
        </Text>
        <View>
          <TextInput style={styles.textInput} 
            placeholder="Email" 
            onChangeText={(email) => setEmail(email)}
            autoCapitalize="none"
            autoCorrect={false}
          />
          <TextInput style={styles.textInput} 
            placeholder="Senha" 
            onChangeText={(password)=> setPassword(password)}
            secureTextEntry={true}
          />
        </View>
        <TouchableOpacity
            onPress={()=>loginUser(email,password)}
            style={styles.button}
        >
          <Text style={{fontWeight:'bold', fontSize:22, color: 'green'}}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={()=>navigation.navigate('Cadastro')}
          style={{marginTop:20,}}
        >
          <Text style={{fontSize:16, }}>
            Você ainda não tem cadastro?
        
          </Text>
              <Text style={{fontSize:16, textAlign: 'center'}}>
              Cadastre-se
            </Text>
        </TouchableOpacity>
      </View>
    )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor: '#fb84fc',
  },
  textInput: {
    paddingTop: 20,
    paddingBottom:10,
    width:300,
    borderRadius: 16,
    fontSize: 20,
    borderColor: 'yellow',
    borderWidth: 1,
    textAlign: 'center',
    margin: 10,
    },
  button: {
    height:70,
    width:250,
    marginTop: 15,
    backgroundColor:'#fcfb84',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:16,
  }
});