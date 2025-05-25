import robot from '../images/robotx.png'
import { IoMdCloseCircle } from "react-icons/io";
import { useState } from 'react'
import './robot.css'
import { IoBookOutline } from "react-icons/io5";

const Robot = () => {
    const [settings, setSettings]=useState(false);
  return (
    <>
    <div className="robot-wrapper" >
  <img src={robot} className="robot" onClick={()=>setSettings(true)} />
</div>

  {settings && (
    <>
      <div className='overlay' onClick={() => setSettings(false)}></div>

      <div className='popup-container'>
        <div className='popup-header'>
          <IoMdCloseCircle onClick={() => setSettings(false)} className='close-btn' color='#fff' size='30' />
          <h1 className='settings-title'>Libris</h1>
        </div>

        <div className='popup-columns'>
          <div className='col-1'>
            <button>Add Book</button>
            <button>Qoutes</button>
            <button>Highlights</button>
            <button>Vocab Learnt Book</button>
            <button>Time Spent</button>
            <button>Account</button>
          </div>
          <div className='col-2'>
            <div className='inner-box'>
             <IoBookOutline  size={300} className='book-icon'/>

              <p>Drag and Drop a PDF File into this Box</p>
              <button>Choose A File</button>
            </div>
            <button>Import Book</button>
          </div>
        </div>
      </div>
    </>
  )}


    </>
  )
}

export default Robot