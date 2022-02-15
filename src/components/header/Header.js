import React from 'react';
import './Header.css'

const Header = ({text, className, children}) => {
  return (
    <div className='header'>
        <div className={className}>
             {/* <p className='header-text'> {text}</p>  */}
            {children}
        </div>
    </div>
  )
}

export default Header