import Book from '../models/Book.js'
import User from '../models/User.js'

const addBook=async(req,res)=>{
    try {
        const {title,author,category,fileName}=req.body;
        const userId="6837dbd20a4cf1792085e993"
        const newBook= new Book({title,author,fileName,category,userId,coverImage:null})
        await newBook.save();

        res.status(200).json({messgae:"SUUCESSFULT SAVED BOOK DETAILS",newBook})
        
    } catch (error) {
         console.error(error);
    res.status(500).json({ error: 'Failed to add book' });
        
    }
}
const getBooks=async(req,res)=>{
try {
       const userId="6837dbd20a4cf1792085e993"
       const books=await Book.find({userId})
       return res.status(200).json({message:"suuccessfully found",books})    
} catch (error) {
    console.log(error)
        res.status(500).json({ error: 'Failed to fetch book data' });

    
}

}
export {addBook,getBooks} 
