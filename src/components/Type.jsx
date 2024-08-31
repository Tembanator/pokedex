import React from 'react'

export default function Type({ type, colors }) {

    const bgColor = colors.filter(color => type.type.name === color.name)

    return (
        <div className={`flex bg-${bgColor[0].color} text-white rounded-full px-3 items-center space-x-1`}>
            <img
                className='w-[12px] h-[12px'
                src={`./icons/${type.type.name}.svg`} alt="" />
            <p className='text-[8px] sm:text-xs'>{type.type.name}</p>
        </div>
    )
}
