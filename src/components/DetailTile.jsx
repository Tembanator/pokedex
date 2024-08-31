export default function DetailTile({ icon, value, unit, title }) {
    return (
        <div className="flex flex-col justify-center items-center w-full space-y-4 p-2 border-r-[1px] last:border-r-0">
            <div className="flex space-x-2 items-center">
                {icon} <p className="capitalize">{value} {unit}</p>
            </div>
            <p className="text-sm">{title}</p>
        </div>
    )
}
