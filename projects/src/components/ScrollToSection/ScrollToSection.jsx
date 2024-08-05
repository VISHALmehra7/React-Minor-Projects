import React, { useRef } from 'react'

function ScrollToSection() {

    const ref = useRef()
const data =[
    {
        title : 'First Card',
        style:{
            width:"100%",
            height:"600px",
            background:"orange"
        }
    },
    {
        title : 'Second Card',
        style:{
            width:"100%",
            height:"600px",
            background:"red"
        }
    },
    {
        title : 'Third Card',
        style:{
            width:"100%",
            height:"600px",
            background:"pink"
        }
    },
    {
        title : 'Fourth Card',
        style:{
            width:"100%",
            height:"600px",
            background:"green"
        }
    },
    {
        title : 'Fifth Card',
        style:{
            width:"100%",
            height:"600px",
            background:"blue"
        }
    }
]


function handleScroll() {
    let pos = ref.current.getBoundingClientRect().top
    window.scrollTo({
        top:pos,
        behavior:'smooth'
    })
}
  return (
    <div className='flex flex-col items-center'>
        <h1 className='m-3 text-3xl p-2 font-bold' >Scroll To Particular Section</h1>
        <button onClick={()=>handleScroll()} className='p-2 rounded-md bg-slate-700 text-white font-bold m-2'>Click To Scroll</button>
        {
            data && data.length ?
             data.map((item,index)=>(
                <div ref={index===0 ? ref :null} style={item.style}><h3 className='text-center p-2 text-2xl font-bold text-white'>{item.title}</h3> </div>
             )) :
             null
        }
    </div>
  )
}

export default ScrollToSection