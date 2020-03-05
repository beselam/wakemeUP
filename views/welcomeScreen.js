import React, { PureComponent } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Animated,
  Button,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
  ShadowPropTypesIOS
} from "react-native";
import { Video } from "expo-av";
import SwiperFlatList from 'react-native-swiper-flatlist';


const { width, height } = Dimensions.get("window");
const logo = require("../assets/logo6.png");

const  WelcomeScreen= ({ navigation })=> {
  
 
  const beselam = require("../assets/ff.mp4");
  const opacity = React.useMemo(() => new Animated.Value(0), []);
  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <Animated.View
          style={[styles.backgroundViewWrapper, { opacity: opacity }]}
        >
          <Video
            isLooping
            isMuted
            positionMillis={500}
            onLoad={() => {
              // https://facebook.github.io/react-native/docs/animated#timing
              Animated.timing(opacity, {
                toValue: 1
              }).start();
            }}
            resizeMode="cover"
            shouldPlay
            source={
              beselam
              /* nuri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4" */
            }
            style={{ flex: 1 }}
          />
        </Animated.View>
      </View>
      <View style={styles.overlay}>
        <View style={{ height: height / 1 }}>
          <View
            style={{
              justifyContent: "flex-end",
              flex: 1,
              alignItems: "center",
              paddingBottom: 150,
              paddingLeft: 15
            }}
          >
            <Image source={logo} />
          </View>
          <View>
          <SwiperFlatList
          autoplay
          autoplayDelay={3}
          autoplayLoop
          index={2}
          showPagination
        >
          <View style={[styles.child, {}]}>
            <Text style={styles.text}>sdhgsdhsdshg shgdfsgd sdfsgdv </Text>
          </View>
          <View style={[styles.child, { }]}>
            <Text style={styles.text}> sdgfsdv sgdfasd asytdasv asdgfasd asdytfasd asdgafsd</Text>
          </View>
          <View style={[styles.child, { }]}>
            <Text style={styles.text}>asvdfhas asgdas aytsda sdas asdytadcasvbdasgdcsvdca asdsad </Text>
          </View>
         
        </SwiperFlatList>
          </View>
        
          <View style={{ justifyContent: "flex-end", flex: 1,paddingBottom:30 }}>
            <TouchableOpacity
              onPress={() => {
                navigation.push("LoginScr");
              }}
            >
              <View style={styles.button}>
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>Log In</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Register");
              }}
            >
             
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "transparent",
    flex: 1,
    justifyContent: "center"
  },
  background: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "black"
  },
  backgroundViewWrapper: {
    ...StyleSheet.absoluteFillObject
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(34,56,7,0.5)"
  },

  button: {
    backgroundColor: "rgba(144,168,47,0.92)",
    height: 70,
    marginHorizontal: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5
  },
  child: {
    height: height * 0.2,
    width,
    justifyContent: 'center',
    borderWidth:0.5,
    borderColor:'white',
    borderRadius:20,
    
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    color:'white',
    
  }
  

});