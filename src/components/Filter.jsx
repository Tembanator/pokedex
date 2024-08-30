import { useState } from "react";

export default function Filter({ uniqueTypes, onFilter, filter, setFilter }) {

    // const unique = [...new Set(types.map(item => item.type.name))];


    const handleSelectFilter = (selectedFilter) => {
        setFilter(selectedFilter)
        onFilter(selectedFilter)
    }
    return (
        <div>
            <div className="flex flex-col space-y-1 w-28">
                <label
                    className="font-semibold text-sm"
                    htmlFor="filter">Filter By Type</label>
                <select
                    value={filter}
                    onChange={(e) => handleSelectFilter(e.target.value)}
                    className="rounded p-2 text-sm bg-white"
                    name="filter"
                    id="filter">
                    <option value='all'>All</option>
                    {uniqueTypes.map(type => <option className="capitalize" key={type} value={type}>{type}</option>)}
                </select>
            </div>
        </div>
    )
}
