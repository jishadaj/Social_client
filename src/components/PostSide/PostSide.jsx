import React from 'react'
import Navigation from '../Navigation/Navigation'
import Posts from '../Posts/Posts'
import PostShare from '../PostShare/PostShare'
import './PostSide.scss'

const postSide = () => {
  return (
    <div className="PostSide">
        <PostShare/>
        <Posts/>
        <Navigation/>
    </div>
  )
}

export default postSide
