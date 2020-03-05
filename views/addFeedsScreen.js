import React, { useState, useContext, useEffect } from "react";
import {
  StyleSheet,
  Switch,
  Image,
  Dimensions,
  TouchableOpacity,
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
//import FormTextInput from "../components/FormTextInput";
import useAddMedicineForm from "../hooks/addMedicineHook";
import { MedicContext } from "../contexts/medicContext";
import FormTextInput from "../components/formTextInputs";
import Listt from "../components/list";
import Algo from "../components/algo";

const AddFeedScreen = ({ navigation }) => {
  const {
    handleMedicineNameChange,
    handleStartingTimeChange,
    handleHowmanyTimesChange,
    handleTimeGapChange,
    handleUpload,
    medicineinputs,
    errors,
    setErrors
  } = useAddMedicineForm();

  const screenWidth = Dimensions.get("window").width;
  const [medicine, setMedicine] = useContext(MedicContext);
  // const { AddMedicationForm, AddSupplimentForm } = FormTextInput();
  const [displayMedicinForm, setMedicinForm] = useState(false);
  const [displaysupplimentForm, setSupplimentForm] = useState(false);
  let newMedicine = medicine;
  //let neww = '';
  const handleMedicneName = text => {
    handleMedicineNameChange(text);
  };

  const uploadMedicine = () => {
    let newMedInput = Algo(medicineinputs);
     console.log('log from uploadMedicie',newMedInput);

    handleUpload(newMedInput);
    newMedicine.push(newMedInput);
    setMedicine(newMedicine);
    //console.log(medicine);
    navigation.navigate("Home");
  };

  const image = { uri: "../image" };

  return (
    <Container>
      <Header
        style={{ backgroundColor: "#A0C770", borderBottomColor: "#A0C770" }}
      >
        <Body>
          <Text>Memor</Text>
        </Body>
      </Header>
      <ImageBackground
        source={require("../images/feed.png")}
        style={styles.backgroundImage}
      >
        <Content style={{ width: screenWidth, zIndex: 4 }}>
          <Card
            style={{
              marginLeft: 30,
              marginRight: 30,
              padding: 17,
              borderRadius: 10,
              backgroundColor: "#A0C770",
              marginTop: 100
            }}
          >
            <Item style={{ borderBottomColor: "transparent" }}>
              <Left style={{ flex: 0.3 }}>
                <Button
                  style={{ backgroundColor: "#FF9501" }}
                  onPress={() =>
                    displayMedicinForm
                      ? setMedicinForm(false)
                      : setMedicinForm(true)
                  }
                >
                  <Icon active name="medkit" />
                </Button>
              </Left>
              <Body
                style={{
                  marginLeft: 0,
                  paddingLeft: 0,
                  flex: 0.7,
                  alignItems: "clear"
                }}
              >
                <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                  Add Medication
                </Text>
              </Body>
            </Item>
          </Card>
          {displayMedicinForm && (
            <Form style={{ marginLeft: 30, marginRight: 30 }}>
              <FormTextInput
                lable="Enter the Medicine Name "
                value={medicineinputs.medicineName}
                onChangeText={handleMedicneName}
              />
              <FormTextInput
                lable="Starting Time"
                value={medicineinputs.startingTime}
                onChangeText={handleStartingTimeChange}
              />
              <FormTextInput
                lable="How many times per day"
                value={medicineinputs.howmanyTimes}
                onChangeText={handleHowmanyTimesChange}
              />
              <FormTextInput
                lable="Time Interval"
                value={medicineinputs.timeGap}
                onChangeText={handleTimeGapChange}
              />

              <Button
                light
                style={{ justifyContent: "center" }}
                onPress={() => uploadMedicine()}
              >
                <Text>ADD</Text>
              </Button>
            </Form>
          )}

          {/**  <Card
            style={{
              marginLeft: 30,
              marginRight: 30,
              padding: 17,
              borderRadius: 10,
              backgroundColor: "#0DA6B4"
            }}
          >
            <Item style={{ borderBottomColor: "transparent" }}>
              <Left style={{ flex: 0.3 }}>
                <Button
                  style={{ backgroundColor: "#FF9501" }}
                  onPress={() =>
                    !displaysupplimentForm
                      ? setSupplimentForm(true)
                      : setSupplimentForm(false)
                  }
                >
                  <Icon active name="md-body" />
                </Button>
              </Left>
              <Body
                style={{
                  marginLeft: 0,
                  paddingLeft: 0,
                  flex: 0.7,
                  alignItems: "clear"
                }}
              >
                <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                  Add Suppliments
                </Text>
              </Body>
            </Item>
              </Card>  
          {displaysupplimentForm && (
            <Form style={{ marginLeft: 30, marginRight: 30 }}>
            

              <Button light style={{ justifyContent: "center" }}>
                <Text>ADD</Text>
              </Button>
            </Form>
          )}*/}
        </Content>
      </ImageBackground>
    </Container>
  );
};

export default AddFeedScreen;
let styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
