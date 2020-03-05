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



const ListItemm = (props) => {
    console.log('mamo');
  
    
     const barWidth =()=>{ 
      let barWidthh = props.singleMedia.barSection;
      console.log(barWidthh);
      
       return (barWidthh);
     }
    
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
                <Text style={{ textAlign: "right" }}> Left {props.singleMedia.left}</Text>
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
                  <View style={{flex:0.8,flexDirection:'row'}}>
                     <View
                    style={{
                      flex:1 ,
                      height: 17,
                      backgroundColor: "#EAEAEA",
                      borderRadius: 13,
                      margin: 10,

                      flexDirection: "row"
                    }}
                  >
                    <View
                      style={{
                        flex: barWidth(),
                        height: 17,
                        borderRadius: 13,
                        backgroundColor: "#FFBA00"
                      }}
                    ></View>
                  </View> 
                  </View>
                
                </View>
              </Card>
            </ListItem>
  );
};



export default ListItemm;
