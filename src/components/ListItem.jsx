import pokemonColor from "../Helpers/pokemonColor";
import Type from "./Type";

export default function ListItem({ pokemon, colors }) {
    const { id, name, sprites, types } = pokemon
    // const bgColor = colors.filter(color => types[0].type.name === color.name)
    const bgColor = pokemonColor(pokemon.types[0].type.name)

    return (
        <div
            className={`w-full bg-${bgColor[0].color} rounded p-3 relative aspect-video bg-opacity-65 hover:scale-105 duration-300`}>
            <img
                className="w-[100px] h-[100px] mx-auto -mt-[50px]"
                src={sprites.front_default}
                alt="sprite" />
            <div
                className="flex flex-col space-y-2 relative -mt-5 overflow-hidden">
                <img
                    src="./icons/pokeball.svg" className="opacity-5 absolute w-[120px] -left-8 -bottom-10"
                    alt="" />
                <h3
                    className="text-white font-semibold capitalize">
                    {name}
                </h3>
                <p className="text-white text-xs">#{id}</p>
                <div className="flex sm:space-x-2 flex-col sm:flex-row space-y-2">
                    {types.map((type, index) => <Type type={type} colors={colors} key={type.slot} />)}
                </div>
            </div>
        </div>
    )
}
