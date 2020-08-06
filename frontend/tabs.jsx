import React from 'react';

class Headers extends React.Component {
    render() {
        const selected = this.props.selectedPane;
        const headers = this.props.panes.map((pane, index) => {
            const title = pane.title;
            const klass = index === selected ? 'active' : '';

            return (
                <li
                    key={index}
                    className={klass}
                    onClick={() => this.props.onTabChosen(index)}>
                    {title}{' '}
                </li>
            );
        });
        return (
            <ul className='tab-header'>
                {headers}
            </ul>

        );
    }
}

export default class Tabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedPane: 0
        };
        this.selectTab = this.selectTab.bind(this);
    }

    selectTab(num) {
        this.setState({ selectedPane: num });
    }

    render() {
        const pane = this.props.panes[this.state.selectedPane];
        console.log(pane.content)
        return (
            <div>
                <h1>Projects</h1>
                <div className='tabs'>
                    
                        <Headers
                        selectedPane={this.state.selectedPane}
                        onTabChosen={this.selectTab}
                        panes={this.props.panes}>
                    </Headers>
                  
                    
                    <div className='tab-content'>
                        <article>
                            <a className='live' href={`https://${pane.live}`} target="_blank">Live Link</a>
                            
                            <a className='git' href={`${pane.git}`} target="_blank">Git Hub</a>
                        </article>
                    </div>
                </div>
            </div>
        );
    }
}