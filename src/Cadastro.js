import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import React, {useState} from 'react'
import { firebase } from '../config'

const Cadastro = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

    registerUser = async (email,password, firstName, lastName) => {
        await firebase.auth().createUserWithEmailAndPassword(email,password)
        .then(() => {
          firebase.auth().currentUser.sendEmailVerification({
            handleCodeInApp: true,
            url: 'autenticacao-50daa.firebaseapp.com',
           })
          .then(() => {
                alert("Email sent")
            }).catch((error) => {
                console.log(error)
            })
            .then(() => {
              firebase.firestore().collection("users")
              .doc(firebase.auth().currentUser.uid)
              .set({
                  firstName,
                  lastName,
                  email,
              })
            })
            .catch((error) => {
              console.log(error)
          })
        })
        .catch((error) => {
            console.log(error)
        })
    }


  return (
    <View style={styles.container}>
        <Text style={{fontWeight:'bold', fontSize:23, margin: 20}}>
          Cadastro ;***!
        </Text>
        <View>
          <TextInput style={styles.textInput} 
              placeholder="Nome" 
              onChangeText={(firstName) => setFirstName(firstName)}
              autoCorrect={false}
          />
          <TextInput style={styles.textInput} 
            placeholder="Sobrenome" 
            onChangeText={(lastName) => setLastName(lastName)}
            autoCorrect={false}
          />
          <TextInput style={styles.textInput} 
            placeholder="Email" 
            onChangeText={(email) => setEmail(email)}
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
          />
          <TextInput style={styles.textInput} 
            placeholder="Senha" 
            onChangeText={(password)=> setPassword(password)}
            autoCorrect={false}
            autoCapitalize="none"
            secureTextEntry={true}
          />
        </View>
        <TouchableOpacity
            onPress={()=>registerUser(email,password, firstName, lastName)}
            style={styles.button}
        >
          <Text style={{color: 'white', fontSize:22}}>Cadastrar!</Text>
        </TouchableOpacity>
      </View>
  )
}

export default Cadastro

const styles = StyleSheet.create({
  container: {
    flex:1,  
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor: 'pink',
  },
  textInput: {
    paddingTop: 20,
    paddingBottom:10,
    width:300,
    borderRadius: 16,
    fontSize: 20,
    borderColor: 'yellow',
    borderWidth: 1,
    marginBottom: 10,
    textAlign: 'center',
  },
  button: {
    marginTop:50,
    height:70,
    width:250,
    backgroundColor:'green',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:50,
  }
});