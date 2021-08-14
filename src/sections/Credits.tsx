import React from 'react'
import styles from '../styles/sections/credits.module.scss'
import Button from '../components/Button'

const Credits = () => {
    return (
        <div className={styles.container}>
            <Button
                text="파랑이에게 이메일 보내기"
                href="mailto:parangee9706@gmail.com"
            />
            <Button
                text="파랑이 디스코드 들어가기"
                href="https://discord.gg/EkFHRG4TZZ"
                target="_blank"
            />
            <h1>
                2021 © pikokr
            </h1>
        </div>
    )
}

export default Credits
