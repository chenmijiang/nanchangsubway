/** @format */

import Link from 'next/link'
import Image from 'next/image'
import { useDispatch, useSelector as useReduxSelector } from 'react-redux'
import styled from 'styled-components'

import logo_image from '@/assets/南昌地铁.png'
import { nav_links } from '@/configs/default'
import { setRouteIndex } from '@/store/switchRouter.slice'

const Header = () => {
  const currentRouteIndex = useReduxSelector((state: any) => state.switchRouter.currentRouteIndex)
  const dispatch = useDispatch()
  const handlerLinkClick = (index: number) => {
    return () => {
      dispatch(setRouteIndex(index))
    }
  }
  return (
    <GlobalHeader>
      <Image
        src={logo_image}
        alt="南昌地铁"
      />
      <nav>
        <ul>
          {nav_links.map((item, index) => (
            <li key={index}>
              <Link
                href={item.link}
                className={currentRouteIndex === index ? 'active' : ''}
                onClick={handlerLinkClick(index)}>
                {item.detail}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </GlobalHeader>
  )
}

const GlobalHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  background-color: ${(props) => props.theme.colors.primary};

  img {
    height: 60px;
    margin: 0 20px;
  }

  ul {
    padding: 10px;
    font-size: 0.8rem;
    margin-right: 2rem;
    li {
      display: inline-block;
      margin: 0 30px;
      a {
        font-weight: bold;
        color: #fff;
        display: inline-block;
        padding: 5px;
        text-decoration: none;
        &.active {
          border-bottom: 2px solid #fff;
        }
      }
    }
  }
`

export default Header
function useSelector() {
  throw new Error('Function not implemented.')
}
