import React, { useEffect, useState } from 'react';

const Blog: React.FC = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchArticles = async () => {
            // Remplacez l'URL par celle de votre API ou source d'articles
            const response = await fetch('https://api.example.com/articles');
            const data = await response.json();
            setArticles(data);
        };

        fetchArticles();
    }, []);

    return (
        <div className="blog">
            <h1>Mon Blog</h1>
            {articles.length > 0 ? (
                articles.map((article: { id: number; title: string; content: string }) => (
                    <div key={article.id} className="blog-article">
                        <h2>{article.title}</h2>
                        <p>{article.content}</p>
                    </div>
                ))
            ) : (
                <p>Aucun article disponible.</p>
            )}
        </div>
    );
};

export default Blog;