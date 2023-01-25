import React from 'react'
import './Home.css'
import ProfileSide from '../../components/ProfileSide/ProfileSide'
import PostSide from '../../components/PostSide/PostSide'
import RightSide from '../../components/RightSide/RightSide'
export const Home = ({location}) => {
  return (
    <div className='Home'>
    <ProfileSide/>
     
    <PostSide location={location}/>
    <RightSide/>
</div>
  )
}
