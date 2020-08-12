import React from 'react';
import { Route, Switch, useLocation } from "react-router-dom";
// import Header from './components/Header';
import Home from './components/Home';
import Links from './components/Links';
import { AnimatePresence } from 'framer-motion';
import Menu from './components/Menu/Menu'
function App() {
  const location = useLocation();


  return (
    <>
      {/* <Header /> */}
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route path="/sportsengine">
          {/* <Home /> */}
          </Route>
          <Route path="/ironman">
          <Links/>
          </Route>
          <Route path="/pgajr-league">
          {/* <Menu/> */}
          </Route>
          <Route path="/hitch-adventures">
          {/* <Home /> */}
            </Route>
            <Route path="/becca-neely">
            {/* <Home /> */}
            </Route>
            <Route path="/frank-and-tawnee">
            {/* <Home /> */}
            </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </AnimatePresence>
    </>
  );
}

export default App;
