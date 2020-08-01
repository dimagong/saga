import React from 'react';
import Button from 'react-bootstrap/Button'
import Post from "./Post"
import { useDispatch, useSelector } from 'react-redux';

import { fetchPost } from '../Redux/action'



const FetchPosts = () => {

    const dispath = useDispatch()
    const posts = useSelector(state => state.post.fetchPosts)

    let dataFetchPost =
        (!posts.length) ?
            <Button variant="primary" size="lg" onClick={() => dispath(fetchPost())}>download</Button>
            :
            posts.map((post) => {
                return <Post post={post} key={post.id} />
            })

    return dataFetchPost;

}

export default FetchPosts
