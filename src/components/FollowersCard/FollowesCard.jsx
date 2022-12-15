import React from 'react'
import './FollowersCard.css'
import User from '../User/User'
import { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { getAllUser } from '../../api/UserRequest'


function FollowesCard() {

    const [persons, setPersons] = useState([])
    const { user } = useSelector((state) => state.authReducer.authData)

    useEffect(() => {
        const fetchPerson = async () => {
            const { data } = await getAllUser()
            setPersons(data)
            console.log(data);
        }
        fetchPerson()
    }, [])

    return (
        <div className="FollowersCard">
            <h3>People you may know</h3>

            {persons.map((person, id) => {
                if (person._id !== user._id) {
                    return <User person={person} key={id} />
                }
            })}

        </div>
    )
}

export default FollowesCard