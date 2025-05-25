import door from '../images/doorx.png'
import './plank.css'
import './door.css'
const Plank = () => {
  return (
    <>
<img src={door} className="door"/>
<div className='main-container'>

  <div className='plank-left'></div>
  <div className='plank-left-dark'></div>

    <div className='plank-container' >
    <div className='plank'>
    <div className='plank-dark'></div>
    <div className='plank-bottom'></div>
    </div>

    <div className='plank none'>
    <div className='plank-dark'></div>
    <div className='plank-bottom'></div>
    </div>
    <div className='plank'>
    <div className='plank-dark'></div>
    <div className='plank-bottom'></div>
    </div>

  
    <div className='plank'>
    <div>
    <div className='plank-dark'></div>
    <div className='plank-bottom'></div>
    </div>
    </div>
    <div className='plank'>
    <div>
    <div className='plank-dark'></div>
    <div className='plank-bottom'></div>
    </div>
    </div>
  </div>



 <div className='plank-right'></div>
 <div className='plank-right-dark'></div>
  </div>

 
    </>
  )
}

export default Plank