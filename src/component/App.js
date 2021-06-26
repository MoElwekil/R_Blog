import React from 'react'

import PostsList from './postsList'

const App = () => {
    return (
        <div className="container" style={{marginTop:20}}>
            <h1 className="mb-3" style={{color:'blue'}}>Blog Posts</h1>
            <PostsList />
        </div>
    )
}

export default App