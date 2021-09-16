import React from "react";
import Wrapper from "./Wrapper";
import MainWrapper from "../wrapper/MainWrapper";
import Nav from "./Nav";

export default function Layout(props:any) {
    return (
        <Wrapper>
            <MainWrapper>
                {props.children}
            </MainWrapper>
            <Nav/>
        </Wrapper>
    );
};