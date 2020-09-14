import React from "react";
import styled from "styled-components";
import NewsItem from "./NewsItem";

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

const sampleArticle = {
    title: "Title of Sample Article",
    description: "Description of Sample Article",
    url: "https://google.com",
    urlToImage: "https://via.placeholder.com/160",
};

const NewsList = () => {
    return (
        <NewsListBlock>
            <NewsItem article={sampleArticle} />
            <NewsItem article={sampleArticle} />
            <NewsItem article={sampleArticle} />
            <NewsItem article={sampleArticle} />
            <NewsItem article={sampleArticle} />
            <NewsItem article={sampleArticle} />
        </NewsListBlock>
    );
};

export default NewsList;
