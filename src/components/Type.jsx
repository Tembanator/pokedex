import React from 'react'

export default function Type({ type, colors }) {

    const bgColor = colors.filter(color => type.type.name === color.name)

    return (
        <div className={`flex bg-${bgColor[0].color} text-white rounded-full px-2 items-center space-x-1`}>
            <img
                className='w-[12px]'
                src="./icons/fire.svg" alt="" />
            <p className='text-xs'>{type.type.name}</p>
        </div>
    )
}
