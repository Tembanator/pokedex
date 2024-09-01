import pokemonColor from "../Helpers/pokemonColor";
import Type from "./Type";

export default function ListItem({ pokemon, colors }) {
    const { id, name, sprites, types } = pokemon
    // const bgColor = colors.filter(color => types[0].type.name === color.name)
    const bgColor = pokemonColor(pokemon.types[0].type.name)

    return (
        <div
            className={`w-full bg-${bgColor[0].color} rounded pt-3 relative aspect-video hover:scale-105 duration-300`}>
            <img
                className="w-[100px] h-[100px] mx-auto -mt-[50px]"
                src={sprites.front_default}
                alt="sprite" />
            <div
                className="flex flex-col space-y-2 relative -mt-5 overflow-hidden">
                <img
                    src="icons/pokeball.svg" className="opacity-5 absolute w-[120px] -left-8 -bottom-10"
                    alt="" />
                <h3
                    className="text-white font-semibold capitalize ml-3">
                    {name}
                </h3>
                <p className="text-white text-xs ml-3">#{id}</p>
                <div className="flex space-x-2 pb-3">
                    {types.map((type, index) => <Type type={type} colors={colors} key={type.slot} />)}
                </div>
            </div>
        </div>
    )
}
