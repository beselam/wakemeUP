import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Navigator from "./Navigation/navigation";
import { MedicProvider } from "./contexts/medicContext";
import { SuppProvider } from "./contexts/suppContext";
/* 
import { Asset } from 'expo-asset';
const test= async ()=>{
  const imageURI = await Expo.Asset.fromModule(require('./assets/lo.jpg'));

  if (!imageURI.localUri) {
    Asset.loadAsync(require('./assets/lo.jpg')).then(() => {
      imageURI = Asset.fromModule(require('./assets/lo.jpg'))
     
    })
  }


  console.log('the imageUriii',imageURI);
  
   console.log('log from app.js',imageURI.localUri);
   return imageURI.localUri;
  } */

/*

let finalUri;
try{
  finalUri = test();
} catch(e){
 console.log('this is e ' , e);
 
}
console.log('from appp  ',finalUri); */




export default App = () => {
  return (
    <MedicProvider>
      <SuppProvider>
        <Navigator />
      </SuppProvider>
    </MedicProvider>
  );
};
