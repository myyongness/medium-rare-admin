/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import App from 'next/app';
import styled from '@emotion/styled';
import NavBar from '../components/NavBar';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <NavBar />
        <BodyWrap>
          <Component {...pageProps} />
        </BodyWrap>
      </>
    );
  }
}

const BodyWrap = styled.div`
  padding-left: 300px;
`;

export default MyApp;
