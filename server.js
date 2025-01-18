//Blog App API
import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
dotenv.config();
import connectToDB from "./database/db.js";

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Connect to database
connectToDB();

//Blog Model
import Blog from "./models/blog.js";

// Default route

app.get("/", (req, res) => {
    res.json({
        message: "#Blog Uygulaması API'sine hoşgeldiniz#",
        additionalMessage: "Bu API ile blog ekleyebilir, güncelleyebilir ve silebilirsiniz. İlgili sayfalara sorgu atarak devam edin..."
    });
});

app.post("/", (req, res) => {
    res.json({
        message: "#Blog Uygulaması API'sine hoşgeldiniz#",
        additionalMessage: "Bu API ile blog ekleyebilir, güncelleyebilir ve silebilirsiniz. İlgili sayfalara sorgu atarak devam edin..."
    });
});


// I'll add a frontend for this API soon 🤓👨‍💻

// Tüm blogları getirme
app.get("/blogs", async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.json(blogs);
    } catch (error) {
        console.log(error);
    }
});

// Add new blog
app.post("/blogs", async (req, res) => {
    const blog = req.body;
    blog.ipAddress = req.headers['x-forwarded-for'] || req.socket.remoteAddress; // IP adresini ekleme
    const newBlog = new Blog(blog);
    try {
        await newBlog.save();
        res.json(newBlog);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Blog kaydedilemedi" });
    }
});

// Hello 👋, I don't know who you are but hope you still enjoy while checking my code 😮‍💨👏


// Bring a specific blog with id
app.get("/blogs/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const blog = await Blog.findById(id);
        res.json(blog);
    } catch (error) {
        console.log(error);
    }
}
);

// Update a specific blog with id
app.put("/blogs/:id", async (req, res) => {
    const { id } = req.params;
    const { title, content, writer } = req.body;
    try {
        const updatedBlog = { title, content, writer };
        await Blog.findByIdAndUpdate(id, updatedBlog, { new: true });
        res.json(updatedBlog);
    } catch (error) {
        console.log(error);
    }
});

// Delete a specific blog with id
app.delete("/blogs/:id", async (req, res) => {
    const { id } = req.params;
    try {
        await Blog.findByIdAndDelete(id);
        res.json({ message: "Blog silindi" });
    } catch (error) {
        console.log(error);
    }
});

// I know It deleted all blogs but I'll add role based authentication soon 🤓☝️

// End of the world 🌍
app.delete("/blogs", async (req, res) => {
    try {
        await Blog.deleteMany();
        res.json({ message: "Tüm bloglar silindi" });
    } catch (error) {
        console.log(error);
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server ${PORT} portunda çalışıyor...`);
});

// Word of the day, I am a software developer and I love coding 🤓👨‍💻