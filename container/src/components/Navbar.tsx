import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { FiMenu, FiX, FiZap } from 'react-icons/fi'

import { COLORS, SIZES } from '../../../assets/constants'
import { useAppContext } from '../contexts'

const Navbar = () => {
  const { isOpen, toggleSidebar } = useAppContext()

  return (
    <Nav>
        <Logo>
          <Link to='/'>
            <FiZap />
          </Link>
        </Logo>

        <Flex>
          <Links><Link to='/'>Home</Link></Links>
          <Links><Link to='/dashboard'>Dashboard</Link></Links>
          <Links><Link to='/hub'>Hub</Link></Links>
        </Flex>

        <Flex>
          {isOpen ? 
          <IconButton onClick={() => toggleSidebar()}>
            <FiX />
          </IconButton> :
          <IconButton  onClick={() => toggleSidebar()}>
            <FiMenu />
          </IconButton>}
        </Flex>
    </Nav>
  )
}

const Nav = styled('div')`
  width: 100%;
  padding: 1rem;
  background: ${COLORS.black};
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Logo = styled('div')`
  font-size: ${SIZES.xs}rem;

  & a {
    color: ${COLORS.primary};
  }
`

const Flex = styled('ul')`
  list-style: none;
  display: inline-flex;
  align-items: center;
  gap: 2rem;
`
const Links = styled('li')`
  & a {
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.5;
    color: ${COLORS.light};
  }
`

const IconButton = styled('div')`
  borderRadius: 50%;
  display: grid;
  place-items: center;
  padding: 0.5rem;
  font-size: 1.2rem;
  color: ${COLORS.light};
  cursor: pointer;
  transition: all 0.5s ease cubic-beizer(0.875, 1, 0.5, 1.2);
`

export default Navbar