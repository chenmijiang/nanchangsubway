/** @format */

import Image, { ImageProps } from 'next/image'

import logo_image from '@/assets/南昌地铁.png'
import styled from 'styled-components'

const Footer = () => {
  return (
    <GlobalFooter>
      <section className="gf-footer">
        <div className="gf-footer-left">
          <Image src={logo_image} alt="南昌地铁" />
        </div>
        <div className="gf-footer-right">
          <div className="gf-footer-detail"></div>
          <div className="gf-footer-more">
            <div className="gf-footer-more-links">
              <a href="https://github.com/chenmijiang/" target="_blank">
                关于
              </a>
              |
              <a href="mailTo:jack.chenyuana@gmail.com" target="_blank">
                联系
              </a>
            </div>
          </div>
        </div>
      </section>
    </GlobalFooter>
  )
}

const GlobalFooter = styled.footer`
  width: 100%;
  height: 200px;
  background-color: #5f5f5f;

  .gf-footer {
    display: flex;
    justify-content: space-between;
    padding-top: 20px;
    gap: 50px;
    width: 80%;
    margin: 0 auto;
    font-size: 0.7rem;
    text-align: right;

    img {
      height: 5rem;
      margin: 10px 100px;
    }
  }

  .gf-footer-right {
    color: #fff;
    span {
      display: inline-block;
      &::after {
        content: ' | ';
      }
      &:last-child:after {
        content: '';
      }
    }
    .detail-link,
    a {
      font-weight: bold;
      color: #fff;
      display: inline-block;
      padding: 10px 5px;
    }
  }
`

export default Footer
