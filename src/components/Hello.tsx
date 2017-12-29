import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as testActions from '../actions/testActions';
import Button from 'antd/lib/button';
import MtContainer from './common/MtContainer';

interface Props {
    name: string;
    age: number;
    actions: any;
}

class Hello extends React.Component<Props, {}> {

    handleClick () {
        const { actions } = this.props;
        actions.changeAge(5);
    }

    handleAsyncClick () {
        const { actions } = this.props;
        actions.changeAgeAsync(100);
    }

    render () {
        const { name, age} = this.props;
        console.log('Test is', Test);
        return (
        <>
            <MtContainer value='hello'>
                <div>{this.props.name}</div>
                <button type="button" onClick={this.handleClick.bind(this)}>Click Me!!</button>
                <button type="button" onClick={()=>{this.handleAsyncClick()}}>异步action...</button>
                <div>{name}</div>
                <div>{age}</div>
            <Button type="primary">Button</Button></MtContainer>
        </>)
    }
}

function mapStateToProps(state: any) {
    return { 
        name: state.test.get('name'),
        age: state.test.get('age'),
    }
}
  
function mapDispatchToProps(dispatch: any) {
    return { 
        actions: bindActionCreators(testActions, dispatch) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello as any);

class Test extends React.Component <any, any>{
    render() {
        return <div>testtesttest</div>
    }
}