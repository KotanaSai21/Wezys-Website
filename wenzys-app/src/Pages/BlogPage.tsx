// src/components/Blog.tsx
import React, { useEffect, useState } from 'react';
import Header from '../components/Header/Header';
import './BlogPage.css';

interface BlogPost {
    userId: number;
    id: number;
    title: string;
    body: string;
    imageUrl: string;
}

function BlogPage() {
    const [blogs, setBlogs] = useState<BlogPost[]>([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                const posts = data.slice(0,10).map((post: Omit<BlogPost, 'imageUrl'>) => ({
                    ...post,
                    imageUrl: 'https://via.placeholder.com/150', // Placeholder image URL
                }));
                setBlogs(posts);
            })
            .catch(error => {
                console.error('Error fetching the blog posts', error);
            });
    }, []);

    return (
        <div>
            <Header />
            <h1>Blog Page</h1>
            <div className="blog-list">
                {blogs.map(blog => (
                    <div key={blog.id} className="blog-item">
                        <h2>{blog.title}</h2>
                        <img src={blog.imageUrl} alt={blog.title} />
                        <p>{blog.body}</p>
                        <a href={`/blog/${blog.id}`}>Read more</a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BlogPage;
