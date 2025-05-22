import './book.css'
import book1 from '../images/book1.png'
import book2 from '../images/book2.png'
import book3 from '../images/book3.png'
const Book = () => {
  return (
    <>
    <div className='book-container'>

    
    <div className='book'       style={{ backgroundImage: `url(${book1})` }}></div>
    <div className='book'       style={{ backgroundImage: `url(${book2})` }}></div>
    <div className='book'       style={{ backgroundImage: `url(${book1})` }}></div>
    <div className='book'       style={{ backgroundImage: `url(${book3})` }}></div>
    
    <div className='book'       style={{ backgroundImage: `url(${book1})` }}></div>
    <div className='book'       style={{ backgroundImage: `url(${book2})` }}></div>
    <div className='book'       style={{ backgroundImage: `url(${book2})` }}></div>
    <div className='book'       style={{ backgroundImage: `url(${book1})` }}></div>
    <div className='book'       style={{ backgroundImage: `url(${book3})` }}></div>
    <div className='book'       style={{ backgroundImage: `url(${book3})` }}></div>
    <div className='book'       style={{ backgroundImage: `url(${book3})` }}></div>
     <div className='book'       style={{ backgroundImage: `url(${book1})` }}></div>
   
   </div>
    
    
    
    </>
  )
}

export default Book