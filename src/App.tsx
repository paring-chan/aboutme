import React from 'react'
import 'swiper/swiper.scss'
import 'swiper/components/pagination/pagination.min.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Mousewheel, Pagination } from 'swiper/core'
import Intro from './sections/Intro'
import About from './sections/About'

SwiperCore.use([Mousewheel, Pagination])

const App = () => {
    return (
        <Swiper
            mousewheel
            direction="vertical"
            style={{ height: '100vh' }}
            pagination={true}
        >
            <SwiperSlide>
                <Intro />
            </SwiperSlide>
            <SwiperSlide>
                <About />
            </SwiperSlide>
        </Swiper>
    )
}

export default App
