import styled from "styled-components";
import {Link} from "react-router-dom";
import React from "react";
import MoneySvg from "../svgs/Money.svg"

const NavWrapper = styled.div`
line-height: 24px;
box-shadow: 0 0 3px rgba(0,0,0,0.25);
  > ul {
    display: flex;
      >li {
          width: 33.3333%;
          text-align: center;
          padding: 16px;
      }
  }
`;

const Nav = () => {
    return <div>
        <NavWrapper>
            <ul>
                <li>
                    <img src={MoneySvg} alt={"404"}/>
                    <Link to="/money">Money</Link>
                </li>
                <li>
                    <Link to="/statistic">Statistic</Link>
                </li>
                <li>
                    <Link to="/tags">Tags</Link>
                </li>
            </ul>
        </NavWrapper>
    </div>
};

export default Nav;