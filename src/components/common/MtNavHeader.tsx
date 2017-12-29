import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Menu, Icon } from 'antd';
import { withRouter, RouteComponentProps } from 'react-router';

interface Props extends RouteComponentProps<{}>{
    value: string;
}

class MtNavHeader extends React.Component<Props, any> {
    handleClick (e: any) {
        const { history } = this.props;
        history.push('/' + e.key);
    } 

    render() {
        const { value } = this.props;
            return (
            <Menu
                onClick={(e: any) => {this.handleClick(e)}}
                selectedKeys={[value]}
                mode="horizontal"
                theme="light"
            >
                <Menu.Item key="home">
                    <Icon type="home" />Home
                </Menu.Item>
                <Menu.Item key="blogs">
                    <Icon type="file-text" />Blogs
                </Menu.Item>
                <Menu.Item key="gallery">
                    <Icon type="picture" />Gallery
                </Menu.Item>
                <Menu.Item key="feedback">
                    <Icon type="user" />Feedback
                </Menu.Item>
                <Menu.Item key="about">
                    <Icon type="info-circle-o" />About
                </Menu.Item>
            </Menu>
        );
      }
}

export default withRouter(MtNavHeader);