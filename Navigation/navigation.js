import * as React from "react";
import { useEffect, useState } from "react";
import { AsyncStorage } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../views/Home";
import AddFeedScreen from "../views/addFeedsScreen";
import AddMemorPartnerScreen from "../views/addPartnerScreen";
import ProfileScreen from "../views/profileScreen";

import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import WelcomeScreen from "../views/welcomeScreen";
import Login from "../views/loginScreen";
import AuthLoading from "../views/AuthLoadign";
import GetToken from "../components/userToken";
import {AuthContext} from '../contexts/context'

const MainStack = createStackNavigator();
const AuthStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const stack = () => {
  return (
    <AuthStack.Navigator >
      <AuthStack.Screen name="Welcome" component={WelcomeScreen} options={{ 
    headerShown:false 
  }} />
      <AuthStack.Screen name="LoginScr" component={Login}  options={{
          title: '',
          headerStyle: {
            backgroundColor: '#A0C770',
          }}}/>
    </AuthStack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "ios-home" : "ios-home";
          } else if (route.name === "Add") {
            iconName = focused
              ? "md-add-circle-outline"
              : "md-add-circle-outline";
          } else if (route.name === "Share") {
            iconName = focused ? "ios-people" : "ios-people";
          } else {
            iconName = focused ? "md-person" : "md-person";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        }
      })}
      tabBarOptions={{
        activeTintColor: "#72A82F",
        inactiveTintColor: "gray"
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Add" component={AddFeedScreen} />
      <Tab.Screen name="Share" component={AddMemorPartnerScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

const Navigator = () => {
  const [isLoading, setLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState("");
 

  const authContext = React.useMemo(()=>{
    
   // const GetToken = async () => {
    const userToken =  AsyncStorage.getItem("userToken");
    setLoading(false);
    console.log("token", userToken);
   // return userToken
  //};

    return{
      signIn:()=>{
         setLoading(false);
         setUserToken(userToken)
      },
      signOut:()=>{
       setLoading(false);
       setUserToken(null);
       
      }
    }
  },[])

  if (isLoading) {
    return <AuthLoading />;
  }
  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
      {userToken ? TabNavigator() : stack()}
    </NavigationContainer> 
    </AuthContext.Provider>
   
  );
};

export default Navigator;
