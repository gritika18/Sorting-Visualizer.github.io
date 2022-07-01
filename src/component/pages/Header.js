import React from 'react'

function Header({ handleToggle }) {
  return (
    <div className='note_header'>
        <h1>My Notes</h1>
        <button className='note_save' onClick={()=>handleToggle((prevDarkMode)=>!prevDarkMode)}>Toggle Mode</button>
    </div>
  )
}

export default Header