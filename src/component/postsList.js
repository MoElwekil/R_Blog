import React, {Component} from 'react'

class PostsList extends Component {

    postsList(index){
        return (
            <li className="list-group-item" key="index">hello</li>
        )
    }
    render(){
        return (
            <div>
                <ul className="list-group">

                </ul>
                {this.postsList()}
            </div>
        )
    }
}

export default PostsList