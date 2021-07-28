import React from 'react'
import 'swiper/swiper.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Mousewheel } from 'swiper/core'

SwiperCore.use([Mousewheel])

const App = () => {
    return (
        <Swiper mousewheel direction="vertical" style={{ height: '100vh' }}>
            <SwiperSlide>1</SwiperSlide>
            <SwiperSlide>2</SwiperSlide>
            <SwiperSlide>3</SwiperSlide>
            <SwiperSlide>4</SwiperSlide>
        </Swiper>
    )
}

export default App
