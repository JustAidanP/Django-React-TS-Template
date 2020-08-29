import React, {Component} from "react";
import { RouteComponentProps } from 'react-router';

interface MatchProps{
    content: string
}

interface Props extends RouteComponentProps<MatchProps> {}
interface State {}

class Echo extends Component<Props, State>{
    render(){
        return (
            <h1>
                {this.props.match.params.content}
            </h1>
        )
    }
}

export default Echo;