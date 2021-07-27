import React from 'react'
import clsx from 'clsx'
import styles from '../../styles/main.module.scss'
import ProfileImage from '../../assets/images/profile.png'
import IconButton from '@material-ui/core/IconButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
            <div style={{display: 'flex', gap: 10, justifyContent: 'center', marginTop: 10}}>
                <IconButton color="inherit" target="_blank" href="https://github.com/pikokr">
                    <FontAwesomeIcon icon={['fab', 'github']}/>
                </IconButton>
                <IconButton color="inherit" target="_blank" href="https://youtube.com/c/pikokr">
                    <FontAwesomeIcon icon={['fab', 'youtube']}/>
                </IconButton>
                <IconButton color="inherit" target="_blank" href="https://twitch.tv/pikokr">
                    <FontAwesomeIcon icon={['fab', 'twitch']}/>
                </IconButton>
                <IconButton color="inherit" target="_blank" href="https://discord.com/users/628595345798201355">
                    <FontAwesomeIcon icon={['fab', 'discord']}/>
                </IconButton>
                <IconButton color="inherit" href="mailto:parangee9706@gmail.com">
                    <FontAwesomeIcon icon={['fas', 'envelope']}/>
                </IconButton>
            </div>
        </div>
    )
}

export default Section1;