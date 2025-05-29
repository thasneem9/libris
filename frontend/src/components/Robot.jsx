import robot from '../images/robotx.png'
import { IoMdCloseCircle } from "react-icons/io";
import { useState } from 'react'
import './robot.css'
import { IoBookOutline } from "react-icons/io5";
import axios from 'axios'

const Robot = () => {
    const [settings, setSettings]=useState(false);
  
    const [rightCol, setRightCol]=useState('account')

    const [inputs,setInputs]=useState({
      name:'',
      username:'',
      password:'',
      email:''
    });
    const handleSignup=async()=>{
      
console.log(inputs)
      try {
        const res=await fetch('/api/users/signup',{
          method:'POST',
          headers:{'Content-Type':'application/json'},
          credentials:'include',
          body:JSON.stringify(inputs)
        })
        const data=await res.json();
        console.log(data)

        if(res.status===409){
          alert(data.message || 'User Already Exists, try Logging in')
        }else if(res.status===200){
          alert(data.message)
        }
        if(data.error){
          console.log(data.error)
        }
        
      } catch (error) {
                  console.log(error)

      }

      
    }


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
            <button onClick={()=>setRightCol('account')} className={(rightCol === 'account' || rightCol === 'login')?'clicked':''}>Account</button>
            <button onClick={()=>setRightCol('addBook')} className={rightCol==='addBook'?'clicked':''}>Add Book</button>
            <button onClick={()=>setRightCol('quotes')} className={rightCol==='quotes'?'clicked':''}>Qoutes</button>
            <button onClick={()=>setRightCol('highlights')} className={rightCol==='highlights'?'clicked':''}>Highlights</button>
            <button onClick={()=>setRightCol('vocabBox')} className={rightCol==='vocabBox'?'clicked':''}>Vocab Learnt Box</button>
            <button onClick={()=>setRightCol('timeStats')} className={rightCol==='timeStats'?'clicked':''}>Time Spent</button>
          
          </div>
          <div className='col-2'>
           {rightCol==='account' && (
            <>
            <div className='account-heading'>
              <h1>Welcome to Libris!</h1>
              <p>Sign up to enjoy all our cool features!</p>
            </div>
              <div className='account-content'>
                  <div>
                      <div className='names-row'>
                      <div>
                     <label>First Name<span className='red'>*</span></label><br/>
                      <input placeholder='Joni Mitchel' className='names-input' required
									onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
                       value={inputs.name} />
                      </div>
                      <div>
                       <label>Username<span className='red'>*</span></label><br/>
                      <input placeholder='janexadams12'  className='names-input'required
									onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
                      value={inputs.username}/>
                      </div>
                      </div>
                      
                      <div className='email-row'>
                      <label>Email<span className='red'>*</span></label><br/>
                      <input placeholder='krithik@gmail.com' className='email-input' required
									onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
                      value={inputs.email}/>
                      </div>

                      <div className="password-row">
                      <label>Password<span className='red'>*</span></label><br/>
                      <input placeholder='Strong Password' className='password-input' type="password" required
									onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                      value={inputs.password}/>
                      </div>

                  </div>
                  <div className='account-button'>
                  <button type="button"onClick={handleSignup}> Sign Up</button>
                  <p> Already a User? <span id='blue' onClick={()=>setRightCol('login')} className={rightCol==='login'?'':''}>login</span></p>
                  </div>
            </div>   
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
           {rightCol==='login' && (
            <>
             <div className='account-heading'>
              <h1>Welcome Back!</h1>
              <p>Log in to access prveious readings</p>
            </div>
              <div className='account-content'>
                  <form className='form'>
                    
                      <div className='email-row'>
                      <label>Username<span className='red'>*</span></label><br/>
                      <input placeholder='krithik@gmail.com' className='email-input' required
                     
                      />
                      </div>

                      <div className="password-row">
                      <label>Password<span className='red'>*</span></label><br/>
                      <input placeholder='Password' className='password-input' type="password"/>
                      </div>

                  </form>
                  <div className='account-button'>
                  <button> Log in</button>
                  <p> Don't have an acccount? <span id="blue" onClick={setRightCol('account')}>Signup</span></p>
                  </div>
            </div>   
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