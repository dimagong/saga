import React from 'react';
import Button from 'react-bootstrap/Button'
import { useDispatch, useSelector } from 'react-redux';
import Loader from "./Loader"


import Post from "./Post"
import { fetchPost } from '../Redux/action'
import AlertWiev from '../components/Alert'


const FetchPosts = () => {

    const dispath = useDispatch()
    const posts = useSelector(state => state.post.fetchPosts)
    const loading = useSelector(state => state.app.loading);
    const errorData = useSelector(state => state.error.error);

    let dataFetchPost = (
        (loading) ?
            <>
                <Loader />
                {
                    (errorData) ?
                        <>
                            <AlertWiev />
                        </>
                        : ''
                }
            </>
            :
            <>
                {(!posts.length) ?

                    <Button variant="primary"
                        size="lg"
                        onClick={() =>
                            dispath(fetchPost())
                        }
                    >
                        download
                    </Button>
                    :
                    posts.map((post) => {
                        return <Post post={post} key={post.id} />
                    })}

            </>
    )
    return dataFetchPost;

}

export default FetchPosts
