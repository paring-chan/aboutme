import React from 'react'
import ReactFullpage from '@fullpage/react-fullpage'
import styles from '../../styles/main.module.scss'
import clsx from 'clsx'

const MainPage = () => {
    return (
        <ReactFullpage
            scrollOverflow={true}
            licenseKey="7A6BD9E1-8D334350-80A4BC34-64E1097D"
            render={() => (
                <div id="fullpage-wrapper">
                    <div className={clsx('section', styles.section1)}>1</div>
                    <div className="section">2</div>
                    <div className="section">3</div>
                    <div className="section">4</div>
                </div>
            )}
        >
            와!
        </ReactFullpage>
    )
}

export default MainPage
