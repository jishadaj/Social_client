import React from 'react'
import FollowesCard from '../FollowersCard/FollowesCard'
import LogoSearch from '../LogoSearch/LogoSearch'
import ProfileCard from '../ProfileCard/ProfileCard'

import './ProfileSide.css'

function ProfileSide() {
  return (
    <div className="ProfileSide">
        <LogoSearch/>
        <ProfileCard location= "homepage"/>
        <FollowesCard/>
    </div>

  )
}

export default ProfileSide