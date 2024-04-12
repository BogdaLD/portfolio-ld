import React from 'react';
import './contactme.css';
import { navigationLinks } from '../../helpers/navigationLinks';

function createLinks() {
    return navigationLinks.map((e, idx) => (
            <p key={idx}><a href={e.ref}>{e.name}</a></p>
    ))
}

function ContactMe() {
  return (
    <div className='contactMe_container' id='contact'>
        <div className='contactMe_data_links'>
            <div>
                <p>Chaoyang Distric, Beijing, P.R.C</p>
                <p>Liu Dong</p>
                <p>liudong_xj@163.com</p>            
            </div> 
            <div>
            {createLinks()}
            </div>
        </div>
        <div style={{textAlign:'center'}}>
            Coryright&copy;{new Date().getFullYear()}All rights reserved
        </div>
    </div>
  )
}

export default ContactMe