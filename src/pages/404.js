import React from 'react'
import { Link } from 'gatsby'
import Helmets from '../components/helmets'
const notFound = () => {
    return (
        <div>
            <Helmets title='404' />
                <h2>
                    404
                </h2>
                <p>
                    Not found page 
                </p>
                <Link to={`/`}>Return</Link>
        </div>
    )
}

export default notFound