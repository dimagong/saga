import React from 'react';
import Post from './Post';
import { connect } from 'react-redux';

const Posts = ({ syncPosts }) => {
    let dataPost =
        (!syncPosts.length) ?
            <p> Have no posts</p>
            :
            syncPosts.map((post) => {
                return <Post post={post} key={post.id} />
            })

    return dataPost;
}

const mapStateToProps = (state) => ({
    syncPosts: state.post.posts
})


export default connect(mapStateToProps, null)(Posts)

