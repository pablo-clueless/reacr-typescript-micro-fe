import React from 'react'
import styled from 'styled-components'
import { FiX, FiZap } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import { useAppContext } from '../contexts'
import { COLORS, SIZES } from '../../../assets/constants'

const Sidebar = () => {
    const { toggleSidebar } = useAppContext()

  return (
    <Backdrop>
        <Drawer>
            <Gap>
                <Logo>
                    <Link to='/'><FiZap /></Link>
                </Logo>
                <FiX onClick={() => toggleSidebar()} />
            </Gap>
        </Drawer>
    </Backdrop>
  )
}

const Backdrop = styled('div')`
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.3);
    z-index: 50;
    backdrop-filter: blur(3px);
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
`

const Drawer = styled('div')`
    width: 50vw;
    min-width: 300px;
    height: 100%;
    background: #000;
    box-shadow: 0px 4px 10px -3px #F4F6F5;

    & svg {
        color: #FFF;
        font-size: 1.5rem;
        cursor: pointer;
    }
`

const Gap = styled('div')`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem;
`

const Logo = styled('div')`
  font-size: ${SIZES.xs}rem;

  & a {
    color: ${COLORS.primary};
  }
`

export default Sidebar