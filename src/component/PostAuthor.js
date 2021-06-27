import React, {Component} from 'react'
import {connect} from 'react-redux'

import {authorDetails} from '../actions'

class PostAuthor extends Component {
    componentDidMount(){
        this.props.authorDetails(this.props.authorId)
    }
    render(){
        const user = this.props.users.find(user => user.id === this.props.authorId);

        if(!user){
            return <div>loading..</div>
        }

        return (
            <div>{user.name}</div>
        )
    }
}

const mapStateToProps = (state) => {
    return {users: state.users};
}

export default connect(mapStateToProps, {authorDetails})(PostAuthor)