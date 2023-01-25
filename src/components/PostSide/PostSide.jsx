import React from 'react'
import Posts from '../Posts/Posts'
import PostShare from '../PostShare/PostShare'
import { useLocation,useParams } from 'react-router-dom'

import './PostSide.css'
import { useSelector } from 'react-redux'

const PostSide = ({location}) => {
  const params = useParams();
  const locations = useLocation()
  const { userData } = useSelector((state) => state.authReducer.authData);
  return (
    <div className='PostSide'>
      {location==='savedPosts'?<h5>Saved Posts</h5>:"" } 
      {locations.pathname==='/'?<PostShare/>:""}
      { params.id===userData._id?<PostShare />:""}
      <Posts location={location} />
     
    </div>
  )
}

export default PostSide