import React from 'react'
import ReactFullpage from '@fullpage/react-fullpage'
import styles from '../../styles/main.module.scss'
import clsx from 'clsx'
import ProfileImage from '../../assets/images/profile.png'
import Section1 from './Section1'
import Section3 from './Section3'
import Section2 from './Section2'
import Footer from './Footer'

const MainPage = () => {
    return (
        <ReactFullpage
            scrollOverflow={true}
            licenseKey="7A6BD9E1-8D334350-80A4BC34-64E1097D"
            render={() => (
                <div id="fullpage-wrapper">
                    <Section1 />
                    <Section2 />
                    <Section3 />
                    <div
                        className={clsx(
                            'section',
                            styles.section3,
                            styles.section,
                        )}
                    >
                        3
                    </div>
                    <Footer />
                </div>
            )}
        >
            와!
        </ReactFullpage>
    )
}

export default MainPage
