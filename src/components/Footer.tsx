/** @format */

import Image, { ImageProps } from 'next/image'

import logo_image from '@/assets/南昌地铁.png'

const Footer = () => {
  return (
    <footer>
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
    </footer>
  )
}

export default Footer
