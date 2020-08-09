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
                {skill.map(s => (
                    <li key={count++}>{s}</li>
                    
                ))}
            </ul>
        </div>
    
    )
    
}

export default Skills;