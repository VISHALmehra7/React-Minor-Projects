import React from 'react'
import UseWindowResize from './UseWindowResize'

function UseWindowResizeTest() {
    const {width,height} = UseWindowResize()
  return (
    <div className='flex flex-col items-center m-4'>
        <h1 className='text-3xl font-bold m-2 p-2'>Use Window Resize Hook</h1>
        <p className='text-xl p-2 font-medium text-red-600'>{width}</p>
        <p className='text-xl p-2 font-medium text-red-600'>{height}</p>

    </div>
  )
}

export default UseWindowResizeTest