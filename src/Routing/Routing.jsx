import React from "react";
import { Route, Switch } from "react-router-dom";

import Card from "../components/CardByMaterialUi/CardList";
import Card1 from "../components/CardByCode/CardList";
export default function Routing() {
  return (
    <Switch>
      <Route exact path="/card" component={Card} />
      <Route path="/card1" component={Card1} />
      {/* <Route  path ="/" component ={}/> */}
    </Switch>
  );
}
