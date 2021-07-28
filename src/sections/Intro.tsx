import React from 'react'
import styles from '../styles/sections/intro.module.scss'
import profile from '../assets/profile.png'

const Intro = () => {
    return (
        <div className={styles.container}>
            <img
                src={profile}
                className={styles.img}
                width={150}
                height={150}
                alt="profile"
            />
            <h1 style={{ marginTop: 10 }}>파랑이</h1>
            <h4>와아! 파랑이애오!</h4>
        </div>
    )
}

export default Intro
