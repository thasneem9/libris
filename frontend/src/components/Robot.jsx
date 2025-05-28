import robot from '../images/robotx.png'
import { IoMdCloseCircle } from "react-icons/io";
import { useState } from 'react'
import './robot.css'
import { IoBookOutline } from "react-icons/io5";


const Robot = () => {
    const [settings, setSettings]=useState(false);
  
    const [rightCol, setRightCol]=useState('account')

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
            <button onClick={()=>setRightCol('account')} className={rightCol==='account'?'clicked':''}>Account</button>
            <button onClick={()=>setRightCol('addBook')} className={rightCol==='addBook'?'clicked':''}>Add Book</button>
            <button onClick={()=>setRightCol('quotes')} className={rightCol==='quotes'?'clicked':''}>Qoutes</button>
            <button onClick={()=>setRightCol('highlights')} className={rightCol==='highlights'?'clicked':''}>Highlights</button>
            <button onClick={()=>setRightCol('vocabBox')} className={rightCol==='vocabBox'?'clicked':''}>Vocab Learnt Box</button>
            <button onClick={()=>setRightCol('timeStats')} className={rightCol==='timeStats'?'clicked':''}>Time Spent</button>
          
          </div>
          <div className='col-2'>
           {rightCol==='account' && (
            <>
            
              
            </>
           )}
           {rightCol==='addBook' && (
            <>
             <div className='inner-box'>
             <IoBookOutline  size={300} className='book-icon'/>

              <p>Drag and Drop a PDF File into this Box</p>
              <button>Choose A File</button>
            </div>
            <button>Import Book</button>
            </>
           )}
           {rightCol==='quotes' && (
            <>
             <h1>Qoutes box</h1>
            </>
           )}
           {rightCol==='highlights' && (
            <>
             <h1></h1>
            </>
           )}
           
           {rightCol==='VocabBox' && (
            <>
             <h1>vocab</h1>
            </>
           )}
           {rightCol==='timeStats' && (
            <>
             <h1></h1>
            </>
           )}
          
          </div>
        </div>
      </div>
    </>
  )}


    </>
  )
}

export default Robot