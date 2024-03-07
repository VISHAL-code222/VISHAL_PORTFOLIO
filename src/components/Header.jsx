import React from 'react'
import "../CSS/Header.css"
import mernimage from "../Images/mernimage.png"

function Header({id,className}) {
  return (
    <div id={id} className={className} >
    <div className='header-start' >
      <img src={mernimage} alt="" />
    </div>
    </div>
  )
}

export default Header
