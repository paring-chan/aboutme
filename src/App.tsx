import React from 'react'
import 'swiper/swiper.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Mousewheel } from 'swiper/core'
import Intro from './sections/Intro'
import About from './sections/About'

SwiperCore.use([Mousewheel])

const App = () => {
    return (
        <Swiper mousewheel direction="vertical" style={{ height: '100vh' }}>
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
