import React from "react";
import Edit from "./components/Edit";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Registration from "./components/Registration";
import { Switch, Route, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
const App = () => {
  return (
    <>
      <Provider store={store}>
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/edit/:id" component={Edit} />
          <Route exact path="/register" component={Registration} />
          <Redirect to="/" />
        </Switch>
      </Provider>
    </>
  );
};

export default App;
