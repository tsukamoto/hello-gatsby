import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

import styled from 'styled-components';

const Title = styled.h1`
  font-size: 3.5em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

// const HogeComponent = () => {
//   <Wrapper>
//     <Title>Hello World, this is my first styled component!</Title>
//   </Wrapper>
// }

const IndexPage = () => (
  <Layout>
    <h1>My First Component</h1>
    <Link to="/">Back to Home</Link>
    <Wrapper>
      <Title>Hello World, this is my first styled component!</Title>
    </Wrapper>
  </Layout>
)

export default IndexPage