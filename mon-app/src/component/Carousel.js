import { Carousel } from "react-bootstrap"
import './css/Carousel.css'
import arrivals from '../img/new.png'
import first from '../img/first.png'
import nenodroid from '../img/nenodroid.png'

function MyCarousel() {
    return (
    <Carousel >
        <Carousel.Item interval={5000}>
            <img
            className="d-block justify-content-center"
            src={first}
            alt="First slide"
            />
        </Carousel.Item>
        <Carousel.Item interval={5000}>
            <img
            className="d-block justify-content-center"
            src={nenodroid}
            alt="Second slide"
            />

        </Carousel.Item>
        <Carousel.Item interval={5000}>
            <img
            className="d-block justify-content-center"
            src={arrivals}
            alt="Third slide"
            />
        </Carousel.Item>
    </Carousel>)
}

export default MyCarousel