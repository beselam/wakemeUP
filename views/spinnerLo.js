import React from 'react';
import { Container, Header, Content, Spinner } from 'native-base';
const MySpinner=()=> {
 
    return (
      <Container>
        <Header />
        <Content>
          <Spinner color='green' />
        </Content>
      </Container>
    );
  
}

export default MySpinner;
