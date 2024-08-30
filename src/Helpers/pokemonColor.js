import React from 'react'
const colors = [
    {
        name: "normal",
        color: "slate-950"
    },
    {
        name: "fighting",
        color: "pink-900"
    },
    {
        name: "flying",
        color: "lime-900"
    },
    {
        name: "poison",
        color: "purple-900"
    },
    {
        name: "ground",
        color: "yellow-900"
    },
    {
        name: "rock",
        color: "stone-900"
    },
    {
        name: "bug",
        color: "green-900"
    },
    {
        name: "ghost",
        color: "indigo-900"
    },
    {
        name: "steel",
        color: "zinc-900"
    },
    {
        name: "fire",
        color: "red-900"
    },
    {
        name: "water",
        color: "blue-900"
    },
    {
        name: "grass",
        color: "green-900"
    },
    {
        name: "electric",
        color: "neutral-900"
    },
    {
        name: "psychic",
        color: "sky-900"
    },
    {
        name: "ice",
        color: "slate-900"
    },
    {
        name: "dragon",
        color: "rose-900"
    },
    {
        name: "dark",
        color: "gray-900"
    },
    {
        name: "fairy",
        color: "violet-900"
    },
    {
        name: "stellar",
        color: "sky-950"
    },
    {
        name: "unknown",
        color: "yellow-900"
    }
]
export default function pokemonColor(type) {
    const color = colors.filter(color => type === color.name)
    return color
}
