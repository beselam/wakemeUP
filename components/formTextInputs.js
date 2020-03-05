import React from 'react';
import {Input, Body, Badge, Item, Text,Card,Label} from 'native-base';


const FormTextInput = (props) => {
  const {error,lable, ...otherProps} = props;
  return (
    <Card style={{ borderRadius: 5, marginBottom: 5, padding: 4 }}>
    <Item floatingLabel style={{ borderColor: "transparent" }}>
      <Label>{lable}</Label>
      <Input {...otherProps} />
    </Item>
    {error && (
      <Badge>
        <Text>{error}</Text>
      </Badge>
    )}
  </Card>
  );
};


export default FormTextInput;
