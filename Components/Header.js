import React from 'react'
import { BsSearch } from 'react-icons/bs';

function Header() {
    return (
        <div className='header' style={{marginLeft:'30px', borderRadius:'8px', backgroundColor: '#dfdfdf'}} >
            <h4>Hello Shahrukh👋</h4>
            <input type="search" placeholder="Search" aria-label="Search" />
        </div>
    )
}

export default Header;
