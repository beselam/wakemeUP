import React, { useState } from "react";
import { StyleSheet, Image, Dimensions, ImageBackground } from "react-native";
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
  Thumbnail
} from "native-base";

import FormTextInput from "../components/formTextInputs";


import { AsyncStorage } from "react-native";
import { fetchPOST } from "../hooks/APIHooks";
import useSignUpForm from "../hooks/addLoginHooks";
import {AuthContext} from '../contexts/context'


const Login = props => {
  const backgroundSource = require("../images/lback.jpg");
  const [toggleForm, setToggleForm] = useState(true);
  const { signIn } = React.useContext(AuthContext);



  const {
    handleUsernameChange,
    handlePasswordChange,
    handleEmailChange,
    handleFullnameChange,
    handleConfirmPasswordChange,
    validateField,
    validateOnSend,
    checkAvail,
    inputs,
    errors,
    setErrors
  } = useSignUpForm();

  const validationProperties = {
    username: { username: inputs.username },
    email: { email: inputs.email },
    full_name: { full_name: inputs.full_name },
    password: { password: inputs.password },
    confirmPassword: {
      password: inputs.password,
      confirmPassword: inputs.confirmPassword
    }
  };

  const signInAsync = async () => {
    const errorMessage = 'Authentication failed due to bad credentials '
    try {
      const user = await fetchPOST("login", inputs);
      console.log("Login", user);
      await AsyncStorage.setItem("userToken", user.token);
      await AsyncStorage.setItem("user", JSON.stringify(user.user));
      signIn();
    
    } catch (e) {
      console.log("signInAsync error: " + e.message);
      setErrors(errors => ({
        ...errors,
        fetch: errorMessage
        
      }));
      console.log('hereee');
      
      console.log(errors.fetch);
      
    }
  };
  const registerAsync = async () => {
    const regValid = validateOnSend(validationProperties);
    console.log("reg field errors", errors);
    if (!regValid) {
      return;
    }

    try {
      console.log("sen inputs", inputs);
      const user = inputs;
      delete user.confirmPassword;
      const result = await fetchPOST("users", user);
      console.log("register", result);
      signInAsync();
    } catch (e) {
      console.log("registerAsync error: ", e.message);
      setErrors(errors => ({
        ...errors,
        fetch: e.message
      }));
    
    } 
     console.log('hereee');
      
      console.log(errors);
      
  };

  return (
    <Container>
      <ImageBackground
        source={backgroundSource}
        style={styles.backgroundImage}
      >
        <Content
          style={{ width: 350, marginTop: 0 }}
          showsVerticalScrollIndicator={false}
        >
          {/*Login from*/}
          {toggleForm && (
            <Form style={{ paddingTop: 150 }}>
              <Item
                style={{
                  justifyContent: "center",
                  borderColor: "transparent",
                  paddingBottom: 20,
                  paddingTop: 50
                }}
              >
                <Text style={{ fontWeight: "bold" }}>LOGIN</Text>
              </Item>
              <FormTextInput
                autoCapitalize="none"
                lable="Username"
                value={inputs.username}
      
                onChangeText={handleUsernameChange}
                error={errors.fetch}

              />
              <FormTextInput
                autoCapitalize="none"
                lable="Password"
                value={inputs.password}
                secureTextEntry={true}
                onChangeText={handlePasswordChange}
                error={errors.fetch}
              />

              <Button
                block
                style={{ backgroundColor: "#28BFCC" }}
                onPress={signInAsync}
              >
                <Text>LOGIN</Text>
              </Button>

              <Button
                iconRight
                style={{
                  justifyContent: "center",
                  backgroundColor: "#28BFCC",
                  marginTop: 10
                }}
                onPress={() => setToggleForm(false)}
              >
                <Text>REGISTER</Text>
                <Icon name="arrow-forward" />
              </Button>
            </Form>
          )}

          {/*register from*/}

          {!toggleForm && (
            <Form>
              <Item
                style={{
                  justifyContent: "center",
                  borderColor: "transparent",
                  paddingBottom: 20,
                  marginTop: 150
                }}
              >
                <Text style={{ fontWeight: "bold" }}>REGISTER</Text>
              </Item>

              {/*   <RegisterForm lable="Create a Username" />
              <RegisterForm lable="Enter your Email address" />
              <RegisterForm lable="Enter your Age" />
              <RegisterForm lable="Create a Password" />
              <RegisterForm lable="Re-enter a Password" /> */}

              <Button block style={{ backgroundColor: "#28BFCC" }}>
                <Text>REGISTER</Text>
              </Button>

              <Button
                iconLeft
                light
                style={{ width: 100, marginLeft: 250, marginTop: 10 }}
                onPress={() => setToggleForm(true)}
              >
                <Icon name="arrow-back" />
                <Text>Back</Text>
              </Button>
            </Form>
          )}
        </Content>
      </ImageBackground>
    </Container>
  );
};

export default Login;
let styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
