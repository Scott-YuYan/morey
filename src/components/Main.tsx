import styled from "styled-components";
import {Route, Switch} from "react-router-dom";
import Tags from "../router/Tags";
import Money from "../router/Money";
import Statistic from "../router/Statistic";
import NotFound from "../router/NotFound";
import React from "react";

const MainWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  overflow: auto;
`;

const Main = ()=>{
    return <MainWrapper>
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
    </MainWrapper>
};

export default Main;