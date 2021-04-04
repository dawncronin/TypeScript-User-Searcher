import React from 'react'


interface Props {
    onSearch: (s: string) => void
}

const Input = ({ onSearch }: Props) => {
    return (
        <div>
            <input type="text" placeholder="search" onChange={(e)=> onSearch(e.target.value)}/>
        </div>
    )
}

export default Input