import express from 'express'
import {addBook,getBooks} from '../controllers/bookController.js'
const router=express.Router()

router.get('/getBookData',getBooks)
router.post('/addBook',addBook);


export default router
