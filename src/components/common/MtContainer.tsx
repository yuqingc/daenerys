import React from 'react';
import MtNaHeader from './MtNavHeader';

interface Props {
    value: string;
    children: any;
}

class MtContainer extends React.Component<Props, {}> {
    render () {
        const { value } = this.props;
        return (
        <div>
            <MtNaHeader value={value}/>
            <div>{this.props.children}</div>
        </div>)
    }
}

export default MtContainer;