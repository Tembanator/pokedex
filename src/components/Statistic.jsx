import React from 'react'

const statNames = [
    {
        name: "hp",
        shortName: "HP"
    },
    {
        name: "attack",
        shortName: "ATK"
    },
    {
        name: "defense",
        shortName: "DEF"
    },
    {
        name: "special-attack",
        shortName: "SATK"
    },
    {
        name: "special-defense",
        shortName: "SDEF"
    },
    {
        name: "speed",
        shortName: "SPD"
    },
    {
        name: "accuracy",
        shortName: "https://pokeapi.co/api/v2/stat/7/"
    },
    {
        name: "evasion",
        shortName: "EVA"
    }
]

export default function Statistic({ statValue, color }) {
    const { stat, base_stat } = statValue

    const createStatShort = (name) => {
        const shortname = statNames.map(x => {
            if (x.name === name) {
                return x.shortName
            }
        })
        return shortname
    }
    const widthStat = (base_stat / 100) * 100
    return (
        <div className='flex space-x-3 w-full items-center'>
            <p className={`font-semibold text-${color} w-[60px]`}>{createStatShort(stat.name)}</p>
            <p className='w-[60px]'>0{base_stat}</p>
            <div className='relative w-full'>
                <div className='h-[6px] w-full bg-gray-200 rounded absolute'></div>
                <div style={{ width: widthStat + '%' }} className={`h-[6px] bg-${color} rounded absolute`}></div>
            </div>
        </div>
    )
}
