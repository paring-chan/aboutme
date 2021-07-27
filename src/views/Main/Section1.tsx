import React from 'react'
import clsx from 'clsx'
import styles from '../../styles/main.module.scss'
import ProfileImage from '../../assets/images/profile.png'

const Section1 = () => {
    return (
        <div className={clsx('section', styles.section1, styles.section)}>
            <img
                src={ProfileImage}
                alt="profile"
                width={128}
                style={{ borderRadius: '50%' }}
            />
            <h1>파랑이</h1>
            <div style={{ fontSize: 24 }}>
                진짜 개발*만* 할줄 아는 파랑이애오!
            </div>
        </div>
    )
}

export default Section1;