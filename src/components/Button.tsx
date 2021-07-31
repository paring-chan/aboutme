import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styles from '../styles/components/button.module.scss'

type ButtonProps = {
    text: React.ReactNode
    icon?: React.ReactNode
    disableLink?: boolean
    color?: string
}

const Button: React.FC<ButtonProps & React.AllHTMLAttributes<any>> = ({
    icon,
    text,
    disableLink,
    color = '0, 94, 255',
    style = {},
    ...props
}) => {
    return (
        <a
            {...props}
            className={styles.container}
            // @ts-ignore
            style={{ '--color': color, ...style }}
        >
            {icon}
            {!disableLink && (
                <FontAwesomeIcon icon={['fas', 'external-link-alt']} />
            )}
            <div>{text}</div>
        </a>
    )
}

export default Button
