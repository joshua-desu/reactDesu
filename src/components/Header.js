import React from 'react'
import Typed from 'react-typed';

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className='main-info'>
                <h1>
                <Typed
                    className="typed-text"
                    strings={["joshuadesu.io", "_"]}
                    typeSpeed={40}
                    backSpeed={50}
                    loop /></h1>
                    <h2>('Hello world')</h2>
            </div>
        </div>
            )
}

export default Header
