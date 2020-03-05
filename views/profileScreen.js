/*import React from 'react';
import {Text,View , Button , AsyncStorage} from 'react-native'
import PropTypes from 'prop-types';
import {AuthContext} from '../contexts/context'




const ProfileScreen = (props) => {
  const { signOut } = React.useContext(AuthContext);
  const signOutAsync = async () => {
    await AsyncStorage.clear();
    signOutAsync
    signOut();
    console.log('pressed');
    
  };

 
  return (
      <View style={{flex:2,justifyContent:'center' , alignItems:'center'} }>
           <Button title='logout' onPress={async ()=>signOutAsync()
           }/>  
      </View>
  );
};

export default ProfileScreen; */
import React, { useEffect, useState } from "react";

import { StyleSheet,ImageBackground } from 'react-native'
import { 
  Container,
  Content,
  Card,
  CardItem,
  Text,
  Header,
  Body,
  Button,
  Icon
} from "native-base";
import { AsyncStorage } from "react-native";
import { fetchGET } from "../hooks/APIHooks";
//import AsyncImage from "../components/AsyncImage";
import { Dimensions } from "react-native";
import { mediaURL } from "../constants/urlConst";
import {AuthContext} from '../contexts/context'


const deviceWidth = Dimensions.get("window").width;

const ProfileScreen = props => {
  const { signOut } = React.useContext(AuthContext);
  const signOutAsync = async () => {
    await AsyncStorage.clear();
    signOutAsync
    signOut();
    console.log('pressed');
    
  };
  const [user, setUser] = useState({
    userdata: {},
    avatar: "https://"
  });
  const userToState = async () => {
    try {
      const userFromStorage = await AsyncStorage.getItem("user");
      const uData = JSON.parse(userFromStorage);
      const avatarPic = await fetchGET("tags", "avatar_" + uData.user_id);
      console.log("avpic", avatarPic);
      let avPic = "";
      if (avatarPic.length === 0) {
        // if avatar is not set
        avPic = "https://placekitten.com/1024/1024";
      } else {
        avPic = mediaURL + avatarPic[0].filename;
      }
      setUser(user => ({
        userdata: uData,
        avatar: avPic
      }));
    } catch (e) {
      console.log("Profile error: ", e.message);
    }
  };

  useEffect(() => {
    userToState();
  }, []);



  console.log("ava", mediaURL + user.avatar);
  return (
    <Container>
       <Header
        style={{ backgroundColor: "#A0C770", borderBottomColor: "#A0C770" }}
      >
        <Body>
          <Text></Text>
        </Body>
      </Header>
        <ImageBackground
        source={require("../images/prof.png")}
        style={styles.backgroundImage}
      >
     
     <Content style={{ width: deviceWidth, zIndex: 4 }}>
  
        <Card>
          <CardItem header bordered>
            <Icon name="person" />
            <Text>Username: {user.userdata.username}</Text>
          </CardItem>
          <CardItem>
            <Body>
            
            </Body>
          </CardItem>
          <CardItem>
            <Body>
              <Text>Fullname: {user.userdata.full_name}</Text>
              <Text numberOfLines={1}>email: {user.userdata.email}</Text>
            </Body>
          </CardItem>
          <CardItem footer bordered>
            <Body>
              <Button full onPress={async ()=>signOutAsync()}>
                <Text>Logout</Text>
              </Button>
            </Body>
          </CardItem>
        </Card>
      </Content>
      </ImageBackground>
    </Container>
  );
};
let styles = StyleSheet.create({
  backgroundImage: {
    flex:1,
    width: deviceWidth,
    
    justifyContent: "center",
    alignItems: "center"
  }
});

export default ProfileScreen;
