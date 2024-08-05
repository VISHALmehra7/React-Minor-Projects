import React from 'react'
import UseFetch from './UseFetch'

function UseFetchHookTest() {
const {data ,errorMsg,loading} =  UseFetch("https://dummyjson.com/products?limit=100",{})

console.log(data,errorMsg, loading)
    return (
    <div className=' flex flex-col items-center'>
        <h1 className='text-3xl font-bold m-2'>Use Fetch Hook</h1>
        {loading ? <h3 className='text-3xl font-bold m-4'>Loading..Please Wait!!</h3> : null }
        {errorMsg ? <h3 className='text-3xl font-bold m-4'>Some Error O</h3> : null }
        {data && data.products && data.products.length ? data.products.map((item)=>(
        <p className='font-medium text-lg p-2 text-red-500' key={item.id}>{item.title}</p>
        )) :null}

    </div>
  )
}

export default UseFetchHookTest