import React from 'react';
import PropTypes from 'prop-types';
import './style/index.scss';

interface MtInputPropsType {
    value?: string;
    disabled?: boolean;
    multipulLine?: boolean;
    width?: string,
    color?: string,
    placeholder?: string,
    label: string,
    onChange?: (v?: string) => any;
}

interface MtInputStateType {
    value: string;
    isFocused: boolean;
}

class MtInput extends React.Component<MtInputPropsType, MtInputStateType> {
    constructor (props: any) {
        super(props);
        this.state = {
            value: '',
            isFocused: false,
        }
    } 

    static defaultProps = {
        disabled: false,
        multipulLine: false,
        width: '200px',
        color: '#f1860c',
        label: 'No label given',
        placeholder: 'Please input here...',
    };

    static propTypes = {
        value: PropTypes.string,
        disable: PropTypes.bool,
        multipulLine: PropTypes.bool,
        width: PropTypes.string,
        color: PropTypes.string,
        placeholder: PropTypes.string,
        label: PropTypes.string,
        onChange: PropTypes.func,
    };

    handleChange(event:any) {
        if(typeof this.props.value === 'undefined'){
            this.setState({
                value: event.target.value,
            });
        }
        if(this.props.onChange !== undefined) {
            return this.props.onChange(event.target.value);
        }
        return undefined;
    }

    handleFocus() {
        this.setState({isFocused: true});
    }

    handleBlur() {
        this.setState({isFocused: false});
    }

    render() {
        const MtInputStyle = {
            whiteSpace: this.props.multipulLine ? undefined : 'nowrap',
            border: this.state.isFocused ? '1px solid ' + this.props.color : '1px solid #dddddd',
            width: this.props.width,
        };
        return <div>
        <p>{this.props.label}</p>
        <textarea 
            className='mt-input' 
            contentEditable={true}
            onChange={(event:any) => {this.handleChange(event)}}
            value={this.props.value || this.state.value}
            style={MtInputStyle}
            disabled={this.props.disabled}
            rows={this.props.multipulLine ? 3 : 1}
            onFocus={() => {this.handleFocus()}}
            onBlur={() => {this.handleBlur()}}
            placeholder={this.props.placeholder}
        />
        {this.state.value}
        </div>
    }
}

export default MtInput;