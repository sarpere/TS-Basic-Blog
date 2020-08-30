import React, { ReactElement } from 'react'
import { Route, Switch } from 'react-router-dom'
import './style.scss'
import Home from './Home'
import Post from './Post';
interface Props {

}

export default function index({ }: Props): ReactElement {
    return (
        <div className="Layout container">
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/:postId" component={Post} />
            </Switch>
        </div>

    )
}
