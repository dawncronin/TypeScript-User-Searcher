import React from 'react'

import Input from './input'
import Select from './select'

interface Props {
    onSearch: (s: string) => void
}

const Search = ({ onSearch }: Props) => {
    return (
        <div>
            <form>
                <Input onSearch={onSearch}/>
                <Select />
            </form>
        </div>
    )
}

export default Search