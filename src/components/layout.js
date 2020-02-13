import React from 'react'
import Header from './header'
import Footer from './footer'
import '../styles/index.scss'
import '../styles/style.project.scss'
import layoutStyles from './layout.module.scss'

const Layout = (props) => {
    return (
        <div className={layoutStyles.container}>
            <Header />
                <div>
                    <div className={layoutStyles.content}>
                        {props.children}
                    </div>
                </div>
            <Footer />
        </div>
    )
}

export default Layout