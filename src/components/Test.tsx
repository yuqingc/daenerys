import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as testActions from '../actions/testActions';

interface Props {
    name: string;
    age: number;
    actions: any;
}


//这个就当做一个模板 下次直接copy
class Test extends React.Component<Props, {}> {

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
        return <>
        <div>{this.props.name}</div>
        <button type="button" onClick={()=>{this.handleClick()}}>Click Me!!!!</button>
        <button type="button" onClick={()=>{this.handleAsyncClick()}}>异步action</button>
        <div>{name}</div>
        <div>{age}</div>
        </>
    }
}

export default connect((state: any) => {
    return{
        name: state.test.get('name'),
        age: state.test.get('age'),
    }
}, dispatch => ({
    actions: bindActionCreators(testActions, dispatch),
}))(Test as any);