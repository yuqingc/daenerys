import React from 'react';
import MtContainer from '../common/MtContainer';
import { withRouter, RouteComponentProps } from 'react-router';
import { MtInput } from '../common/MtInput';

interface Props extends RouteComponentProps<{}>{
}

class Home extends React.Component<Props, any> {
    render () {
        const { history } = this.props;
        return (
            <MtContainer value='home'>
                <div>Home</div>
                <a onClick={()=>{history.push('/matt/ffffff')}}>To 404....</a>
                <div><img src={require("../../images/fly.png")} alt="" style={{width:'200px'}}/></div>
                <MtInput disabled={true}/>
            </MtContainer>
        )
    }
}

export default withRouter(Home);