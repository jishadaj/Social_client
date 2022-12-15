import React from 'react'
import FollowesCard from '../FollowersCard/FollowesCard'
import InfoCard from '../InfoCard/InfoCard'
import LogoSearch from '../LogoSearch/LogoSearch'


const ProfileLeft = () => {
  return (
    <div className="ProfileSide">
        <LogoSearch/>
        <InfoCard/>
        <FollowesCard/>
    </div>
  )
}

export default ProfileLeft