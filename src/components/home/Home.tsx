import React from 'react';
import MtContainer from '../common/MtContainer';

class Home extends React.Component {
    render () {
        return (
            <MtContainer value='home'>
                <div>Home</div>
                <div><img src={require("../../images/fly.png")} alt="" style={{width:'200px'}}/></div>
            </MtContainer>
        )
    }
}

export default Home;