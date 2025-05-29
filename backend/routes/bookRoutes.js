import express from 'express'
import {addBook,getBooks,uploadToAws} from '../controllers/bookController.js'
const router=express.Router()

router.get('/getBookData',getBooks)
router.post('/addBook',addBook);
router.post('/upload',uploadToAws);


export default router
