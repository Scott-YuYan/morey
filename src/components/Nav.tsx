import styled from "styled-components";
import {Link, NavLink} from "react-router-dom";
import React from "react";
import Icon from "./Icon";

const NavWrapper = styled.div`
line-height: 24px;
background: white;
box-shadow: 0 0 3px rgba(0,0,0,0.25);
  > ul {
    display: flex;
      >li {
         width: 33.3333%;
         text-align: center;
         >a {
           display: flex;
           padding: 4px 0;
           flex-direction: column; 
           align-items: center;
            >.icon{
                width: 24px;
                height: 24px;
                color: black;
              }
             
              &.selected {
                  color: red;
                  .icon {
                      fill: red;
                  }
              }
          } 
      }
  }
`;

const Nav = () => {
    return <div>
        <NavWrapper>
            <ul>
                <li>
                    <NavLink to="/tags" activeClassName="selected">
                        <Icon tagName="Tags"/>
                        标签页
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/money" activeClassName={"selected"}>
                        <Icon tagName="Money"/>
                        记账页
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/statistic" activeClassName={"selected"}>
                        <Icon tagName="Statistic"/>
                        统计页
                    </NavLink>
                </li>
            </ul>
        </NavWrapper>
    </div>
};

export default Nav;