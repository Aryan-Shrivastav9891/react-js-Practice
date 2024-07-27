import React, {useState , useContext} from 'react'
import UserContext from '../Context/UserContext'

function Profile() {

    const {user} = useContext(UserContext)

    if (!user) {
        return <div>Plz Login</div>
    }
    return(
        <dir>
            Welcome {user.userName}
        </dir>
    )
}

export default Profile