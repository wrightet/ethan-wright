// import React from 'react';

// class Headers extends React.Component{
//     render(){
//         let selected = this.props.selectedpage
//         let headers = this.props.pages.map((page, index) => {
//             let title = page.title;
//             let classname = index ===selected ? 'active' : '';
//             return(
//                 <li
//                     key={index}
//                     className={classname}
//                     onClick={() => this.props.onSelectedTab(index)}
//                 >
//                     {title}{' '}
                    
//                 </li>
//             );
//         })
//         return(
//             <ul>
//                 {headers}
//             </ul>
//         )
//     }
// }
// class Tabs extends React.Component{
//     constructor(props){
//         super(props)
//         this.state = {
//             selectedpage: 0
//         }
//         this.selectPage = this.selectPage.bind(this)
//     }

//     selectPage(num){
//         this.setState({selectedpage: num});
//     }
//     render(){
//         console.log(this.props.pages)
//         const page = this.props.pages[this.state.selectedpage]
//         return(
//             <div className='projects'>
//                 <Headers
//                     selectpage={this.state.selectedpage}
//                     onSelectedTab={this.selectPage}
//                     pages={this.props.pages}
//                 ></Headers>
//                 <div>
//                     <article>
//                         <a href={`${page.content}`}></a>
//                     </article>
//                 </div>
//             </div>
//         )
//     }
// }

// export default Tabs;
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
                <h1>Tabs</h1>
                <div className='tabs'>
                    <Headers
                        selectedPane={this.state.selectedPane}
                        onTabChosen={this.selectTab}
                        panes={this.props.panes}>
                    </Headers>
                    <div className='tab-content'>
                        <article>
                            <a href={pane.content}>{pane.title}</a>
                        </article>
                    </div>
                </div>
            </div>
        );
    }
}