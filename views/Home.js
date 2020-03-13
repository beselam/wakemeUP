import React, { useState,useEffect } from "react";
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';
import {
  StyleSheet,
  Switch,
  Image,
  Dimensions,
  ImageBackground
} from "react-native";

import {
  Container,
  Header,
  Body,
  Title,
  Content,
  Form,
  Button,
  ListItem,
  Separator,
  Text,
  Item,
  H2,
  Card,
  Label,
  Input,
  CardItem,
  Left,
  Right,
  Icon,
  Thumbnail,
  View
} from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AuthSession } from "expo";
import Listt from '../components/list'
import SuppList from "../components/supList";

const screenWidth = Dimensions.get("window").width;

const Home = ({ navigation }) => {
  const [isSwitchEnabled, setSwitch] = useState("false");

  
  /*
     const localNotification = {
      title: 'mamo',
      body: 'killo', // (string) — body text of the notification.
      ios: { // (optional) (object) — notification configuration specific to iOS.
        sound: true // (optional) (boolean) — if true, play a sound. Default: false.
      },
      android: // (optional) (object) — notification configuration specific to Android.
      {
        sound: true, // (optional) (boolean) — if true, play a sound. Default: false.
        //icon (optional) (string) — URL of icon to display in notification drawer.
        //color (optional) (string) — color of the notification icon in notification drawer.
        priority: 'high', // (optional) (min | low | high | max) — android may present notifications according to the priority, for example a high priority notification will likely to be shown as a heads-up notification.
        sticky: false, // (optional) (boolean) — if true, the notification will be sticky and not dismissable by user. The notification must be programmatically dismissed. Default: false.
        vibrate: true // (optional) (boolean or array) — if true, vibrate the device. An array can be supplied to specify the vibration pattern, e.g. - [ 0, 500 ].
        // link (optional) (string) — external link to open when notification is selected.
      }
    };

    let t = new Date();
    const m =t.getMilliseconds();
    console.log(t);
    console.log(m);
    
     
    
t.setSeconds(t.getMinutes() + 1);
const schedulingOptions = {
    time: t // (date or number) — A Date object representing when to fire the notification or a number in Unix epoch time. Example: (new Date()).getTime() + 1000 is one second from now.
   
  };

  


  useEffect(() => {
    Notifications.scheduleLocalNotificationAsync(localNotification, schedulingOptions);
  }, []);


**/
  return (
    <Container>
      <ImageBackground
        source={require("../images/home.png")}
        style={styles.backgroundImage}
      >
        <Content style={{ width: screenWidth }}>
      <Listt navigation={navigation}/>
      <SuppList navigation={navigation}/>
      
        </Content>
      </ImageBackground>
    </Container>
  );
};
export default Home;
let styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});



/*
    <List style={{ backgroundColor: "transparent" }}>
            <ListItem itemDivider>
              <Left style={{ flex: 0.3 }}>
                <Button style={{ backgroundColor: "#FF9501" }}>
                  <Icon active name="medkit" />
                </Button>
              </Left>
              <Body style={{ marginLeft: 0, paddingLeft: 0 }}>
                <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                  Medication
                </Text>
              </Body>
              <Right>
                <Switch
                  value={isSwitchEnabled}
                  trackColor={{ true: "#72A82F" }}
                  onValueChange={value => setSwitch(value)}
                />
              </Right>
            </ListItem>

            <ListItem style={{ backgroundColor: "transparent" }}>
              <Card
                style={{
                  flex: 1,
                  borderRadius: 10,
                  paddingTop: 20,
                  paddingBottom: 20
                }}
              >
                <Item
                  style={{
                    borderBottomColor: "transparent",
                    alignContent: "center",
                    justifyContent: "center"
                  }}
                >
                  <Left style={{ flex: 0.5 }}>
                    <Text style={{ fontWeight: "bold" }}>Amoxacilin</Text>
                  </Left>
                  <Right style={{ flex: 0 }}>
                    <Text style={{ textAlign: "right" }}>2 left</Text>
                  </Right>
                </Item>
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    alignContent: "center",
                    justifyContent: "center"
                  }}
                >
                  <View
                    style={{
                      height: 40,
                      width: 40,

                      borderRadius: 20
                    }}
                  >
                    <Icon style={{}} active name="medkit" />
                  </View>
                  <View
                    style={{
                      flex: 0.8,
                      height: 17,
                      backgroundColor: "#EAEAEA",
                      borderRadius: 13,
                      margin: 10,

                      flexDirection: "row"
                    }}
                  >
                    <View
                      style={{
                        flex: 0.72,
                        height: 17,
                        borderRadius: 13,
                        backgroundColor: "#FFBA00"
                      }}
                    ></View>
                  </View>
                </View>
              </Card>
            </ListItem>
          </List>
       
*/

{ /* <List style={{ backgroundColor: "transparent" }}>
<ListItem itemDivider>
  <Left style={{ flex: 0.3 }}>
    <Button style={{ backgroundColor: "#00AEEF" }}>
      <Icon active name="md-body" />
    </Button>
  </Left>
  <Body style={{ marginLeft: 0, paddingLeft: 0 }}>
    <Text style={{ fontWeight: "bold", fontSize: 16 }}>
      Suppliment
    </Text>
  </Body>
  <Right>
    <Switch
      value={isSwitchEnabled}
      trackColor={{ true: "#72A82F" }}
      onValueChange={value => setSwitch(value)}
    />
  </Right>
</ListItem>

<ListItem style={{ backgroundColor: "transparent" }}>
  <Card
    style={{
      flex: 1,
      borderRadius: 10,
      paddingTop: 20,
      paddingBottom: 20
    }}
  >
    <Item
      style={{
        borderBottomColor: "transparent",
        alignContent: "center",
        justifyContent: "center"
      }}
    >
      <Left style={{ flex: 0.5 }}>
        <Text style={{ fontWeight: "bold" }}>Amoxacilin</Text>
      </Left>
      <Right style={{ flex: 0 }}>
        <Text style={{ textAlign: "right" }}>2 left</Text>
      </Right>
    </Item>
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        alignContent: "center",
        justifyContent: "center"
      }}
    >
      <View
        style={{
          height: 40,
          width: 40,

          borderRadius: 20
        }}
      >
        <Icon style={{}} active name="medkit" />
      </View>
      <View
        style={{
          flex: 0.8,
          height: 17,
          backgroundColor: "#EAEAEA",
          borderRadius: 13,
          margin: 10,

          flexDirection: "row"
        }}
      >
        <View
          style={{
            flex: 0.72,
            height: 17,
            borderRadius: 13,
            backgroundColor: "#00AEEF"
          }}
        ></View>
      </View>
    </View>
  </Card>
</ListItem>
        </List> */}