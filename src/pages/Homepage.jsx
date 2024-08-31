import { useEffect, useState } from "react"
import Filter from "../components/Filter"
import List from "../components/List"
import Logo from "../components/Logo"
import Search from "../components/Search"
import Sort from "../components/Sort"
import hasType from "../Helpers/hasType"
import FullLoader from "../components/FullLoader"

function Homepage({ offSet, limit }) {
    const [pokemons, setPokemons] = useState([])
    const [pokemonsDetails, setPokemonsDeatailes] = useState([])
    const [filteredPokemons, setfilteredPokemons] = useState([])
    const [filter, setFilter] = useState('all')
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    const [error, setError] = useState(null)


    const handleFilter = (match) => {
        if (match === 'all') {
            return setfilteredPokemons(() => [...pokemonsDetails])
        }
        const fileredByType = pokemonsDetails.filter(pokemon => hasType(pokemon.types, match))
        setfilteredPokemons(() => [...fileredByType])
    }

    const handleSearch = (query) => {
        setFilter('all')
        if (query.length < 1) {
            setfilteredPokemons(() => [...pokemonsDetails])
        }
        else {
            const fileredByQuery = pokemonsDetails.filter(pokemon => pokemon.name.includes(query))
            setfilteredPokemons(() => [...fileredByQuery])
        }
    }

    const handleSort = (sortQuery) => {
        if (sortQuery === 'name') {
            const sorted = filteredPokemons.sort((a, b) => a.name.localeCompare(b.name))
            setfilteredPokemons(() => [...sorted])
        } else {
            const sorted = filteredPokemons.sort((a, b) => a.id - b.id)
            setfilteredPokemons(() => [...sorted])
        }
    }

    const types = []

    pokemonsDetails.map(pokemon => pokemon.types).forEach(type => {
        type.forEach(x => {
            types.push(x)
        })
    })

    const uniqueTypes = [...new Set(types.map(item => item.type.name))];


    useEffect(function () {
        const fetchPokemons = async () => {
            try {
                setIsLoading(true)
                setIsError(false)
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offSet}&limit=${limit}`)
                if (!res.ok) {
                    throw Error('Could not fetch Pokemons')
                }
                const data = await res.json()
                setPokemons(() => [...data.results])
                setIsLoading(false)
                // document.title = data.name
            } catch (error) {
                setIsError(true)
                setIsLoading(false)
                setError(error.message)
            }
        }
        fetchPokemons()
    }, [limit, offSet])

    useEffect(function () {
        const fetchPokemonDetails = async (name) => {
            try {
                setIsLoading(true)
                setIsError(false)
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
                if (!res.ok) {
                    throw Error('Could not fetch Pokemons')
                }
                const data = await res.json()
                setPokemonsDeatailes((prev) => [...prev, data])
                setfilteredPokemons((prev) => [...prev, data])
                setIsLoading(false)
            } catch (error) {
                setIsError(true)
                setIsLoading(false)
                setError(error.message)
            }
        }
        if (pokemons.length) {
            pokemons.map(pokemon => fetchPokemonDetails(pokemon.name))
        }
    }, [pokemons])

    return (
        <>
            <Logo />
            <Search onSearch={handleSearch} />
            <div className="flex justify-between container mx-auto p-6">
                <Sort onSort={handleSort} />
                <Filter uniqueTypes={uniqueTypes} onFilter={handleFilter} filter={filter} setFilter={setFilter} />
            </div>
            {isLoading && <FullLoader />}
            {isError && <p>{error}</p>}
            <List filteredPokemons={filteredPokemons} />
        </>
    )
}

export default Homepage
