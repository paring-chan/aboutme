import React from 'react'
import clsx from 'clsx'
import styles from '../../styles/main.module.scss'
import Skill from './Skill'

const Section2 = () => {
    return (
        <div className={clsx('section', styles.section2, styles.section)}>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    padding: 30,
                }}
            >
                <h1>SKILLS</h1>
                <div className={styles.skillsGrid}>
                    <Skill
                        title="TYPESCRIPT"
                        content="파랑이가 제일 많이 쓰는 언어"
                    />
                    <Skill
                        title="TYPESCRIPT"
                        content="파랑이가 제일 많이 쓰는 언어"
                    />
                    <Skill
                        title="TYPESCRIPT"
                        content="파랑이가 제일 많이 쓰는 언어"
                    />
                </div>
            </div>
        </div>
    )
}

export default Section2
