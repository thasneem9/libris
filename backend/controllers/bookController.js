import Book from '../models/Book.js'
import User from '../models/User.js'
import express from "express";
import dotenv from 'dotenv';
import multer from "multer";
import multerS3 from "multer-s3";
import AWS from "aws-sdk";

dotenv.config();

const s3 = new AWS.S3({
  accessKeyId: process.env.S3_ACCESS_KEY,
  secretAccessKey: process.env.S3_SECRET_KEY,
  region: process.env.S3_REGION,
});

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.S3_BUCKET_NAME,
    metadata: (req, file, cb) => {
      cb(null, { fieldName: file.fieldname });
    },
    key: (req, file, cb) => {
      cb(null, file.originalname);
    },
  }),
}).single("pdf");

const uploadToAws = (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      console.error("Upload Error:", err);
      return res.status(500).json({ error: "Upload failed", details: err.message });
    }
    res.status(200).json({ msg: "File uploaded successfully", file: req.file });
  });
};


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



export {addBook,getBooks, uploadToAws} 
