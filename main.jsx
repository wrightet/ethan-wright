import React from 'react';
import Clock from './frontend/clock';
import Tabs from './frontend/tabs';
const Main = () => (
    <div>
        <Clock/>
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
    </div>
)

export default Main;