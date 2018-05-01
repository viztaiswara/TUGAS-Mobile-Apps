import React, { Component } from 'react';
import { 
    View, 
    Text, 
    Image, 
    Alert,  
    TextInput, 
    ScrollView } from 'react-native';
    import { 
    Container, 
    Header, 
    Content, 
    Footer, 
    FooterTab,
    Button, 
    Icon, 
    Thumbnail, 
    Fab, 
    Item, 
    Input, 
    Card, 
    CardItem, 
    Left,
    Right,
    Body } from 'native-base';
    import { TabNavigator } from 'react-navigation';
    import axios from 'axios';

class Ones extends Component {
    constructor(){
        super();
        this.state={nm:'', club:[],
        };
      }
      
      searching(){
        const search=this.state.nm;
        axios.get('https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?t='+search)
        .then((getdata)=>{
          console.log(getdata.data);
          this.setState({
            club:getdata.data.player,
          })
        })
      };
    
      render() {
          const data = this.state.club.map((item, index)=>{
            var name = item.strPlayer;
            var pos = item.strPosition;
            var pic = item.strThumb;
            var pay = item.strWage;
            var img = item.strCutout;
            var bor = item.dateBorn;
            var nat = item.strNationality;
            var hg = item.strHeight;
            var wg = item.strWeight;
            return ( 
                  <Card avatar key={index}>
                      <CardItem header>
                          <Left>
                              <Thumbnail source={{uri:img}} />
                                <Body>
                                  <Text>{name}</Text>
                                  <Text note>{pos}</Text>
                                </Body>
                          </Left>
                          <Right><Button transparent onPress={()=>{alert('wage : '+pay)}}>
                              <Icon name="bookmark" />
                              <Text> view wage </Text></Button>
                          </Right>
                      </CardItem>
                      <CardItem cardBody>
                          <Image source={{uri:pic}} style={{height:300, width:300, flex:1}} />
                      </CardItem>
                      <CardItem footer>
                          <Left><Button transparent><Icon name="flag" /><Text>{nat}</Text></Button></Left>
                          <Body><Button transparent><Icon name="code" /><Text>{hg} M / {wg} Kg</Text></Button></Body>
                          <Right><Button transparent><Icon name="home" /><Text>{bor}</Text></Button></Right>
                      </CardItem>
                  </Card>  
            )
          })
        return (
          <Container>
              <Header searchBar rounded>
                  <Item>
                      <Icon name="search" />
                      <Input placeholder="Searching Team..." onChangeText={(x)=>{this.setState({nm:x})}} />
                      <Icon name="people" onPress={()=>{this.searching()}} />
                  </Item>
              </Header>
              <ScrollView>
                    {data}        
              </ScrollView>
                  <Footer><FooterTab>
                      <Button vertical active><Icon name="apps" />
                          <Text> Apps </Text>
                      </Button>
                      <Button vertical><Icon name="camera" />
                          <Text> Camera </Text>
                      </Button>
                      <Button vertical><Icon active name="navigate" />
                          <Text> Navigate </Text>
                      </Button>
                  </FooterTab></Footer>
          </Container>
        );
      }
    }
export default Ones;