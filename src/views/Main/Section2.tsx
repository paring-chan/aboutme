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
                        title="JAVASCRIPT/TYPESCRIPT"
                        content="파랑이가 제일 많이 쓰는 언어에요!"
                    />
                    <Skill
                        title="Kotlin"
                        content="파랑이가 제일 좋아하는 언어에요!(사실상 많이 안씀)"
                    />
                    <Skill title="Python" content="한번씩(?) 쓰는거에요!" />
                    <Skill
                        title="Unity"
                        content="파랑이가 유일하게 할줄 아는 게임 엔진이애오!"
                    />
                    <Skill
                        title="React/Next.js"
                        content="파랑이가 제일 많이 쓰는 웹 프레임워크!"
                    />
                    <Skill
                        title="Vue/Nuxt.js"
                        content="배워뒀지만 파랑이가 잘 쓰지는 않는 웹 프레임워크!"
                    />
                    <Skill
                        title="Phaser 3"
                        content="잘은 모르지만 일단 써본거!"
                    />
                    <Skill
                        title="C#"
                        content="얼불춤 모딩하면서 배운 언어에요!"
                    />
                </div>
            </div>
        </div>
    )
}

export default Section2
