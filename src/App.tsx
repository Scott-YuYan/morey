import React from 'react';

import {
    HashRouter as Router,
} from "react-router-dom";

import Wrapper from "./components/Wrapper";
import Main from "./components/Main";
import Nav from "./components/Nav";



export default function ParamsExample() {
    return (
        <Router>
            <Wrapper>
                <Main/>
                <Nav/>
            </Wrapper>
        </Router>
    );
}


