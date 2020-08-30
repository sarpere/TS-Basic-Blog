import React, { Component } from 'react'
import PostContent from '../../Components/PostContent'
import { matchPath } from "react-router";
import { RouteComponentProps } from 'react-router-dom';
import { getPosts } from '../../mockApi/Post'
import * as postTypes from '../../store/post/types'
interface Props extends RouteComponentProps {
}
interface State {
    post: postTypes.Post
}
export default class Post extends Component<Props, State> {
    state = {
        post: {
            id: -1,
            title: "",
            content: "",
            imagePath: ""
        }
    }
    componentDidMount() {
        const match = matchPath(this.props.history.location.pathname, {
            path: "/:postId",
            exact: true,
            strict: false
        });
        if (match) {
            if (match.params) {
                var params: any = match.params
                if(params){
                    var Id = params.postId
                    getPosts(parseInt(Id)).then(post => {
                        this.setState({
                            post: post.length === 1 ? post[0] : []
                        })
                    }).catch(console.error)
                }
            }
        }
    }

    render() {
        const {id,title, imagePath, content } = this.state.post
        return (
            <div>
                <PostContent id={id} title={title} imagePath={imagePath} content={content} />
            </div>
        )
    }
}
