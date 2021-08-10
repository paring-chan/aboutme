import React from 'react'
import styles from '../styles/sections/about.module.scss'
import Button from '../components/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const About = () => {
    return (
        <div className={styles.container}>
            <h1 className="font-tmoney-round">파랑이는?</h1>
            <div>
                <div>
                    그냥 귀여운거 좋아하는{' '}
                    <span style={{ textDecoration: 'line-through' }}>
                        좀 이상한
                    </span>{' '}
                    개발자애오! 히힛!
                </div>
                <div
                    style={{
                        display: 'flex',
                        gap: 10,
                        marginTop: 10,
                        justifyContent: 'center',
                    }}
                >
                    <Button
                        icon={<FontAwesomeIcon icon={['fab', 'github']} />}
                        text="깃허브"
                        disableLink
                        target="_blank"
                        href="https://github.com/pikokr"
                    />
                    <Button
                        icon={<FontAwesomeIcon icon={['fab', 'discord']} />}
                        text="디스코드"
                        disableLink
                        target="_blank"
                        href="https://discord.gg/EkFHRG4TZZ"
                    />
                    <Button
                        icon={<FontAwesomeIcon icon={['fab', 'youtube']} />}
                        text="유튜브"
                        disableLink
                        target="_blank"
                        href="https://youtube.com/c/pikokr"
                    />
                    <Button
                        icon={<FontAwesomeIcon icon={['fab', 'twitch']} />}
                        text="트위치"
                        disableLink
                        target="_blank"
                        href="https://twitch.tv/pikokr"
                    />
                </div>
            </div>
        </div>
    )
}

export default About
