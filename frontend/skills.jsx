import React from 'react';

const Skills = () => {
    const skill = ['Ruby',
        'Ruby on Rails',
        'Javascript',
        'Node',
        'React',
        'Redux',
        'Express',
        'Mongoose',
        'Passport',
        'Python',
        'SQL', 'MySQL',
        'PostgreSQL',
        'MongoDB',
        'Heroku',
        'Git Hub',
        'HTML',
        'CSS'
    ]
    let count = 0;
    
    return(
        <div className='skills'>
            <ul className='skills-list'>
                {/* {skill.map(s => (
                    <li key={count++}>{s}</li>
                    
                ))} */}
                <li>Ruby</li>
                <li>Ruby On Rails</li>
                <li>Javascript</li>
                <li>Node</li>
                <li>React</li>
                <li>Redux</li>
                <li>Express</li>
                <li>Mongoose</li>
                <li>Passport</li>
          
            </ul>
            <ul className='skills-list'>
                <li>Python</li>
                <li>Webpack</li>
                <li>SQL</li>
                <li>MySQL</li>
                <li>PostgreSQL</li>
                <li>MongoDB</li>
                <li>Heroku</li>
                <li>GitHub</li>
                <li>HTML</li>
                <li>CSS</li>
            </ul>
        </div>
    
    )
    
}

export default Skills;