import React from 'react'

interface Props {
    user: {
        email: string,
        id: number,
        first_name: string,
        last_name: string,
        avatar: string
    }
}

const UserCard = ({ user }: Props) => {
    return (
        <div>
            <img src={user.avatar} />
            <h3>{user.first_name} {user.last_name}</h3>
            <h4>{user.email}</h4>
        </div>
    )
}

export default UserCard