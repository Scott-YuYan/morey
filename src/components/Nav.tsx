import styled from "styled-components";
import {Link} from "react-router-dom";
import React from "react";
import Icon from "./Icon";

const NavWrapper = styled.div`
line-height: 24px;
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
                    <Link to="/tags">
                        <Icon tagName="Tags"/>
                        标签页
                    </Link>
                </li>
                <li>
                    <Link to="/money">
                        <Icon tagName="Money"/>
                        记账页
                    </Link>
                </li>
                <li>
                    <Link to="/statistic">
                        <Icon tagName="Statistic"/>
                        统计页
                    </Link>
                </li>
            </ul>
        </NavWrapper>
    </div>
};

export default Nav;