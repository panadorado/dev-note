import React from 'react'
import { Link } from 'gatsby'
import Helmets from '../components/helmets'
import Layout from '../components/layout'

const IndexPage = () => {
    return (
        <Layout>
            <Helmets title='Trang chủ' />
            <h1>Hello.</h1>
            <h2>Gatsby</h2>
        </Layout>
    )
}

export default IndexPage