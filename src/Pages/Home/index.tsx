import React, { Component } from 'react'
import  PostSummary  from '../../Components/PostSummary'
interface Props {
    
}
interface State {
    
}

export default class Home extends Component<Props, State> {
    state = {}

    render() {
        return (
            <div>
                <PostSummary />
            </div>
        )
    }
}
