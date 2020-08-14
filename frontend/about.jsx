import React from 'react';

class About extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            shown: true
        }
        
    }

    display(){
        console.log('test')
        this.state.shown === false ? this.setState({shown:true}) : this.setState({shown:false})
    }
    render(){
        
        return(
            <div className='about'>
                <h1>About Me:</h1>
                <div className={this.state.shown === false ? 'show' : 'hide'}>
                    <p>I am a software engineer with skills in Javascript, Ruby, Ruby on Rails, React, Redux, PostgreSQL, MongoDB, HTML, and CSS.</p>
                    <p></p>
                    <p>Since I was very young I have loved to make things. This started with little knick knacks I made with my mother and grandma, that led into metal/ wood working, and finally software development. I love all of the things programming allows me to do. Whenever I am programming It makes me feel as though I am a wizard just like in the stories I read as a child.</p>
                    <p></p>
                    <p>Personally, I'm all about archery. I frequent a few outdoor courses around the bay area, that I would compare to golf courses. Different shots, at different angles and distances. Other hobbies of mine include rock climbing, surfing, swimming, and Krav Maga.</p>
                    <p></p>
                    <p>Though I have found my passion I worked in a variety of backgrounds such as parks and recreation, and aquatics. It was actually while I worked as a Recreational Technician that I began to think about coding. I was given many odd jobs such as converting VHS to mp4 for training lifeguards, and managing our staff website. I used excel to create budgets to calculate areas of improvement. The more I worked with computers the more I wanted to know and learn. And I have never stopped. </p>
                </div>
                
                <button  className='more-less' onClick={() => this.display()}>{this.state.shown === false ? 'Less' : 'More'}</button>
            </div>
        )
    }
    
}

export default About;