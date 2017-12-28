import React from 'react';
import MtNaHeader from './MtNavHeader';

interface Props {
    children: any;
}

class MtContainer extends React.Component<Props, {}> {
    render () {
        return (
        <div>
            <MtNaHeader/>
            <div>{this.props.children}</div>
        </div>)
    }
}

export default MtContainer;