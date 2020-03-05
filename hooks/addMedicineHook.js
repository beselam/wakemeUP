import { useState } from "react";

import {AsyncStorage} from 'react-native';
import {fetchFormData} from './APIHooks';
import { Asset } from 'expo-asset';

const test= async ()=>{
  const imageURI = await Expo.Asset.fromModule(require('../assets/lo.jpg'));

  if (!imageURI.localUri) {
    Asset.loadAsync(require('../assets/lo.jpg')).then(() => {
      imageURI = Asset.fromModule(require('../assets/lo.jpg'))
     
    })
  }
  const imageUrii  = await imageURI.localUri  
  console.log('this should not be promise ',imageUrii);
  
   return imageUrii;
  }
  

let finalUri;
try{
  finalUri =  test();
  console.log('this is from finaluri',finalUri);
  
} catch(e){
 console.log('this is e ' , e);
 
}



const useAddMedicineForm = () => {
  const [medicineinputs, setMedicineInputs] = useState({});
  const [errors, setErrors] = useState({});

  const handleMedicineNameChange = text => {
    setMedicineInputs(medicineInputs => ({
      ...medicineInputs,
      medicineName: text
    }));
  };

  const handleStartingTimeChange = text => {
    setMedicineInputs(medicineInputs => ({
      ...medicineInputs,
      startingTime: text
    }));
  };


  const handleHowmanyTimesChange = text => {
    setMedicineInputs(medicineInputs => ({
      ...medicineInputs,
      howmanyTimes: text
    }));
  };

  const handleTimeGapChange = text => {
    setMedicineInputs(
      medicineinputs =>
        ({
          ...medicineinputs,
          timeGap: text
        }
    ));
  };


  const handleUpload = async (neww) => {

   console.log('from handle upload',neww);
   
    const type = 'image/jpeg'
    const medication  = JSON.stringify(neww)
    const fd = new FormData();
    fd.append('title', 'medication');
    fd.append('description', medication);
    fd.append('file', {uri:finalUri, name:'lo',type });

   console.log('FD from uploadHandler:', fd);
   

      console.log('try catch in handleUpload');
      const token = await AsyncStorage.getItem('userToken');
       //  const resp = await fetchFormData('media', fd, token);
        // console.log('what is returned form aplihoks',resp);
         
   
/* 
     try {
     
      console.log('upl resp', resp);
      if (resp.message) {
    
      }
    } catch (e) {
      console.log(e.message);
    } */
  };


  return {
    handleMedicineNameChange,
    handleStartingTimeChange,
    handleHowmanyTimesChange,
    handleTimeGapChange,
    handleUpload,
    medicineinputs,
    errors,
    setErrors
  };
};

export default useAddMedicineForm;
