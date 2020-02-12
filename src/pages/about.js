import React from 'react'
// import { Link } from 'gatsby'
import Helmets from '../components/helmets'
import Layout from "../components/layout"

const AboutPage = () => {
    return (
        <Layout>
            <Helmets title='Thông tin' />
            <h1>About Me</h1>
            <p>I currently teach full-time on Udemy.</p>
        </Layout>
    )
}

export default AboutPage