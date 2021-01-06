import React, { useState, useEffect } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import {AnimatePresence} from 'framer-motion';

//Components
import LoadingScreen from "./components/LoadingScreen";
import Home from "./components/Home";
import SE from "./components/pages/SE"
import Ironman from "./components/pages/Ironman"
import PgaJr from "./components/pages/PgaJr";
import Hitch from "./components/pages/Hitch";
import BN from "./components/pages/BN";
import FT from "./components/pages/FT";

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000)
  }, [])

  return (
    <>
    {loading === false ? (
      <AnimatePresence>
        <Switch location={location} key={location.kay}>
          <Route exact path="/sportsengine">
            <SE />
          </Route>
          <Route exact path="/ironman">
            <Ironman />
          </Route>
          <Route exact path="/pgajr-league">
            <PgaJr/>
          </Route>
          <Route exact path="/hitch-adventures">
          <Hitch/>
          </Route>
          <Route exact path="/becca-neely">
            <BN/>
          </Route>
          <Route exact path="/frank-and-tawnee">
            <FT/>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
        </AnimatePresence>
     
      ) : (
        <LoadingScreen />
      )}
      </>
  );
}

export default App;
