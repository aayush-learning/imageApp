import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { createStackNavigator, createAppContainer } from "react-navigation";
import thunk from 'redux-thunk';
import reducer from '../src/reducer/reducer';
import Home from "./home/Home";

const AppNavigtor = createAppContainer(
  createStackNavigator({
    Home: {
      screen: Home,
      navigationOptions: { title: "Home" }
    },
  })
);

const store = createStore(reducer, applyMiddleware(thunk));

export default class Routes extends React.Component {
  render() {
    return (
    <Provider store={store}>
      <AppNavigtor />
    </Provider>
    );
  }
}
