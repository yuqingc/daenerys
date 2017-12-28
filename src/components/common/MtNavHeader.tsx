import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Menu, Icon } from 'antd';

interface Props {
    [propName: string] : any;
}


//这个就当做一个模板 下次直接copy
class MtNavHeader extends React.Component<Props, {}> {
    state = {
        current: 'home',
    }
      handleClick = (e: any) => {
          const { history } = this.props;
            console.log('click ', e);
            this.setState({
                current: e.key,
            });
      }
      render() {
            return (
            <Menu
                onClick={this.handleClick}
                selectedKeys={[this.state.current]}
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
                <Menu.Item key="profile">
                    <Icon type="user" />Profile
                </Menu.Item>
                <Menu.Item key="about">
                    <Icon type="info-circle-o" />About
                </Menu.Item>
            </Menu>
        );
      }
}

export default MtNavHeader;