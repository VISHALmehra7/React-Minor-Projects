import React, { useRef } from 'react'
import UseFetch from '../UseFetch/UseFetch'

function ScrollToTopAndBottom() {
    const {data ,errorMsg,loading} =  UseFetch("https://dummyjson.com/products?limit=100",{})

    const bottomRef = useRef(null)
    

function handleScrollTop() {
    window.scrollTo({
        top:0,
        left:0,
        behavior:'smooth'
    })
}

function handleScrollBottom() {
    bottomRef.current.scrollIntoView({behavior:'smooth'})
}

  return (
    <div className='flex flex-col items-center'>
        <button  onClick={()=>handleScrollBottom()} className='bg-slate-800 text-white rounded-md p-3 m-2'>Scroll to Bottom</button>
        {data && data.products && data.products.length ? 
        data.products.map((dataItem)=>(
            <p className='text-red-600 m-2' key={dataItem.id}>{dataItem.title}</p>
        ))
         :null}
         <div ref={bottomRef}>
         <button onClick={()=>handleScrollTop()} className='bg-slate-800 text-white rounded-md p-3 m-2'>Scroll to Top</button>
         </div>
         
    </div >
  )
}

export default ScrollToTopAndBottom