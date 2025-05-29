import './book.css'
import book1 from '../images/book1.png'
import book2 from '../images/book2.png'
import book3 from '../images/book3.png'
import defaultCover from '../images/defaultCover.png'

import { useEffect,useState } from 'react'


const Book = () => {
  //get meta data ttile display here bw div
  //  chnge bg image to plain and add text bw div
  const [books,setBooks]=useState([])
 useEffect(()=>{
  const getBooks=async()=>{
    try {
       const res=await fetch('/api/books/getBookData',{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials:'include'
    })

    const data=await res.json()
    if (data.error){
      console.log(data.error)
    }else{
     setBooks(data.books)
    }
console.log(data.books)
    } catch (error) {
      console.log(error)
    }
  }
  getBooks();
 },[])
  
  return (
    <>
    <div className='book-container'>
      {
        books.map((book,index)=>(
        <>
        <div    key={index}  className='book'  style={{ backgroundImage: `url(${book.imageUrl || defaultCover})` }} >  {book?.title || ''}</div>
        </>
        ))
      } 
    <div className='book'       style={{ backgroundImage: `url(${book2})` }}></div>
    <div className='book'       style={{ backgroundImage: `url(${book1})` }}></div>
    <div className='book'       style={{ backgroundImage: `url(${book3})` }}></div>
    <div className='book'       style={{ backgroundImage: `url(${book1})` }}></div>

    {/*
    <div className='book'       style={{ backgroundImage: `url(${book1})` }}></div>
    <div className='book'       style={{ backgroundImage: `url(${book3})` }}></div>
    
    <div className='book'       style={{ backgroundImage: `url(${book1})` }}></div>
    <div className='book'       style={{ backgroundImage: `url(${book2})` }}></div>
    <div className='book'       style={{ backgroundImage: `url(${book1})` }}></div>
    <div className='book'       style={{ backgroundImage: `url(${book3})` }}></div>
    <div className='book'       style={{ backgroundImage: `url(${book3})` }}></div>
    <div className='book'       style={{ backgroundImage: `url(${book3})` }}></div>
     <div className='book'       style={{ backgroundImage: `url(${book1})` }}></div>
    */}
   </div>
    
    
    
    </>
  )
}

export default Book