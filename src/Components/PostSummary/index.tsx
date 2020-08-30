import React, { Component } from 'react'
import './style.scss'
import { bindActionCreators,Dispatch } from 'redux'
import { connect } from 'react-redux'
import { ApplicationState } from '../../store'
import { Post } from '../../store/post/types'
import * as postActions from '../../store/post/actions'
import { getPosts } from '../../mockApi/Post'
import { Link } from 'react-router-dom'

interface State {
    posts: Post[]
}
interface ownProps {
    
}
interface DispatchProps {
    postPending(): void,
    postSuccess(data:Post[] ): void,
    postError(): void,

}
type Props = State & DispatchProps & ownProps 
class PostSummary extends Component<Props> {
  
    componentDidMount() {
        if(this.props.posts.length > 0){return }
        console.log("object")
        this.props.postPending()
        getPosts().then(data => {
            this.props.postSuccess(data)
        }).catch( () => this.props.postError())
    }
    render() {
        return (
            <div className="PostsContainer">
                {
                    this.props.posts.map(post =>
                        <BlogContainer key={post.id} {...post} />
                    )
                }
            </div>
        )
    }
}

class BlogContainer extends Component<Post> {
    render() {
        const { id, title, imagePath } = this.props
        return (
            <Link to={`/${id}`} className="PostSummary">
                <img className="Image" src={`./${imagePath}`} />
                <p className="Title"> {title} </p>
            </Link>
        )
    }
}


const mapStateToProps = (state: ApplicationState) => ({
    posts: state.post.data
})
const mapDispatchToProps = (dispatch: Dispatch) => 
bindActionCreators(postActions, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(PostSummary);