import React, { useEffect, useState } from 'react'
import './Posts.css'

import Post from '../Post/Post'
import { useDispatch, useSelector } from 'react-redux'
import { getTimeline } from "../../redux/actions/postActions"
import { useParams } from "react-router-dom";
import { savedPost } from '../../api/usersApi'
const Posts = ({ location }) => {
    const { userData } = useSelector((state) => state.authReducer.authData)
    let [savedPosts, setSavedPost] = useState([])
    useEffect(() => {

        const fetchSavedPost = async () => {
            const { data } = await savedPost(userData._id);

            setSavedPost(data.postId)

        }
        fetchSavedPost()


    }, [])
    let { postData, fetchedPost, loading } = useSelector((state) => state.postReducer)


    const dispatch = useDispatch()
    useEffect(() => {

        dispatch(getTimeline(userData._id))
    }, [postData])
    const params = useParams()
    const { users } = useSelector((state) => state.authReducer)




    if (location === 'savedPosts') {

        if (savedPosts[0]) {
            // savedPosts = savedPosts.map((post) => {
            //     const data = users.find((value) => value._id === post.userId)
            //     post.userId = data
            //     return post
            // })
            return (
                <div className="Posts">


                    {loading ? "Fetching posts...."
                        : (savedPosts.map((value) => {
                            return <Post data={value} id={value._id} />
                        }))}
                </div>
            )
        }
        else {
            return (
                <p>No Saved Posts</p>)

        }

    }
    else {

        if (!fetchedPost)
            return 'No Posts';
        //this is for profile part
        if (params.id) {

            fetchedPost = fetchedPost.filter((post) => {



                if (post.userId === params.id) {

                    return post.userId
                }

            })
        }
        // else {


        //     // fetchedPost = fetchedPost.map((post) => {
        //     //     const data = users.find((value) => value._id === post.userId)
        //     //     post.userId = data
        //     //     return post
        //     // })

        // }
        //this is to display post along with userName


        return (
            <div className="Posts">


                {loading ? "Fetching posts...."
                    : (fetchedPost.map((value) => {
                        return <Post data={value} id={value._id} />
                    }))}
            </div>
        )
    }


}

export default Posts