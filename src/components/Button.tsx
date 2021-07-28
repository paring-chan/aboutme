import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styles from '../styles/components/button.module.scss'

type ButtonProps = {
    text: React.ReactNode
    icon?: React.ReactNode
    disableLink?: boolean
}

const Button: React.FC<ButtonProps & React.AllHTMLAttributes<any>> = ({
    icon,
    text,
    disableLink,
    ...props
}) => {
    return (
        <a {...props} className={styles.container}>
            {icon}
            {!disableLink && (
                <FontAwesomeIcon icon={['fas', 'external-link-alt']} />
            )}
            <div>{text}</div>
        </a>
    )
}

export default Button
