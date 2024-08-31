import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import pokemonColor from '../Helpers/pokemonColor'
import { IoArrowBack } from 'react-icons/io5'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { TbWeight } from 'react-icons/tb'
import DetailTile from '../components/DetailTile'
import { TfiRuler } from 'react-icons/tfi'
import Statistic from '../components/Statistic'
import FullLoader from '../components/FullLoader'

export default function Pokemon() {
    const [pokemon, setPokemon] = useState({})
    const [bgColor, setBgColor] = useState('bg-amber-900')
    const [move, setMove] = useState('')
    const [stats, setStats] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    const [error, setError] = useState(null)

    const { id } = useParams()

    useEffect(function () {
        const fetchPokemon = async (id) => {
            try {
                setIsLoading(true)
                setIsError(false)
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
                if (!res.ok) {
                    throw Error('Could not fetch Pokemons')
                }
                const data = await res.json()
                setPokemon(data)
                setBgColor(pokemonColor(data.types[0].type.name))
                setMove(data.moves[0].move.name)
                setStats(data.stats)
                setIsLoading(false)
            } catch (error) {
                setIsError(true)
                setIsLoading(false)
                setError(error.message)
            }
        }
        fetchPokemon(id)
    }, [id])

    return (
        <>
            {isError && <p>{error}</p>}
            {isLoading && <FullLoader />}
            <div className={`bg-${bgColor[0].color} w-full min-h-screen bg-opacity-65`}>
                <div className='mx-auto max-w-[500px] p-4'>
                    <div className='flex space-x-5 items-center text-white justify-center capitalize'>
                        <Link to={'/'}><IoArrowBack /></Link>
                        <h3 className='font-semibold md:text-xl'>{pokemon?.name}</h3>
                        <p className='text-xs'>#{pokemon?.id}</p>
                    </div>

                    {/* IMAGE WITH ARROWS */}
                    <div className="flex justify-center items-center space-x-5 text-white my-4">
                        <Link to={`/pokemon/${Number(id) > 1 ? Number(id) - 1 : '1'}`}><IoIosArrowBack /></Link>
                        <img src={pokemon?.sprites?.front_default} alt={`${pokemon.name} sprite`} />
                        <Link to={`/pokemon/${Number(id) + 1}`}><IoIosArrowForward /></Link>
                    </div>

                    {/* INFO */}
                    <div className="bg-white rounded shadow-md w-full p-4 my-5">
                        <h3 className='font-semibold text-center'>About</h3>
                        <div className="flex justify-between">
                            <DetailTile icon={<TbWeight />} value={pokemon.weight} unit={'kg'} title={'weight'} />
                            <DetailTile icon={<TfiRuler />} value={pokemon.height} unit={'m'} title={'height'} />
                            <DetailTile title={'move'} value={move} />
                        </div>

                        <h3 className='font-semibold text-center mt-8'>Base Stats</h3>

                        <div className='flex flex-col justify-center items-center space-y-2'>
                            {stats.map((stat, index) => <Statistic color={bgColor[0].color} statValue={stat} key={index} />)}
                        </div>
                    </div>


                </div>
            </div >
        </>
    )
}
