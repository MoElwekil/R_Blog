import React, {Component} from 'react'
import { connect } from 'react-redux'

import {postsList} from '../actions'
import PostAuthor from './PostAuthor';

class PostsList extends Component {

    componentDidMount(){
        this.props.postsList();
    }

    allPostsList(){
        return this.props.posts.map((post) => {
            return (
                <li key={post.id} className="list-group-item">
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                    <div><PostAuthor authorId={post.userId} /></div>
                </li>
            )
        })
    }

    render(){
        return (
            <div>
                <ul className="list-group">
                    {this.allPostsList()}
                </ul>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {posts: state.posts}
}

export default connect(mapStateToProps, {postsList})(PostsList)