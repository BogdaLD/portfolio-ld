 import React from 'react';
 import './aboutme.css';
 import avatarofLD from '../images/avatarofLD.jpg';
 
 function AboutMe() {
   return (
     <div className='about_container' id='about-me'>
        <div>
            <img src={avatarofLD} alt="avatarofLD" />
        </div>
        <div className='about_text'>
            <h1>About Me</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis inventore earum quas velit exercitationem quis veniam, assumenda impedit vitae adipisci molestias quasi tempore nisi reprehenderit suscipit voluptatibus? Ratione, blanditiis quia?</p>
        </div>
    </div>
   )
 }
 
 export default AboutMe