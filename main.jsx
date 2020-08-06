import React from 'react';
import Clock from './frontend/clock';
import Tabs from './frontend/tabs';
const Main = () => (
    <div>
        <Clock/>
        <Tabs panes={[
            {title: 'Bad Reads', 
            content: 'bad-reads.herokuapp.com'
            },
            {title: 'Swell', 
            content: 'surf-swell.herokuapp.com'
            },
            ]} />
    </div>
)

export default Main;