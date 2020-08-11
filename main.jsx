import React from 'react';
import Clock from './frontend/clock';
import Tabs from './frontend/tabs';
import Skills from './frontend/skills';
import Weather from './frontend/weather';
import About from './frontend/about';
const Main = () => (
    <div>
        <Clock/>
        <h1>Ethan Wright</h1>
        <div className='photo'>
            
            <img className='profile-photo' src="assets/ethan_wright.JPG" alt="" />
        </div>
       
        <Skills/>
        
        <About/>
        <div className='projects-contact'>
            <Tabs panes={[
                {
                    title: 'Bad Reads',
                    live: 'bad-reads.herokuapp.com',
                    git: 'https://github.com/wrightet/full_stack_bad_reads'
                },
                {
                    title: 'Swell',
                    live: 'surf-swell.herokuapp.com',
                    git: 'https://github.com/wrightet/swell'
                },
            ]} />
            {/* <Weather/> */}
            {/* <div className='contact'>
                <h1>Contact</h1>
                <h2>Email: wrightet707@gmail.com</h2>
                <a href="https://www.linkedin.com/in/ethan-wright-91a75270/">LinkedIn</a>
            </div> */}
        </div>
   

    </div>
)

export default Main;