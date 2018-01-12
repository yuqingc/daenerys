import React from "react";
import { withRouter, RouteComponentProps } from 'react-router';

interface Props extends RouteComponentProps<{}>{
}

class NoMatch extends React.Component<any, {}> {
    render () {
        const { history, location } = this.props;
        return <div>
            <h2>404 Not Found</h2>
            <div>Cannot find resource {location.pathname}</div>
            <a onClick={()=>{history.push('/home')}}>Back to Home</a>
        </div>
    }
}

export default withRouter(NoMatch);