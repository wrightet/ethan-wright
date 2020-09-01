import React from 'react';
import Clock from './frontend/clock';
import Tabs from './frontend/tabs';
import Skills from './frontend/skills';
import Weather from './frontend/weather';
import About from './frontend/about';
const Main = () => (
    <div>
        <div>
            <h1 className='name'>I'm Ethan Wright</h1>
            <h4 className='name'> Software Engineer</h4>
            <div className='photo'>

                <img className='profile-photo' src="assets/ethan_wright.JPG" alt="" />
            </div>
            <Skills />
        </div>
        <Clock/>
        
        
       
       
        
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
                {
                    title: 'The Life of Tim',
                    live:'https://wrightet.github.io/life_of_tim/',
                    git:'https://github.com/wrightet/life_of_tim',
                },
            ]} />
            {/* <Weather/> */}
         
        </div>
   
        <div className='contact'>
            <h1>Contact</h1>
            <h2 className='email'>Email: wrightet707@gmail.com</h2>
            <h2 className='linkedin'>LinkedIn:<a className='linkedin-link' target='_blank' href="https://www.linkedin.com/in/ethan-wright-91a75270/">Click Here</a></h2>
        </div>
    </div>
)

export default Main;