import React, {Component} from 'react'
import {connect} from 'react-redux'

import {authorDetails} from '../actions'

class PostAuthor extends Component {
    render(){
        const {user} = this.props;

        if(!user){
            return <div>loading..</div>
        }

        return (
            <div>{user.name}</div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {user: state.users.find(user => user.id === ownProps.authorId)};
}

export default connect(mapStateToProps, {authorDetails})(PostAuthor)