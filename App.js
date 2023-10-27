import { NavigationContainer } from "@react-navigation/native";
import React ,{useState, useEffect,} from "react";
import {firebase} from './config';
import {createNativeStackNavigator } from '@react-navigation/native-stack';


import Login from "./src/Login";
import Cadastro from "./src/Cadastro";
import Dashboard from "./src/Dashboard";
import Header from "./components/Header";


const Stack = createNativeStackNavigator();

function App(){
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

// 
function onAuthStateChaged(user){
  setUser(user);
  if(initializing) setInitializing (false);
}

useEffect(() => {
  const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChaged);
  return subscriber;
}, []);

if(initializing) return null;

if (!user){
  return(
    <Stack.Navigator
    screenOptions={{
      headerShown:false,
    }}
    >
      <Stack.Screen
      name="Login" 
      component= {Login}
      />

      <Stack.Screen
      name="Cadastro" 
      component= {Cadastro}
      options={{
        HeadereaderTitle: () => <Headereader name="Bug Ninza"/>,
        HeaderStyle: {
          height:150,
          borderBottomLeftRadius:50,
          borderBottomRightRadius:50,
          backgroundColor: '#00e4d0',
          shadowColor:'#000',
          elevation:25
        }
      }}
      />
    </Stack.Navigator>
  );
}

return (
  <Stack.Navigator>
    <Stack.Screen
      name="Dashboard" 
      component= {Dashboard}
      options={{
        HeaderTitle: () => <header name="Dashboard"/>,
        HeaderStyle: {
          height:150,
          borderBottomLeftRadius:50,
          borderBottomRightRadius:50,
          backgroundColor: '#00e4d0',
          shadowColor:'#000',
          elevation:25
        }
      }}
      />
  </Stack.Navigator>
)

}

export default () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  )
}



