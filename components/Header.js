/* eslint-disable react/button-has-type */
import React, { Component } from 'react';
import Link from 'next/link';
import styled from '@emotion/styled'; // i18n

class Header extends Component {
  render = () => {
    return (
      <HeaderWrap>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Link href="/">
                <a>
                  <Logo src="/img/logo.png" alt="" />
                </a>
              </Link>
              <button className="btn btn-outline-primary">Get Started</button>
              <button className="btn btn-link">Sign In</button>
            </div>
          </div>
        </div>
      </HeaderWrap>
    );
  };
}

const HeaderWrap = styled.div`
  width: 100%;
  margin: auto;
  line-height: 50px;
  height: 65px;

  button {
    float: right;
    margin-top: 13px;
    margin-left: 8px;
  }
`;

const Logo = styled.img`
  height: 35px;
  width: 35px;
  margin-top: 13px;
`;

export default Header;
