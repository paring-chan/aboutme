import React from 'react'
import styles from '../styles/sections/projects.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import Project from '../components/Project'

const Projects = () => {
    return (
        <div className={styles.container}>
            <h1 className="font-tmoney-round">프로젝트</h1>
            <div style={{ flexGrow: 1 }} className={styles.swiperContainer}>
                <Swiper
                    style={{
                        height: '100%',
                    }}
                >
                    <SwiperSlide>
                        <Project
                            bg="https://media.discordapp.net/attachments/845261659336605717/870673796552601660/unknown.png?width=1049&height=590"
                            title="UniqueBots"
                        />
                    </SwiperSlide>
                    <SwiperSlide>2</SwiperSlide>
                    <SwiperSlide>3</SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default Projects
