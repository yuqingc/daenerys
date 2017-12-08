import React from 'react';
import Hello from './components/Hello';

export default class App extends React.Component {
    render(){
        return <div>           
            <h1>Test Template</h1>
            <p>This is my React App</p>
            <Hello name="cyq"/>
        </div>
    }
}