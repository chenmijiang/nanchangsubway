/** @format */

import Link, { LinkProps } from 'next/link'
import Image, { ImageProps } from 'next/image'
import styled from 'styled-components'

import logo_image from '@/assets/南昌地铁.png'
import { nav_links } from '@/configs/default'

const Header = () => {
  return (
    <NavHeader>
      <div className="h-60px m-0 mx-20px">
        <Image src={logo_image} alt="南昌地铁" />
      </div>
      <nav>
        <ul>
          {nav_links.map((item, index) => (
            <li key={index}>
              <Link href={item.link}>{item.detail}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </NavHeader>
  )
}

const NavHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  background-color: ${(props) => props.theme.colors.primary};

  img {
    height: 60px;
    margin: 0 20px;
  }
`

export default Header
