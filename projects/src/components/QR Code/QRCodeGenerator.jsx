import React,{useState} from 'react'
import QRCode from "react-qr-code";


function QRCodeGenerator() {
  const [qrcode, setqrcode] = useState('')
  const [input, setinput] = useState('')
  function handleGenerateCode() {
    setqrcode(input)
    setinput('')
  }
  return (
    <div className='flex flex-col items-center justify-center gap-2'>
        <h1 className='font-bold text-lg'>QR Code Generator</h1>
        <div>
            <input className='border-2 p-2' value={input} onChange={(e)=> setinput(e.target.value)} type="text" placeholder='Enter value here'  />
            <button className= 'bg-red-800 p-2 rounded-md text-white mx-2' disabled={!input.trim()} onClick={()=>handleGenerateCode()} >Generate</button>
        </div>
        <div className='mt-3'>
            <QRCode
            value={qrcode}
            size={400}
            />
        </div>
    </div>

  )
}

export default QRCodeGenerator