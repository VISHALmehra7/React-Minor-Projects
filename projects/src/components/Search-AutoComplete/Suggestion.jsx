import React from 'react'

function Suggestion({data,handleClick}) {
  return (
    <ul>
    {data && data.map((item,index)=> <li className='cursor-pointer' onClick={handleClick} key ={index}>{item}</li>)}
    </ul>
  )
}

export default Suggestion