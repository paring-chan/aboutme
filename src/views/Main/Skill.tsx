import React from 'react'
import styles from '../../styles/main.module.scss'

type SkillProps = {
    title: string
    content: React.ReactNode
}

const Skill: React.FC<SkillProps> = ({ title, content }) => {
    return (
        <div className={styles.skillCardContainer}>
            <h4>{title}</h4>
            {content}
        </div>
    )
}

export default Skill
