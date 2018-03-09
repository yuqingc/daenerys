import React from 'react';
import PropTypes from 'prop-types';
import './style/index.scss';

interface MtInputProps {
    disabled?: boolean,
}

class MtInput extends React.Component<MtInputProps, any> {
    constructor (props: any) {
        super(props);
        this.state = {
            value: '',
        }
    } 

    static defaultProps = {
        disabled: false,
    };

    static propTypes = {
        disable: PropTypes.bool,
    };

    handleChange(event:any) {
        this.setState({
            value: event.target.value,
        })
    }

    render () {
        return <>
        <input 
            className='mt-input' 
            contentEditable={true}
            onChange={(event:any) => {this.handleChange(event)}}
            value={this.state.value}
            disabled={this.props.disabled}
        />
        {this.state.value}
        </>
    }
}

export default MtInput;