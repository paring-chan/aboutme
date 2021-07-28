import React from 'react'
import styles from '../../styles/main.module.scss'
import clsx from 'clsx'
import IconButton from '@material-ui/core/IconButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
    return (
        <div className={clsx(styles.footer, 'section', 'fp-auto-height')}>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <div>Made with ❤️</div>
                <div>
                    <IconButton
                        target="_blank"
                        href="https://github.com/pikokr/aboutme"
                        color="inherit"
                    >
                        <FontAwesomeIcon icon={['fab', 'github']} />
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

export default Footer
