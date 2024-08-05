import React,{useState} from 'react'
import Modal from './Modal'

function Test() {
    const [showModal, setshowModal] = useState(false)
    function handleToggleModal(){
        setshowModal(!showModal)
    }
    function handleCloseModal(){
      setshowModal(false)
    }
  return (
    <div className='flex flex-col justify-center items-center'>
      {showModal === false ?(
                <button className='bg-slate-700 m-3 p-2 rounded-md text-white shadow-lg shadow-black' onClick={()=>handleToggleModal()}
                >open modal</button>
      ) :null}

     {showModal && <Modal id={1} header={<div>This is customised header</div>} body={<div>This is customised modal body</div>} footer={<div>This is customised footer </div>} onclose={handleCloseModal}/>}
    </div>
  )
}

export default Test