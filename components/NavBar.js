/* eslint-disable react/button-has-type */
import React, { Component } from 'react';
import Link from 'next/link';
import styled from '@emotion/styled'; // i18n

class NavBar extends Component {
  render = () => {
    return (
      <NavBarWrap>
        <Link href="/">
          <a>Medium rare</a>
        </Link>
        <Link href="/articleList">
          <a>
            <button className="btn btn-outline-light">บทความ</button>
          </a>
        </Link>
        <Link href="/">
          <a>
            <button className="btn btn-outline-light">สมาชิก</button>
          </a>
        </Link>
        <Link href="/">
          <a>
            <button className="btn btn-outline-light">อะไรอีก</button>
          </a>
        </Link>
        <Link href="/">
          <a>
            <button className="btn btn-outline-light">จะเอาอะไร</button>
          </a>
        </Link>
      </NavBarWrap>
    );
  };
}

const NavBarWrap = styled.div`
  position: fixed;
  width: 300px;
  height: 100vh;
  background-color: black;
  button {
    width: 90%;
    margin: 10px;
  }
`;

export default NavBar;
