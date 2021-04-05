import React from 'react'

interface Props {
    onSort: (s: string) => void
}

const Select = ({ onSort }: Props) => {
    return (
        <div>
            <select onChange={(e) => onSort(e.target.value)}>
                <option>Sort By:</option>
                <option>First Name</option>
                <option>Last Name</option>
                <option>Id</option>
            </select>
        </div>
    )
}

export default Select