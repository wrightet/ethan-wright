import React from 'react';

class Weather extends React.Component{
    constructor(props) {
        super(props);
        
    }
    
    componentDidMount(){
        navigator.geolocation.getCurrentPosition 
    }

    render(){
        return(
           <div>
            hey
        </div> 
        )
        
    }
}

export default Weather;