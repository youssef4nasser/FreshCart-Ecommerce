import Carousel from 'react-bootstrap/Carousel';
import { Image } from 'react-bootstrap';
import slider1  from "../../assets/slider1.webp"
import slider2  from "../../assets/slider2.webp"
import slider3  from "../../assets/slider3.webp"
import styles from "./MainCarousel.module.css"
import { Link } from 'react-router-dom';

export default function MainCarousel() {
  return <>
  <section>  
    <Carousel fade>
      <Carousel.Item>
        <Image src={slider1} className='d-block w-100 h-100' alt='Carousel Banner' />
        <Carousel.Caption className="h-100 d-flex flex-column justify-content-center">
          <div>
            <h2 className={`${styles.fsh}`}>Online Store</h2>
            <p className={`${styles.fsp}`}>Make Your shopping easier by shopping from online.</p>
            <Link to={'shop'} className={`${styles.hoverButton} btn`}>Shopping now</Link>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <Image src={slider2} className='d-block w-100 h-100' alt='Carousel Banner' />
      </Carousel.Item>

      <Carousel.Item>
        <Image src={slider3} className='d-block w-100 h-100' alt='Carousel Banner' />
      </Carousel.Item>

    </Carousel>
  </section>
  </>
}
