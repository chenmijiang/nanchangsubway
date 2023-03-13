/** @format */

import Link, { LinkProps } from 'next/link'
import Image, { ImageProps } from 'next/image'
import { useState } from 'react'
import styled from 'styled-components'

import logo_image from '@/assets/南昌地铁.png'
import { nav_links } from '@/configs/default'

const Header = () => {
  const [linkActive, setLinkActive] = useState(0)
  const handlerLinkClick = (index: number) => {
    return () => {
      setLinkActive(index)
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
                className={linkActive === index ? 'active' : ''}
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
