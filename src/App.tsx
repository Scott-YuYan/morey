import React from 'react';

import {
    HashRouter as Router, Route, Switch,
} from "react-router-dom";

import Tags from "./views/Tags";
import Money from "./views/Money";
import Statistic from "./views/Statistic";
import NotFound from "./views/NotFound";


export default function ParamsExample() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Tags/>
                </Route>
                <Route path="/tags">
                    <Tags/>
                </Route>
                <Route path="/money">
                    <Money/>
                </Route>
                <Route path="/statistic">
                    <Statistic/>
                </Route>
                <Route path="/*">
                    <NotFound/>
                </Route>
            </Switch>
        </Router>
    );
}


