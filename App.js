import React, { Component } from 'react';
import Login from './components/login/indexRedux';
import Home from './components/home';
import Booking from './components/booking/index';
import Profil from './components/profil';
import Loading from './components/loading';
import { View, StatusBar } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

global.serverPath = "http://127.0.0.1:8080";

const Tabs = TabNavigator({
  Home: {
    screen: Home
  },
  Booking: {
    screen: Booking
  },
  Profil: {
    screen: Profil
  }
}, {
    // swipeEnabled: true,
    tabBarPosition: "bottom",
    tabBarOptions: {
      inactiveTintColor: "#111111",
      activeTintColor: "#ffffff",
      labelStyle: {
        fontSize: 12,
      },
      style: {
        backgroundColor: "#111111",
        borderTopWidth: 1,
        borderColor: '#111111',
      }
    }
  });

function counterReducer(state, action) {
  var stateCopy = JSON.parse(JSON.stringify(state));//Object.assign({}, state);
  if (action.type == 'loginConfirm') {
    stateCopy.login = action.login;
    stateCopy.nom = action.nom;
    stateCopy.prenom = action.prenom;
    stateCopy.telephone = action.telephone;
    return stateCopy;
  } else

    if (action.type == 'Booking') {
      stateCopy.date = action.date;
      stateCopy.time = action.time;
      stateCopy.activity = action.activity;
      return stateCopy;
    } else

      if (action.type == 'rdvList') {
        stateCopy.rdvList = action.rdv;
        return stateCopy;
      } else

        if (action.type == 'Sitting') {
          stateCopy.sittingDate = action.sittingDate;
          stateCopy.hour = action.hour;
          stateCopy.sittingActivity = action.sittingActivity;
          return stateCopy;
        } else

          if (action.type == 'addRdv') {
            stateCopy.rdvList.push(action.rdv);
            return stateCopy;
          }

          else {
            return state;
          }
}

const store = createStore(counterReducer, { login: false, nom: null, prenom: null, telephone: null, date: null, time: [], activity: null, rdvList: [{}], sittingDate: null, sittingActivity: null, hour: null });

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }

  // componentWillMount() {
  //   setTimeout(() => {
  //     this.setState({
  //       loading: false
  //     })
  //   }, 2000);
  // };

  render() {
    StatusBar.setBarStyle('light-content', true);
    // if (this.state.loading) {
    //   return <Loading />
    // }
    return (
      <Provider store={store}>
        <Login />
      </Provider>
    );
  }
}

