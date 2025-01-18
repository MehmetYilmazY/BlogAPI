//Blog Modeli   

import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    writer: {
        type: String,
        required: true,
    },
    ipAddress: {
        type: String,
    },
});

const Blog = mongoose.model("Blog", blogSchema);

export default Blog;
