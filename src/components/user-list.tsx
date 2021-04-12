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

    useEffect( () => {
        fetch('https://reqres.in/api/users?per_page=20')
        .then(res => res.json())
        .then(json => {
            setUsers(json.data)
            setSortedUsers(json.data)
        })
    }, [])

    const onSearch = (searchTerm: string) => {

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

    const onSort = (sortTerm: string) => {
        let sorted: User[]
        //need to create a new users array to sort, since the reference needs to change for the DOM to update
        let newUsers = [ ...sortedUsers ]
        switch(sortTerm) {
            case "First Name":
                sorted = newUsers.sort((a, b) => {
                    return a.first_name.toUpperCase().localeCompare(b.first_name.toUpperCase())
                })
                setSortedUsers(sorted)
                console.log(sorted)
                break
            case "Last Name":
                sorted = newUsers.sort((a, b) => {
                    return a.last_name.toUpperCase().localeCompare(b.last_name.toUpperCase())
                })
                setSortedUsers(sorted)
                console.log(sorted)
                break
            case "Id":
                sorted = newUsers.sort((a, b) => {
                    return a.id - b.id
                })
                setSortedUsers(sorted)
                setUsers(sorted)
                console.log(sorted)
                break
            default:
                break
        }

    }

    return (
        <div className='user-list'>
            <Search onSearch={onSearch} onSort={onSort}/>
            {sortedUsers.map((user: User) => <UserCard user={user} />)}
        </div>
    )
}

export default UserList