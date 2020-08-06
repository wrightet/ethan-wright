import React from 'react';

class Clock extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            time: new Date(),
        }
       this.tick = this.tick.bind(this);
    }

    componentDidMount(){
       this.intId = setInterval(this.tick, 1000);
    }

    componentWillUnmount(){
        clearInterval(this.intId)
    }

    tick(){
        this.setState({time: new Date()})
    }
    render(){
        let hours = this.state.time.getHours();
        let minutes = this.state.time.getMinutes();
        let seconds = this.state.time.getSeconds();
        
        hours = (hours > 12) ? `0${hours}` : hours
        minutes = (minutes < 10) ? `0${minutes}` : minutes
        return(
            <div className='clock'>
                <div className='clock-content'>
                        <h1>{this.state.time.toDateString()}</h1>
                        <h1>{hours > 12 ? `0${hours - 12}`: hours} : {minutes} : {seconds} {hours > 12 ? 'PM' : 'AM'}</h1>
                </div>
            
            </div>
           
        )
    }
}

export default Clock;