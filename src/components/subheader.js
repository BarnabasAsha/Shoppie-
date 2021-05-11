import React, { useContext } from 'react'
import { Link } from '@reach/router'
import NominationContext from '../context'

const Subheader = () => {
    const [count] = useContext(NominationContext)
    return (
        <div className="banner_wrapper">
            <Link to="/" className="banner" role="banner">
       <span>📽</span> SHOPPIES
      </Link>
    <span>{count}/5</span>
        </div>
    )
}

export default Subheader