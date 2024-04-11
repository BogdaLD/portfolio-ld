import React from 'react'
import { ReactTyped } from "react-typed";
import './header.css'

function Header() {
  return (
    <div className='main_info'>
        <h1>Who am I?</h1>
        <ReactTyped
              strings={[
                "freelance consaltant",
                "experienced product manager",
                "industry automation expert",
              ]}
              typeSpeed={40}
              backSpeed={50}
              attr="placeholder"
              loop>
        </ReactTyped>
    </div>
  )
}

export default Header