import { useState } from "react"

export default function Sort({ onSort }) {
    const [sortQuery, setSortQuery] = useState('id')

    const handleSort = (sortQuery) => {
        setSortQuery(sortQuery)
        onSort(sortQuery)
    }
    return (
        <div className="flex flex-col space-y-1 w-28">
            <label
                className="font-semibold text-sm"
                htmlFor="sort">Sort</label>
            <select
                value={sortQuery}
                onChange={(e) => handleSort(e.target.value)}
                className="rounded p-2 text-sm bg-white"
                name="sort"
                id="sort">
                <option value="name">Name</option>
                <option value="id">Number</option>
            </select>
        </div>
    )
}
