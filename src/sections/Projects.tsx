import React from 'react'
import styles from '../styles/sections/projects.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import Project from '../components/Project'
import Button from '../components/Button'

const Projects = () => {
    return (
        <div className={styles.container}>
            <h1 className="font-tmoney-round">프로젝트</h1>
            <div style={{ flexGrow: 1 }} className={styles.swiperContainer}>
                <Swiper
                    style={{
                        height: '100%',
                    }}
                    pagination
                >
                    <SwiperSlide>
                        <Project
                            bg="https://media.discordapp.net/attachments/845261659336605717/870673796552601660/unknown.png?width=1049&height=590"
                            title="UniqueBots"
                            brief="디스코드 봇 리스트"
                            image="https://cdn.discordapp.com/attachments/761800911604940801/798431471362113556/image0.png"
                            actions={
                                <>
                                    <Button
                                        text="보러가기"
                                        href="https://uniquebots.kr"
                                        target="_blank"
                                        color="255,255,255"
                                    />
                                    <Button
                                        text="깃허브"
                                        href="https://github.com/pikokr/uniquebots"
                                        target="_blank"
                                        color="255,255,255"
                                    />
                                </>
                            }
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Project
                            title="Command.TS"
                            brief="discord.js 커맨드 프레임워크"
                            actions={
                                <>
                                    <Button
                                        text="깃허브"
                                        href="https://github.com/pikokr/command.ts-v2"
                                        target="_blank"
                                        color="255,255,255"
                                    />
                                    <Button
                                        text="NPM"
                                        href="https://npmjs.com/command.ts"
                                        target="_blank"
                                        color="255,255,255"
                                    />
                                    <Button
                                        text="DOCS"
                                        href="https://command-ts.pikokr.dev"
                                        target="_blank"
                                        color="255,255,255"
                                    />
                                </>
                            }
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default Projects
