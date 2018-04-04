import React, { Component } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';
export default class App extends Component {
    constructor(props) {
    super(props);
    this.state = {
      jobs:{
        id: 0,
        nama: '-',
        jenis: 0,
        djob: '-'
      },
      monster:{
        id: 0,
        nama: '-'
      },
      pets:{
        id: 0,
        nama: '-',
        grade: '-'
      },
      quest:{
        id: 0,
        nama: '-',
        item: '-'
      }
    };
  }
  render() {
    return <RootStack />;
  }
}


getJobs= () => {
let url = 'http://localhost/mobileapp/getapi&units=metric';
fetch (url)
.then ((response) => response.json())
.then((responseJson) => {
            //console.log(responseJson);
            this.setState({
              jobs: {
                id: responseJson.weather[0].main,
                nama: responseJson.weather[0].description,
                jenis: responseJson.main.temp,
                djob: responseJson.wind.speed    
              }
        });
    });
}

class HomeScreen extends Component {
        static navigationOptions = {
          title: 'Wikia',
        };
  render() {
    return (
      <View style={styles.containerMain}>
        <View style={styles.box2}>
          <Text style={styles.text2}>Slider</Text>
        </View>

        <View style={styles.box3}>
          <View style={styles.box31}>
            <View style={styles.box312}>        
                <Button
                  title="Jobs"
                  onPress={() => {
                  this.props.navigation.navigate('Jobs');
                }}/>
            </View>

            <View style={styles.box312}>
                  <Button
                  title="Monster"
                  onPress={() => {
                  this.props.navigation.navigate('Monster');
                  }}/>
            </View>
          </View>

          <View style={styles.box31}>
            <View style={styles.box312}>
                  <Button
                  title="Pets"
                  onPress={() => {
                  this.props.navigation.navigate('Pets');
                  }}/>
            </View>
            <View style={styles.box312}>
                  <Button
                  title="Quest"
                  onPress={() => {
                  this.props.navigation.navigate('Quest');
                  }}/>
            </View>
          </View>
        </View>
        <View style={styles.box4}>
          <Text style={styles.text3}>@aryadaputra</Text>
        </View>

      </View>
    );
  }
}

class Jobs extends Component {
      static navigationOptions = {
      title: 'Jobs',
      };
  render() {
    return (
        <View style={styles.containerMain}>
          <View style={styles.box5}>
            <Text>Jobs</Text>
          </View>
          <View style={styles.box4}>
            <Text style={styles.text3}>@aryadaputra</Text>
          </View>
      </View>
    );
  }
}

class Monster extends Component {
      static navigationOptions = {
      title: 'Monster',
      };
  render() {
    return (
        <View style={styles.containerMain}>
          <View style={styles.box5}>
            <Text>Monster</Text>
          </View>
          <View style={styles.box4}>
            <Text style={styles.text3}>@aryadaputra</Text>
          </View>
      </View>
    );
  }
}

class Pets extends Component {
      static navigationOptions = {
      title: 'Pets',
      };
  render() {
    return (
        <View style={styles.containerMain}>
          <View style={styles.box5}>
            <Text>Pets</Text>
          </View>
          <View style={styles.box4}>
            <Text style={styles.text3}>@aryadaputra</Text>
          </View>
      </View>
    );
  }
}

class Quest extends Component {
      static navigationOptions = {
      title: 'Quest',
      };
  render() {
    return (
        <View style={styles.containerMain}>
          <View style={styles.box5}>
            <Text>Quest</Text>
          </View>
          <View style={styles.box4}>
            <Text style={styles.text3}>@aryadaputra</Text>
          </View>
      </View>
    );
  }
}

const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Jobs: {
      screen: Jobs,
    },
    Monster: {
      screen: Monster,
    },
    Pets: {
      screen: Pets,
    },
    Quest: {
      screen: Quest,
    },
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#00BCD4',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);


const styles = StyleSheet.create({
    containerMain: {
    flex: 1,
    backgroundColor: '#84FFFF',
    flexDirection: 'column'
    },

    box1: {
    flex: 2,
    backgroundColor: '#00BCD4',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
    },

    box2: {
    flex: 4,
    backgroundColor: '#B2EBF2',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    },

    box3: {
    flex: 4,
    backgroundColor: '#84FFFF',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    },

    box4: {
    flex: 1,
    backgroundColor: '#00BCD4',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    },

    box5: {
    flex: 6,
    backgroundColor: '#84FFFF',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    },

    box31: {
    flex: 1,
    backgroundColor: '#B2EBF2',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    },

    box312: {
    flex: 4,
    backgroundColor: '#E0F7FA',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',

    },

    text1: {
    fontSize: 30,
    fontWeight: 'bold',
    },

    text2: {
    fontSize: 30,
    },

    text3: {
    fontSize: 10,
    },
    });
