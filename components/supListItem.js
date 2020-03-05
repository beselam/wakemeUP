import React from 'react';
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



const SuppListItemm = (props) => {
    console.log('mamo');
    
  return (
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
                    <Text style={{ fontWeight: "bold" }}>{props.singleMedia.medicineName}</Text>
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
                    <Icon style={{}} active name="md-body" />
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
  );
};



export default SuppListItemm;
