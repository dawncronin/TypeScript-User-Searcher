import React from 'react'

import Input from './input'
import Select from './select'

interface Props {
    onSearch: (s: string) => void,
    onSort: (s: string) => void
}

const Search = ({ onSearch, onSort }: Props) => {
    return (
        <div>
            <form>
                <Input onSearch={onSearch}/>
                <Select onSort={onSort}/>
            </form>
        </div>
    )
}

export default Search