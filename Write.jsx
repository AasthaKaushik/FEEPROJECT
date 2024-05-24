
import React, { useState, useEffect } from 'react';
import './write.css';

function BlogForm({ addBlog }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addBlog({ title, content, author, image });
    setTitle('');
    setContent('');
    setAuthor('');
    setImage(null);
  };

  return (
    <div className='ask'>
      <form className="blog-form" onSubmit={handleSubmit}>
      <input 
        className="blog-input"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Provide a Suitable Title"
        required
      />
      <textarea
        className="blog-textarea"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write Your Story......"
        required
      ></textarea>
      <input
        className="blog-input"
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="Your Name"
        required
      />
      <input
        type="file"
        onChange={handleImageChange}
      />
      {image && (
        <img src={URL.createObjectURL(image)} alt="Uploaded" className="blog-image" />
      )}
      <button className="blog-button" type="submit">Publish</button>
    </form>
    </div>
  );
}

function BlogList({ blogs }) {
  return (
    <div className="blog-list">
      {blogs.map((blog, index) => (
        <div key={index} className="blog-item">
        {blog.image && (
            <img src={URL.createObjectURL(blog.image)} alt="Uploaded" className="blog-image" />
          )}
          <h2 className="blog-title">{blog.title}</h2>
          <p className="blog-content">{blog.content}</p>
          <p className="blog-author">
            <i>by {blog.author}</i>
          </p>
          
        </div>
      ))}
    </div>
  );
}

function Write() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const storedBlogs = JSON.parse(localStorage.getItem('blogs'));
    if (storedBlogs) {
      setBlogs(storedBlogs);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('blogs', JSON.stringify(blogs));
  }, [blogs]);

  const addBlog = (blog) => {
    setBlogs([...blogs, blog]);
  };

  return (
    <div className="container">
      <h1 className="app-title">START WRITING YOUR BLOG,NOW!!!!!</h1>
      <BlogForm addBlog={addBlog} />
      <BlogList blogs={blogs} />
    </div>
  );
}

export default Write;
