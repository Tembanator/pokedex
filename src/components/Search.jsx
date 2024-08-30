import { useState } from "react";
import { IoSearch } from "react-icons/io5";

export default function Search({ onSearch }) {

    const [query, setQuery] = useState('')

    const handleSearch = (query) => {
        setQuery(query)
        onSearch(query)
    }

    return (
        <form>
            <div className='container mx-auto px-6 relative'>
                <span className='absolute top-[6px] text-blue-500 text-xl left-8'>
                    <IoSearch />
                </span>
                <input
                    value={query}
                    onChange={(e) => handleSearch(e.target.value)}
                    className='w-full rounded placeholder:text-blue-300 focus: outline-none p-1 ps-8 shadow-md'
                    type="text"
                    name="search"
                    id="search"
                    placeholder='Pokemon name or number' />
                {/* <button
                    className='absolute flex items-center right-[30px] rounded bg-orange-500 text-blue-600 px-6 top-[5px] font-semibold text-sm'
                    type="submit">
                    Search
                </button> */}
            </div>
        </form>
    )
}
