import React from 'react'
import styled from 'styled-components'

import { COLORS, SIZES } from '../../../assets/constants'

const Home = () => {
  return (
    <Container>
      <h1>a new drone in the market</h1>
      <span>Get the new SAVX150e now!</span>

      <Flex>
        <Button style={{background: 'transparent',color: `${COLORS.light}`,borderColor: `${COLORS.light}`}}>
          Discover More
        </Button>
        <Button>
          Pre-order
        </Button>
      </Flex>
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
const Flex = styled('ul')`
  list-style: none;
  display: inline-flex;
  align-items: center;
  gap: 1rem;
`

const Button = styled('button')`
  padding: 1rem 1.5rem;
  min-width: 120px;
  outline: none;
  border: none;
  cursor: pointer;
  border: 1px solid;

  &:hover {
    transformtr
  }
`

export default Home