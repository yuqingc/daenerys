import React from 'react';
import Hello from './Hello';
import MtContainer from './common/MtContainer';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
} from 'react-router-dom'
import { Home } from './home';
import { Blogs } from './blogs';
import { Gallery } from './gallery';
import { Feedback } from './feedback';
import { About } from './about';
import NoMatch from './common/NoMatch';

export default class App extends React.Component{
    render(){
        return (
                <Router>
                    <Switch>
                            <Route exact path='/matt' component={Home}/>
                            <Route path='/matt/home' component={Home}/>
                            <Route path='/matt/blogs' component={Blogs}/>
                            <Route path='/matt/gallery' component={Gallery}/>
                            <Route path='/matt/feedback' component={Feedback}/>
                            <Route path='/matt/about' component={About}/>
                            <Route component={NoMatch}/>
                    </Switch>
                </Router>
        )
    }
}