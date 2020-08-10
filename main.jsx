import React from 'react';
import Clock from './frontend/clock';
import Tabs from './frontend/tabs';
import Skills from './frontend/skills';
import Weather from './frontend/weather';
import About from './frontend/about';
const Main = () => (
    <div>
        <Clock/>
        <div>
            <img className='profile-photo' src="assets/ethan_wright.JPG" alt="" />
        </div>
       
        <Skills/>
        
        <About/>
        <Tabs panes={[
            {title: 'Bad Reads', 
            live: 'bad-reads.herokuapp.com',
            git: 'https://github.com/wrightet/full_stack_bad_reads'
            },
            {title: 'Swell', 
            live: 'surf-swell.herokuapp.com',
            git: 'https://github.com/wrightet/swell'
            },
            ]} />
        <Weather/>

    </div>
)

export default Main;