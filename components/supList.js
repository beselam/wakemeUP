/* eslint-disable max-len */
import React, {useContext, useEffect, useState} from 'react';
import {
    StyleSheet,
    Switch,
    FlatList,
    Image,
    Dimensions,
    ImageBackground
  } from "react-native";
  
import {
    List as BaseList,
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
  List,
  Icon,
  Thumbnail,
  View
} from 'native-base';
import SuppListItemm from './supListItem';
import {SuppContext} from '../contexts/suppContext';

//import {getAllMedia} from '../hooks/APIHooks';


const SuppList = (props) => {
    const [isSwitchEnabled, setSwitch] = useState("false");
  const [suppliment, setSuppliment] = useContext(SuppContext);
 

  return (
    <List style={{ backgroundColor: "transparent" }}>
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
    <BaseList
      dataArray={suppliment}

      renderItem={({ item }) => (
        <SuppListItemm  singleMedia={item}/>
        
      )}
    />
  </List>
    
  );
};


export default SuppList;
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
            {console.log('l')}
            
       <FlatList
          
          data={medic}
          
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => console.log('lema')
          
        
        }
          
        />
    </List>
*/