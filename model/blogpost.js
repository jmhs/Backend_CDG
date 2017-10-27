import mongoose from 'mongoose';

const blogpostSchema = new mongoose.Schema ({
  title: String,
  post: String,
  author: String,
  
})
