import React from 'react'
import styled from 'styled-components'

import { COLORS, SIZES } from '../../../assets/constants'

const Home = () => {
  return (
    <Container>
      <h1>a new drone in the market</h1>
      <span>get the new SAVX150e now!</span>
    </Container>
  )
}

const Container = styled('div')`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1rem;
  background: ${COLORS.black};

  & h1 {
    font-weight: 300;
    font-size: ${SIZES.xs}rem;
    text-transform: capitalize;
    color: ${COLORS.light}
  }

  & span {
    color: ${COLORS.primary};
    font-size: 1.5rem;
    margin: 1rem 0;
  }
`

export default Home