import React, { useEffect, useState } from 'react'

import UserCard from './user-card'
import Search from './search'

interface User {
    email: string,
    id: number,
    first_name: string,
    last_name: string,
    avatar: string
}

const UserList = () => {

    let defaultUserArray: User[] = []
    let [users, setUsers] = useState(defaultUserArray)
    let [sortedUsers, setSortedUsers] = useState(defaultUserArray)
    let [search, setSearch] = useState("")


    useEffect( () => {
        fetch('https://reqres.in/api/users?per_page=20')
        .then(res => res.json())
        .then(json => {
            setUsers(json.data)
            setSortedUsers(json.data)
        })
    }, [])

    const onSearch = (searchTerm: string) => {
        console.log(searchTerm)

        let sort = users.filter( (user: User) => {
            if (user.first_name.includes(searchTerm)) {
                return true
            }
            if (user.last_name.includes(searchTerm)) {
                return true
            }
            if (user.email.includes(searchTerm)) {
                return true
            }
            return false
        })
        setSortedUsers(sort)
    }

    
    return (
        <div>
            <Search onSearch={onSearch}/>
            {sortedUsers.map((user: User) => <UserCard user={user} />)}
        </div>
    )
}

export default UserList