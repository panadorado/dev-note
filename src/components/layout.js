import React from 'react'

import Header from './header'
import Footer from './footer'
import Sidebar from './sidebar'
import '../styles/index.scss'
import '../styles/style.project.scss'
import layoutStyles from './layout.module.scss'

const Layout = (props) => {
    return (
        <div className={layoutStyles.container}>
            <Header />
                <div className={layoutStyles.main}>
                    <div className={layoutStyles.content}>
                        {props.children}
                    </div>
                </div>
                <div className={layoutStyles.sidebar}>
                    <Sidebar />
                </div>
            <Footer />
        </div>
    )
}

export default Layout