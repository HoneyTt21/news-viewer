import React, {useState, useEffect} from "react";
import styled from "styled-components";
import NewsItem from "./NewsItem";
import axios from "axios";

const NewsListBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3rem;
    width: 768px;
    margin: 0 auto;
    margin-top: 2rem;
    @media screen and (max-width: 768px) {
        width: 100%;
        padding: 1rem 0 1rem 0;
    }
    border: 3px solid black;
`;

const NewsList = ({category}) => {
    const [articles, setArticles] = useState(null);
    const [loading, setLoading] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const query = category === "all" ? "" : `&category=${category}`;
                const response = await axios.get(
                    `http://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=0eec4552faaf4438b22c220e6b0ea706`
                );
                setArticles(response.data.articles);
            } catch (e) {
                console.log(e);
            }
            setLoading(false);
        };
        fetchData();
    }, [category]);

    if (loading) {
        return <NewsListBlock>Loading...</NewsListBlock>;
    }

    if (!articles) {
        return null;
    }

    return (
        <NewsListBlock>
            {articles.map((article) => (
                <NewsItem key={article.url} article={article} />
            ))}
        </NewsListBlock>
    );
};

export default NewsList;
