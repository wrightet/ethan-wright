import React from 'react';
import Clock from './frontend/clock';
import Tabs from './frontend/tabs';
import Skills from './frontend/skills';
import Weather from './frontend/weather';
import About from './frontend/about';
const Main = () => (
    <div className="is-preload">

		
			<div id="header">
			
				<span className='profile-pic-span'><img className='profile-pic' src='images/ethan_wright.JPG'></img></span>
				<h1>Looking for a great Software Engineer?</h1>
				<h1>I'm Ethan Wright</h1>
				
			</div>

	
			<div id="main">

				<header className="major container medium">
					<h2>I'll let my work 
                	
                speak for itself.
					<br />
					I have the skills.</h2>
			
				</header>

				<div className="box alt container">
					<section className="feature left">
						<a href="https://bad-reads.herokuapp.com/#/" target="_blank" className="image icon solid"><img src="images/bad_reads.png" alt="" /></a>
						<div className="content">
							<h3>Bad Reads</h3>
							<p>A full stack clone of the popular book reviewing site Good Reads.</p>
							<a href="https://github.com/wrightet/full_stack_bad_reads" target="_blank" className="icon brands fa-github"><span className="label">Github</span></a>
						</div>
					</section>
					<section className="feature right">
						<a href="https://surf-swell.herokuapp.com/#/" target="_blank" className="image icon solid"><img src="images/swell_logo.png" alt="" /></a>
						<div className="content">
							<h3>Swell</h3>
							<p>A MERN stack surfing application, that gives users approximate wave info, and allows them to review and create surfing spots.</p>
							<a href="https://github.com/wrightet/swell" target="_blank" className="icon brands fa-github"><span className="label">Github</span></a>
						</div>
					</section>
					<section className="feature left">
						<a href="https://wrightet.github.io/life_of_tim/" target="_blank" className="image icon solid"><img src="images/tim.png" alt="" /></a>
						<div className="content">
							<h3>The Life of Tim</h3>
							<p>A choose your own adventure game with 27 unique endings.</p>
							<a href="https://github.com/wrightet/life_of_tim" target="_blank" className="icon brands fa-github"><span className="label">Github</span></a>
						</div>
					</section>
					<section className="feature right">
						<a href="https://ethan-bot-3000.herokuapp.com/" target="_blank" className="image icon solid"><img src="images/e_bot.png" alt="" /></a>
						<div className="content">
							<h3>Ethan-Bot-3000</h3>
							<p>A chat bot that answers basic questions about Ethan Wright.</p>
							<a href="https://github.com/wrightet/Ethan_bot_3000" target="_blank" className="icon brands fa-github"><span className="label">Github</span></a>
						</div>
					</section>
				</div>
			<header className="major container medium">
				<About />

			</header>
				<header className="major container medium">
				<Clock />
			
				</header>
		

			</div>
            
			<div id="footer">
				

					<ul className="icons">
						
						<li><a href="https://www.linkedin.com/in/ethan-wright-91a75270/" className="icon brands fa-linkedin"><span className="label">LinkedIn</span></a></li>
						<li><a href="https://github.com/wrightet" target="_blank" className="icon brands fa-github"><span className="label">Github</span></a></li>
						
					</ul>


				</div>
			</div>

	
			// <script src="assets/js/jquery.min.js"></script>
			// <script src="assets/js/browser.min.js"></script>
			// <script src="assets/js/breakpoints.min.js"></script>
			// <script src="assets/js/util.js"></script>
			// <script src="assets/js/main.js"></script>

	// </div>
)

export default Main;