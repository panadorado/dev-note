import React from 'react'
// import { Link } from 'gatsby'
import Helmets from '../components/helmets'
import Layout from "../components/layout"

const AboutPage = () => {
    return (
        <Layout>
            <Helmets title='Thông tin' />
            <h1>Thông tin</h1>
            <p>Quá trình đang chuyển đổi từ Jekyll -> GatsbyJS</p>
            <a href='https://tranduclinh.cf/about/' target='_blank'>Chuyển tiếp</a>
        </Layout>
    )
}

export default AboutPage