import React from 'react';

interface Props {
    name: string;
  }

export default class Hello extends React.Component<Props, {}> {
    render () {
        return <>
        <div>{this.props.name}</div>
        <div>fadsfdasfadsfasf</div>
        </>
    }
}