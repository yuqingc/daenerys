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
import { Profile } from './profile';
import { About } from './about';

export default class App extends React.Component{
    render(){
        return (
            <MtContainer>
                <Router>
                    <Switch>
                            <Route exact path='/' component={Home}/>
                            <Route path='/home' component={Home}/>
                            <Route path='/blogs' component={Blogs}/>
                            <Route path='/gallery' component={Gallery}/>
                            <Route path='/profile' component={Profile}/>
                            <Route path='/about' component={About}/>
                    </Switch>
                </Router>
            </MtContainer>
        )
    }
}